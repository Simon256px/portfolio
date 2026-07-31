---
title: "Veille : OpenCode, l'agent de code open source"
date: 2026-07-31
category: VEILLE
excerpt: "Un agent de codage IA sous licence MIT, compatible avec 75+ fournisseurs de modèles. Prise en main en cinq commandes, et ce qu'il faut savoir avant de s'y mettre."
---

Il y a une différence entre un outil qu'on essaie une fois et un outil qu'on garde. [OpenCode](https://opencode.ai/fr) est de ceux qui méritent qu'on s'y attarde : un agent de codage IA **open source**, qui tourne dans le terminal, dans l'IDE ou en application de bureau, et qui ne t'enferme chez aucun fournisseur de modèle.

Le projet affiche plus de **160 000 étoiles sur GitHub**, environ 900 contributeurs et 13 000 commits. Développé par Anomaly, il revendique 7,5 millions de développeurs mensuels — chiffres maison, à prendre comme tels, mais l'ordre de grandeur est réel.

## Le principe en une minute

La plupart des agents de code sont couplés à un modèle : l'éditeur du modèle fabrique l'outil, l'outil est optimisé pour son modèle. OpenCode fait le pari inverse — **le harnais est libre, le modèle est ton choix**.

Concrètement : **75+ fournisseurs** via Models.dev, y compris des modèles locaux. Tu peux brancher tes clés API, réutiliser un abonnement GitHub Copilot ou ChatGPT Plus/Pro déjà payé, ou passer par leur service Zen. Le tout sous licence MIT.

## Prise en main : cinq commandes suffisent

C'est le point qui m'a le plus surpris — la boucle d'apprentissage est courte.

**1. Installer.** Le script officiel :

```
curl -fsSL https://opencode.ai/install | bash
```

Si tu n'aimes pas exécuter un script distant à l'aveugle (et tu as raison), les alternatives packagées existent : `npm install -g opencode-ai`, `brew install anomalyco/tap/opencode`, `sudo pacman -S opencode` sur Arch, ou une image Docker.

**2. Connecter un modèle.** Depuis l'interface, `/connect` te guide vers l'authentification. Tu colles une clé API et c'est réglé.

**3. Initialiser le projet.** On se place dans le dossier, on lance `opencode`, puis :

```
/init
```

L'agent analyse la base de code et génère un fichier `AGENTS.md` à la racine, qui décrit la structure et les conventions du projet. **À commiter dans Git** : c'est la mémoire partagée de l'agent, et c'est ce qui fait la différence entre des réponses génériques et des réponses qui connaissent ton code.

**4. Penser avant d'agir.** La touche **Tab** bascule entre *Mode Plan* et *Mode Build*. En mode Plan, l'agent ne peut rien modifier : il propose une démarche, tu la critiques, tu l'affines. Puis Tab, et il exécute.

C'est le réflexe le plus rentable de tout l'outil. La doc le formule bien : parle-lui comme à un développeur junior de ton équipe — beaucoup de contexte, des exemples, des références précises. Le `@` déclenche une recherche floue de fichiers, ce qui évite de recopier des chemins à la main.

**5. Annuler.** `/undo` revient en arrière et réaffiche ton message d'origine pour que tu le reformules. `/redo` refait. On peut enchaîner plusieurs `/undo`.

Bonus : `/share` génère un lien vers la session, pratique pour faire relire un raisonnement — les conversations ne sont pas partagées par défaut.

## Points forts

- **La liberté de modèle.** C'est l'argument central. Aucun verrou fournisseur, possibilité de tourner en local, et surtout : si un modèle régresse ou augmente ses tarifs, tu changes. Ton outil ne dépend pas des décisions commerciales d'un tiers.
- **La boucle LSP.** OpenCode lance les serveurs Language Server et **renvoie les diagnostics du compilateur au modèle après chaque modification**. Si l'agent introduit une erreur de type, il la voit au tour suivant et se corrige. C'est techniquement le point le plus intelligent du projet.
- **Le coût d'entrée.** L'outil est gratuit et MIT. Tu paies uniquement les modèles — via tes propres clés, un abonnement existant, ou Zen en paiement à l'usage (solde de 20 $, recharge automatique, plafonds de dépense configurables).
- **Le multi-surface.** TUI, extension IDE, application desktop (en bêta sur macOS, Windows et Linux), interface web. Plus le multi-session : plusieurs agents en parallèle sur le même projet.
- **L'extensibilité.** Serveurs MCP, plugins, SDK, outils personnalisés, compétences d'agents, permissions granulaires. C'est un socle, pas une boîte fermée.
- **La confidentialité.** Le projet annonce ne stocker ni ton code ni ton contexte.

## Points faibles

Soyons honnêtes, il y en a.

- **C'est plus lent.** Un test comparatif de Builder.io début 2026, à modèle identique, a mesuré **environ 78 % de temps en plus** face à un agent concurrent. Une partie vient de l'architecture client-serveur, une partie de la boucle LSP et des suites de tests exécutées par défaut — l'outil a produit au passage nettement plus de tests. Ce n'est donc pas du temps perdu, mais si ton besoin est le débit brut, ça se sent.
- **Windows est un citoyen de seconde zone.** La doc recommande explicitement de passer par **WSL** pour une expérience correcte. Ça fonctionne nativement, mais ce n'est visiblement pas la cible.
- **Il faut un terminal moderne.** WezTerm, Alacritty, Ghostty, Kitty. Sur un terminal ancien, l'affichage se dégrade.
- **Le coût est variable par nature.** Pas d'abonnement fixe rassurant : tu paies à la requête. C'est souvent moins cher, mais moins prévisible — d'où l'intérêt des plafonds de dépense.
- **Zen héberge ses modèles aux États-Unis.** Rétention zéro annoncée et pas d'entraînement sur tes données, mais si la souveraineté est un critère pour toi, la vraie réponse d'OpenCode est ailleurs : **les modèles locaux**, que l'outil supporte nativement.
- **Le projet bouge vite.** 13 000 commits, une doc mise à jour en continu. C'est un signe de santé, mais tout tutoriel — celui-ci compris — a une durée de vie limitée.
- **Le desktop est en bêta.** À traiter comme tel.

## Mon verdict

OpenCode n'est pas l'agent le plus rapide, et il ne cherche pas à l'être. Il est **le plus libre**, et c'est un critère qui vieillit mieux que la vitesse : dans un domaine où les modèles, les prix et les conditions d'utilisation changent tous les trimestres, ne pas être verrouillé vaut cher.

Si tu veux tester sans t'engager, le chemin le plus court tient en trois lignes : installe, lance `/init` sur un projet que tu connais bien, et pose-lui une question sur du code que tu as écrit il y a six mois. Sa réponse te dira en cinq minutes si l'outil est fait pour toi.

Je le garde en veille active — et je referai un point dans quelques mois, vu le rythme.
