---
title: "Tuto : cinq ans de plus pour le PC dont Windows 11 ne veut pas"
date: 2026-08-31
category: TUTO
excerpt: "Sur les opérations qui font vraiment le ressenti d'une machine, un disque dur plafonne à 1,7 Mo/s et un SSD monte à 250. Facteur cent soixante-dix. Le procédé pour rallonger la vie d'un PC tient en deux achats et une décision — et j'avais annoncé ce calcul sans jamais le faire."
---

Voici les deux nombres qui décident de tout, et ce ne sont pas ceux qu'on cite d'habitude.

Sur les **opérations aléatoires de petits fichiers** — celles qu'un système enchaîne par milliers au démarrage et à l'ouverture d'une application —, un disque dur classique délivre [entre 0,1 et 1,7 Mo/s, contre 50 à 250 Mo/s pour un SSD SATA](https://www.avg.com/fr/signal/ssd-hdd-which-is-best). En prenant les milieux de fourchette, le rapport est de **cent soixante-dix**.

Sur les gros fichiers séquentiels — le chiffre que tout le monde met en avant —, l'écart tombe à un facteur vingt environ. **On compare donc systématiquement sur le critère qui compte le moins.**

J'ai écrit il y a deux semaines qu'[un SSD et de la mémoire repoussent l'échéance de plusieurs années](https://simoncourtois.com/journal/ce-qui-tue-ton-ordinateur/), puis je suis passé à autre chose sans donner la marche à suivre. La voici, dans l'ordre où il faut la suivre.

## Étape 0 : diagnostiquer avant d'acheter

La faute classique est d'acheter un composant parce qu'on a lu que c'était le bon. Commence par regarder ce qui bloque réellement chez toi.

Ouvre le gestionnaire de tâches — `Ctrl + Maj + Échap` — puis l'onglet Performance, et travaille normalement pendant dix minutes. Tu cherches lequel des trois indicateurs sature.

| Ce que tu observes | Ce qui limite | Ce qu'il faut |
|---|---|---|
| Disque à 100 % pendant que le processeur est à 20-30 % | Le stockage | Un SSD |
| Mémoire au-dessus de 80 % en usage normal, disque qui s'agite | La RAM | Des barrettes |
| Processeur à 100 % de façon soutenue | Le processeur | Rien à faire, ou changer de machine |
| Tout est bas mais c'est lent quand même | Le logiciel | Voir plus bas |

**Le troisième cas est rare sur un usage bureautique et web.** Un processeur de 2015 est encore largement suffisant pour un navigateur, une suite bureautique et de la visio. Le premier cas, lui, est écrasant sur les machines livrées avec un disque dur mécanique.

## Le SSD, seul achat qui change vraiment quelque chose

C'est le levier numéro un, et de très loin. Trois précisions pratiques.

**Le format.** Sur une machine d'avant 2016, ce sera très probablement du **SATA 2,5 pouces** — le même format que le disque dur qu'il remplace. Les SSD NVMe montent à 3 500 Mo/s en séquentiel, mais ils exigent un port M.2 que ta carte mère n'a peut-être pas. Ne paie pas pour du NVMe si le connecteur n'existe pas, et surtout : **même un SATA d'entrée de gamme te donne l'essentiel du gain**, puisque celui-ci vient de l'accès aléatoire et non du débit maximal.

**La capacité.** Prends au moins la taille de ton disque actuel. Un SSD coûte environ deux fois plus cher au gigaoctet qu'un disque dur, ce qui reste sans commune mesure avec le prix d'une machine.

**La durée de vie.** L'objection « les SSD s'usent » est datée. Les deux technologies tiennent une dizaine d'années en usage normal, et les SSD sont en pratique remplacés 25 % moins souvent que les disques durs.

Ce que ça change : le démarrage, l'ouverture des applications, la réactivité générale, la fin des blocages où tout se fige pendant que le disque gratte. Ce que ça ne change pas : la vitesse de calcul brute, l'encodage vidéo, les jeux limités par le processeur ou la carte graphique.

## La RAM, deuxième levier

Le symptôme est facile à reconnaître : la mémoire dépasse durablement 80 %, le système commence à écrire sur le disque ce qu'il ne peut plus garder en mémoire, et tout ralentit d'un coup.

Deux règles simples. **En dessous de 8 Go, l'ajout se justifie presque toujours** pour un usage moderne avec un navigateur qui garde vingt onglets. Au-dessus de 16 Go, l'ajout ne se justifie que si tu fais tourner des machines virtuelles, de la retouche lourde ou des modèles en local.

Avant d'acheter, vérifie trois choses sur la fiche de ton modèle : le type — DDR3 ou DDR4, ils ne sont pas interchangeables —, le nombre d'emplacements libres, et le maximum supporté par la carte mère. Un portable de 2014 plafonne parfois à 8 Go quoi que tu fasses.

## Est-ce que Windows 11 veut de ta machine ?

C'est là que se joue la décision, parce qu'un SSD dans un PC dont le système ne sera plus mis à jour ne règle qu'un demi-problème.

[La configuration requise](https://lecrabeinfo.net/guides/windows-11-quelle-est-la-configuration-minimale-requise/) est nettement plus restrictive que ce que la puissance brute exigerait :

- **Processeur** : Intel de 8ᵉ génération ou plus récent, AMD Ryzen 2000 ou plus récent — et il doit figurer sur la liste officielle de Microsoft, ce qui exclut des puces parfaitement capables.
- **TPM 2.0**, obligatoire.
- **Secure Boot** et firmware **UEFI** — un BIOS classique ne suffit pas.
- 4 Go de RAM, 64 Go de stockage libre, DirectX 12.

Pour vérifier le point qui bloque le plus souvent, tape `tpm.msc` dans la boîte d'exécution : la console t'indique si un module TPM est présent et dans quelle version. Beaucoup de machines en ont un désactivé par défaut dans le firmware, sous un nom peu évident — « PTT » chez Intel, « fTPM » chez AMD. **Vérifie ça avant de conclure que ton PC est exclu**, ça se règle parfois en trois clics dans le BIOS.

Et garde l'échéance en tête : le support de Windows 10 s'est arrêté le 14 octobre 2025, et le programme de mises à jour de sécurité étendues court jusqu'au **12 octobre 2027**. Après cette date, une machine restée sous Windows 10 ne recevra plus de correctifs.

## Si Windows 11 ne veut pas : quelle distribution

C'est le moment où la question devient celle que je posais en défendant [Linux contre Windows](https://simoncourtois.com/journal/pourquoi-preferer-linux-a-windows/) : non pas lequel est meilleur, mais qui décide de la date de mort de ta machine.

Voici les configurations minimales réelles des distributions adaptées au matériel ancien.

| Distribution | RAM mini | Stockage | Bureau | Pour qui |
|---|---|---|---|---|
| **Linux Mint XFCE** | 2 Go | 20 Go | Xfce | Quelqu'un qui vient de Windows |
| Ubuntu MATE | 1-2 Go | 10 Go | MATE | Machine correcte, envie de moderne |
| Linux Lite | 1 Go | 20 Go | Xfce adapté | Débutant non technique |
| Lubuntu | 1 Go | 10 Go | LXQt | Habitué d'Ubuntu, matériel juste |
| antiX | 512 Mo | 5 Go | IceWM/Fluxbox | Recyclage extrême |
| Puppy Linux | 512 Mo | clé USB | JWM | Tourne en mémoire, très vieux PC |

**Si tu ne veux pas réfléchir, prends Linux Mint XFCE.** C'est l'interface la plus proche de ce qu'un utilisateur Windows connaît, la documentation francophone est abondante, et 2 Go de RAM suffisent — ce qui couvre à peu près tout ce qui a été vendu depuis 2010.

Descends dans le tableau seulement si la machine est vraiment limite. antiX démarre avec 256 Mo, mais tu paieras cette légèreté en confort et en temps de configuration.

Et fais toujours la même chose avant de t'engager : **teste en session live depuis une clé USB, sans rien installer.** Tu vérifies en vingt minutes que le wifi, le son, la webcam et l'imprimante fonctionnent. C'est le seul test qui compte.

## L'ordre des opérations, en une liste

1. **Diagnostiquer** dix minutes au gestionnaire de tâches.
2. **Sauvegarder** sur un disque externe — non négociable avant de toucher au matériel.
3. **Vérifier le TPM** avec `tpm.msc`, et le réactiver dans le firmware s'il est simplement désactivé.
4. **Tester une distribution en live USB** si Windows 11 est hors d'atteinte.
5. **Acheter** le SSD, et la RAM seulement si le diagnostic la désigne.
6. **Installer** le système sur le SSD neuf, en gardant l'ancien disque intact quelques semaines.

Ce dernier point vaut de l'or : tant que tu n'as pas effacé l'ancien disque, tout est réversible.

## Points faibles : ce que ce tuto ne règle pas

**Les chiffres de débit sont des ordres de grandeur.** Les fourchettes que j'utilise viennent d'une source de vulgarisation, pas d'un banc d'essai que j'aurais conduit. Le rapport de 170 sur l'accès aléatoire est robuste dans son ordre de grandeur, il n'est pas une mesure de ta machine.

**Certains portables sont soudés.** Une part croissante des machines depuis 2018 a la RAM soudée à la carte mère et parfois le stockage aussi. Dans ce cas, ce tuto ne s'applique pas, et le seul levier restant est le système.

**Un SSD ne répare pas un logiciel obèse.** Si le ralentissement vient d'un antivirus tiers, de dix programmes lancés au démarrage ou d'un profil navigateur saturé, tu vas payer du matériel pour masquer un problème gratuit à régler.

**Et changer de système a un coût réel** que je ne vais pas minimiser : réapprendre des habitudes, retrouver des équivalents logiciels, et accepter que certaines applications métier ou certains périphériques exotiques ne suivront pas. C'est un arbitrage, pas une évidence.

## Le vrai arbitrage

Le calcul complet tient en une comparaison. D'un côté, un SSD, éventuellement des barrettes de RAM, et une soirée de manipulation. De l'autre, une machine neuve — et les 182 kgCO2e de fabrication que je chiffrais dans l'article précédent, plus le prix.

Ce n'est pas un choix serré. **Le seul cas où remplacer se justifie, c'est le troisième diagnostic** : un processeur réellement saturé en usage normal, sur une machine dont la RAM est soudée. Partout ailleurs, tu paies un renouvellement pour un problème de stockage.

Et c'est exactement le raisonnement que l'État français vient d'appliquer à ses propres postes, comme je le relevais [dans la veille sur EU OS](https://simoncourtois.com/journal/veille-eu-os/) : quand le système bloque avant le matériel, on change de système. Il n'y a aucune raison qu'un particulier fasse l'inverse.
