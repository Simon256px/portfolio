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

## Déploiement (Deno Deploy)

Mise en place une seule fois :

1. Créer un dépôt GitHub et pousser ce dossier.
2. Sur [dash.deno.com](https://dash.deno.com) : **New Project** → lier le dépôt GitHub → choisir le mode **GitHub Actions**.
3. Nommer le projet Deno Deploy `portfolio` (comme le dépôt). Pour un autre nom, ajuster `project:` dans `.github/workflows/deploy.yml`.
4. (Optionnel) Dans les réglages du projet, définir la variable d'environnement `LIKE_SALT` (n'importe quelle chaîne secrète — elle sale l'empreinte anonyme des visiteurs).
5. Ajouter le domaine `simoncourtois.com` dans **Settings → Domains**.

Ensuite, chaque `git push` sur `main` reconstruit et déploie le site tout seul.

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
