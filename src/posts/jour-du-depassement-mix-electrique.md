---
title: "Jour du dépassement : pourquoi la France passe avant la Pologne"
date: 2026-08-14
category: SCIENCE
excerpt: "Le Jour du Dépassement 2026 tombe six jours plus tard qu'en 2025, et c'est pourtant la pire année jamais mesurée. J'ai repris les données pays par pays pour tester une intuition : est-ce que le mix électrique décide de la date ? Réponse chiffrée — non, et l'écart avec ce qu'on croit est plus grand que je ne l'imaginais."
---

Le Jour du Dépassement de la Terre 2026 est tombé le **30 juillet**. L'an dernier, les journaux annonçaient le 24 juillet. Six jours de gagnés, donc. Sauf que non : selon [Global Footprint Network](https://overshoot.footprintnetwork.org/2026-calculation/), ces six jours viennent d'une révision à la hausse de la capacité d'absorption des océans. À méthode constante, la dégradation réelle a avancé la date de deux jours.

C'est ce genre de piège qui m'a donné envie de mettre les mains dedans. J'ai repris les dates des 74 pays publiées pour 2026, je les ai croisées avec les mix électriques et avec la population mondiale depuis 2000, et j'ai fait tourner les calculs moi-même. Une intuition en est sortie en miettes : **celle que le mix énergétique d'un pays décide de sa date de dépassement.**

## Le calcul que tu peux refaire en une ligne

La date de dépassement d'un pays, c'est le jour où l'humanité aurait épuisé la biocapacité annuelle de la planète si tout le monde vivait comme lui. La conversion en « nombre de Terres » est une simple division :

```
Terres nécessaires = 365 / (numéro du jour dans l'année)
```

La France tombe le 24 avril, soit le 114ᵉ jour : 365 / 114 = **3,20 Terres**. Le Qatar tombe le 4 février, 35ᵉ jour : 10,4 Terres. Le Honduras, le 27 novembre : 1,10 Terre.

Ça a l'air anecdotique, mais c'est utile : ça te permet de vérifier n'importe quelle date annoncée sans dépendre du chiffre que le communiqué a bien voulu mettre en avant. J'ai fait tourner la formule sur les 74 pays de l'édition 2026. Aucun écart avec les valeurs publiées.

## L'Europe, dans un ordre qui ne ressemble pas à celui qu'on attend

Voilà le classement européen, avec la part d'électricité décarbonée de chaque pays en face.

| Pays | Dépassement 2026 | Terres | Électricité décarbonée |
|---|---|---|---|
| Luxembourg | 17 février | 7,60 | — |
| Danemark | 20 mars | 4,62 | 80,2 % |
| Finlande | 1er avril | 4,01 | 82,6 % |
| Autriche | 2 avril | 3,97 | 84,5 % |
| Suède | 4 avril | 3,88 | 100,0 % |
| Belgique | 11 avril | 3,61 | 71,1 % |
| Irlande | 14 avril | 3,51 | 32,8 % |
| **France** | **24 avril** | **3,20** | **92,0 %** |
| Pologne | 28 avril | 3,09 | 21,4 % |
| Italie | 3 mai | 2,97 | 42,5 % |
| Allemagne | 10 mai | 2,81 | 55,9 % |
| Suisse | 11 mai | 2,79 | 95,4 % |
| Royaume-Uni | 22 mai | 2,57 | 66,0 % |
| Espagne | 4 juin | 2,35 | 60,8 % |

Lis les deux dernières colonnes ensemble. La Suède produit une électricité décarbonée à 100 % et dépasse le 4 avril. Le Royaume-Uni, à 66 %, tient jusqu'au 22 mai. Le Danemark, champion mondial de l'éolien, dépasse **cinq semaines et demie avant la Pologne**, dont l'électricité est encore au charbon aux quatre cinquièmes.

Ce n'est pas une anomalie isolée. C'est le motif dominant du tableau.

## J'ai calculé la corrélation, elle va dans le mauvais sens

Une lecture à l'œil ne prouve rien, alors j'ai calculé le coefficient de corrélation entre la part d'électricité décarbonée et le jour de dépassement sur les treize pays où j'ai les deux données.

**r = −0,30, soit r² = 0,09.**

Deux choses à en tirer. D'abord, le mix électrique explique **9 % de la variance** des dates : autant dire rien. Ensuite, et c'est le plus gênant, le signe est négatif — une électricité plus propre est associée à un dépassement légèrement **plus précoce**.

