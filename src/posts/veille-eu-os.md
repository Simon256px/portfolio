---
title: "Veille : EU OS, la distribution européenne bâtie sur Fedora"
date: 2026-08-27
category: VEILLE
excerpt: "Un projet de distribution Linux pour le secteur public européen, censé le libérer de sa dépendance américaine — et qui repose sur Fedora, sponsorisée par Red Hat, filiale d'IBM. L'ironie saute aux yeux. Elle est trompeuse, et comprendre pourquoi règle une bonne partie du débat sur la souveraineté."
---

EU OS est un projet de distribution Linux destinée aux administrations publiques de l'Union européenne, né d'une pétition déposée au Parlement européen. Son objectif affiché est de sortir le poste de travail public de sa dépendance à Windows.

Il repose sur **Fedora**, avec un environnement de bureau **KDE Plasma**. Fedora est une distribution américaine, sponsorisée par Red Hat, elle-même filiale d'IBM.

L'ironie est immédiate, et [elle a été relevée dès l'annonce](https://linux.developpez.com/actu/370435/EU-OS-vise-a-liberer-la-filiere-desktop-du-secteur-public-de-l-Union-europeenne-de-la-dependance-a-Windows-en-s-appuyant-sur-une-distribution-Linux-americaine/) : se libérer des Américains en s'appuyant sur les Américains. Sauf que cette lecture est fausse, et démonter pourquoi règle à peu près tout le débat sur la souveraineté numérique.

## Ce que c'est, précisément

Le projet en est au stade de la **preuve de concept**. Ce n'est pas un produit qu'on installe dans un ministère, c'est une démonstration que la chose est faisable.

Son intérêt technique tient à son architecture en couches. Un socle commun, sur lequel viennent s'empiler une couche nationale, une couche régionale, puis une couche sectorielle. L'idée est qu'une préfecture française, un hôpital allemand et une commune polonaise partagent 80 % de leur système et personnalisent le reste, plutôt que de maintenir chacun sa distribution.

S'y ajoutent un environnement de bureau standardisé et une gestion commune des utilisateurs et des données. Rien de spectaculaire techniquement. Ce n'est pas le but : **l'innovation visée est organisationnelle, pas logicielle.**

## Pourquoi ça devient concret maintenant

Ce projet aurait pu rester une curiosité. Une décision française du printemps le rend nettement plus intéressant.

Le 8 avril 2026, lors d'un séminaire interministériel, [la DINUM a annoncé sa migration de Windows vers Linux](https://linux.developpez.com/actu/382064/La-DINUM-quitte-officiellement-Windows-pour-Linux-et-impose-a-chaque-ministere-francais-un-plan-de-souverainete-numerique-avant-l-automne-2026-L-Etat-ne-peut-plus-se-contenter-de-constater-sa-dependance/), et surtout imposé quelque chose de plus contraignant : **chaque ministère et chaque opérateur public doit formaliser son propre plan de souveraineté numérique avant l'automne 2026.**

Ces plans doivent couvrir sept axes : poste de travail, outils collaboratifs, antivirus, intelligence artificielle, bases de données, virtualisation et équipements réseau.

En parallèle, l'État pousse « La Suite », sa plateforme collaborative interministérielle — Tchap pour la messagerie, Visio pour la visioconférence, FranceTransfert pour les fichiers, Grist pour les tableurs, ce dernier étant open source. Et la migration de la plateforme nationale des données de santé vers une solution souveraine est attendue pour la fin 2026.

La citation qui accompagne l'annonce vaut d'être lue en entier, parce qu'elle date le changement de ton : « L'État ne peut plus se contenter de constater sa dépendance […] nous devons nous désensibiliser des outils américains », déclare David Amiel, ministre de l'Action et des Comptes publics.

Un projet européen de poste de travail public et une obligation française de plan de souveraineté à la même échéance : les deux calendriers se croisent, et c'est ce qui rend EU OS digne d'une veille plutôt que d'un signet.

## L'ironie Fedora, et pourquoi c'est le bon choix

Revenons à l'objection. Bâtir la souveraineté européenne sur une distribution américaine, est-ce absurde ?

Non, et pour une raison que j'ai développée [en distinguant open-weight et open source](https://simoncourtois.com/journal/open-weight-ou-open-source/) : **ce qui détermine ta dépendance n'est pas la nationalité du fournisseur, c'est la licence du code.**

Fedora est du logiciel libre. Le code est disponible, modifiable et redistribuable par n'importe qui. Si Red Hat décidait demain d'arrêter le projet, de le fermer, ou d'en restreindre l'usage à certains pays, **rien ne disparaîtrait** : le code existant reste utilisable, forkable et maintenable par quiconque a les compétences. C'est précisément ce qui différencie une dépendance technique d'une dépendance juridique.

Compare avec ce que la France quitte. Un contrat Microsoft ne te donne aucun droit sur le code, s'arrête à la date que l'éditeur choisit, et t'impose ses conditions de renouvellement. C'est le mécanisme que je décrivais en écrivant que [ton ordinateur meurt du logiciel](https://simoncourtois.com/journal/ce-qui-tue-ton-ordinateur/) : la fin de vie est décidée par celui qui tient le calendrier.

Sur Fedora, personne ne tient le calendrier de manière opposable. C'est une différence de nature, pas de degré — et c'est le vrai fond de [mon plaidoyer pour Linux](https://simoncourtois.com/journal/pourquoi-preferer-linux-a-windows/), qui n'a jamais porté sur la supériorité technique d'un système.

Et l'alternative — construire une distribution européenne à partir de rien — serait une faute stratégique complète. Ça reviendrait à réinvestir des centaines de millions pour reproduire, moins bien, ce qui existe déjà sous licence libre, en repartant vingt ans en arrière. La bonne question n'est pas « qui a écrit le code » mais « qui peut m'empêcher de m'en servir ».

## Ce qui manque pour qu'un ministère s'en serve

Reste que preuve de concept ne veut pas dire produit. Voici ce qu'il faudrait, honnêtement, avant qu'une administration puisse s'y engager.

- **Un support contractuel.** Une préfecture ne peut pas dépendre d'un forum. Il faut quelqu'un à appeler à 3 h du matin, avec un engagement écrit.
- **Une certification matérielle.** Les parcs publics sont hétérogènes, avec des pilotes de périphériques exotiques — badgeuses, imprimantes de titres, lecteurs de cartes agents.
- **Les applications métier.** C'est le point dur, et de très loin. Un ministère fait tourner des dizaines d'applications spécifiques, dont certaines très anciennes, conçues pour Windows.
- **Des gens.** Une migration de poste de travail se pilote pendant plusieurs années par des équipes internes qui restent.

Ce dernier point est celui qui décide de tout, et l'histoire l'a déjà démontré.

## Munich, et ce que son échec dit vraiment

Le contre-exemple obligatoire s'appelle LiMux. La ville de Munich a migré environ **15 000 postes** vers Linux, avec un pic en 2013, avant d'annoncer son retour à Windows en 2017 — déploiement à partir de 2020, achevé en 2023.

C'est l'argument qu'on te sortira systématiquement. Il mérite d'être lu correctement.

D'abord sur les chiffres, qui ne prouvent rien : le comité informatique de Munich estimait 20 millions d'euros d'économies, tandis qu'une étude de Hewlett-Packard **financée par Microsoft** annonçait 43 millions de surcoût. Deux nombres, deux commanditaires, aucune conclusion.

Ensuite sur les causes. [Le directeur de la FSFE, Matthias Kirschner, a analysé le dossier](https://www.developpez.com/actu/172612/LiMux-le-directeur-de-la-FSFE-revient-sur-les-problemes-du-passage-de-Munich-vers-Linux-et-les-lecons-a-en-tirer-pour-les-migrations-a-venir/) et son verdict est net : **les problèmes étaient organisationnels et politiques, pas techniques.**

Le détail le plus parlant : la ville maintenait **quinze versions de systèmes d'exploitation différentes** selon les services. Le support était centralisé alors que l'organisation informatique ne l'était pas. Les applications métier sont restées dépendantes de Windows sans aucune stratégie de migration. Et LiMux est devenu le bouc émissaire universel — jusqu'à des pannes de serveur mail qui n'avaient rien à voir avec le poste de travail.

Kirschner ajoute une observation politique qui vaut avertissement : le nouveau maire avait tranché avant d'examiner, « la ville examine des options quand tout est déjà scellé ».

**Munich n'a pas prouvé que Linux ne marche pas en administration. Munich a prouvé qu'une migration sans gouvernance unifiée, sans plan pour les applications métier et sans soutien politique constant échoue** — ce qui aurait été vrai dans n'importe quel sens de migration.

Et regarde maintenant les sept axes exigés par la DINUM : poste de travail, outils collaboratifs, antivirus, IA, bases de données, virtualisation, réseau. C'est exactement la liste des endroits où Munich s'est fragmenté. Que ce soit intentionnel ou non, l'exigence française attaque le bon problème.

## Points faibles : quatre réserves

**C'est une preuve de concept, et je l'ai traitée comme une nouvelle.** EU OS n'a, à ma connaissance, aucun déploiement en production, aucun budget public annoncé, aucun engagement d'État. Une veille sur un projet à ce stade est un pari, et il faut le dire.

**Mon argument sur la licence a une limite réelle.** Le droit de forker n'est utile que si quelqu'un a les moyens de forker. Une distribution est maintenue par des centaines de personnes à temps plein ; si Red Hat se retirait, l'Europe hériterait du droit de reprendre un travail qu'elle n'a pas les équipes pour assumer. La liberté juridique est une condition nécessaire, pas suffisante.

**Le rythme reste décidé ailleurs.** Fedora avance à la cadence que Red Hat lui donne — versions, choix d'architecture, arbitrages techniques amont. On ne dépend pas d'un contrat, mais on suit un tempo qu'on ne fixe pas.

**Enfin, je n'ai pas testé.** Cette veille repose sur des annonces et des analyses, pas sur une installation. Je ne peux rien dire de l'ergonomie réelle, des performances ni de la qualité du travail d'intégration.

## Ce qu'il faut en retenir

EU OS n'est pas encore un produit, et son mérite principal n'est pas technique : c'est de poser la bonne architecture de partage entre administrations européennes, au moment précis où la France oblige chacun de ses ministères à produire un plan avant l'automne.

Et la controverse sur Fedora est le meilleur cadeau du dossier, parce qu'elle force à énoncer clairement ce que veut dire souveraineté : **une licence libre chez un éditeur américain protège mieux qu'un contrat propriétaire chez un éditeur français.** Le drapeau ne dit rien, le fichier LICENSE dit tout.

Reste la question que Munich a réglée pour tout le monde, et qu'aucun choix de distribution ne remplacera : **combien de personnes, en interne, seront payées pour faire tourner ça dans cinq ans ?** Si la réponse tient dans une prestation externalisée, on connaît déjà la fin — et elle ne sera pas la faute de Linux.
