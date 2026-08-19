---
title: "Ton ordinateur ne meurt pas de vieillesse, il meurt du logiciel"
date: 2026-08-18
category: LOGICIEL LIBRE
excerpt: "J'ai terminé mes deux derniers articles sur la même phrase : l'écologie du numérique se joue dans la durée de vie du matériel. Puis je suis passé à autre chose. Voici le calcul, et la conclusion qui dérange : ce qui décide de la mort de ta machine n'est presque jamais son état physique."
---

Un ordinateur portable moyen émet **193 kgCO2e sur cinq ans, dont 182 pour sa seule fabrication** — 95 % du total, [selon l'étude ADEME/ARCEP mise à jour en 2025](https://impactco2.fr/outils/numerique/ordinateurportable). Tout ce que tu feras avec pendant cinq ans pèse 10 kg. L'avoir acheté en pèse 182.

J'ai fini [l'article sur la consommation de l'IA locale](https://simoncourtois.com/journal/ce-que-consomme-vraiment-une-ia-locale/) en écrivant que l'écologie du numérique se joue « dans la durée de vie de ton matériel, pas dans le nombre de wattheures de ta prochaine question ». Puis [celui sur le jour du dépassement](https://simoncourtois.com/journal/jour-du-depassement-mix-electrique/) en montrant que l'efficacité ne rachète jamais le volume. Deux fois la même conclusion, deux fois sans la traiter. Voilà l'article que je dois aux deux.

## Le seul chiffre qui compte : l'amortissement

La fabrication est un coût fixe. Tu le paies une fois, à l'achat, et tu l'étales sur la durée pendant laquelle tu gardes la machine. Donc la question n'est pas « combien émet mon ordinateur » mais **« sur combien d'années j'étale les 182 kg »**.

| Tu gardes ta machine | Fabrication amortie | Écart vs 5 ans |
|---|---|---|
| 3 ans | 60,7 kgCO2e/an | +24,3 |
| 4 ans | 45,5 kgCO2e/an | +9,1 |
| 5 ans | 36,4 kgCO2e/an | référence |
| 6 ans | 30,3 kgCO2e/an | −6,1 |
| 8 ans | 22,8 kgCO2e/an | −13,6 |
| 10 ans | 18,2 kgCO2e/an | −18,2 |

**Passer de cinq à huit ans divise l'empreinte annuelle de ton matériel par un tiers.** Passer à dix ans la divise par deux. Aucun geste logiciel, aucune optimisation, aucun changement d'usage ne produit un effet de cet ordre.

Pour mesurer à quel point : dans l'article sur l'IA locale, j'avais calculé qu'un usage intensif de modèles en local — cent requêtes par jour, toute l'année — pèse 1,35 kgCO2e par an en France. **Garder ta machine trois ans de plus économise dix fois ce budget annuel entier.** On passe des années à discuter du wattheure de l'inférence pendant que le vrai levier est la date à laquelle on remplace la boîte.

Autre façon de le voir, sur quinze ans de vie numérique : renouveler tous les trois ans coûte 965 kgCO2e, tous les cinq ans 579 kg, tous les huit ans 362 kg. Le même service rendu, pour presque le tiers.

## Ce qui décide de la date de mort

Voilà le nœud. Un portable de 2016 fonctionne encore. Son écran affiche, son clavier tape, son processeur fait tourner un navigateur. Ce qui l'a tué, c'est une décision prise ailleurs.

Le 14 octobre 2025, [Microsoft a arrêté le support de Windows 10](https://support.microsoft.com/fr-FR/Windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025). Le successeur exige un module TPM 2.0 et un processeur récent — des conditions que des machines parfaitement fonctionnelles ne remplissent pas. Le cabinet Canalys avait estimé que [240 millions de PC pourraient devenir des déchets](https://www.clubic.com/actualite-585163-fin-de-windows-10-vers-une-explosion-des-dechets-electroniques.html) à cette occasion.

Microsoft a lâché du lest : le programme de mises à jour de sécurité étendues court désormais [jusqu'au 12 octobre 2027](https://www.microsoft.com/fr-fr/windows/extended-security-updates), gratuitement pour qui reste connecté à un compte Microsoft, ou 30 dollars une fois pour garder un compte local. C'est un sursis de deux ans, pas une solution — et remarque au passage ce qu'on te vend : le droit de continuer à recevoir des correctifs sur une machine que tu possèdes.

Le mouvement se voit dans les statistiques. En juillet 2026, [Windows est passé sous 60 % de parts de marché sur PC pour la première fois, et Linux a atteint 4,39 %](https://windows.developpez.com/actu/384938/Windows-passe-sous-60-pourcent-de-parts-de-marche-mondiale-selon-Statcounter-qui-indique-que-Linux-a-atteint-4-39-pourcent-l-une-de-ses-meilleures-performances-dans-un-contexte-de-rejet-massif-de-Windows-11/) selon Statcounter. Ce n'est pas une vague de conversions idéologiques. C'est un effet de bord d'une décision commerciale.

## Ce que l'Europe a changé le 20 juin 2025

Sur les téléphones, le levier n'est plus seulement individuel. Depuis le 20 juin 2025, [un règlement européen impose des obligations chiffrées](https://www.entreprises.gouv.fr/la-dge/actualites/duree-de-vie-des-smartphones-et-tablettes-les-nouvelles-regles-en-vigueur) à tout smartphone ou tablette vendu dans l'Union.

- **Cinq ans minimum de mises à jour système** après la fin de commercialisation.
- **Sept ans de disponibilité des pièces détachées**, livrées en 5 ou 10 jours ouvrés selon l'âge de l'appareil.
- **Accès gratuit aux informations de réparation.**
- **Batterie tenant 800 cycles de charge en conservant 80 % de son autonomie**, plus une option d'arrêt automatique de la charge à 80 %.
- Une **étiquette énergie** affichant classe énergétique, endurance de batterie et résistance aux chutes.

C'est la première fois qu'une durée de vie logicielle devient une obligation légale plutôt qu'une promesse marketing. Et ça dit quelque chose de l'analyse : le législateur a considéré que **le facteur limitant était le support logiciel et la disponibilité des pièces, pas la robustesse du matériel**. Il a raison, et c'est exactement le même diagnostic pour les ordinateurs.

## L'indice de durabilité, ou la déception française

Puisque la France a créé un indice de durabilité en 2025 pour remplacer l'indice de réparabilité — note sur 10, croisant réparabilité, fiabilité et évolutivité logicielle — on pourrait croire le sujet couvert. Il ne l'est pas.

[L'indice est entré en vigueur au 1er janvier 2025 pour les téléviseurs](https://www.inc-conso.fr/content/lindice-de-durabilite-des-appareils-evalues-entre-reparabilite-fiabilite-et-amelioration), puis en avril pour les lave-linge. **Les smartphones en ont été retirés** après un avis défavorable de la Commission européenne, qui y voyait un doublon avec son propre règlement. Et les ordinateurs portables ne sont toujours pas dans le périmètre.

Autrement dit : sur les deux appareils qui pèsent le plus lourd dans ton empreinte numérique, l'étiquette française ne t'aide pas. Pour le téléphone, c'est le règlement européen qui s'applique. Pour l'ordinateur, tu es seul.

## Le levier logiciel : cinq ans gratuits, quinze au maximum

D'où l'intérêt de regarder combien de temps un système te laisse tranquille. Une version LTS d'Ubuntu offre [cinq ans de maintenance gratuite, sans limite de machines, extensibles à quinze ans](https://doc.ubuntu-fr.org/lts) via un service payant. Cinq ans gratuits par version, et rien ne t'empêche d'enchaîner sur la LTS suivante sur le même matériel.

Compare avec ce que tu viens de lire : cinq ans, c'est la durée que le règlement européen impose désormais aux fabricants de téléphones comme un plancher. Le monde du libre le fait par défaut depuis des années, sans y avoir été contraint.

C'est aussi pour ça que le sujet rejoint [mon plaidoyer pour Linux](https://simoncourtois.com/journal/pourquoi-preferer-linux-a-windows/) sans s'y réduire. L'argument n'est plus la souveraineté ni la publicité dans le menu Démarrer : c'est que **la fin de vie de ta machine est décidée par celui qui décide de la fin du support**. Choisir un système, c'est choisir qui tient ce calendrier.

Et quand la machine est vraiment finie, le reconditionné reste très loin devant le neuf : l'étude ADEME sur les smartphones chiffre le gain entre [77 % et 91 % selon l'indicateur, et environ 87 % sur le climat](https://labo.societenumerique.gouv.fr/fr/articles/impact-environnemental-des-smartphones-quels-b%C3%A9n%C3%A9fices-du-reconditionnement-par-rapport-au-neuf/). Même en remplaçant écran et batterie, l'impact reste deux à quatre fois inférieur à une production neuve.

## Points faibles : ce que ce calcul ne dit pas

Quatre objections, et la première est sérieuse.

**Mon amortissement est linéaire, la réalité ne l'est pas.** Diviser 182 kg par le nombre d'années suppose que la machine rend le même service la dernière année que la première. C'est faux : elle ralentit, sa batterie s'use, elle finit par ne plus faire tourner ce dont tu as besoin. Le calcul donne la bonne direction et le bon ordre de grandeur, pas une valeur exacte.

**Le chiffre de 240 millions de PC est une projection, pas une mesure.** Il datait de 2023 et supposait que l'incompatibilité matérielle se traduirait mécaniquement par une mise au rebut. Le sursis de Microsoft jusqu'en 2027 et la migration d'une partie du parc vers Linux ont déjà invalidé une partie de l'hypothèse. Je le cite parce qu'il a structuré le débat, pas parce qu'il s'est vérifié.

**L'étude ADEME sur le reconditionné date de 2022, mise à jour fin 2023, et porte sur les smartphones.** L'extrapoler aux ordinateurs est raisonnable mais reste une extrapolation. Et elle mesure un gain *par an d'usage* : un appareil reconditionné jeté au bout d'un an n'économise presque rien. Le bénéfice vient de la durée, encore.

**L'effet rebond existe.** Un matériel moins cher ou plus vertueux peut pousser à en acheter davantage — un deuxième portable « pour le salon », un téléphone reconditionné en plus du neuf. C'est le mécanisme exact que je décrivais pour le jour du dépassement : les gains d'efficacité par unité se font manger par le nombre d'unités. Rien ne garantit qu'allonger la durée de vie réduise ton parc si tu élargis ton parc en parallèle.

## Le vrai arbitrage

Je n'ai pas d'exploit à te vendre. Le résultat de ce calcul est presque vexant de simplicité : **la décision écologique la plus lourde que tu prennes en informatique, c'est la date à laquelle tu remplaces ta machine, et tout le reste est du bruit devant.**

Trois conséquences concrètes, dans l'ordre où elles rapportent :

1. **Ne remplace pas une machine qui fonctionne.** Un SSD et de la mémoire coûtent une fraction d'un portable neuf et repoussent l'échéance de plusieurs années. Le facteur limitant est presque toujours le stockage et la RAM, pas le processeur.
2. **Quand le système te lâche avant le matériel, change de système, pas de matériel.** C'est précisément le cas de figure d'octobre 2025, et c'est ce que 4,39 % du parc mondial est en train de faire.
3. **Si tu dois vraiment acheter, achète reconditionné et garde-le longtemps.** Les deux conditions comptent ; la seconde plus que la première.

Et si tu veux une seule question à te poser devant une machine qui t'agace : est-ce qu'elle est vraiment usée, ou est-ce qu'on a simplement décidé pour toi qu'elle l'était ?
