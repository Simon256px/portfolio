# simoncourtois.com

Site perso — [Deno](https://deno.com) + [Lume](https://lume.land). Statique, sobre, sans framework front. Le seul morceau dynamique est une mini-API de « j'aime » (Deno KV) servie par `serve.ts`.

## Écrire un article

Créer un fichier Markdown dans `src/posts/`, par exemple `src/posts/mon-article.md` :

```markdown
---
title: "Le titre de l'article"
date: 2026-07-19
category: JEUX VIDÉO
excerpt: "Une ou deux phrases d'accroche affichées dans les listes."
---

Le contenu en Markdown normal : titres `##`, listes, `code`, images, etc.
```

C'est tout. Au prochain `git push` :

- l'article apparaît dans le Journal (URL : `/journal/mon-article/`) ;
- la **catégorie** est libre — une nouvelle catégorie crée automatiquement son filtre et sa couleur de pastille ;
- le **temps de lecture** est calculé tout seul ;
- la **recherche** l'indexe automatiquement (titre + extrait + catégorie) ;
- son compteur de ♥ démarre à zéro.

Pour supprimer un article : supprimer le fichier. Les 6 articles présents sont des exemples à remplacer.

## Dev local

```sh
deno task dev     # build + serveur complet (site + API likes) sur http://localhost:8000
deno task serve   # live-reload Lume pour travailler le design (sans API likes)
deno task build   # build seul, dans _site/
```

## Déploiement (VPS Fedora/RHEL derrière nginx)

Le site tourne comme un service Deno sur `127.0.0.1:8000` (site statique + API likes en SQLite), nginx fait le reverse proxy + HTTPS. À chaque `git push` sur `main`, GitHub Actions se connecte en SSH au VPS et relance `deploy/deploy.sh` (git pull + rebuild + restart).

Mise en place détaillée, étape par étape (systemd, SELinux, firewalld, certbot, secrets GitHub) : **[deploy/README.md](deploy/README.md)**.

Fichiers de déploiement :
- `deploy/portfolio.service` — unité systemd du serveur Deno
- `deploy/nginx-simoncourtois.com.conf` — vhost nginx (reverse proxy)
- `deploy/deploy.sh` — script lancé sur le VPS à chaque déploiement
- `.github/workflows/deploy.yml` — déclencheur SSH (secrets : `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_PORT`)

> Le code reste compatible Deno Deploy (KV managé) : il suffit de laisser `KV_PATH` vide. Le serveur lit `HOST`, `PORT`, `KV_PATH` et `LIKE_SALT` depuis l'environnement.

## Likes

- `GET /api/likes` → `{ counts: { "slug": 3, … } }`
- `POST /api/like` `{ slug, liked }` → `{ count, liked }`

Un like par visiteur : côté client via `localStorage`, côté serveur par empreinte `SHA-256(sel + IP + user-agent)`. Aucune IP stockée en clair, pas de cookies, pas de comptes. Les articles les plus aimés remontent dans la colonne « Les plus aimés » de l'accueil.

## Sobriété

- Site statique, zéro framework front, ~4 Ko de JS vanilla par page.
- Une seule fonte auto-hébergée (JetBrains Mono variable, 31 Ko) — aucune requête tierce.
- Animations canvas : rendu basse résolution, pause quand l'onglet est caché, rendu statique si `prefers-reduced-motion`.
- Le design vient de la maquette `Portfolio Simon Courtois.zip` (version PC uniquement, comme prévu).

## Structure

```
_config.ts            config Lume (filtres dates, couleurs de catégories, temps de lecture)
serve.ts              serveur : statique + API likes (Deno KV)
src/
  _data.ts            email, liens GitHub/YouTube
  _includes/layouts/  gabarits base + article
  index.vto           accueil (hero particules + récents / plus aimés)
  journal.vto         liste, filtres dynamiques, recherche
  contact.vto         contact + réseaux
  404.vto             page introuvable
  posts/*.md          les articles
  js/                 flow-field, particules du titre, likes, recherche
  styles.css          tous les styles (valeurs reprises de la maquette)
  fonts/              JetBrains Mono variable
```
