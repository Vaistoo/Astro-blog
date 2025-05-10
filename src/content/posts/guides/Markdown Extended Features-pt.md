---
title: Funcionalidades Markdown Estendidas
published: 2025-04-25
tags:
  - Guia
toc: false
lang: pt
abbrlink: markdown-extended-features
---

Aqui estão alguns recursos estendidos do Markdown suportados pelo Retypeset, incluindo exemplos de sintaxe e seus efeitos estilísticos.

## Legendas de Figuras

Para criar legendas de figuras automáticas, use a sintaxe padrão de imagem do Markdown `![alt](src)`. Para ocultar a legenda, adicione um sublinhado `_` antes do texto `alt` ou deixe o texto `alt` vazio.

### Sintaxe

```
![Descrição da imagem](./full/or/relative/path/of/image)

![_Descrição da imagem](./full/or/relative/path/of/image)
```

### Saída

![Descrição da imagem](https://image.radishzz.cc/image/gallery/06.webp)

![_Descrição da imagem](https://image.radishzz.cc/image/gallery/06.webp)

## Cartões de Repositório Github

Para criar um cartão de repositório Github, use a sintaxe de dois pontos `::github{repo="owner/repo"}`. Os dados do repositório são buscados da API do GitHub após o carregamento da página.

### Sintaxe

```
::github{repo="radishzzz/astro-theme-retypeset"}
```

### Output

::github{repo="radishzzz/astro-theme-retypeset"}

## Admoestação

Para criar blocos de admoestação, use a sintaxe GitHub `> [!TIPO]` ou a sintaxe de três pontos `:::tipo`. Os seguintes tipos são suportados: `note`, `tip`, `important`, `warning` e `caution`.

### Sintaxe

```
> [!NOTE]
> Informações úteis que os usuários devem saber, mesmo ao percorrer o conteúdo rapidamente.

:::note
Informações úteis que os usuários devem saber, mesmo ao percorrer o conteúdo rapidamente.
:::

:::note[SEU TÍTULO PERSONALIZADO]
Esta é uma nota com um título personalizado.
:::
```

### Saída

> [!NOTE]
> Informações úteis que os usuários devem saber, mesmo ao percorrer o conteúdo rapidamente.

> [!TIP]
> Conselho útil para fazer as coisas melhor ou mais facilmente.

> [!IMPORTANT]
> Informações importantes que os usuários precisam saber para atingir seu objetivo.

:::warning
Informações urgentes que precisam da atenção imediata do usuário para evitar problemas.
:::

:::caution
Avisa sobre riscos ou resultados negativos de certas ações.
:::

:::note[SEU TÍTULO PERSONALIZADO]
Esta é uma nota com um título personalizado.
:::
