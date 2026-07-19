---
title: "Refaire son site en public"
date: 2026-03-01
category: CARNET
excerpt: "Construire ce site en documentant tout : journal du chantier, premier billet."
---

Ce billet inaugure ce journal, et il a un sujet tout trouvé : le site que vous êtes en train de lire. Je le construis en public — pas au sens spectaculaire du terme, juste : le code est sur GitHub, et j'écris ici ce que je décide, y compris ce qui échoue.

## Les contraintes d'abord

Trois règles fixées avant la première ligne de code. **Un : le site est statique.** Des fichiers Markdown, un générateur ([Lume](https://lume.land), sur Deno), des pages HTML. Publier un article, c'est pousser un fichier dans un dépôt git ; tout le reste est de la mécanique. **Deux : la sobriété n'est pas négociable.** Pas de framework front, une seule fonte téléchargée, des animations qui se coupent quand l'onglet est caché ou quand le système demande de réduire le mouvement. **Trois : le design précède le code.** La maquette a été finie avant le développement, et le développement lui obéit — pas l'inverse.

## Ce qui viendra

Le seul morceau dynamique est minuscule : un compteur de « j'aime » par article, un serveur Deno de quelques dizaines de lignes, une base clé-valeur. Pas de comptes, pas de cookies, pas d'analytics. Si un article vous plaît, le cœur en bas de page est le seul signal que je recevrai — c'est suffisant.

Le journal, lui, n'aura pas de ligne éditoriale : du code, des jeux vidéo, de la philo, ce que je lis, ce que je construis. Les catégories se créeront toutes seules au fil des billets. Rendez-vous au prochain.
