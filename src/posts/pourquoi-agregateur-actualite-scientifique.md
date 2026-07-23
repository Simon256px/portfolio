---
title: "Pourquoi j'ai créé un agrégateur d'actualité scientifique"
date: 2026-07-23
category: SCIENCE
excerpt: "La recherche française publie énormément. Personne ne le voit. J'ai construit CNRS//FLUX pour réunir des dizaines de flux au même endroit — et la liste continue de s'allonger."
---

J'aime la science. Pas la science spectacle, pas le titre racoleur sur une découverte « qui va tout changer » — la vraie, celle qui avance par petits pas dans des labos dont personne n'entend jamais parler. Et j'ai fini par admettre une chose : cette science-là est mal représentée. Pas absente. Mal distribuée.

C'est de ce constat qu'est né [CNRS//FLUX](https://flux.simoncourtois.com/).

## Le problème n'est pas le manque d'information

C'est ça qui m'a frappé quand j'ai commencé à creuser. On répète que la science n'est pas assez visible, et on imagine un désert. La réalité est l'inverse : **l'information existe, en quantité, et elle est publique**.

Le CNRS publie. Ses dix instituts publient. Ses seize délégations régionales publient, chacune de son côté. L'Inserm publie, l'Inria, le CEA, le CERN, l'IRD, l'IPGP, Gustave Roussy, Météo-France, l'Observatoire de Paris, Paris-Saclay, Sorbonne Université. Ajoute les médias scientifiques comme Futura, The Conversation ou Pour la Science.

Le résultat ? Des dizaines de sites institutionnels, chacun avec son design, sa navigation, son propre rythme de publication. Pour suivre l'actualité de la recherche française, il faudrait ouvrir quarante onglets par semaine. Personne ne fait ça. Moi non plus.

L'information n'est donc pas rare : elle est **fragmentée**. Et une information fragmentée, en pratique, c'est une information invisible.

## Ce que fait CNRS//FLUX

L'idée est volontairement simple, presque bête : tout mettre au même endroit.

L'outil collecte automatiquement, toutes les 30 minutes, plusieurs dizaines de flux RSS répartis sur une quinzaine d'organismes — au moment où j'écris, une quarantaine de flux, mais **ce chiffre n'a rien de définitif** : c'est un compteur qui monte, pas une liste fermée. Le décompte à jour est affiché en direct en haut du site.

Chaque article est nettoyé, rangé, indexé, puis rendu consultable dans une seule interface — avec de la recherche plein texte et des filtres par organisme, par source, par région et par thème.

Concrètement, on peut demander : *tout ce qui touche à l'écologie, en Hauts-de-France, depuis n'importe quel organisme*. Ce genre de question était impossible avant, non pas par manque de données, mais parce qu'elles étaient éparpillées sur des dizaines de sites sans lien entre eux.

## Le filtre régional, ma fonctionnalité préférée

C'est celle à laquelle je ne m'attendais pas en commençant.

Les délégations régionales du CNRS publient les actualités des labos de leur territoire. Personne ne les lit — pourquoi irait-on consulter le site de la délégation Normandie ? Sauf que, mises bout à bout et filtrables, ces sources racontent quelque chose de neuf : **la recherche qui se fait près de chez toi**.

C'est peut-être le levier de vulgarisation le plus sous-estimé qui soit. « Un labo à trente kilomètres travaille là-dessus » a un tout autre poids que « des chercheurs ont découvert que ».

## Sous le capot

Le projet est **100 % écosystème Deno** — j'en avais envie, et ça collait parfaitement au besoin :

- **Deno 2** comme runtime, **Fresh 2** pour le rendu serveur avec des îlots interactifs, **Hono** pour l'API, **Deno KV** pour le stockage, `Deno.cron()` pour la collecte planifiée. Déployé sur Deno Deploy.
- **Collecte polie.** Chaque flux est téléchargé avec un GET conditionnel (`ETag` / `Last-Modified`) : si rien n'a changé, rien n'est transféré. On ne martèle pas les serveurs des organismes pour rien.
- **Déduplication atomique.** La clé primaire d'un article est un hash SHA-256 de son `guid` ou de son lien. Un article déjà connu est ignoré, point. Indispensable quand un même communiqué remonte dans trois flux à la fois.
- **Thèmes canoniques.** Chaque flux a ses propres catégories, toutes différentes. Une table d'alias les ramène vers onze thèmes communs — c'est ce qui rend le filtre thématique utilisable à travers des sources qui ne se parlent pas.
- **Recherche insensible aux accents**, avec score de pertinence.

Côté interface, j'ai assumé un parti pris : ambiance **terminal scientifique**, fond quasi noir teinté de vert, vert phosphore, IBM Plex Mono pour la donnée et Space Grotesk pour les titres. Fontes auto-hébergées, **aucune dépendance front externe**. Ça charge vite et ça ne trace personne.

Ajouter une source revient à ajouter une ligne dans un registre : le collecteur, l'API et les filtres s'adaptent tout seuls.

## Il manque une source ? Propose-la

C'est précisément le point : la liste des flux n'est pas gravée dans le marbre, et je ne connais pas tout. Un institut, un laboratoire, un observatoire, une revue que tu suis et qui n'est pas là ?

**Ouvre une issue ou une pull request sur [le dépôt GitHub](https://github.com/simon256px/CNRS-flux).** Concrètement, il suffit d'une URL de flux RSS ou Atom et du nom de l'organisme — j'ai conçu le registre `collector/sources.ts` pour que l'ajout tienne en quelques lignes. Une PR est la bienvenue, une simple issue avec le lien fait tout aussi bien l'affaire.

Le projet est sous licence MIT : forke, adapte à un autre pays ou à un autre domaine, sers-toi.

## Ce que j'ai appris en route

**Tout le monde ne publie pas de RSS.** J'ai dû acter que le CNES, l'Institut Pasteur, l'INRAE, l'IFREMER, le BRGM, l'ANSES et l'Institut Curie n'exposaient pas de flux public exploitable. Sept organismes majeurs, hors radar. Le RSS est une technologie vieille de vingt-cinq ans, ouverte, gratuite — et c'est encore le meilleur moyen de rendre une information réutilisable. Son abandon progressif est une petite tragédie silencieuse.

**Agréger, c'est éditorialiser.** Choisir les sources, définir les thèmes, décider qu'un contenu sponsorisé est filtré : ce sont des choix. Il n'existe pas de flux « neutre », et autant l'assumer.

**Le tri vaut la collecte.** Récupérer des centaines d'articles est facile. Les rendre navigables, c'est là qu'est le travail réel.

## Et maintenant

Le [code est sur GitHub](https://github.com/simon256px/CNRS-flux). Ça tourne, ça se met à jour tout seul, et je continue à y brancher des sources — au rythme de mes trouvailles et, j'espère, des vôtres.

Je ne prétends pas régler le problème de la visibilité de la science. Mais je suis convaincu d'un truc : avant de produire davantage de vulgarisation, il faudrait déjà rendre accessible ce qui existe. La recherche publique communique énormément — et le fait souvent très bien. Elle le fait juste dans des dizaines d'endroits à la fois.

CNRS//FLUX, c'est ma tentative de mettre tout ça sur une seule page. Et cette page n'aura jamais fini de grandir.
