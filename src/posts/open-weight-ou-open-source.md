---
title: "Open-weight ou open source : la différence qui t'engage"
date: 2026-08-28
category: LOGICIEL LIBRE
excerpt: "La section 3.2 des conditions de Gemma autorise Google à restreindre l'usage du modèle à distance. Sur quelque chose qu'on te présente comme ouvert. Depuis le 2 août 2025, confondre poids ouverts et open source n'est plus une question de vocabulaire : ça décide de tes obligations légales."
---

Les conditions d'utilisation de Gemma contiennent une section 3.2 par laquelle Google **se réserve le droit de restreindre l'usage du modèle, à distance ou autrement**. Sur un modèle que tu as téléchargé, que tu fais tourner sur ta machine, et qu'on te présente partout comme « ouvert ».

Ce n'est pas un scandale caché : c'est écrit dans le contrat que tu as accepté en cliquant. Mais ça résume assez bien le problème. **Un modèle dont on te donne les poids n'est pas un modèle libre**, et depuis le 2 août 2025, cette distinction a des conséquences juridiques directes sur ce que tu as le droit de construire.

J'ai publié [un tuto pour monter une stack IA locale](https://simoncourtois.com/journal/tuto-stack-ia-locale/) en listant des modèles à télécharger sans jamais regarder leurs licences. Voilà la réparation.

## Trois familles, et une seule mérite le mot

Il faut d'abord poser des définitions précises, parce que le vocabulaire est saturé de marketing.

