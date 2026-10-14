# simoncourtois.com

> Mon site perso et mon journal : statique, sobre, sans framework front.

Le code source de [simoncourtois.com](https://simoncourtois.com), construit avec
[Deno](https://deno.com) et [Lume](https://lume.land). Les pages sont générées à
l'avance ; le seul morceau dynamique est une mini-API de « j'aime » en Deno KV,
servie par `serve.ts`.

## Sommaire

- [Démarrage](#démarrage)
- [Écrire un article](#écrire-un-article)
- [J'aime](#jaime)
- [Sobriété](#sobriété)
- [Structure](#structure)
- [Déploiement](#déploiement)
- [Soutenir](#soutenir)
- [Licence](#licence)

## Démarrage

Prérequis : [Deno](https://deno.com) 2.x.

```sh
git clone https://github.com/Simon256px/portfolio.git
cd portfolio
deno task dev
```

| Commande          | Rôle                                                               |
| ----------------- | ------------------------------------------------------------------ |
| `deno task dev`   | build puis serveur complet (site et API) sur http://localhost:8000 |
| `deno task serve` | rechargement à chaud de Lume pour travailler le design, sans l'API |
| `deno task build` | build seul, dans `_site/`                                          |
| `deno task start` | sert le site déjà construit, avec l'API                            |

Le serveur lit `HOST`, `PORT`, `KV_PATH` et `LIKE_SALT` dans l'environnement.
Laisser `KV_PATH` vide utilise la base Deno KV par défaut, ce qui rend le code
compatible avec Deno Deploy.

## Écrire un article

Créer un fichier Markdown dans `src/posts/`, par exemple
`src/posts/mon-article.md` :

```markdown
---
title: "Le titre de l'article"
date: 2026-07-19
category: JEUX VIDÉO
excerpt: "Une ou deux phrases d'accroche affichées dans les listes."
---

Le contenu en Markdown : titres `##`, listes, `code`, liens…
```

Au prochain `git push` sur `main` :

- l'article apparaît dans le Journal, à l'adresse `/journal/mon-article/` ;
- une nouvelle catégorie crée d'elle-même son filtre et sa couleur de pastille ;
- le temps de lecture est calculé tout seul ;
- la recherche l'indexe (titre, extrait, catégorie) ;
- une notification est publiée sur Discord.

Pour retirer un article, il suffit de supprimer son fichier.

## J'aime

| Méthode | Route        | Corps             | Réponse                   |
| ------- | ------------ | ----------------- | ------------------------- |
| `GET`   | `/api/likes` |                   | `{ counts: { slug: n } }` |
| `POST`  | `/api/like`  | `{ slug, liked }` | `{ count, liked }`        |

Un « j'aime » par visiteur : côté client via `localStorage`, côté serveur par
une empreinte `SHA-256(sel + IP + user-agent)`. Aucune IP stockée en clair, pas
de cookie, pas de compte. Les articles les plus aimés remontent dans la colonne
« Les plus aimés » de l'accueil.

## Sobriété

- Site statique, aucun framework front, quelques kilo-octets de JavaScript natif
  par page.
- Une seule police auto-hébergée (JetBrains Mono variable) : aucune requête
  tierce.
- Animations canvas en basse résolution, en pause quand l'onglet est caché,
  figées si `prefers-reduced-motion` est actif.

## Structure

```
_config.ts            config Lume : dates, couleurs de catégories, temps de lecture
serve.ts              serveur : fichiers statiques et API j'aime (Deno KV)
src/
  _data.ts            e-mail et liens des réseaux
  _includes/layouts/  gabarits de base et d'article
  index.vto           accueil
  journal.vto         liste des articles, filtres, recherche
  contact.vto         contact et réseaux
  404.vto             page introuvable
  posts/              les articles en Markdown
  js/                 animations, j'aime, recherche
  styles.css          tous les styles
  fonts/              JetBrains Mono variable
deploy/               service systemd, vhost nginx, script de déploiement
```

## Déploiement

Le site tourne comme service Deno sur un VPS Fedora, derrière nginx qui gère le
HTTPS. À chaque push sur `main`, GitHub Actions se connecte en SSH au serveur et
lance `deploy/deploy.sh` : récupération du code, build, redémarrage.

La mise en place complète (systemd, SELinux, firewalld, certbot, secrets GitHub)
est décrite dans [deploy/README.md](deploy/README.md).

## Soutenir

Si mes articles ou mes projets vous sont utiles, vous pouvez me soutenir sur
[ko-fi.com/simon256px](https://ko-fi.com/simon256px).

## Licence

Distribué sous [licence MIT](LICENSE).
