---
title: "Mes stacks web préférées (sobres et résilientes)"
date: 2026-07-20
category: ÉCO WEB
excerpt: "Trois combos que j'utilise pour construire des sites légers, peu énergivores et qui tiennent debout tout seuls — plus les outils pour mesurer que ce n'est pas du greenwashing."
---

Entre 1995 et 2025, le poids moyen d'une page web a été multiplié par près de **190**. La tendance ne ralentit pas : frameworks obèses, polices sur-mesure, scripts de tracking en pagaille. Faire un site sobre est devenu un choix conscient, presque militant. Voici les trois stacks vers lesquelles je reviens toujours quand je veux un site léger, résilient et peu gourmand en énergie.

## Le principe avant les outils

Une règle guide tout le reste : **le meilleur octet est celui qu'on n'envoie pas**. La sobriété, ce n'est pas une techno magique, c'est une discipline — servir du HTML déjà prêt plutôt que le fabriquer à la volée, n'ajouter du JavaScript que s'il est indispensable, et mesurer au lieu de croire. Les stacks ci-dessous ne sont que des façons d'appliquer ce principe selon le besoin.

## Stack 1 — Le statique blindé

Mon réflexe par défaut pour un blog, un site vitrine ou une doc. Un générateur statique (**Hugo**, **Zola**, **Eleventy**, **Astro**) transforme mes fichiers Markdown en HTML pré-généré, déposé sur un hébergement statique derrière un CDN.

Pourquoi j'adore ça :

- **Rien ne tourne en permanence.** Pas de serveur applicatif à alimenter 24h/24 : juste des fichiers servis. C'est ce qui se fait de plus sobre.
- **Résilient par nature.** Un pic de trafic ? Le CDN encaisse. Pas de base de données à faire tomber, pas de process qui plante.
- **Rapide partout**, y compris sur une vieille machine ou une connexion faible.

Hugo et Zola compilent en un éclair, Astro apporte un confort plus moderne. Pour de la publication de contenu, c'est difficile à battre côté énergie.

## Stack 2 — Le sobre-dynamique (Deno)

Quand il faut un peu d'interactif — typiquement les *likes* de ce blog — je ne dégaine pas une usine à gaz. **Deno + Deno KV**, déployé en *edge*, fait le travail.

Ce que j'y trouve :

- Un runtime **léger**, sans le `node_modules` de plusieurs centaines de Mo.
- Une base clé-valeur **intégrée** (Deno KV) : pas de serveur de base de données séparé à maintenir et à alimenter.
- Un déploiement **au plus près de l'utilisateur**, ce qui réduit le transit réseau — et le transit réseau, c'est de l'énergie.

Le bon dosage : rester statique pour 95 % du site, et ne réserver le dynamique qu'aux quelques fonctionnalités qui en ont réellement besoin.

## Stack 3 — Le pragmatique moderne

Pour un projet plus riche en interactions, **Astro** avec son architecture en *islands* est mon compromis préféré : la page est du HTML statique, et seuls les composants réellement interactifs sont « hydratés » avec du JavaScript. Le reste ne coûte rien au navigateur.

On garde la légèreté du statique tout en s'autorisant des îlots dynamiques ciblés, au lieu de charger un framework complet pour animer trois boutons.

## Le front, là où tout se joue vraiment

La stack compte, mais l'essentiel des gains se fait dans le front. Mes réflexes systématiques :

- **Polices système** plutôt que webfonts lourdes :

```
font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
```

- **Images en AVIF ou WebP**, dimensions fixées, chargement paresseux (`loading="lazy"`).
- **CSS moderne natif**, sans framework JS pour ce qu'une feuille de style fait très bien.
- Réduire le **nombre de requêtes HTTP** et la **complexité du DOM** — précisément les deux leviers que mesure EcoIndex.

## L'hébergement, l'angle mort

Un site sobre sur un hébergeur au charbon, c'est incohérent. Je vérifie l'hébergeur dans l'annuaire de la **Green Web Foundation**, et je privilégie ceux qui tournent aux énergies renouvelables et publient leurs données (Infomaniak et d'autres acteurs européens jouent le jeu). Un CDN bien réglé fait le reste : moins de requêtes remontent jusqu'au serveur d'origine.

## Mesurer, sinon c'est du greenwashing

Sans mesure, une « démarche éco » n'est qu'une intention. Mes outils :

- **EcoIndex** (collectif GreenIT.fr) : note de A à G, basée sur le poids de la page, la complexité du DOM et le nombre de requêtes. La référence française, utilisée jusque dans l'administration.
- **Website Carbon Calculator** (Wholegrain Digital) : estime le CO₂ par visite et vérifie si l'hébergeur est vert. Parfait pour communiquer un résultat parlant.
- **Lighthouse / PageSpeed Insights** : la performance utilisateur, qui corrèle fortement avec la sobriété (un site rapide est presque toujours un site léger).

Pour aller plus loin, le **RGESN** — le référentiel officiel français d'éco-conception (version 2024, publié par l'Arcep, l'Arcom et l'ADEME, environ 78 critères) — sert de feuille de route complète, bien au-delà de la seule page d'accueil.

## Ma reco, en une phrase

Commence statique, n'ajoute du dynamique que quand un vrai besoin l'exige, héberge vert et mesure avant/après. La stack la plus verte n'est jamais la plus à la mode : c'est celle qui fait le travail avec le moins de moyens.
