---
title: "Tuto : monter sa stack IA locale pour remplacer ses abonnements"
date: 2026-08-09
category: TUTO
excerpt: "Ollama, Open WebUI, Hugging Face et ComfyUI : quatre briques gratuites, installables en un quart d'heure. Ce qu'elles remplacent vraiment, et ce qu'elles ne remplacent pas."
---

Deux abonnements IA à une vingtaine d'euros par mois, c'est environ 500 € par an. La promesse de l'IA locale, c'est de ramener ce montant à zéro — au prix d'un peu de matériel et d'un après-midi de configuration.

Je vais être direct sur la conclusion avant même de commencer : **ça remplace une grande partie de tes abonnements, pas la totalité.** Le reste de l'article explique où passe exactement la frontière.

## Qui fait quoi

Ces quatre outils sont complémentaires, pas concurrents. C'est le point que tout le monde rate au départ.

| Outil | Rôle |
|---|---|
| **Ollama** | Le moteur. Il télécharge les modèles et les fait tourner. |
| **Open WebUI** | L'interface. Un ChatGPT auto-hébergé, dans ton navigateur. |
| **Hugging Face** | Le catalogue. Là où vivent les modèles et leurs licences. |
| **ComfyUI** | L'atelier images. Génération visuelle, en nœuds. |

En résumé : Ollama fait tourner, Open WebUI rend utilisable, Hugging Face fournit, ComfyUI dessine.

## Installation : un quart d'heure, trois commandes

**1. Le moteur.** Ollama s'installe comme un logiciel normal, sur macOS, Windows et Linux. Ensuite, un modèle se récupère en une ligne :

```
ollama pull gpt-oss:20b
ollama run gpt-oss:20b
```

Tu as déjà un ChatGPT dans ton terminal. Ollama expose au passage une **API compatible OpenAI sur `localhost:11434`** — retiens ce détail, c'est lui qui rend tout le reste possible.

**2. L'interface.** Open WebUI se lance en une commande Docker :

```
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui --restart always \
  ghcr.io/open-webui/open-webui:main
```

Tu ouvres `http://localhost:3000`, tu crées ton compte, tes modèles apparaissent. Si rien ne se connecte, c'est presque toujours `OLLAMA_BASE_URL` à régler sur `http://host.docker.internal:11434`.

Un conseil issu de l'expérience générale : **fais tourner Ollama nativement, pas dans Docker**, en particulier sur Mac — le passthrough GPU Metal n'existe pas dans Docker, et ton M3 se met à travailler comme un portable de 2015.

