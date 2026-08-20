---
title: "Ton VPN ne te protège pas du pistage — voilà ce qui marche"
date: 2026-08-20
category: SÉCURITÉ
excerpt: "J'ai écrit qu'un VPN ne peut rien contre les traceurs, puis j'ai conclu sur « ton hygiène numérique » sans jamais dire en quoi elle consiste. Voici la réponse chiffrée — avec le paradoxe qui la rend contre-intuitive : la plupart des gestes de protection te rendent plus facile à suivre, pas moins."
---

Dans l'expérience Panopticlick, **83,6 % des navigateurs testés avaient une empreinte immédiatement unique**. Pas « rare ». Unique. Un identifiant qui te suit de site en site sans qu'aucun cookie ne soit posé, et qu'aucun VPN ne masque.

Il y a un mois, j'ai publié [un article sur le VPN](https://simoncourtois.com/journal/vpn-explique-5-minutes/) où j'écrivais noir sur blanc : « ça ne bloque ni virus, ni phishing, ni traceurs ». Puis j'ai conclu que c'était « un ajout solide à ton hygiène numérique » — sans jamais dire de quoi cette hygiène est faite. C'était une pirouette. Voici la dette.

## Le pistage ne passe plus par où tu crois

Pendant cinq ans, le débat public a tourné autour des cookies tiers, avec une échéance qui approchait : Google allait les supprimer de Chrome, la Privacy Sandbox prendrait le relais, l'affaire serait réglée.

Ça n'arrivera pas. Le 23 avril 2025, Google [a officiellement renoncé](https://www.clubic.com/actualite-562965-privacy-sandbox-google-enterre-definitivement-son-plan-anti-cookies.html) à supprimer les cookies tiers, abandonnant au passage jusqu'à l'idée d'un écran de choix pour l'utilisateur. Après six ans d'annonces et de reports, Chrome garde les cookies tiers.

Mais même si Google avait tenu parole, ça n'aurait pas suffi. Parce que la technique qui compte vraiment ne dépose rien sur ta machine : elle lit ce que ta machine raconte d'elle-même.

## Ton empreinte, mesurée en bits

Quand ton navigateur charge une page, il annonce spontanément une quantité d'informations : sa version, ton système, ta résolution d'écran, ton fuseau horaire, tes polices installées, la façon dont ta carte graphique dessine une image de test. Chacune de ces valeurs est banale. **Leur combinaison ne l'est pas.**

L'étude de référence, menée par Peter Eckersley sur [470 161 empreintes](https://coveryourtracks.eff.org/static/browser-uniqueness.pdf), a chiffré l'apport de chaque attribut.

| Attribut | Information révélée |
|---|---|
| Liste des plugins | 15,4 bits |
| Polices système | 13,9 bits |
| User Agent | 10,0 bits |
| En-têtes HTTP Accept | 6,09 bits |
| Résolution d'écran | 4,83 bits |
| Fuseau horaire | 3,04 bits |

Le total observé est d'au moins **18,1 bits d'entropie**, ce qui signifie qu'au mieux, un seul navigateur sur 286 777 partage ton empreinte. À l'échelle d'un pays, tu es identifiable. À l'échelle d'un site, tu es identifié.

Un détail achève le tableau : 37,4 % des visiteurs récurrents avaient changé d'empreinte entre deux passages — mise à jour, nouvelle police, écran externe — et l'algorithme de suivi a quand même recollé les morceaux dans **99,1 %** des cas. Changer d'empreinte ne te fait pas disparaître, ça te fait juste changer de nom sur la même fiche.

## Le paradoxe : te protéger te rend unique

Voilà le point que je n'ai vu écrit nulle part dans les guides « protégez votre vie privée », et c'est le plus important de cet article.

Relis le tableau. Ce qui te trahit, ce n'est pas d'avoir une configuration *ordinaire* — c'est d'avoir une configuration *rare*. Or presque tous les gestes de protection spontanés te rendent plus rare :