**Open source, au sens strict.** L'Open Source Initiative — l'organisation qui définit le terme depuis 1998 — a publié [sa définition de l'IA open source, l'OSAID 1.0, le 28 octobre 2024](https://opensource.org/ai/open-source-ai-definition). Elle exige quatre libertés : utiliser sans demander la permission, étudier le fonctionnement, modifier pour n'importe quel but, partager modifié ou non. Et elle exige trois composants réunis :

1. **Les informations sur les données** — assez détaillées pour qu'« une personne compétente puisse construire un système substantiellement équivalent ».
2. **Le code source complet** utilisé pour entraîner et faire tourner le système.
3. **Les paramètres**, c'est-à-dire les poids.

Note un point que la plupart des commentateurs ratent : **l'OSI n'exige pas la publication des données brutes.** Elle exige leur description complète, leur provenance et les procédures — une exigence de reproductibilité, pas de mise à disposition. Le compromis a été critiqué des deux côtés, il est explicite.

**Open-weight.** On te donne les poids. Rien d'autre n'est garanti : ni le code d'entraînement, ni les informations sur les données, ni une licence permissive. C'est la catégorie de l'écrasante majorité des modèles qu'on appelle « open » dans la presse.

**Propriétaire.** Tu passes par une API et tu ne possèdes rien.

La confusion entretenue est entre les deux premières. Elle est commode : elle permet de récolter le crédit symbolique de l'open source en gardant le contrôle juridique d'un produit propriétaire.

## Pourquoi Llama n'est pas open source, selon ceux qui définissent le mot

L'OSI a publié [une position sans ambiguïté le 18 février 2025](https://opensource.org/blog/metas-llama-license-is-still-not-open-source), et elle liste trois violations de l'Open Source Definition :

- **La liberté 0** — utiliser le modèle pour n'importe quel usage — n'est pas respectée.
- **Le point 5 de l'OSD**, qui interdit toute discrimination entre personnes ou groupes, est violé.
- **Le point 6**, qui interdit de restreindre les champs d'activité, est violé aussi.

L'OSI emploie le mot *open washing*. Ce n'est pas un détail de vocabulaire pour puristes : ces trois points sont exactement ceux qui déterminent si tu peux construire un produit dessus sans dépendre du bon vouloir de l'éditeur.

## Le comparatif des clauses qui te concernent vraiment

Voici ce que disent réellement les trois licences les plus répandues, [d'après une analyse juridique publiée à destination des startups](https://blog.promise.legal/open-weight-ai-license-trap-startups/).

| | Llama | Mistral (Apache 2.0) | Gemma |
|---|---|---|---|
| Vraie licence OSI | Non | **Oui** | Non — conditions maison |
| Politique d'usage restrictive | Oui | Non | Oui |
| Seuil commercial | 700 M d'utilisateurs actifs mensuels | — | Aucun |
| Attribution imposée | « Built with Meta Llama 3 », et le nom du dérivé doit commencer par « Llama 3 » | NOTICE standard | Fichier notice |
| Restriction par métier | Finance, santé, droit | Non | — |
| Sorties réutilisables pour entraîner un autre modèle | **Non** — clause 1(b)(v) | Oui | Définition large des « dérivés », distillation incluse |
| Coupure à distance | Non | Non | **Oui — section 3.2** |
| Répercussion sur tes clients | Oui | Oui (Apache 2.0) | Oui, opposable |

Trois lignes méritent qu'on s'y arrête.

**La clause 1(b)(v) de Llama** interdit d'utiliser les sorties du modèle pour améliorer un autre modèle. Si ta stratégie consiste à générer des données synthétiques pour entraîner un modèle maison plus petit — ce qui est une pratique courante et efficace — tu es en violation.

**Les restrictions par métier.** La licence Llama exclut l'exercice non autorisé de professions réglementées en finance, santé et droit. Formulée largement, cette clause couvre une partie considérable des cas d'usage professionnels sérieux.

**Et la répercussion.** Ces restrictions ne s'arrêtent pas à toi : tu dois les rendre opposables à tes propres clients. Tu ne transmets donc pas un logiciel, tu transmets une chaîne de contraintes dont tu deviens responsable.

## Le critère que personne ne cite : la non-monétisation

Voilà la partie qui a changé le 2 août 2025, et c'est celle qui rend la question urgente plutôt qu'académique.

L'AI Act européen prévoit une exemption pour les modèles à usage général publiés en libre et open source. Mais [cette exemption repose sur trois conditions cumulatives](https://huggingface.co/blog/yjernite/eu-act-os-guideai), et la troisième est presque toujours oubliée :

1. Une **licence libre** permettant accès, usage, modification et redistribution. Les licences « recherche seulement » ou « usage non commercial » ne qualifient pas.
2. La **publication des paramètres**, de l'architecture et des informations d'utilisation.
3. **L'absence de monétisation.** Le modèle ne doit pas être fourni contre paiement, ni empaqueté avec un service payant, ni accompagné de publicité, ni conditionner l'accès à la collecte de données personnelles.

Relis la troisième. **Une licence Apache 2.0 impeccable ne suffit pas à obtenir l'exemption si le modèle est monétisé.** La qualification ne dépend pas seulement du texte juridique, elle dépend du modèle économique qui l'entoure.

Ce que l'exemption dispense : la documentation détaillée pour la Commission et pour les intégrateurs — les articles 53(1a) et 53(1b) — ainsi que l'obligation de désigner un représentant dans l'Union.

Ce qui reste dû **même en open source** : l'article 53(1c), une politique de conformité au droit d'auteur européen, et l'article 53(1d), **un résumé public détaillé des données d'entraînement**. Autrement dit, la transparence sur les données n'est pas négociable, exemption ou pas.

Et pour les modèles à risque systémique, il n'y a **aucune exemption** : les articles 53 à 55 s'appliquent intégralement. Le calendrier : entrée en application le 2 août 2025, avec une échéance au 2 août 2027 pour les modèles déjà sur le marché avant cette date.

## Qui est réellement conforme aujourd'hui

La liste est plus courte que le discours ambiant ne le laisse croire.

**Conformes à l'OSAID** — code, poids et informations sur les données publiés ensemble : **OLMo 2** de l'Allen Institute, **Pythia** d'EleutherAI, **Amber** et **CrystalCoder** de LLM360, et historiquement **T5** de Google Research. Tous sous Apache 2.0.

**Zone grise** — licence permissive mais données d'entraînement incomplètement documentées : **DeepSeek** en MIT, **Qwen** majoritairement en Apache 2.0, **Granite** d'IBM en Apache 2.0 avec une documentation détaillée. Ces modèles te laissent une liberté juridique réelle ; ils ne te permettent pas de reconstruire l'équivalent.

**Open-weight seulement** : **Llama**, **Gemma**, **Phi** de Microsoft — en MIT mais avec des informations d'entraînement incomplètes — et les Mistral les plus connus, sous Apache 2.0 mais avec des données partielles.

Retiens la ligne de partage : **la licence et la transparence des données sont deux axes indépendants.** Un modèle peut être juridiquement libre et scientifiquement opaque. C'est même le cas le plus fréquent.

## Comment choisir, concrètement

Cinq questions, dans l'ordre, avant d'écrire la première ligne de code.

1. **Qu'est-ce que je construis ?** Un usage personnel ne pose aucun problème, même sous Llama. Un produit commercial engage tout le reste de cette liste.
2. **La licence est-elle approuvée par l'OSI, oui ou non ?** Apache 2.0 et MIT : oui. Toute licence portant le nom d'une entreprise — « Llama Community License », « Gemma Terms of Use » — : non, et il faut la lire en entier.
3. **Vais-je générer des données avec ce modèle pour en entraîner un autre ?** Si oui, Llama est éliminé par la clause 1(b)(v), et Gemma pose un problème via sa définition large des dérivés.
4. **Mon secteur figure-t-il dans une restriction de métier ?** Santé, finance, droit : vérifie ligne par ligne.
5. **Ai-je besoin de reproduire ou d'auditer l'entraînement ?** Si oui, seuls les modèles OSAID conviennent, et la liste se réduit à quatre ou cinq noms.

Et une règle qui résume les cinq : **si le fournisseur a écrit sa propre licence plutôt que d'en reprendre une existante, il l'a fait pour une raison.** Cette raison est dans le texte, et elle te concerne.

C'est le même réflexe que celui que je défendais [en préférant Linux à Windows](https://simoncourtois.com/journal/pourquoi-preferer-linux-a-windows/) : la question n'a jamais été de savoir lequel est techniquement supérieur, mais qui décide de ce que tu as le droit d'en faire dans trois ans.

## Points faibles : quatre réserves

**La définition de l'OSI est contestée, et pas seulement par Meta.** Une partie de la communauté du logiciel libre lui reproche d'être trop laxiste — accepter une « information sur les données » plutôt que les données elles-mêmes serait une concession majeure. D'autres la jugent inapplicable en pratique. J'ai adopté l'OSAID comme référence parce qu'elle vient de l'organisation qui gère le terme depuis 1998, pas parce qu'elle fait consensus.

**Mon tableau simplifie le cas Mistral.** L'éditeur publie sous Apache 2.0 une partie de ses modèles et sous licence maison, avec seuils de revenus, les autres. Écrire « Mistral = Apache 2.0 » est commode et faux en général : il faut vérifier modèle par modèle, comme pour les autres.

**Les licences bougent plus vite que les articles de blog.** Les conditions de Gemma, la licence Llama et les termes de Mistral ont tous été modifiés plusieurs fois. Ce que je décris est l'état constaté aujourd'hui, et la seule méthode fiable reste de lire le fichier de licence de la version exacte que tu télécharges.

**Enfin, open source ne veut pas dire meilleur.** Un modèle sous Apache 2.0 peut être médiocre, et un modèle open-weight excellent. Le critère juridique répond à « de quoi suis-je propriétaire », pas à « est-ce que ça marche ». Confondre les deux serait exactement le genre de raccourci que cet article dénonce.

## Le vrai arbitrage

Le mot « open » appliqué aux modèles recouvre aujourd'hui trois réalités qui n'ont presque rien en commun, et l'ambiguïté est entretenue parce qu'elle rapporte.

Ce qui a changé, c'est qu'elle n'est plus gratuite. Depuis le 2 août 2025, la qualification décide d'obligations réglementaires réelles ; les clauses de répercussion font de toi le garant de restrictions que tu n'as pas écrites ; et une section 3.2 quelque part autorise un éditeur à te couper l'accès à un modèle que tu croyais posséder.

C'est le même diagnostic que celui de [mon article sur la mort logicielle des machines](https://simoncourtois.com/journal/ce-qui-tue-ton-ordinateur/), transposé aux modèles : **ce que tu as le droit de faire est décidé par quelqu'un d'autre, à une date qu'il choisit, dans un document que tu n'as pas lu.**

Alors la question à te poser devant n'importe quel modèle annoncé comme ouvert tient en une phrase : **si l'éditeur disparaissait demain, ou décidait de changer ses conditions, qu'est-ce qui me resterait ?** Les poids, la licence et rien d'autre chez la plupart. Le droit de reconstruire chez quatre ou cinq. C'est toute la différence, et elle ne se voit pas au moment du téléchargement.
