---
title: "Champs de vecteurs : dessiner le vent en canvas"
date: 2026-07-12
category: CREATIVE DEV
excerpt: "Un champ de vecteurs, quatre vortex et beaucoup de sinus : anatomie du fond animé de ce site."
---

Le fond animé de ce site n'est pas une vidéo, ni un shader WebGL : c'est un simple canvas 2D dans lequel quelques centaines de particules suivent un champ de vecteurs. À chaque frame, chaque particule demande au champ « quelle est la direction du vent ici ? », avance d'un pas, et laisse derrière elle un trait d'un pixel. L'accumulation de ces traits — jamais totalement effacés, juste voilés par un noir semi-transparent — donne cette impression de fumée qui s'étire.

## Le champ

Le cœur du système tient en quelques lignes : une combinaison de sinus et de cosinus qui varie lentement dans le temps, à laquelle s'ajoutent quatre vortex qui tournent chacun à leur rythme.

```js
let vx = Math.sin(y * 0.006 + t * 0.5) * 0.34;
let vy = Math.cos(x * 0.005 - t * 0.4) * 0.3;
```

Chaque vortex est une gaussienne : son influence décroît exponentiellement avec la distance. En le faisant dériver lentement — son centre suit lui-même une petite orbite — on obtient des masses d'air qui se déplacent, fusionnent, se séparent.

## Le rendu basse résolution

L'astuce la plus efficace du fichier n'est pas mathématique : le canvas est rendu à 40 % de sa taille d'affichage, puis flouté en CSS. On divise le nombre de pixels à peindre par six, et le flou transforme la basse résolution en douceur volontaire. La couleur de chaque trait dépend de la vitesse locale du vent : bleu profond quand l'air est calme, orange quand ça accélère — exactement comme une carte météo.

Le tout se met en pause quand l'onglet est caché, et se fige en une image fixe si vous avez activé « réduire les animations ». Un fond animé n'a pas besoin de tourner quand personne ne le regarde.
