---
title: Руководство по теме
published: 2025-01-26
updated: 2025-04-13
tags:
  - Тема блога
  - Руководство
pin: 99
lang: ru
abbrlink: theme-guide
---

Retypeset — это статическая тема блога, основанная на фреймворке [Astro](https://astro.build/). Данное руководство знакомит с тем, как изменять настройки темы и создавать новые статьи, помогая вам быстро настроить личный блог.

## Конфигурация темы

Настройте свой блог путем изменения конфигурационного файла [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts).

### Информация о сайте

```ts
site: {
  // заголовок сайта
  title: 'Retypeset'
  // подзаголовок сайта
  subtitle: 'Revive the beauty of typography'
  // описание сайта
  description: 'Retypeset is a static blog theme...'
  // использовать многоязычные заголовок/подзаголовок/описание из src/i18n/ui.ts вместо статических выше
  i18nTitle: true // true, false
  // имя автора
  author: 'radishzz'
  // адрес сайта
  url: 'https://retypeset.radishzz.cc'
  // url фавикона
  // рекомендуемые форматы: svg, png или ico
  favicon: '/icons/favicon.svg' // или https://example.com/favicon.svg
}
```

### Цвет темы

```ts
color: {
  // режим темы по умолчанию
  mode: 'light' // light, dark, auto
  // светлый режим
  light: {
    // основной цвет
    // используется для заголовков, эффекта наведения и т.д.
    primary: 'oklch(25% 0.005 298)'
    // вторичный цвет
    // используется для текста постов
    secondary: 'oklch(40% 0.005 298)'
    // цвет фона
    background: 'oklch(96% 0.005 298)'
  }
  // темный режим
  dark: {
    // основной цвет
    primary: 'oklch(92% 0.005 298)'
    // вторичный цвет
    secondary: 'oklch(77% 0.005 298)'
    // цвет фона
    background: 'oklch(22% 0.005 298)'
  }
}
```

### Глобальные настройки

```ts
global: {
  // язык по умолчанию
  // язык корневого пути сайта '/'
  locale: 'zh' // zh, zh-tw, ja, en, es, ru, pt
  // дополнительные языки
  // создает многоязычные пути, такие как '/es/' '/ru/'
  // не указывайте код языка, указанный выше, можно оставить пустым массивом []
  moreLocales: ['zh-tw', 'ja', 'en', 'es', 'ru', 'pt'] // ['zh', 'zh-tw', 'ja', 'en', 'es', 'ru', 'pt']
  // стиль шрифта
  fontStyle: 'sans' // sans, serif
  // формат даты для постов
  // 2025-04-13, 04-13-2025, 13-04-2025, Apr 13 2025，13 Apr 2025
  // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  dateFormat: 'YYYY-MM-DD'
  // включить KaTeX для отображения математических формул
  katex: true // true, false
}
```

### Система комментариев

```ts
comment: {
  // включить систему комментариев
  enabled: true // true, false
  // система комментариев waline
  waline: {
    // URL сервера
    serverURL: 'https://retypeset-comment.radishzz.cc'
    // URL эмодзи
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // дополнительные эмодзи: https://waline.js.org/en/guide/features/emoji.html
    ]
    // поиск gif
    search: false // true, false
    // загрузчик изображений
    imageUploader: false // true, false
  }
}
```

### SEO

```ts
seo: {
  // @twitter ID
  twitterID: '@radishzz_'
  // верификация сайта
  verification: {
    // консоль поиска Google
    google: 'AUCrz5F1e5qbnmKKDXl2Sf8u6y0kOpEO1wLs6HMMmlM'
    // инструменты вебмастера Bing
    bing: '64708CD514011A7965C84DDE1D169F87'
    // вебмастер Яндекса
    yandex: ''
    // поиск Baidu
    baidu: ''
  }
  // Google Analytics
  googleAnalyticsID: ''
  // Umami Analytics
  umamiAnalyticsID: '520af332-bfb7-4e7c-9386-5f273ee3d697'
  // верификация подписки
  follow: {
    // ID ленты
    feedID: ''
    // ID пользователя
    userID: ''
  }
  // ключ доступа apiflash
  // автоматически генерирует скриншоты веб-сайта для изображений Open Graph
  // получите ключ доступа на: https://apiflash.com/
  apiflashKey: ''
}
```

### Настройки подвала

```ts
footer: {
  // социальные ссылки
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
  // год начала работы веб-сайта
  startYear: 2024
}
```

### Предзагрузка ресурсов

```ts
preload: {
  // стратегии предзагрузки ссылок
  linkPrefetch: 'viewport' // hover, tap, viewport, load
  // URL сервера комментариев
  commentURL: 'https://retypeset-comment.radishzz.cc'
  // URL хостинга изображений
  imageHostURL: 'https://image.radishzz.cc'
  // пользовательский скрипт Google Analytics
  // для пользователей, которые направляют JavaScript аналитики на собственный домен
  customGoogleAnalyticsJS: ''
  // пользовательский скрипт Umami Analytics
  // для пользователей, которые развертывают Umami самостоятельно или направляют JavaScript аналитики на собственный домен
  customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js'
}
```

## Дополнительная конфигурация

Кроме файла конфигурации `src/config.ts`, некоторые параметры находятся в других файлах.

### Подсветка синтаксиса

Темы подсветки синтаксиса для блоков кода.

```ts
// astro.config.ts

shikiConfig: {
  // Доступные темы: https://shiki.style/themes
  // Цвет фона по умолчанию следует теме блога, а не теме подсветки синтаксиса
  themes: {
    light: 'github-light' // Светлая тема
    dark: 'github-dark' // Темная тема
  }
}
```

### Отрывок статьи

Количество символов для автоматических отрывков статей.

```ts
// src/utils/description.ts

const EXCERPT_LENGTHS: Record<ExcerptScene, {
  cjk: number // Китайский, Японский, Корейский
  other: number // Другие языки
}> = {
  list: { // Список записей на главной странице
    cjk: 120, // Автоматически берет первые 120 символов
    other: 240, // Автоматически берет первые 240 символов
  },
}
```

### Open Graph

Стили изображений Open Graph для социальных сетей.

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // Требуется локальный путь и формат PNG
    size: [250], // Ширина логотипа
  },
  font: {
    title: { // Заголовок
      families: ['Noto Sans SC'], // Шрифт
      weight: 'Bold', // Вес
      color: [34, 33, 36], // Цвет
      lineHeight: 1.5, // Высота строки
    },
  },
  fonts: [ // Пути к шрифтам (локальные или удаленные)
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // Цвет фона
  // Дополнительные настройки: https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### RSS-лента

Стили страницы RSS-ленты.

```html
<!-- public/rss/rss-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* Цвет шрифта */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* Цвет фона */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* Вторичный цвет шрифта */
</style>
```
