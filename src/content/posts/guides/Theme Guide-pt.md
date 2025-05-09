---
title: Guia de Tema
published: 2025-05-09
updated: 2025-05-09
tags:
  - Tema Blog
  - Guia
pin: 99
lang: pt
abbrlink: theme-guide
---

Retypeset é um tema blog estático baseado no _framework_ [Astro](https://astro.build/). Este guia introduz a configuração do tema e como criar novos artigos, ajudando você a configurar rapidamente o seu blog pessoal.

## Configuração do Tema

Personalize seu blog modificando o arquivo de configuração [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts).

### Informação do Site

```ts
site: {
  // título do site
  title: 'Retypeset'
  // subtítulo do site
  subtitle: 'Reviva a beleza da tipografia'
  // descrição do site
  description: 'Retypeset é um tema blog estático...'
  // use a descrição i18n de title/subtitle/description de src/i18n/ui.ts em vez de as estáticas acima
  i18nTitle: true // true, false
  // nome do autor
  author: 'radishzz'
  // url do site
  url: 'https://retypeset.radishzz.cc'
  // url favicon
  // formatos recomendados: svg, png ou ico
  favicon: '/icons/favicon.svg' // ou https://example.com/favicon.svg
}
```

### Cor do Tema

```ts
color: {
  // modo padrão do tema
  mode: 'light' // claro, escuro, automático
  // modo claro
  light: {
    // cor primária
    // usada para título, hover, etc
    primary: 'oklch(25% 0.005 298)'
    // cor secundária
    // usado para texto das postagens
    secondary: 'oklch(40% 0.005 298)'
    // cor de fundo
    background: 'oklch(96% 0.005 298)'
  }
  // modo escuro
  dark: {
    // cor primária
    primary: 'oklch(92% 0.005 298)'
    // cor secundária
    secondary: 'oklch(77% 0.005 298)'
    // cor de fundo
    background: 'oklch(22% 0.005 298)'
  }
}
```

### Configurações Globais

```ts
global: {
  // linguagem padrão
  // linguagem do site no caminho raiz '/'
  locale: 'zh' // zh, zh-tw, ja, en, es, ru, pt
  // mais línguas
  // gere caminhos multilingues como '/es/' '/ru/'
  // não inclua o código do locale acima novamente, pode ser um array vazio []
  moreLocales: ['zh-tw', 'ja', 'en', 'es', 'ru', 'pt'] // ['zh', 'zh-tw', 'ja', 'en', 'es', 'ru', 'pt']
  // estilo de fonte
  fontStyle: 'sans' // sans, serif
  // formato de data para postagens
  // 2025-04-13, 04-13-2025, 13-04-2025, Mar 13 2025，13 Mar 2025
  dateFormat: 'YYYY-MM-DD' // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  // habilitar KaTeX para processamento de fórmulas matemáticas
  katex: true // true, false
}
```

### Sistema de Comentários

```ts
comment: {
  // habilitar sistema de comentários
  enabled: true // true, false
  // sistema de comentários waline
  waline: {
    // url do servidor
    serverURL: 'https://retypeset-comment.radishzz.cc'
    // url emoji
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // mais emojis: https://waline.js.org/en/guide/features/emoji.html
    ]
    // pesquisa gif
    search: false // true, false
    // uploader de imagem
    imageUploader: false // true, false
  }
}
```

### SEO

```ts
seo: {
  // ID @twitter
  twitterID: '@radishzz_'
  // verificação do site
  verification: {
    // google search console
    google: 'AUCrz5F1e5qbnmKKDXl2Sf8u6y0kOpEO1wLs6HMMmlM'
    // bing webmaster tools
    bing: '64708CD514011A7965C84DDE1D169F87'
    // yandex webmaster
    yandex: ''
    // baidu search
    baidu: ''
  }
  // google analytics
  googleAnalyticsID: ''
  // umami analytics
  umamiAnalyticsID: '520af332-bfb7-4e7c-9386-5f273ee3d697'
  // follow verification
  follow: {
    // feed ID
    feedID: ''
    // user ID
    userID: ''
  }
  // chave de acesso apiflash
  // gere automaticamente capturas de tela do site para imagens open graph
  // obtenha sua chave de acesso em: https://apiflash.com/
  apiflashKey: ''
}
```

### Configurações de Rodapé

```ts
footer: {
  // links sociais
  links: [
    {
      name: 'RSS',
      url: '/rss.xml', // rss.xml, atom.xml
    },
    {
      name: 'GitHub',
      url: 'https://github.com/radishzzz/astro-theme-retypeset',
    },
    {
      name: 'X',
      url: 'https://x.com/radishzz_',
    },
    // {
    //   name: 'Email',
    //   url: 'https://example@gmail.com',
    // }
  ]
  // ano do início do website
  startYear: 2024
}
```

### Pré-carregamento de Recursos

```ts
preload: {
  // estratégias para buscar links antecipadamente
  linkPrefetch: 'viewport' // hover, tap, viewport, load
  // url do servidor de comentários
  commentURL: 'https://retypeset-comment.radishzz.cc'
  // url da hospedagem de imagens
  imageHostURL: 'https://image.radishzz.cc'
  // google analytics js personalizado
  // para usuários que direcionam o javascript analytics para um domínio personalizado
  customGoogleAnalyticsJS: ''
  // umami analytics js personalizado
  // para usuários que publicam umami independemente, ou direcionam javascript analytics para um domínio personalizado
  customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js'
}
```

## Configuração Adicional

Além do arquivo de configuração `src/config.ts`, algumas opcões de configuração estão localizadas em outros arquivos.

### Destacamento de Sintaxe

Temas de destacamento de sintaxe para blocos de código.

```ts
// astro.config.ts

shikiConfig: {
  // Temas disponíveis: https://shiki.style/themes
  // Cor de fundo segue o tema blog por padrão, não o tema de destacamento de sintaxe
  themes: {
    light: 'github-light' // Tema claro
    dark: 'github-dark' // Tema escuro
  }
}
```

### Excerto de Artigo

Contagem de caracteres automático para excertos de artigo.

```ts
// src/utils/description.ts

const EXCERPT_LENGTHS: Record<ExcerptScene, {
  cjk: number // Chinês, Japonês, Coreano
  other: number // Outras línguas
}> = {
  list: { // Lista de artigos da página inicial
    cjk: 120, // Excerto automático dos primeiros 120 caracteres
    other: 240, // Excerto automático dos primeiros 240 caracteres
  },
}
```

### Open Graph

Estilos de imagem social Open Graph

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // Caminho local e formato PNG exigido
    size: [250], // Largura de logo
  },
  font: {
    title: { // Título
      families: ['Noto Sans SC'], // Fonte
      weight: 'Bold', // Peso
      color: [34, 33, 36], // Cor
      lineHeight: 1.5, // Altura de linha
    },
  },
  fonts: [ // Caminhos de fonte (local ou remoto)
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // Cor de fundo
  // Mais configurações: https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### Feed RSS

Estilos de página de feed RSS.

```html
<!-- public/rss/rss-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* Cor de fonte */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* Cor de fundo */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* Cor secundária de fonte */
</style>
```

## Criando uma Nova Postagem

Crie um novo arquivo com a extensão `.md` ou `.mdx` em seu diretório `src/content/posts/`, e adicione os metadados `Front Matter` no topo do arquivo.

### Front Matter

```markdown
---
# Exigido
title: Theme Guide
published: 2025-01-26

# Opcional
description: The first 240 characters of the article will be automatically selected as the excerpt.
updated: 2025-03-26
tags:
  - Blog Theme
  - Guide

# Avançado, Opcional
draft: true/false
pin: 1-99
toc: true/false
lang: en/es/ru/zh/zh-tw/ja
abbrlink: theme-guide
---
```

### Configuração Avançada

#### draft

Marca o artigo como rascunho. Ao definir como verdadeiro, o artigo não pode ser publicado e estará apenas disponível como prévia em desenvolvimento local. O padrão é false.

#### pin

Fixa o artigo no topo. Quanto maior o número, maior a prioridade do artigo fixado. O padrão é 0, que significa não fixado.

#### toc

Gera um índice. Mostra os cabeçalhos h2 até h4. O padrão é true.

#### lang

Especifica a língua do artigo. Apenas uma língua pode ser especificada. Se não especificado, o artigo será mostrado em todos os idiomas por padrão.

```md
# src/config.ts
# locale: 'en'
# moreLocales: ['es', 'ru']

# lang: ''
src/content/posts/apple.md   -> example.com/posts/apple/
                             -> example.com/es/posts/apple/
                             -> example.com/ru/posts/apple/
# lang: en
src/content/posts/apple.md   -> example.com/posts/apple/
# lang: es
src/content/posts/apple.md   -> example.com/es/posts/apple/
# lang: ru
src/content/posts/apple.md   -> example.com/ru/posts/apple/
```

#### abbrlink

Personaliza a URL do artigo. Pode conter apenas caracteres minúsculos, números e hífens `-`.

```md
# src/config.ts
# locale: 'en'
# moreLocales: ['es', 'ru']
# lang: 'es'

# abbrlink: ''
src/content/posts/apple.md           ->  example.com/es/posts/apple/
src/content/posts/guide/apple.md     ->  example.com/es/posts/guide/apple/
src/content/posts/2025/03/apple.md   ->  example.com/es/posts/2025/03/apple/

# abbrlink: 'banana'
src/content/posts/apple.md           ->  example.com/es/posts/banana/
src/content/posts/guide/apple.md     ->  example.com/es/posts/banana/
src/content/posts/2025/03/apple.md   ->  example.com/es/posts/banana/
```
