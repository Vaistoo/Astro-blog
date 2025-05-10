---
title: Theme Guide
published: 2025-01-26
updated: 2025-04-13
tags:
  - Blog Theme
  - Guide
pin: 99
lang: en
abbrlink: theme-guide
---

Retypeset is a static blog theme based on the [Astro](https://astro.build/) framework. This guide introduces how to modify theme configuration and create new articles, helping you quickly set up your personal blog.

## Theme Configuration

Customize your blog by modifying the configuration file [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts).

### Site Information

```ts
site: {
  // site title
  title: 'Retypeset'
  // site subtitle
  subtitle: 'Revive the beauty of typography'
  // site description
  description: 'Retypeset is a static blog theme...'
  // use i18n title/subtitle/description from src/i18n/ui.ts instead of static ones above
  i18nTitle: true // true, false
  // author name
  author: 'radishzz'
  // site url
  url: 'https://retypeset.radishzz.cc'
  // favicon url
  // recommended formats: svg, png or ico
  favicon: '/icons/favicon.svg' // or https://example.com/favicon.svg
}
```

### Theme Color

```ts
color: {
  // default theme mode
  mode: 'light' // light, dark, auto
  // light mode
  light: {
    // primary color
    // used for title, hover, etc
    primary: 'oklch(25% 0.005 298)'
    // secondary color
    // used for post text
    secondary: 'oklch(40% 0.005 298)'
    // background color
    background: 'oklch(96% 0.005 298)'
  }
  // dark mode
  dark: {
    // primary color
    primary: 'oklch(92% 0.005 298)'
    // secondary color
    secondary: 'oklch(77% 0.005 298)'
    // background color
    background: 'oklch(22% 0.005 298)'
  }
}
```

### Global Settings

```ts
global: {
  // default language
  // language of the site root path '/'
  locale: 'zh' // zh, zh-tw, ja, en, es, ru, pt
  // more languages
  // generate multi-language paths such as '/es/' '/ru/'
  // not fill in the locale code above again, can be an empty array []
  moreLocales: ['zh-tw', 'ja', 'en', 'es', 'ru'] // ['zh', 'zh-tw', 'ja', 'en', 'es', 'ru', 'pt']
  // font style
  fontStyle: 'sans' // sans, serif
  // date format for posts
  // 2025-04-13, 04-13-2025, 13-04-2025, Apr 13 2025，13 Apr 2025
  // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  dateFormat: 'YYYY-MM-DD'
  // enable KaTeX for mathematical formulas rendering
  katex: true // true, false
}
```

### Comment System

```ts
comment: {
  // enable comment system
  enabled: true // true, false
  // waline comment system
  waline: {
    // server url
    serverURL: 'https://retypeset-comment.radishzz.cc'
    // emoji url
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // more emojis: https://waline.js.org/en/guide/features/emoji.html
    ]
    // gif search
    search: false // true, false
    // image uploader
    imageUploader: false // true, false
  }
}
```

### SEO

```ts
seo: {
  // @twitter ID
  twitterID: '@radishzz_'
  // site verification
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
  // apiflash access key
  // automatically generate website screenshots for open graph images
  // get your access key at: https://apiflash.com/
  apiflashKey: ''
}
```

### Footer Settings

```ts
footer: {
  // social links
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
  // year of website start
  startYear: 2024
}
```

### Preload Resources

```ts
preload: {
  // link prefetch strategies
  linkPrefetch: 'viewport' // hover, tap, viewport, load
  // comment server url
  commentURL: 'https://retypeset-comment.radishzz.cc'
  // image hosting url
  imageHostURL: 'https://image.radishzz.cc'
  // custom google analytics js
  // for users who route analytics javascript to a customized domain
  customGoogleAnalyticsJS: ''
  // custom umami analytics js
  // for users who deploy umami on their own, or route analytics javascript to a customized domain
  customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js'
}
```

## Additional Configuration

Besides the configuration file `src/config.ts`, some configuration options are located in other files.

### Syntax Highlighting

Code block syntax highlighting themes.

```ts
// astro.config.ts

shikiConfig: {
  // Available themes: https://shiki.style/themes
  // Background color follows the blog theme by default, not the syntax highlighting theme
  themes: {
    light: 'github-light' // Light theme
    dark: 'github-dark' // Dark theme
  }
}
```

### Article Excerpt

Character count for automatic article excerpts.

```ts
// src/utils/description.ts

const EXCERPT_LENGTHS: Record<ExcerptScene, {
  cjk: number // Chinese, Japanese, Korean
  other: number // Other languages
}> = {
  list: { // Homepage post list
    cjk: 120, // Auto-excerpts first 120 characters
    other: 240, // Auto-excerpts first 240 characters
  },
}
```

### Open Graph

Open Graph social image styles.

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // Required local path and PNG format
    size: [250], // Logo width
  },
  font: {
    title: { // Title
      families: ['Noto Sans SC'], // Font
      weight: 'Bold', // Weight
      color: [34, 33, 36], // Color
      lineHeight: 1.5, // Line height
    },
  },
  fonts: [ // Font paths (local or remote)
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // Background color
  // More configurations: https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### RSS Feed

RSS feed page styles.

```html
<!-- public/rss/rss-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* Font color */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* Background color */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* Secondary font color */
</style>
```

## Creating a New Post

Create a new file with `.md` or `.mdx` extension in the `src/content/posts/` directory, and add `Front Matter` metadata at the top of the file.

### Front Matter

```markdown
---
# Required
title: Theme Guide
published: 2025-01-26

# Optional
description: The first 240 characters of the article will be automatically selected as the excerpt.
updated: 2025-03-26
tags:
  - Blog Theme
  - Guide

# Advanced, Optional
draft: true/false
pin: 1-99
toc: true/false
lang: en/es/ru/zh/zh-tw/ja
abbrlink: theme-guide
---
```

### Advanced Configuration

#### draft

Marks the article as a draft. When set to true, the article cannot be published and is only available for local development preview. Default is false.

#### pin

Pins the article to the top. The higher the number, the higher the priority of the pinned article. Default is 0, which means not pinned.

#### toc

Generate table of contents. Shows h2 to h4 headings. Default is true.

#### lang

Specifies the article language. Only one language can be specified. If not specified, the article will be displayed in all language paths by default.

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

Customizes the article URL. Can only contain lowercase letters, numbers, and hyphens `-`.

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