L'explication n'a rien de mystérieux une fois posée. L'empreinte écologique compte tout : l'alimentation, les surfaces cultivées, la pêche, le bois, le bâti, et surtout le carbone total — chauffage, transport, industrie, et l'empreinte incorporée dans tout ce que tu importes. L'électricité n'est qu'une tranche de la facture. Un pays peut produire ses électrons proprement et rester un très gros consommateur de tout le reste.

**Décarboner la production électrique ne déplace pas le curseur de la consommation. Ce sont deux problèmes différents, et le second est le plus gros.**

C'est la même erreur d'échelle que celle que je décrivais à propos [des stacks web sobres](https://simoncourtois.com/journal/mes-stacks-web-preferees/) : optimiser le poids d'une page ne dit rien du nombre de pages servies. Nettoyer le dénominateur ne remplace jamais de regarder le numérateur.

## Ce qui prédit vraiment la date

J'ai refait l'exercice avec le PIB par habitant en parité de pouvoir d'achat ([FMI, 2025](https://www.worldometers.info/fr/pib/pib-par-habitant/?region=europe&year=2025&metric=ppp)), sur dix-neuf pays européens.

**r = −0,69, soit r² = 0,47.**

Le revenu par habitant explique donc à lui seul près de la moitié de la variance des dates, avec un signe sans ambiguïté : plus un pays est riche, plus il dépasse tôt. Et le résultat tient quand on retire les cas suspects — sans le Luxembourg, r tombe à −0,56 ; sans l'Irlande, dont le PIB est gonflé par la domiciliation des multinationales, il monte à −0,75 ; sans les deux, −0,63.

| Ce qu'on teste | r | Variance expliquée |
|---|---|---|
| Part d'électricité décarbonée | −0,30 | 9 % |
| PIB par habitant (log, PPA) | −0,69 | 47 % |

Un facteur cinq d'écart sur le pouvoir explicatif. **La date de dépassement d'un pays mesure d'abord son niveau de consommation, pas la propreté de ses centrales.**

## Le monde : ce que la population explique, et ce qu'elle n'explique pas

Passons à l'échelle mondiale, sur la série recalculée de l'édition 2026 des comptes.

En 2000, le dépassement tombait le 23 septembre — 267ᵉ jour, soit 1,37 Terre. En 2026, le 30 juillet — 211ᵉ jour, soit 1,73 Terre. **Cinquante-six jours de perdus en vingt-six ans, et une demande en hausse de 26,5 %.**

Sur la même période, la population mondiale est passée de 6,14 à 8,30 milliards d'habitants selon les projections des Nations unies : **+35,1 %**.

Compare les deux nombres. La demande totale a augmenté de 26,5 %, la population de 35,1 %. À biocapacité constante, ça implique que **l'empreinte moyenne par habitant a baissé d'environ 6 %** depuis 2000.

J'ai poussé le calcul jusqu'au contrefactuel. Si l'empreinte par habitant était restée figée à son niveau de 2000 et que seule la population avait bougé, le dépassement 2026 tomberait le **16 juillet** — quatorze jours plus tôt que la réalité.

Autrement dit : **la croissance démographique explique plus que la totalité du déplacement de la date. La légère baisse de l'empreinte individuelle a freiné le mouvement, sans jamais l'inverser.** Ce n'est ni un motif de soulagement ni un argument malthusien : c'est une décomposition arithmétique, et elle dit surtout que les gains d'efficacité par personne ont été intégralement mangés par le nombre de personnes.

## L'interpolation, et pourquoi je n'y crois qu'à moitié

Reste la tentation de prolonger la courbe. Une régression linéaire sur 2000-2026 donne **−1,82 jour par an**, ce qui projette le dépassement au 21 juillet en 2030 et au 14 juin en 2050.

Sauf que la même régression sur 2015-2026 seulement donne **−1,45 jour par an**. Et si tu regardes les cinq dernières valeurs — 2 août, 2 août, 1er août, 1er août, 30 juillet — la série est quasiment plate. Trois fenêtres, trois pentes, trois avenirs différents.

C'est là que ça devient intéressant, et c'est valable pour n'importe quel modèle, statistique ou génératif. Demande à une IA d'interpoler cette série : elle te sortira une droite propre, avec un intervalle de confiance rassurant. Le problème n'est pas sa méthode, il est dans les données qu'on lui donne.

Trois raisons de s'en méfier, dans l'ordre de gravité :

- **Les données récentes sont déjà de l'extrapolation.** Les comptes ne sont complets que jusqu'à 2023. 2024, 2025 et 2026 sont du *nowcasting*, construit à partir de données partielles de l'ONU, du Global Carbon Project et de l'AIE. Interpoler sur des points eux-mêmes interpolés, c'est empiler deux couches de modèle et n'en afficher aucune.
- **Le passé est réécrit chaque année.** Global Footprint Network recalcule l'intégralité de la série depuis 1961 à chaque édition. L'organisation [le dit elle-même](https://overshoot.footprintnetwork.org/why-past-earth-overshoot-day-dates-keep-changing/) : quelques points de pourcentage suffisent à décaler la date de plusieurs jours, et une comparaison honnête ne peut se faire qu'à l'intérieur d'une même édition.
- **C'est exactement l'erreur que tout le monde a commise cette année.** Les « six jours de mieux » de 2026 comparent l'édition 2026 à l'édition 2025. Dans l'édition 2026, 2025 tombe le 1er août — et 2026, deux jours plus tôt.

**Une interpolation ne peut pas être plus solide que le pire maillon de sa chaîne de données, et rien dans sa sortie ne t'indique où est ce maillon.** C'est le même réflexe que je recommandais en parlant de [ce qu'un VPN protège et ne protège pas](https://simoncourtois.com/journal/vpn-explique-5-minutes/) : la question utile n'est pas ce que l'outil affiche, c'est ce qu'il n'a pas vu.

## Points faibles : ce que mon propre calcul ne vaut pas

Je serais malhonnête de m'arrêter sur mes corrélations sans les attaquer.

**Mes années ne coïncident pas.** Les dates de dépassement 2026 reposent sur la consommation 2024 ; ma colonne « électricité décarbonée » est une photo de 2020, la dernière série homogène que j'ai trouvée pour ces quatorze pays ; le PIB est celui de 2025. Sur cinq ans, plusieurs de ces mix ont bougé — la France est passée à 95,2 % de bas carbone en 2025. Ça ne renverse pas le résultat, parce que le classement relatif des pays a peu changé, mais ça interdit d'en tirer trois décimales.

**Mes échantillons sont minuscules.** Treize pays pour le mix, dix-neuf pour le PIB. À cette taille, un r² de 0,09 n'est pas distinguable de zéro, et même le 0,47 du PIB reste un ordre de grandeur, pas une mesure.

**Une corrélation ne dit rien de la cause.** Le revenu par habitant est corrélé à peu près à tout : la surface de logement, les kilomètres parcourus, la part de viande dans l'assiette, le volume d'importations. Dire « c'est le PIB qui explique » revient surtout à dire « c'est la consommation », ce qui est un peu tautologique. Le résultat solide de cet article est négatif, pas positif : **le mix électrique n'explique pas la date.** Ce qui l'explique reste à démêler.

**Et l'indicateur lui-même est contesté.** L'empreinte écologique agrège des choses hétérogènes — hectares de forêt, tonnes de poisson, carbone atmosphérique — dans une unité unique, l'hectare global. Cette agrégation est un choix méthodologique défendable, pas une mesure physique. Des chercheurs lui reprochent depuis des années d'être dominée par sa composante carbone au point de masquer le reste.

## Le vrai arbitrage

Je suis parti chercher un lien entre énergie propre et dépassement écologique. Il n'y en a pas, ou pas dans le sens espéré.

Ce que les chiffres disent tient en trois lignes. Au niveau d'un pays, la date de dépassement suit le niveau de vie, pas le mix électrique — c'est pour ça que la France, avec l'une des électricités les plus décarbonées d'Europe, dépasse quatre jours avant la Pologne. Au niveau mondial, le déplacement de la date depuis 2000 s'explique intégralement par la démographie, l'empreinte individuelle ayant très légèrement reculé. Et la date elle-même est un produit de modèle, révisé chaque année, qu'il faut manipuler avec des gants.

Ça ne rend pas la décarbonation électrique inutile : elle reste indispensable, et elle agit sur un indicateur — les émissions — qui n'est pas celui-ci. Ça veut simplement dire qu'elle ne rachète rien. **Un pays peut atteindre 100 % d'électricité propre et continuer de consommer comme quatre planètes. La Suède le fait déjà.**

Alors la prochaine fois qu'un communiqué t'annonce des jours gagnés, fais le seul geste qui vaille : va chercher l'édition des comptes. Si elle a changé, tu ne compares pas deux années, tu compares deux modèles — et je préfère [aller lire les sources primaires moi-même](https://simoncourtois.com/journal/pourquoi-agregateur-actualite-scientifique/) plutôt que de faire confiance au titre.
