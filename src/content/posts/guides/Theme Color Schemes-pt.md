---
title: Esquemas de Cor de Tema
published: 2025-04-11
tags:
  - Guia
toc: false
lang: pt
abbrlink: theme-color-schemes
---

Retypeset define esquemas de cores de tema baseados no espaço de cores [OKLCH](https://oklch.com/), com um esquema de cores padrão preto, branco e cinza que simula um estilo de impressão.

Para atender às necessidades de personalização, criei vários esquemas de cores para o tema. Você pode substituir o esquema de cores padrão em [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts) e **reiniciar o servidor de desenvolvimento** para visualizar o novo esquema de cores.

## Branco

![Modo claro](../../../assets/images/1-light.jpeg)
![Modo escuro](../../../assets/images/1-dark.jpeg)

```
light: {
  primary: 'oklch(0.25 0.03 211.86)',
  secondary: 'oklch(0.40 0.03 211.86)',
  background: 'oklch(0.99 0.0039 106.47)',
},
dark: {
  primary: 'oklch(0.92 0.0015 106.47)',
  secondary: 'oklch(0.79 0.0015 106.47)',
  background: 'oklch(0.24 0.0039 106.47)',
},
```

## Verde Azulado

![Modo claro](../../../assets/images/2-light.jpeg)
![Modo escuro](../../../assets/images/2-dark.jpeg)

```
light: {
  primary: 'oklch(0.24 0.0172 280.05)',
  secondary: 'oklch(0.40 0.0172 280.05)',
  background: 'oklch(0.98 0.0172 280.05)',
},
dark: {
  primary: 'oklch(0.92 0.0172 280.05)',
  secondary: 'oklch(0.79 0.0172 280.05)',
  background: 'oklch(0.24 0.0172 280.05)',
},
```

## Tinta Azul

![Modo claro](../../../assets/images/4-light.jpeg)
![Modo escuro](../../../assets/images/4-dark.jpeg)

```
light: {
  primary: 'oklch(0.24 0.053 261.24)',
  secondary: 'oklch(0.39 0.053 261.24)',
  background: 'oklch(1 0 0)',
},
dark: {
  primary: 'oklch(0.92 0 0)',
  secondary: 'oklch(0.79 0 0)',
  background: 'oklch(0.24 0.016 265.21)',
},
```

## Cru

![Modo claro](../../../assets/images/3-light.jpeg)
![Modo escuro](../../../assets/images/3-dark.jpeg)

```
light: {
  primary: 'oklch(0.25 0 0)',
  secondary: 'oklch(0.41 0 0)',
  background: 'oklch(0.95 0.0237 59.39)',
},
dark: {
  primary: 'oklch(0.93 0.019 59.39)',
  secondary: 'oklch(0.80 0.017 59.39)',
  background: 'oklch(0.23 0 0)',
},
```
