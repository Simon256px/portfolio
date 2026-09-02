---
title: "Ton mot de passe : 4 heures ou 12 000 ans, et tu n'y es pour rien"
date: 2026-09-01
category: SÉCURITÉ
excerpt: "Un mot de passe aléatoire de huit caractères tombe en 3 h 50 s'il est stocké en MD5, et tient 12 100 ans s'il est stocké en bcrypt. Même mot de passe, même carte graphique, facteur 27 millions. La variable qui décide n'est pas la tienne — et de toute façon, ce n'est pas comme ça qu'on perd ses comptes."
---

Prends un mot de passe aléatoire de **huit caractères**, tiré des 95 symboles ASCII imprimables. Majuscules, minuscules, chiffres, ponctuation : le genre que les sites te réclament.

Une seule carte graphique moderne, une RTX 5090, calcule [plus de 240 milliards de hachages MD5 par seconde](https://tutorials.technology/blog/08-Hashcat-GPU-benchmarking-table-Nvidia-and-amd.html). L'espace de recherche fait 95⁸, et on tombe en moyenne sur la moitié.

**Si le site a stocké ton mot de passe en MD5 : 3 heures et 50 minutes.**

La même carte, sur du bcrypt à facteur de coût 10, tourne à environ **8 700 hachages par seconde** — un chiffre que je dérive de la flotte de seize RTX 5090 utilisée par [Hive Systems pour son tableau annuel](https://www.hivesystems.com/blog/are-your-passwords-in-the-green), soit 138 675 hachages par seconde à seize.

**Si le site a stocké le même mot de passe en bcrypt : 12 100 ans.**

Même chaîne de caractères. Même matériel. **Facteur 27,7 millions.**

Et ce facteur ne dépend pas de toi. Il dépend d'une ligne de code écrite il y a des années par un développeur dont tu ne connaîtras jamais le nom, dans une entreprise dont tu ne sauras qu'elle a fui que le jour où elle fuira.

C'est le premier problème des tableaux « combien de temps pour craquer votre mot de passe ». Le second est pire : **ils calculent une chose qui ne t'arrivera jamais.**

## Ce que le tableau mesure vraiment

Voici l'ordre de grandeur, refait proprement, sur une seule carte :

| Mot de passe aléatoire (95 symboles) | Stocké en MD5 | Stocké en bcrypt (coût 10) |
|---|---|---|
| 8 caractères | **3 h 50** | 12 100 ans |
| 12 caractères | 35 700 ans | 9,9 × 10¹¹ ans |
| 16 caractères | 2,9 × 10¹² ans | 8 × 10¹⁹ ans |

Regarde la colonne de gauche : passer de 8 à 12 caractères te fait gagner **un facteur 81 millions**. C'est énorme, et c'est le seul argument honnête du genre.

Maintenant regarde une ligne au lieu d'une colonne. Sur la ligne des huit caractères, le choix de stockage vaut **27,7 millions**. Ta longueur et le choix du serveur pèsent le même ordre de grandeur — sauf que l'un est ton travail et l'autre non.

À leur crédit, les auteurs du tableau le plus repris annoncent leurs hypothèses. Ils supposent que ton mot de passe est déjà entre les mains de quelqu'un sous forme de hachage, que l'attaque se fait hors ligne, que le mot de passe est réellement aléatoire, et qu'il n'y a pas d'authentification à deux facteurs.

Ces quatre conditions doivent être **toutes** réunies pour que le nombre veuille dire quelque chose. Et il en manque une cinquième, que personne n'écrit.

## La cinquième condition, celle que personne n'écrit

Le tableau calcule le temps nécessaire pour craquer **ton** mot de passe. Il suppose donc que quelqu'un s'attaque à toi en particulier.

Ce n'est pas ce qui se passe. Quand une base de dix millions de hachages fuite, personne ne s'assoit devant ta ligne. On lance une attaque par dictionnaire et par règles sur le lot entier, on récolte les cinq à dix pour cent qui tombent en quelques heures — les prénoms, les dates, les motifs de clavier, les variantes de fuites précédentes — et **on passe à la base suivante**.

L'attaquant n'est pas un adversaire, c'est une économie. Il ne cherche pas à te craquer, il cherche le meilleur rendement par euro de calcul. Ton mot de passe aléatoire de douze caractères n'est pas « incassable » : il est **non rentable**, ce qui est un tout autre concept et un bien meilleur objectif.

Et c'est pour ça que la vraie question n'est pas la robustesse. C'est celle-ci : **par quel chemin les comptes se perdent-ils réellement ?**

## Le vrai chemin : 14 000 comptes, 6,9 millions de victimes

Octobre 2023. Les données de **6,9 millions de comptes 23andMe** se retrouvent en vente — noms, photos, année de naissance, localisation, origines ethniques, données génétiques. Près de la moitié des quatorze millions de clients de l'entreprise.

Le détail qui devrait figurer dans tous les manuels : **23andMe n'a pas été piratée.** L'entreprise a déclaré n'avoir trouvé aucune preuve d'un incident de sécurité sur ses systèmes, et personne ne l'a contredite depuis.

Ce qui s'est passé, c'est du *credential stuffing* : les attaquants ont rejoué des couples identifiant/mot de passe volés **ailleurs**, sur d'autres services, lors d'autres fuites. [Environ 14 000 comptes se sont ouverts](https://www.hipaajournal.com/6-9-million-23andme-users-affected-by-data-breach/) — soit 0,1 % de la base. Puis, depuis ces 14 000 comptes, la fonctionnalité *DNA Relatives* a donné accès aux données de 5,5 millions d'utilisateurs, et l'arbre généalogique à 1,4 million de plus.

Fais le rapport. **14 000 comptes ouverts ont produit 6,9 millions de victimes : un facteur 493.**

Et refais le compte en temps de calcul : **zéro.** Aucun hachage n'a été cassé. Aucune carte graphique n'a chauffé. Aucune des quatre conditions du tableau n'était réunie. Les mots de passe étaient déjà connus, et il a suffi de les retaper au bon endroit.

## Les chiffres qui disent où est le risque

Le rapport annuel de Verizon sur les compromissions de données donne l'échelle du phénomène, et elle est difficile à ignorer.

Les identifiants compromis constituent le **vecteur d'accès initial de 22 %** des compromissions analysées en 2025. Et sur le trafic d'authentification lui-même, [la médiane quotidienne du credential stuffing atteint **19 % de toutes les tentatives de connexion**](https://www.verizon.com/business/resources/articles/credential-stuffing-attacks-2025-dbir-research/) — 12 % chez les petites structures, 25 % chez les grandes, avec un pic mesuré à **44 % sur une seule journée**.

Une connexion sur cinq, en médiane, est quelqu'un qui essaie un mot de passe volé ailleurs.

Le taux de succès typique d'une telle campagne est estimé autour de **2 %**. Ça paraît dérisoire jusqu'à ce qu'on le multiplie : un million de couples rejoués donnent **20 000 comptes pris**. Cent millions en donnent deux millions. C'est une industrie à faible marge et à très gros volume, exactement comme le spam.

Et voici le chiffre qui décide de tout, tiré par Verizon de l'analyse de données volées par des logiciels voleurs d'identifiants : **seuls 49 % des mots de passe d'un utilisateur, à travers ses différents services, sont distincts.** La médiane. Autrement dit, plus d'un mot de passe sur deux est un doublon de quelque chose que tu utilises ailleurs.

C'est là que se joue ta sécurité. Pas dans le nombre de caractères spéciaux.

Et pas non plus dans la couche réseau, tant qu'on y est : [un VPN ne change strictement rien](https://simoncourtois.com/journal/vpn-explique-5-minutes/) à une attaque par rejeu d'identifiants. Le mot de passe est déjà connu, la connexion se fait normalement, et elle est chiffrée comme les autres. C'est exactement le même écart que celui que je décrivais [entre ce qui rassure et ce qui protège du pistage](https://simoncourtois.com/journal/ce-qui-protege-vraiment-du-pistage/) : les mesures qu'on achète et les mesures qui marchent ne sont pas les mêmes.

## Longueur contre complexité : le calcul que personne ne fait

Puisqu'on y est, réglons une bonne fois la question des majuscules et des symboles. L'entropie se calcule : longueur × log₂(taille de l'alphabet).

| Mot de passe | Entropie |
|---|---|
| 4 mots tirés au sort d'une liste de 7 776 | 51,7 bits |
| **8 caractères, tous types confondus** | **52,6 bits** |
| **12 minuscules seulement** | **56,4 bits** |
| 6 mots tirés au sort | 77,5 bits |
| 12 caractères, tous types confondus | 78,8 bits |

Lis les deux lignes en gras. **Douze lettres minuscules sont plus robustes que huit caractères avec majuscules, chiffres et ponctuation.** 56,4 bits contre 52,6.

La règle « au moins une majuscule, un chiffre et un symbole » multiplie l'alphabet par 3,7. Ajouter quatre caractères le multiplie par 95⁴, soit **81 millions**. Ce n'est pas comparable, et les politiques de mot de passe qui imposent la complexité sans imposer la longueur optimisent la mauvaise variable — tout en produisant des mots de passe que personne ne retient, donc que tout le monde réutilise.

## Points faibles : quatre objections, dont une qui détruit mon accroche

**Mon calcul de force brute est une fiction, et c'est moi qui l'ai posé en ouverture.** Personne n'attaque un lot de hachages en force brute exhaustive. On attaque par dictionnaire, par règles de mutation, par listes de fuites antérieures — et contre un mot de passe humain, ces méthodes réduisent l'espace de recherche de plusieurs ordres de grandeur. Mes 12 100 ans ne valent que pour un mot de passe **réellement aléatoire**. Pour `ryad-900lp`, la bonne réponse est « quelques dizaine de secondes », quelle que soit la fonction de hachage.

**Mon chiffre de 8 700 hachages par seconde en bcrypt est dérivé, pas mesuré.** Je le déduis d'un total annoncé pour seize cartes. C'est un ordre de grandeur défendable, pas un banc d'essai, et le facteur de coût réel varie beaucoup d'un site à l'autre — c'est d'ailleurs tout le sujet de l'article.

**Le taux de 2 % de succès en credential stuffing vient d'estimations anciennes.** Les défenses ont progressé : limitation de débit, détection comportementale, blocage des mots de passe déjà connus comme fuités. Le taux réel aujourd'hui est probablement plus bas, et je n'ai pas de mesure récente à opposer.

**Et « l'unicité prime sur la complexité » peut se lire comme « court, c'est bon ».** C'est faux. Si le site stocke en MD5 — et beaucoup le font encore — la longueur redevient décisive. Les deux conseils ne s'annulent pas : l'unicité te protège du chemin par lequel tu vas réellement te faire avoir, la longueur te protège du chemin par lequel tu pourrais te faire avoir.

## Le vrai arbitrage

Le tableau te demande : combien de temps pour craquer **mon** mot de passe. C'est une question dont la réponse dépend à 99,99 % d'une décision prise par quelqu'un d'autre, dans une entreprise que tu ne choisis pas toujours, et que tu ne pourras jamais vérifier.

Remplace-la par celle-ci : **combien de mes comptes tombent le jour où un seul d'entre eux fuite ?**

Cette question-là ne dépend que de toi. Et la réponse actuelle, pour l'utilisateur médian, est « à peu près la moitié ».

D'où trois choses, dans cet ordre, et le classement compte.

**Un mot de passe par compte, généré, jamais réutilisé.** C'est la seule mesure qui rend le credential stuffing structurellement impossible contre toi — pas plus difficile : impossible, parce qu'il n'y a rien à rejouer. Et comme personne ne mémorise cent chaînes distinctes, ça implique un gestionnaire de mots de passe. Ce n'est pas un confort, c'est la condition de l'unicité.

**L'authentification à deux facteurs partout où elle existe.** À 2 % de succès, une campagne de rejeu vit sur une marge minuscule ; un second facteur ne la rend pas seulement plus dure, il la rend non rentable. Tu ne te protèges pas d'un adversaire, tu sors de son modèle économique.

**De la longueur, pas des symboles.** Douze caractères minimum, et si tu dois en retenir un par cœur, prends des mots tirés au sort plutôt qu'un `P@ssw0rd!` que tu réutiliseras parce qu'il est déjà pénible à taper une fois.

Et surtout, arrête de regarder le tableau. C'est le même réflexe que celui que je recommandais [pour les licences de modèles](https://simoncourtois.com/journal/open-weight-ou-open-source/) : ne lis pas le chiffre affiché, lis les hypothèses qui le rendent vrai. Ici elles sont au nombre de cinq, elles ne sont presque jamais toutes réunies, et le tableau te fait travailler la seule variable qui ne décide de rien.

Les 6,9 millions de personnes de 23andMe n'avaient pas de mot de passe faible. Elles en avaient un qu'elles avaient déjà utilisé ailleurs.
