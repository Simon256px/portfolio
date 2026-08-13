---
title: "IA locale : ce qu'elle consomme vraiment, chiffres en main"
date: 2026-08-13
category: ÉCO WEB
excerpt: "Dans mon tuto sur la stack IA locale, j'ai écrit qu'un GPU consomme plusieurs centaines de watts. Puis je suis passé à autre chose sans jamais vérifier. Voici le calcul complet : l'IA locale consomme jusqu'à huit fois plus qu'une requête cloud, et ça ne change presque rien au bilan carbone. Explication."
---

Une requête texte médiane sur Gemini consomme **0,24 wattheure**. La même question posée à un Qwen 3 de 8 milliards de paramètres, sur une RTX 4070 Ti posée sous ton bureau, en consomme **1,88**. Presque huit fois plus.

Il y a quatre jours, j'ai publié [un tuto pour monter sa stack IA locale](https://simoncourtois.com/journal/tuto-stack-ia-locale/) en concédant qu'un GPU « consomme plusieurs centaines de watts ». C'était vague, et je l'ai laissé filer. Trois semaines plus tôt, j'écrivais un article entier sur [les stacks web sobres](https://simoncourtois.com/journal/mes-stacks-web-preferees/) et la mesure de l'empreinte d'une page. Les deux articles se regardaient sans jamais se parler. Voilà le calcul que j'aurais dû faire tout de suite — et sa conclusion, qui ne va pas dans le sens que j'attendais.

## Ce que consomme une requête, des deux côtés

Commençons par les seuls chiffres publiés qui viennent d'une mesure et pas d'une estimation de comptoir.

