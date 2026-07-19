# Déploiement sur VPS (Fedora / RHEL / Rocky / Alma) derrière nginx

Le site tourne comme un service Deno écoutant sur `127.0.0.1:8000` (site statique + API likes sur un fichier SQLite via Deno KV). nginx fait le reverse proxy et le HTTPS. À chaque `git push` sur `main`, GitHub Actions se connecte en SSH au VPS et lance `deploy/deploy.sh` (git pull + rebuild + restart).

Toutes les commandes ci-dessous sont à lancer **sur le VPS**, en root (ou avec `sudo`), sauf indication contraire.

---

## 1. Dépendances

```bash
sudo dnf install -y git unzip nginx certbot python3-certbot-nginx
```

Deno, installé à l'échelle système dans `/usr/local` (chemin stable pour le service systemd) :

```bash
curl -fsSL https://deno.land/install.sh | sudo env DENO_INSTALL=/usr/local sh
deno --version                      # vérifie
sudo restorecon -v /usr/local/bin/deno   # contexte SELinux correct pour l'exécutable
```

## 2. Utilisateur et dépôt

Un utilisateur dédié `deploy` (cible du SSH de GitHub et compte qui exécute le service) :

```bash
sudo useradd -m -s /bin/bash deploy

sudo mkdir -p /srv/portfolio
sudo chown deploy:deploy /srv/portfolio
sudo -u deploy git clone https://github.com/Simon256px/portfolio.git /srv/portfolio

# Premier build + dossier des likes
sudo -u deploy bash -c 'cd /srv/portfolio && DENO_DIR=/srv/portfolio/.deno /usr/local/bin/deno task build && mkdir -p data'
```

## 3. Service systemd

```bash
sudo cp /srv/portfolio/deploy/portfolio.service /etc/systemd/system/portfolio.service
sudo systemctl daemon-reload
sudo systemctl enable --now portfolio
systemctl status portfolio            # doit être "active (running)"
curl -I http://127.0.0.1:8000/        # doit répondre 200
```

Autoriser l'utilisateur `deploy` à redémarrer **ce seul** service sans mot de passe (nécessaire au script de déploiement) :

```bash
echo 'deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart portfolio' | sudo tee /etc/sudoers.d/portfolio-deploy
sudo chmod 440 /etc/sudoers.d/portfolio-deploy
sudo visudo -c                        # valide la syntaxe sudoers
```

## 4. SELinux + firewalld

nginx (domaine `httpd_t`) doit pouvoir ouvrir une connexion vers le port local 8000. On **type** ce port en `http_port_t` (moindre privilège, plutôt que d'ouvrir un booléen large) :

```bash
sudo semanage port -a -t http_port_t -p tcp 8000 \
  || sudo semanage port -m -t http_port_t -p tcp 8000
```

> Alternative plus large si besoin : `sudo setsebool -P httpd_can_network_connect 1`.

Ouvrir HTTP/HTTPS dans firewalld (souvent déjà fait si nginx sert déjà des sites) :

```bash
sudo firewall-cmd --add-service={http,https} --permanent
sudo firewall-cmd --reload
```

## 5. nginx + HTTPS

Pointer d'abord le DNS du domaine vers l'IP du VPS : un enregistrement **A** pour `simoncourtois.com` et un pour `www` (ou un CNAME `www` → `simoncourtois.com`).

```bash
sudo cp /srv/portfolio/deploy/nginx-simoncourtois.com.conf /etc/nginx/conf.d/simoncourtois.com.conf
sudo nginx -t                         # teste la config
sudo systemctl reload nginx

# Certificat Let's Encrypt + réécriture auto du vhost en HTTPS + redirection
sudo certbot --nginx -d simoncourtois.com -d www.simoncourtois.com
```

certbot installe aussi le renouvellement automatique (timer systemd `certbot-renew.timer`). Vérifier : `systemctl list-timers 'certbot*'`.

## 6. Déploiement automatique (GitHub → SSH)

Générer une paire de clés dédiée au déploiement (sur ta machine ou le VPS) :

```bash
ssh-keygen -t ed25519 -f deploy_key -N "" -C "github-actions-deploy"
```

- **Clé publique** → autoriser le compte `deploy` sur le VPS :
  ```bash
  sudo -u deploy mkdir -p /home/deploy/.ssh && sudo -u deploy chmod 700 /home/deploy/.ssh
  cat deploy_key.pub | sudo -u deploy tee -a /home/deploy/.ssh/authorized_keys
  sudo -u deploy chmod 600 /home/deploy/.ssh/authorized_keys
  ```
- **Clé privée** → dans le dépôt GitHub : **Settings → Secrets and variables → Actions → New repository secret**. Créer :
  | Secret | Valeur |
  |---|---|
  | `VPS_SSH_KEY` | tout le contenu du fichier `deploy_key` (clé privée) |
  | `VPS_HOST` | IP ou domaine du VPS |
  | `VPS_USER` | `deploy` |
  | `VPS_PORT` | port SSH si différent de 22 (sinon ne pas créer ce secret) |

  Puis **supprimer** la clé privée locale : `rm deploy_key deploy_key.pub`.

Tester : onglet **Actions** du dépôt → « Déploiement VPS » → **Run workflow**. Le job doit passer au vert, et le site refléter le dépôt.

---

## Au quotidien

Écrire un article = créer un `.md` dans `src/posts/`, `git push`. GitHub Actions redéploie tout seul en ~10 s.

## Dépannage

```bash
journalctl -u portfolio -f            # logs du serveur Deno
sudo tail -f /var/log/nginx/error.log # logs nginx
sudo ausearch -m avc -ts recent       # refus SELinux récents (si 502 après config)
```

- **502 Bad Gateway** : le service Deno est down (`systemctl status portfolio`) ou SELinux bloque la connexion nginx→8000 (refaire l'étape 4, vérifier avec `ausearch`).
- **Les likes ne se sauvegardent pas / repartent à zéro** : vérifier que `/srv/portfolio/data/` existe et appartient à `deploy` ; c'est le seul dossier à sauvegarder pour préserver les compteurs.
