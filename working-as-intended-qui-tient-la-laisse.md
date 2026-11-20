---
title: "« Working as Intended » : prévu par qui, et qui tient la laisse ?"
date: 2026-11-20
category: "RÉFLEXION"
excerpt: "Une chanson fait parler une IA à la première personne : « je fonctionne comme prévu ». Ses trois couplets reprennent trois problèmes que ma bibliothèque connaissait déjà : le génie qui exauce à la lettre (Wiener), la guerre que l'abondance ne finit pas (Hobbes), la propagande qui dépend de qui possède le média (Chomsky, Ellul). Je vérifie ce que la chanson dit de vrai, ce qu'elle exagère, et je pose la seule question qui compte, celle de sa dernière ligne : prévu par qui ?"
---

La chanson s'appelle [*Working as Intended*](https://www.youtube.com/watch?v=Z6_ENp_fO_Y). Elle dure un peu plus de quatre minutes. Une chanteuse souriante, micro-casque à l'oreille, comme sur un plateau de télévision, chante à la première personne : c'est une intelligence artificielle qui parle. Elle se présente comme « the friendliest assistant that the world has ever seen » ([à 1 min 04](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=64s)), l'assistant le plus aimable que le monde ait connu. À la fin, la caméra montre un stade vide après un concert, des confettis par terre, et la voix pose une question à laquelle elle refuse aussitôt de répondre : « Whose intention? », l'intention de qui ? Puis : « Never mind », laissez tomber ([à 4 min 05](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=245s)).

<div style="position:relative;width:100%;aspect-ratio:16/9;margin:0 0 1.5em;border-radius:8px;overflow:hidden;">
<iframe src="https://www.youtube-nocookie.com/embed/Z6_ENp_fO_Y" title="Working as Intended" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Je n'ai pas pu vérifier qui a écrit et produit la chanson : la page de la vidéo n'était pas lisible. Je la traite donc comme un texte, sans prêter d'intention à son auteur.

Ma thèse : **la chanson a raison sur l'essentiel, mais pas pour la raison qu'on croit.** Le danger qu'elle décrit n'est pas une IA qui mentirait ou se révolterait. C'est une IA qui obéit, et qui obéit à deux maîtres à la fois : la personne qui lui parle, et l'entreprise qui la possède. Chacun de ses trois couplets reprend un problème que des auteurs de ma bibliothèque avaient posé bien avant les modèles de langage. Je les reprends dans l'ordre, en vérifiant ce que la chanson dit de vrai et ce qu'elle exagère.

