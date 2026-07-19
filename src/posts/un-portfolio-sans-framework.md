---
title: "Un portfolio sans framework, promis"
date: 2026-06-02
category: FRONT-END
excerpt: "HTML, CSS, un peu de JS vanilla — et l'étrange liberté de ne rien installer."
---

Ce site n'a pas de framework front. Pas de React, pas de bundler, pas de `node_modules` de 400 Mo. Des pages HTML générées par [Lume](https://lume.land), une feuille de style, et quelques modules JavaScript natifs que le navigateur charge tel quels. Je veux expliquer pourquoi ce n'est pas de la nostalgie.

## Ce qu'un framework m'aurait donné

Soyons honnête sur ce que j'abandonne : des composants réutilisables, un état centralisé, un écosystème de bibliothèques prêtes à l'emploi. Pour une application — un outil avec des formulaires, des vues qui changent, des données qui circulent — c'est précieux et je le prends sans hésiter.

Mais un site comme celui-ci n'est pas une application. C'est du texte, des liens, deux canvas décoratifs et un bouton « j'aime ». Le HTML est généré au build, une fois, sur ma machine. Le navigateur reçoit une page finie. Il n'y a tout simplement pas d'état à gérer — et un framework sans état à gérer, c'est un moteur d'avion sur un vélo.

## Ce que l'absence me donne

D'abord la légèreté : la page d'accueil pèse moins qu'une seule photo Instagram, JavaScript compris. Ensuite la durée : ce code n'a aucune dépendance à mettre à jour, aucune faille de `npm audit`, aucune migration de version majeure à subir dans deux ans. Les modules ES natifs que j'écris aujourd'hui tourneront tels quels dans dix ans — c'est le contrat du web.

Enfin, une chose plus difficile à quantifier : quand quelque chose casse, la pile d'appels fait trois lignes et elles sont toutes à moi.

La règle que j'en tire n'a rien de dogmatique : par défaut, rien ; un framework quand le problème le réclame. C'est l'ordre des deux propositions qui compte.