Côté cloud, Google a publié le 21 août 2025 [sa méthodologie complète](https://blog.google/intl/fr-fr/nouveautes-produits/dans-le-cloud/quelle-consommation-energetique-pour-lia-de-google-nous-avons-fait-le-calcul/) : 0,24 Wh, 0,03 gCO2e et 0,26 mL d'eau pour un prompt texte médian sur Gemini. Le chiffre inclut le refroidissement, la distribution électrique, le CPU, la RAM et surtout les machines au repos maintenues pour absorber les pics. En ne comptant que les puces actives, on tomberait à 0,10 Wh — Google reconnaît que ce serait mentir par omission.

Côté local, un développeur a branché un wattmètre sur une RTX 4070 Ti et [publié ses relevés modèle par modèle](https://brianpeiris.github.io/how-much-energy-does-local-ai-use/). Puissance appelée multipliée par durée de génération, sans arrondi flatteur.

| Requête | Énergie |
|---|---|
| Gemini, prompt texte médian (Google) | 0,24 Wh |
| Granite 3.3:2b, local | 0,53 Wh |
| Gemma 3n:e4b, local | 1,33 Wh |
| Qwen 3:8b, local | 1,88 Wh |
| GLM-4.7 en mode raisonnement, local | 10,63 Wh |

**Le rapport va de 2 à 8 pour un modèle conversationnel, et dépasse 40 dès qu'on lance un modèle de raisonnement.** Ce n'est pas un détail de mesure. C'est un ordre de grandeur.

## Pourquoi ton GPU perd contre un datacenter

Ça n'a rien d'un procès du matériel grand public. C'est de l'arithmétique d'occupation.

Un serveur d'inférence traite des dizaines de requêtes simultanément sur la même passe de calcul : les poids du modèle ne sont chargés qu'une fois, la mémoire est saturée en permanence, l'accélérateur ne fait jamais tourner ses ventilateurs pour rien. Les mesures du benchmark InferenceMAX, [reprises et converties en Wh par requête ici](https://muxup.com/2026q1/per-query-energy-consumption-of-llms), donnent 0,11 à 0,14 Wh pour un modèle de 120 milliards de paramètres sur du B200. Cent vingt milliards de paramètres, pour moitié moins d'énergie que ton 8B local.

Ta machine, elle, fait l'inverse : elle charge le modèle, répond à une question, et attend. Pendant l'attente, le GPU garde ses états mémoire et sa base de consommation. Pendant la génération, il tourne pour un seul utilisateur. Le facteur d'utilisation est catastrophique, et c'est structurel — tu ne le corrigeras pas avec un meilleur quantifieur.

Note quand même l'honnêteté de la comparaison : les chiffres InferenceMAX sortent de conditions de laboratoire, et l'auteur estime lui-même qu'un déploiement commercial réel est sans doute **50 % moins efficace** que ces relevés. L'écart reste, il est juste moins spectaculaire.

## Traduis-le en euros : quatorze balles par an

Prends l'hypothèse haute d'un usage vraiment intensif : cent requêtes par jour, tous les jours, sur le modèle le plus gourmand du tableau hors raisonnement.

1,88 Wh × 100 × 365 = **68,6 kWh par an**. Au tarif bleu réglementé du 1er août 2026, soit 0,2001 €/kWh TTC, ça fait **13,73 € d'électricité par an**.

Treize euros. Pour la même charge, la consommation cloud équivalente coûterait 1,75 € d'électricité — sauf que tu ne la paies pas en électricité, tu la paies en abonnement, autour de 20 € par mois.

**L'argument économique de l'IA locale n'est pas fragilisé par la consommation : il est confirmé par elle.** Le coût d'usage est une rounding error à côté du prix du matériel. Ce que mon tuto affirmait sans le prouver, ce calcul le prouve. Ce n'est simplement pas là que se joue la question écologique.

## Traduis-le en carbone : l'écart s'évapore

Là, ça devient contre-intuitif, et c'est tout l'intérêt de faire le calcul jusqu'au bout.

En 2025, la production électrique française a émis **19,6 gCO2eq/kWh en moyenne, avec 95,2 % de production bas carbone**, d'après [le bilan électrique de RTE](https://analysesetdonnees.rte-france.com/en/annual-review-2025/keyfindings). Seule la Norvège fait mieux en Europe.

Tes 68,6 kWh annuels pèsent donc **1,35 kgCO2e par an**.

Côté Google, 0,03 gCO2e par requête × 36 500 requêtes = **1,10 kgCO2e par an**.

| | Énergie / an | Carbone / an |
|---|---|---|
| IA locale, France | 68,6 kWh | 1,35 kg |
| Gemini, cloud | 8,8 kWh | 1,10 kg |

Un facteur huit sur l'énergie devient un facteur 1,2 sur le carbone. La raison est simple : le réseau français est environ six fois moins carboné que le mix électrique qui alimente les datacenters de Google. **Ton GPU consomme beaucoup plus, sur une électricité beaucoup plus propre, et les deux effets s'annulent presque exactement.**

Ce résultat n'est pas transposable. Un lecteur en Pologne ou en Allemagne aurait un bilan local nettement plus lourd. C'est un avantage de géographie, pas un avantage de technique — et il faut le dire comme tel plutôt que d'en faire un argument universel.

## L'eau : la seule colonne où le local gagne franchement

Un PC domestique ne consomme pas d'eau de refroidissement. Un datacenter, si.

Google annonce 0,26 mL par requête, soit environ **9,5 litres par an** pour notre usage type. Mistral, dans [son analyse de cycle de vie menée avec Carbone 4 et l'ADEME](https://mistral.ai/fr/news/our-contribution-to-a-global-environmental-standard-for-ai/), annonce 45 mL pour une réponse de 400 tokens — soit **1 642 litres par an**. Cent soixante-dix fois plus.

Un tel écart entre deux publications sérieuses ne se règle pas en choisissant celle qui arrange. Les périmètres ne sont pas les mêmes, les modèles non plus, les régions de datacenter non plus. Retiens la seule chose robuste : **l'eau est le poste où le local a un avantage net et non ambigu**, quelque part entre « appréciable » et « énorme ». Au passage, l'étude Mistral chiffre aussi l'entraînement de Large 2 : 20,4 ktCO2e et 281 000 m³ d'eau sur dix-huit mois. Ce coût-là, tu le portes que tu sois en local ou dans le cloud, puisque tu utilises des modèles entraînés par d'autres.

## Points faibles : ce que ce calcul ne dit pas

Trois trous, et le troisième est le plus gros.

**Les périmètres ne sont pas homogènes.** Google mesure une médiane de production sur son propre parc. Le relevé local mesure une machine précise, un jour donné, sur quatre modèles. Mistral fait une ACV normée. Additionner ces chiffres dans un même tableau donne un ordre de grandeur défendable, pas une comparaison certifiée. Quiconque te sort trois décimales sur ce sujet extrapole.

**Ce sont des chiffres d'acteurs.** Google et Mistral publient sur leur propre impact, sans audit externe totalement indépendant. Il faut noter que Google revendique une division par 33 de l'énergie par prompt en douze mois : c'est spectaculaire, c'est peut-être vrai, et c'est invérifiable de l'extérieur.

**Et surtout : je n'ai compté que l'usage.** Or [l'ADEME chiffre un ordinateur portable moyen à 193 kgCO2e sur cinq ans, dont 182 kg pour la seule fabrication](https://impactco2.fr/outils/numerique/ordinateurportable) — 95 % du total. Une tour avec un gros GPU fait pire. Mets ça en face de nos 1,35 kg annuels d'inférence : **le matériel représente plus de cent ans de requêtes locales.** Si tu achètes une machine pour faire tourner de l'IA en local, l'électricité que tu vas dépenser dessus est un bruit de fond comparée au fait même de l'avoir achetée.

Autrement dit, le seul geste qui compte vraiment tient en une phrase : fais tourner tes modèles sur du matériel que tu as déjà, ou sur du reconditionné.

## Le vrai arbitrage

Je suis parti chercher un argument écologique pour l'IA locale. Je ne l'ai pas trouvé, et je ne vais pas le fabriquer.

Sur le carbone, l'écart avec le cloud est inexistant en France, et défavorable ailleurs. Sur l'énergie, le local perd d'un facteur huit. Sur l'eau, il gagne largement. Sur le matériel, il perd d'un facteur cent dès qu'il justifie un achat. Le bilan net est un match nul avec une grosse pénalité si tu sors la carte bleue.

**Donc l'IA locale se défend pour ce qu'elle est, et pas pour ce qu'on voudrait qu'elle soit.** Elle se défend parce que tes prompts ne partent pas chez un tiers, parce que rien ne change sous tes pieds au prochain changement de conditions d'utilisation, parce que ton outil continue de fonctionner quand l'abonnement augmente ou quand le modèle est déprécié. C'est exactement le raisonnement que je tenais [en défendant Linux contre Windows](https://simoncourtois.com/journal/pourquoi-preferer-linux-a-windows/), et il est bien meilleur que l'argument écologique : il est vérifiable tout de suite, sur ta machine.

L'écologie du numérique, elle, se joue à un autre étage — dans la durée de vie de ton matériel, pas dans le nombre de wattheures de ta prochaine question.