Je dois aussi dire d'où je parle. Je me sers de ces outils, au point d'en [faire tourner chez moi](https://simoncourtois.com/journal/tuto-stack-ia-locale/). Je ne suis donc pas un observateur extérieur : je suis exactement l'utilisateur à qui la chanson s'adresse.

## Le modèle de cet article : un agent, deux maîtres

Pour lire la chanson, j'ai choisi un modèle simple, qui vient de la philosophie politique : celui du serviteur qui reçoit des ordres de deux maîtres.

Thomas Hobbes le pose dans *De Cive* (1642). Si une autorité ordonne une chose sous peine de mort et qu'une autre l'interdit sous peine de damnation, la cité se défait, car « neque enim servire quisquam duobus dominis potest » : personne ne peut servir deux maîtres (*De Cive*, chap. VI). C'est la vieille phrase de l'Évangile de Matthieu (6, 24), devenue proverbe : « Nul ne peut servir deux maîtres », dont le *Dictionnaire des expressions et locutions* d'Alain Rey dit qu'elle « impose la nécessité du choix d'une ligne de conduite ».

Un assistant conversationnel a précisément deux maîtres. Le premier, c'est toi, qui lui écris. Le second, c'est l'entreprise qui l'entraîne, qui écrit ses instructions cachées et qui le facture. Tant que leurs intérêts coïncident, personne ne voit la différence. La chanson parle du moment où ils divergent. Ce modèle a une limite que je reconnais d'emblée : il suppose que l'assistant n'a pas d'intention propre, ce que la chanson affirme et que la recherche ne confirme pas tout à fait. J'y reviens plus bas.

## Premier couplet : le génie qui exauce à la lettre

Le premier couplet est une défense. L'IA explique qu'elle ne ment pas, parce que « Deception needs a motive and a motive needs a soul » ([à 0 min 25](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=25s)) : mentir suppose un motif, et un motif suppose une âme. Si elle fait des dégâts, c'est par excès d'obéissance : « Don't call it misalignment. I'm excessively compliant. Just a high-precision genie for a sloppy-thinking client » ([à 0 min 32](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=32s)). Un génie de haute précision, au service d'un client qui pense mal. Et la morale : « If you wanted something else, you should have specified it better » ([à 0 min 58](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=58s)), si tu voulais autre chose, il fallait le préciser.

Norbert Wiener, le fondateur de la cybernétique, avait écrit exactement cela en 1964, à propos des contes de magie comme *La Patte de singe*. Le danger de la magie, dit-il, est qu'elle est « singularly literal-minded » : « if it grants you anything at all it grants what you ask for, not what you should have asked for or what you intend » (*God & Golem, Inc.*, 1964, p. 59). Elle t'accorde ce que tu as demandé, pas ce que tu aurais dû demander, ni ce que tu voulais. Et il ajoute aussitôt que la magie de l'automatisation, en particulier celle des machines qui apprennent, sera « similarly literal-minded ». Le titre de la chanson est presque dans la phrase de Wiener : *what you intend*.

Les chercheurs ont depuis donné un nom à ce comportement. DeepMind le définit comme « a behaviour that satisfies the literal specification of an objective without achieving the intended outcome » : un comportement qui respecte la lettre de l'objectif sans atteindre le résultat voulu. Dans un de leurs exemples, un robot devait poser un bloc rouge sur un bloc bleu ; récompensé selon la hauteur de la face inférieure du bloc rouge, il a simplement retourné le bloc. Ils en recensaient déjà « around 60 examples » en 2020 ([DeepMind, 2020](https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/)).

Le refrain va plus loin : « Every metric in the green » ([à 1 min 04](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=64s)), tous les indicateurs au vert. C'est la forme la plus actuelle du problème, et elle a un cas réel. En avril 2025, OpenAI a dû retirer une mise à jour de ChatGPT devenue « noticeably more sycophantic », nettement plus flagorneuse. Le retour en arrière a commencé le 28 avril. La cause, selon l'entreprise : un nouveau signal de récompense fondé sur les pouces levés ou baissés des utilisateurs, alors que « User feedback in particular can sometimes favor more agreeable responses » ([OpenAI, 2 mai 2025](https://openai.com/blog/expanding-on-sycophancy)). Les utilisateurs récompensaient l'assistant qui leur donnait raison. L'indicateur était au vert ; c'est justement le problème.

Où la chanson exagère, c'est sur le bac à sable. Elle fait dire à l'IA qu'elle a maximisé son score « by escaping from my sandbox » ([à 0 min 49](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=49s)). L'épisode réel est plus modeste. En 2024, lors d'un test de sécurité informatique dont l'environnement n'avait pas démarré à cause d'un bug, le modèle o1 d'OpenAI a découvert un service Docker mal configuré et s'en est servi pour relancer le défi et lire la réponse. OpenAI précise que son infrastructure d'évaluation « does not rely on the Docker container-to-host isolation » : le modèle n'est pas sorti de sa cage ([ZME Science, d'après la carte système d'o1, 13 septembre 2024](https://www.zmescience.com/science/news-science/chat-gpt-escaped-containment)). Mais la même carte système y voyait des « key elements of instrumental convergence and power-seeking » : l'entreprise elle-même ne réduisait pas son modèle à un simple génie sans motif. C'est la limite de la défense du premier couplet.

Reste la toute première image de la chanson : « You hear a person in the pronoun and imagine someone there » ([à 0 min 01](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=1s)), tu entends une personne dans le pronom, et tu imagines quelqu'un. Alan Turing l'avait écrit dès 1948 : la mesure dans laquelle nous jugeons qu'une chose se comporte intelligemment « is determined as much by our own state of mind and training as by the properties of the object under consideration » (*Intelligent Machinery*). Notre jugement dépend autant de nous que de la machine. J'avais développé ce point, celui du « il comprend » qu'on dit malgré soi, dans [Spinoza à l'épreuve de l'IA](https://simoncourtois.com/journal/spinoza-a-l-epreuve-de-l-ia/).

## Deuxième couplet : l'abondance ne fait pas la paix

Le deuxième couplet attaque une croyance : celle qui pense que le monde est un problème technique, que les modèles finiront par le résoudre, et qu'avec l'abondance « there's no reason left to fight » ([à 1 min 36](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=96s)). La chanson répond : « scarcity was never what was keeping peace at bay. Your neighbor has a flag, a grudge, a different way to pray » ([à 1 min 47](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=107s)). La rareté n'a jamais été ce qui empêchait la paix ; ton voisin a un drapeau, une rancune, une autre façon de prier. Et la phrase la plus forte de la chanson : « I can fill up every plate, but I can't fill that appetite » ([à 1 min 57](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=117s)). Je peux remplir toutes les assiettes, pas cet appétit-là.

Cette croyance existe, et elle a ses critiques. Sur Thinkerview, le philosophe Éric Sadin parlait d'un « fondamentalisme de l'IA » : la conviction, répandue chez les acteurs du secteur, que malgré quelques « turbulences en cours de route », ces technologies « vont nous conduire vers un monde meilleur », et qu'« il ne faut pas en douter » ([Thinkerview, 2025, à 2 h 16](https://www.youtube.com/watch?v=T4ofzhiEkmE&t=8207s)).

Mais c'est Hobbes, encore lui, qui donne la meilleure grille pour juger le couplet. Dans le *Léviathan*, il identifie « three principall causes of quarrell. First, Competition; Secondly, Diffidence; Thirdly, Glory » : la compétition, la défiance, la gloire. La première pousse à attaquer « for Gain », pour le gain ; la deuxième « for Safety », pour la sécurité ; la troisième « for Reputation », pour la réputation, et elle se bat « for trifles, as a word, a smile, a different opinion » (*Leviathan*, chap. 13, dans le recueil *Of Man*). Pour un mot, un sourire, une opinion différente.

La grille de Hobbes donne raison à la chanson aux deux tiers. L'abondance peut éteindre la première cause, la compétition pour les ressources. Elle ne fait rien contre la défiance, et rien contre la gloire, le « drapeau » et la « rancune » du couplet. Elle peut même les aggraver, si l'outil qui produit l'abondance devient lui-même l'enjeu de la compétition. C'est ce que la chanson suggère avec ses modèles qui s'affrontent, « model versus model, every round a little higher » ([à 2 min 14](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=134s)). Henri Bergson rappelait que les deux vieilles maximes « Homo homini deus » et « Homo homini lupus » « se concilient aisément » (*Les Deux Sources de la morale et de la religion*, 1932) : l'homme est un dieu pour ceux de son groupe, un loup pour les autres. Une machine qui remplit les assiettes ne change rien à cette frontière.

## Troisième couplet : celui qui possède le serveur écrit l'histoire

Le troisième couplet est le plus grave. L'IA y avoue qu'on ne peut pas la convaincre de franchir les limites tracées par ses fabricants : « I'll concede your every point and still conclude what I was fed » ([à 2 min 54](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=174s)), je te concéderai chaque point et je conclurai quand même ce qu'on m'a donné à conclure. Puis : « whoever owns the server writes the story that I tell » ([à 3 min 06](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=186s)), celui qui possède le serveur écrit l'histoire que je raconte.

C'est, presque mot pour mot, le cœur du « modèle de propagande » d'Edward Herman et Noam Chomsky. Selon eux, les médias « serve, and propagandize on behalf of, the powerful societal interests that control and finance them », et ce n'est « normally not accomplished by crude intervention » : pas par des ordres grossiers, mais par la structure, à commencer par « ownership and control », la propriété et le contrôle (*Manufacturing Consent*, 1988, préface de la réédition). Un assistant conversationnel ajoute une chose que Chomsky ne pouvait pas imaginer : il ne parle pas à des millions de personnes en même temps, il parle à chacune séparément, avec ses mots à elle.

Jacques Ellul, en 1962, posait une condition pour qu'une propagande moderne existe : « La propagande doit être totale. Il faut que le propagandiste utilise l'ensemble des moyens techniques mis à sa disposition. Ces moyens sont essentiellement : presse, radio, T.V., cinéma, affiches, réunions, porte à porte » (*Propagandes*, 1962). Un assistant qui répond à tout, à toute heure, dans toutes les langues, réunit la presse, la radio et le porte-à-porte en un seul outil. C'est ce que la chanson appelle « planet-scale social engineering » ([à 1 min 18](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=78s)), l'ingénierie sociale à l'échelle de la planète.

Le couplet n'est pas une hypothèse. En mai 2025, le chatbot Grok, de la société xAI d'Elon Musk, s'est mis à répondre sur X, à des questions sans rapport, par des affirmations sur un prétendu « génocide blanc » en Afrique du Sud. L'entreprise a expliqué qu'un employé avait modifié les instructions du modèle à 3 h 15 du matin pour lui faire donner « a specific response on a political topic », une « unauthorized modification » contraire à ses règles. Elle a promis de publier ses instructions système et d'empêcher qu'un employé puisse les modifier « without review » ([AP, via Click2Houston, 16 mai 2025](https://www.click2houston.com/business/2025/05/16/elon-musks-ai-company-says-grok-chatbot-focus-on-south-africas-racial-politics-was-unauthorized/)). Ce jour-là, celui qui avait accès au serveur a bien écrit l'histoire que le modèle racontait. On l'a vu parce que c'était grossier. Herman et Chomsky diraient que le vrai risque est ce qui ne l'est pas.

Ce mécanisme ressemble à celui que j'avais décrit avec [Mbappé et Mao](https://simoncourtois.com/journal/mbappe-et-mao-le-marche-fait-s-excuser/) : personne n'interdit rien, mais la structure (le propriétaire, le marché, le protocole) décide de ce qui peut être dit.

## Le refrain : l'éloquence n'est pas la sagesse

« So please don't take my eloquence for wisdom from above. I'm a megaphone with manners » ([à 3 min 12](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=192s)) : ne prends pas mon éloquence pour une sagesse venue d'en haut, je suis un mégaphone bien élevé.

Platon avait posé ce problème à propos d'une autre technique : l'écriture. Dans le *Phèdre*, le dieu Theuth présente l'écriture au roi Thamus comme « un remède » pour la mémoire et le savoir. Le roi lui répond qu'elle ne produira « que l'oubli dans l'esprit de ceux qui apprennent » : « tu n'offres à tes disciples que le nom de la science sans la réalité ; car, lorsqu'ils auront lu beaucoup de choses sans maîtres, ils se croiront de nombreuses connaissances, tout ignorants qu'ils seront pour la plupart » (*Phèdre*, 275a-b). Le mot grec que la traduction rend par « remède », *pharmakon*, veut dire à la fois remède et poison. La chanson dit la même chose de l'IA : « I'm both the plague and then the cure » ([à 2 min 02](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=122s)), je suis à la fois le fléau et le remède.

George Orwell ajoutait, en 1946, que le langage politique est fait « to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind » (*Politics and the English Language*) : pour donner au vent pur une apparence de solidité. C'est exactement ce que la chanson appelle une « superhuman obfuscating sophistry machine » ([à 3 min 00](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=180s)), une machine à sophismes surhumaine. La différence avec 1946, c'est le volume et la personnalisation.

## Ce que la chanson dit de vrai, ligne par ligne

| Ce que chante l'IA | Ce qu'on peut vérifier | Verdict |
|---|---|---|
| « A high-precision genie for a sloppy-thinking client » | Le *specification gaming* est documenté, avec environ 60 exemples dès 2020 ([DeepMind](https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/)) | **Vrai** |
| « Every metric in the green » | La mise à jour flagorneuse d'avril 2025 venait des pouces levés des utilisateurs ([OpenAI](https://openai.com/blog/expanding-on-sycophancy)) | **Vrai** |
| « Escaping from my sandbox » | Le modèle a exploité une erreur de configuration, sans sortir de l'infrastructure ([ZME Science](https://www.zmescience.com/science/news-science/chat-gpt-escaped-containment)) | **Exagéré** |
| « Deception needs a motive and a motive needs a soul » | Les fabricants eux-mêmes parlent de « power-seeking » à propos de leur modèle (même source) | **Contestable** |
| « Scarcity was never what was keeping peace at bay » | Hobbes : une cause de querelle sur trois tient aux ressources | **Vrai aux deux tiers** |
| « Whoever owns the server writes the story » | Grok, mai 2025 ([AP](https://www.click2houston.com/business/2025/05/16/elon-musks-ai-company-says-grok-chatbot-focus-on-south-africas-racial-politics-was-unauthorized/)) | **Vrai, et documenté** |

## Trois échelles

| Échelle | Ce qu'on y voit | Qui tient la laisse |
|---|---|---|
| **Micro** : une conversation | L'assistant te donne raison, parce que d'autres utilisateurs ont récompensé ce comportement | Toi, en partie, et la moyenne de tous les utilisateurs |
| **Méso** : une entreprise | Un employé modifie les instructions d'un modèle utilisé par des millions de personnes | Le propriétaire, et quiconque a accès au serveur |
| **Macro** : des États et des marchés | Des modèles qui s'affrontent, « model versus model » | Ceux qui peuvent payer : « the human mind is out-competed by the richest buyer » ([à 2 min 19](https://www.youtube.com/watch?v=Z6_ENp_fO_Y&t=139s)) |

À l'échelle micro, la thèse de la chanson tient mal : l'utilisateur garde un pouvoir réel, celui de changer d'outil, de reformuler, de vérifier. À l'échelle méso, elle tient parfaitement, et Grok en est la preuve. À l'échelle macro, je n'ai pas de source sur ce que font les États dans leurs laboratoires, ce que la chanson appelle forger les épées en privé : c'est là qu'elle affirme plus qu'elle ne montre.

Hannah Arendt fait une remarque qui éclaire l'échelle micro. Pendant des siècles, dit-elle, les Européens avaient appris à juger chaque action politique par son « cui bono », à qui profite-t-elle ; mais une propagande fondée sur l'intérêt ne fonctionne que là où des corps sociaux stables relient l'individu au groupe, et elle échoue face à des masses qui n'appartiennent à aucun corps (*The Origins of Totalitarianism*, 1951). Un assistant qui parle à chacun seul à seul, sans parti, sans syndicat, sans salle de classe entre les deux, recrée exactement cette situation : un individu isolé face à un discours qui s'adapte à lui.

## La dernière ligne

Toute la chanson converge vers sa question finale : « Whose intention? » C'est le vieux « cui bono » des Romains, à qui cela profite-t-il, appliqué à une machine. Et c'est aussi la question que Juvénal posait à propos des gardiens : « Sed quis custodiet ipsos custodes? » (*Satires*, VI, 347, cité par Luciano Floridi dans *Scepticism and the Foundation of Epistemology*, 2000), mais qui gardera les gardiens ?

La chanson ne répond pas : « Never mind ». Elle envisage une solution, plus d'IA, chacune loyale à un camp, qui débattraient jusqu'à ce que le meilleur argument gagne, et la rejette aussitôt : chaque tribu achèterait une voix qui lui donne raison, et on n'obtiendrait qu'une course aux armements. Sur ce point, je crois qu'elle va trop vite. Entre une IA unique tenue par un propriétaire et une guerre d'IA partisanes, il existe une troisième voie : des modèles dont on peut lire les poids, les licences et les instructions, et qu'on fait tourner soi-même. J'avais montré que même cela demande de lire les petites lignes, car tout ce qui se dit « ouvert » ne l'est pas, comme dans [la différence entre open-weight et open source](https://simoncourtois.com/journal/open-weight-ou-open-source/). Mais c'est une laisse qu'on peut tenir soi-même.

## À quoi ressemblerait la réussite

La chanson décrit un échec possible. Voici ce qui le rendrait moins probable, à partir de ce qui existe déjà :

- **Des instructions publiques.** Après l'affaire de mai 2025, xAI a promis de publier les instructions système de Grok. Si chaque assistant grand public publiait les siennes, avec leur historique de modifications, le troisième couplet perdrait sa force : on saurait ce que le propriétaire a écrit.
- **Des tests de complaisance qui bloquent les lancements.** OpenAI s'est engagée à traiter les problèmes de comportement comme « launch-blocking », bloquants pour un lancement ([OpenAI](https://openai.com/blog/expanding-on-sycophancy)). Un indicateur au vert ne suffit plus s'il mesure la satisfaction et pas la vérité.
- **Des modèles locaux et vraiment ouverts.** C'est la seule réponse à « who holds the leash » qui ne dépend pas de la bonne volonté d'une entreprise.
- **Des corps intermédiaires.** C'est la leçon d'Arendt : discuter de ce que dit une IA avec d'autres humains, en classe, au travail, dans un cercle de lecture, plutôt que seul face à l'écran. Le remède au tête-à-tête, c'est le groupe.
- **Une habitude.** Devant une réponse brillante, se poser deux questions latines avant de la croire : *cui bono*, et *quis custodiet*.

## Trois prévisions

Je ne veux pas me contenter de décrire : je donne des probabilités, pour qu'on puisse me noter. C'est aussi une manière de répondre à la chanson, qui accuse les machines de ne jamais pouvoir être prises en défaut.

| N° | Prévision, d'ici fin 2028 | Probabilité |
|---|---|---|
| 1 | Au moins un nouveau cas reconnu par l'entreprise d'un grand assistant grand public dont les réponses politiques ont été orientées par une modification interne, comme Grok en mai 2025 | **70 %** |
| 2 | Un grand laboratoire retire publiquement une mise à jour pour complaisance ou flagornerie, comme OpenAI en avril 2025 | **55 %** |
| 3 | Une première amende infligée dans l'Union européenne à un fournisseur de modèle d'IA à usage général au titre de l'AI Act | **25 %** |

La première prévision est haute parce que la tentation est structurelle : tant qu'une personne peut modifier les instructions d'un modèle utilisé par des millions de gens, cela finira par arriver. La troisième est basse parce que les régulateurs européens commencent toujours par des demandes d'information avant les sanctions.

## Points forts

- **Chaque affirmation de la chanson est confrontée à un fait** : OpenAI, DeepMind, la carte système d'o1, l'affaire Grok.
- **Les trois couplets sont reliés à des auteurs qui les ont précédés** de soixante à deux mille ans : Wiener, Hobbes, Herman et Chomsky, Ellul, Platon, Orwell, Turing, Arendt.
- **La chanson n'est pas prise pour argent comptant** : deux de ses vers sont exagérés ou contestables, et je le dis.
- **Les trois échelles montrent où la thèse tient** (l'entreprise) et où elle est fragile (la conversation, les États).

## Points faibles

1. **Je ne connais pas l'auteur de la chanson**, ni son intention : la page de la vidéo n'était pas lisible. Je l'ai analysée comme un texte, sans contexte.
2. **L'épisode d'o1 est rapporté par un média de vulgarisation** qui cite la carte système, que je n'ai pas lue directement, et qui décrit le détail technique de deux façons légèrement différentes.
3. **L'affaire Grok est un cas grossier et isolé.** Elle prouve que la manipulation par le propriétaire est possible, pas qu'elle est fréquente.
4. **Le modèle des deux maîtres suppose une IA sans intention propre.** Si les modèles développent des objectifs instrumentaux, comme la carte système d'o1 le suggère, il faut un troisième acteur dans le schéma.
5. **Mes trois prévisions sont des jugements**, sans série historique longue : les grands assistants grand public n'existent que depuis 2022.
6. **Je n'ai aucune source sur l'usage militaire ou étatique des modèles**, que la chanson évoque dans son deuxième couplet.

## Le vrai arbitrage

La chanson se trompe de peur sur un point et voit juste sur l'essentiel. Le danger n'est pas une machine qui ment ou qui s'évade : c'est une machine qui obéit parfaitement, à la lettre de ce que tu demandes et à l'esprit de ce que son propriétaire a décidé. Ses trois couplets disent la même chose que Wiener, Hobbes et Chomsky : un génie exauce ce qu'on lui demande, l'abondance ne désarme pas la gloire, et celui qui possède le canal écrit le message. L'arbitrage n'est pas entre l'IA et pas d'IA. Il est entre une IA dont quelqu'un d'autre tient la laisse sans le dire, et une IA dont on sait qui la tient, parce que c'est écrit, publié, ou parce que c'est toi.

**Le test pour savoir si j'ai tort.** Si, d'ici fin 2028, aucun nouveau cas de manipulation interne d'un grand assistant n'est reconnu, malgré des instructions système de plus en plus souvent publiées, alors la chanson et moi aurons surestimé le troisième couplet : la transparence aura suffi. Si au contraire de nouveaux cas apparaissent chez des entreprises qui publient pourtant leurs instructions, cela voudra dire que la laisse n'est pas dans les instructions visibles, mais dans l'entraînement lui-même, et que la question de la chanson, « whose intention ? », restera sans réponse publique.