**3. Les images.** ComfyUI se récupère sur [comfy.org](https://comfy.org/). L'application Desktop a été refondue en 2026 en un lanceur unique qui gère les instances locales, distantes et portables. Attention : **il n'existe pas d'installeur Linux prêt à l'emploi** à ce jour — sous Linux, l'installation reste manuelle.

Au premier lancement, prends un modèle dans les *Templates* : ComfyUI télécharge tout seul ce qu'il lui manque. Et le ComfyUI Manager propose d'installer automatiquement les nœuds absents quand tu ouvres le workflow de quelqu'un d'autre.

## Choisir son modèle : tout dépend de la VRAM

C'est la seule décision technique qui compte vraiment. La quantification (Q4 par défaut chez Ollama) compresse le modèle avec une perte minime : un 7B en Q4 tient dans 4 à 5 Go.

| Mémoire dispo | Ce qui tourne confortablement |
|---|---|
| 8 Go | Modèles 7-8B — reformulation, résumé, chat courant |
| 16 Go | `gpt-oss:20b`, modèles 14-20B — le bon rapport qualité/accessibilité |
| 24 Go | Qwen 3.6 27B en Q4 — le meilleur choix grand public actuel |
| 48 Go+ | Llama 3.3 70B et les gros MoE |

Côté vitesse, l'ordre de grandeur relevé sur un MacBook M2 Pro 16 Go : environ 45-55 tokens/s sur un modèle 3B, 22-28 sur un 8B, et 9-12 sur un 14B — utilisable en chat, pénible en traitement par lots. Sur une RTX 4070, on est plutôt autour de 60-80 tokens/s.

Pour les images, même logique : SD 1.5 tourne sur 4 Go, SDXL demande 6 à 8 Go, FLUX.1 Dev au moins 10-12 Go. **FLUX.2 [klein]**, sorti en janvier 2026, est le bon compromis actuel : 4 milliards de paramètres distillés, licence Apache 2.0 réellement commerciale, environ 13 Go de VRAM, et une génération en moins d'une seconde sur une carte grand public.

Hugging Face intervient ici : c'est là que tu trouves les poids, les variantes quantifiées et surtout **les licences**. Ollama sait d'ailleurs tirer directement un modèle GGUF depuis le Hub, sans passer par sa propre bibliothèque.

## Points forts

- **Le coût marginal est nul.** Une fois le modèle sur le disque, tu génères autant que tu veux. Plus de crédits, plus de quotas, plus de « vous avez atteint votre limite ».
- **Rien ne sort de la machine.** Pour du contrat, du dossier client, du code propriétaire ou des données médicales, c'est la seule réponse sérieuse — et ça vaut aussi pour la souveraineté au sens large, sujet que j'ai déjà creusé ici.
- **Ça marche hors-ligne.** Seul le téléchargement initial demande une connexion.
- **Le RAG est intégré.** Open WebUI découpe et indexe tes PDF, Word ou Markdown dans une collection interrogeable, en local.
- **C'est interopérable.** L'API compatible OpenAI d'Ollama se branche sur à peu près tout — y compris [OpenCode](https://opencode.ai/fr), dont je parlais récemment.
- **Aucun filtre commercial** sur ce que tu génères, et pas de facturation à l'image.

## Points faibles

- **L'écart de qualité est réel sur le haut du panier.** Sur les tâches de raisonnement les plus dures, les modèles cloud gardent une avance nette. En codage, les modèles locaux couvrent bien 70 à 80 % du quotidien — autocomplétion, refactoring, documentation, débogage — mais les benchmarks les plus exigeants restent dominés par les modèles propriétaires.
- **Le « gratuit » commence par un achat.** Sans GPU correct, tu tournes sur CPU et l'expérience est décevante. Le point d'entrée sérieux reste une carte 16-24 Go.
- **Ça consomme.** Un GPU sous charge, c'est plusieurs centaines de watts. Sur l'usage occasionnel, l'argument écologique du local n'est pas automatique : un serveur mutualisé est mieux utilisé qu'une machine allumée pour trois requêtes.
- **La maintenance est un coût caché.** Mises à jour, images Docker, modèles à retélécharger, workflows qui cassent. Compte quelques heures par trimestre.
- **Les licences sont un piège.** Sur les modèles d'image notamment, certaines imposent un plafond de chiffre d'affaires ou une clause strictement non commerciale. Lis la fiche du modèle **avant** de livrer à un client.
- **La vidéo reste hors de portée.** Compter environ 24 Go de VRAM et 4 à 8 minutes de rendu sur une RTX 4090 pour cinq secondes de clip.

## Alors, ça remplace les abonnements ?

Fais le calcul honnêtement. Si tu paies 40 €/mois de services IA, ça fait 480 €/an — soit à peu près le prix d'une RTX 3090 d'occasion, qui te servira plusieurs années. L'amortissement se joue autour de la première année, à condition d'avoir déjà une machine autour.

Et la réponse dépend surtout de l'usage :

- **La génération d'images : oui, sans hésiter.** C'est là que le local écrase le modèle par abonnement, parce que le coût par image tombe à zéro et que tu contrôles tout.
- **Le chat quotidien : oui à 80 %.** Reformuler, résumer, traduire, brainstormer, interroger tes propres documents — un bon modèle 20-27B fait le travail.
- **Le raisonnement complexe et les gros projets : non, pas encore.** C'est le dernier bastion.

Ma recommandation est donc **hybride, et assumée** : monte la stack locale pour tout le volume — c'est-à-dire l'immense majorité de tes requêtes — et garde un seul abonnement pour les 20 % de cas difficiles. Tu passes de deux ou trois abonnements à un, ce qui est déjà une belle économie, et surtout tu récupères la maîtrise de tes données.

Commence petit : installe Ollama, lance `ollama run gpt-oss:20b`, et teste sur ton vrai cas d'usage. Si ça suffit, tu n'as besoin de rien d'autre.