- **Installer cinq extensions de confidentialité** : chacune modifie le comportement de la page. La combinaison exacte des cinq est probablement unique au monde.
- **Changer ton User Agent** pour un truc bidon : tu ne ressembles plus à personne, ce qui est exactement le contraire du but.
- **Bloquer les polices, désactiver le JavaScript à moitié, forcer un fuseau horaire** : autant de signaux qui, au lieu de te fondre dans la masse, te dessinent en creux.
- **Agrandir ta fenêtre à une taille inhabituelle** : la résolution vaut presque 5 bits à elle seule.

**Se cacher et se distinguer sont la même opération vue de deux côtés.** Tout l'enjeu du problème est là, et il explique pourquoi les deux seules stratégies sérieuses vont dans des directions opposées.

## Deux stratégies, et une seule tient vraiment

| Approche | Qui l'utilise | Principe | Ce que ça coûte |
|---|---|---|---|
| **Uniformité** | Tor Browser, Mullvad Browser | Tous les utilisateurs présentent la *même* empreinte : fenêtre en letterbox, jeu de polices figé, JIT désactivé | Performance JavaScript nettement dégradée ; plus de 400 ms de latence en plus sur Tor |
| **Randomisation** | Brave | Un bruit différent est injecté à chaque session et chaque site dans le canvas, WebGL et l'audio | Confort normal, mais tu restes identifiable *à l'intérieur* d'une session |
| **Partielle** | LibreWolf, Firefox avec `resistFingerprinting` | Bruit sur le canvas, énumération des polices bridée, mais JIT actif et pas de letterbox | Compromis intermédiaire, protection intermédiaire |

L'uniformité est la seule qui résout réellement le problème, [comme le détaille cette comparaison 2026](https://alexi.sh/fr/posts/navigateurs-vie-privee-2026), parce qu'elle est la seule à s'attaquer à la rareté plutôt qu'au signal. Si tous les utilisateurs de Tor Browser se ressemblent, savoir que tu es l'un d'eux ne dit rien sur toi.

C'est aussi la plus inconfortable, et il faut le dire franchement : un navigateur qui désactive la compilation à la volée du JavaScript est lent, et une fenêtre en letterbox avec des bandes grises est laide. **La protection maximale n'est pas un réglage, c'est un mode de vie.** La randomisation de Brave est le compromis raisonnable pour un usage quotidien.

## Ce que Chrome vient de te retirer

Pendant que le fingerprinting progressait, l'outil qui bloquait le plus efficacement les traceurs s'est fait couper les jambes.

