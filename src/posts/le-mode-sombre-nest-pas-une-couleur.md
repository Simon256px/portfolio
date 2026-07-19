---
title: "Le mode sombre n'est pas une couleur"
date: 2026-05-21
category: DESIGN
excerpt: "Choisir des noirs chauds, doser les accents : carnet de palette de ce site."
---

Le fond de ce site n'est pas noir. C'est un `#0A0A0C` — un presque-noir tiré vers le bleu, à peine. À côté, le texte n'est pas blanc : `#E9E9E4`, un blanc cassé qui tire vers le chaud. Ces deux choix minuscules font tout le climat de la page, et c'est de ça que je veux parler : le mode sombre n'est pas une inversion, c'est une palette à part entière.

## Le noir pur est un trou

Un `#000000` sur un écran OLED est littéralement un pixel éteint. Posez du texte `#FFFFFF` dessus et vous obtenez le contraste maximal que la physique autorise — et une vibration désagréable sur les bords des lettres, surtout en petit corps. L'œil fatigue, les astigmates voient les glyphes baver. Remonter le fond de quelques pour cent et descendre le texte d'autant coûte presque rien en contraste (le ratio reste largement au-dessus des seuils WCAG) et retire toute la dureté.

## Une seule couleur qui crie

L'accent orange — `#D84122` — n'apparaît qu'en points minuscules : une pastille de 5 pixels dans la navigation, un battement sur « disponible », le survol des liens. C'est une règle que je me suis fixée : **une couleur saturée n'a d'autorité que si elle est rare**. Le jour où l'orange souligne trois boutons, deux titres et une bordure, il ne signale plus rien.

Le reste de la hiérarchie ne passe pas par la couleur mais par l'opacité : le même blanc cassé à 100 %, 55 %, 40 %, 32 % selon l'importance. Un seul pigment, quatre voix. C'est le plus vieux truc de l'imprimerie — l'encre ne change pas, la présence change — et il survit très bien au passage à l'écran.