Fin juin 2026, Google [a supprimé les derniers contournements](https://web.developpez.com/actu/384091/Google-Chrome-met-fin-a-toutes-les-solutions-de-contournement-utilisees-par-uBlock-Origin-et-amorce-la-phase-finale-de-la-transition-vers-Manifest-V3-Microsoft-Edge-et-Opera-devraient-suivre/) qui permettaient encore de faire tourner uBlock Origin sur Chrome. Edge l'avait désactivé dès février. La cause est technique : Manifest V3 retire l'API `webRequest`, qui laissait une extension examiner et modifier le trafic en temps réel, et la remplace par un système de règles déclarées à l'avance.

L'écart se chiffre. Là où uBlock Origin exploitait [plus de 300 000 règles de filtrage dynamiques](https://meilleur-adblocker.com/blog/manifest-v3-chrome-adblockers-2026/), son remplaçant sous Manifest V3 plafonne autour de **30 000 règles statiques**. Un facteur dix, et surtout la perte de l'analyse dynamique — celle qui permettait de suivre les techniques de contournement au fil de leurs évolutions.

Firefox conserve l'API `webRequest` et ne prévoit pas de la retirer. Brave et Vivaldi maintiennent la compatibilité. **Le choix du navigateur est redevenu un choix de capacité, pas de goût.** C'est la même logique que celle de [mon article sur la mort logicielle des machines](https://simoncourtois.com/journal/ce-qui-tue-ton-ordinateur/) : ce que ton outil peut faire est décidé par quelqu'un d'autre, à une date qu'il choisit.

## Mesure la tienne, ça prend une minute

Tout ce qui précède reste théorique tant que tu ne l'as pas regardé sur ta propre machine. Deux outils publics le font sans rien installer : [Cover Your Tracks](https://coveryourtracks.eff.org/), maintenu par l'Electronic Frontier Foundation et héritier direct de Panopticlick, et [AmIUnique](https://amiunique.org/), issu d'un projet de recherche français.

Ce qui compte dans le résultat n'est pas le verdict global, souvent rassurant à tort. Regarde trois lignes :

- **Le nombre de bits d'information** de ton empreinte. Au-delà de 17 ou 18, tu es dans la zone où tu es à peu près seul.
- **Les attributs les plus discriminants** dans ton cas précis. C'est là que tu découvres si c'est ta liste de polices, ta résolution ou ton rendu canvas qui te trahit — et ça diffère beaucoup d'une machine à l'autre.
- **La stabilité** entre deux passages, en refaisant le test le lendemain. Une empreinte qui bouge n'est pas une empreinte perdue : souviens-toi des 99,1 % de recollages.

Fais le test deux fois, avec ton navigateur habituel puis avec un navigateur durci. L'écart entre les deux est la seule mesure qui te concerne vraiment, et elle vaut mieux que n'importe quel tableau comparatif — y compris le mien.

## Points faibles : ce que ces chiffres ne valent pas

Trois réserves, et la première est massive.

**L'étude Panopticlick date de 2010.** Les plugins, qui pesaient 15,4 bits — le poste le plus lourd du tableau — n'existent plus : Flash et Java sont morts, l'énumération des plugins a été neutralisée par les navigateurs. Les 18,1 bits d'aujourd'hui ne sont plus faits des mêmes ingrédients : ils viennent du canvas, de WebGL, de l'audio, des polices. Je cite ces chiffres parce qu'ils restent la mesure de référence sur la *structure* du problème — beaucoup d'attributs anodins qui s'additionnent — pas parce que la ventilation par attribut serait encore exacte.

**Je n'ai rien mesuré moi-même.** Tout ce tableau vient de publications tierces. Le test honnête serait de passer ma propre machine au banc d'essai, dans mes conditions réelles, avec et sans protections. Je ne l'ai pas fait, donc je ne peux pas te dire ce que *ta* configuration vaut — seulement où regarder.

**Et la protection parfaite est un piège logique.** Si tu es le seul de ton entourage à utiliser Tor Browser, l'uniformité de ton empreinte te protège du pistage commercial mais pas d'un observateur qui regarde ton réseau. Le VPN et le navigateur durci répondent à des menaces différentes ; empiler les outils sans savoir contre quoi on se défend, c'est le meilleur moyen de se rassurer à bon compte.

## Le vrai arbitrage

Quatre gestes, classés par ce qu'ils rapportent réellement — et le premier vaut plus que les trois autres réunis.

1. **Change de navigateur, pas de réglages.** Firefox ou Brave, qui gardent un blocage de contenu complet. Sur Chrome, plus aucun réglage ne rattrape ce que Manifest V3 a retiré. C'est exactement le raisonnement que je tenais [en défendant Linux contre Windows](https://simoncourtois.com/journal/pourquoi-preferer-linux-a-windows/), appliqué un étage plus haut : quand l'outil décide à ta place de ce que tu as le droit de bloquer, le réglage ne sert plus à rien, il faut changer d'outil.
2. **Un seul bloqueur, celui de référence, et rien d'autre.** Empiler les extensions dégrade ta protection au lieu de l'améliorer, parce que chaque ajout te rend plus rare.
3. **Laisse ta configuration tranquille.** Pas de User Agent bricolé, pas de fenêtre à une taille exotique, pas de réglages exotiques. Ressemble à tout le monde.
4. **Garde le VPN pour ce qu'il fait bien** : le wifi public et la curiosité de ton fournisseur d'accès. Rien de plus, et c'est déjà utile.

Le résumé tient en une phrase que je n'aurais pas écrite il y a un mois : **contre le pistage, la discrétion ne s'obtient pas en ajoutant des couches, mais en ressemblant au plus grand nombre possible de gens.** C'est contre-intuitif, c'est un peu vexant pour qui aime bricoler ses outils, et c'est ce que disent les chiffres.
