---
title: テーマ使用ガイド
published: 2025-01-26
updated: 2025-04-13
tags:
  - ブログテーマ
  - ガイド
pin: 99
lang: ja
abbrlink: theme-guide
---

Retypesetは、日本語では「再組版」と呼ばれる、[Astro](https://astro.build/) フレームワークをベースにした静的ブログテーマです。本ガイドではテーマの設定変更方法と新しい記事の作成方法を紹介し、個人ブログを素早く構築できるよう支援します。

## テーマ設定

設定ファイル [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts) を変更してあなたのブログをカスタマイズできます。

### サイト情報

```ts
site: {
  // サイトタイトル
  title: 'Retypeset'
  // サイトサブタイトル
  subtitle: 'Revive the beauty of typography'
  // サイト説明
  description: 'Retypeset is a static blog theme...'
  // 上記の静的設定の代わりに src/i18n/ui.ts の多言語タイトル/サブタイトル/説明を使用
  i18nTitle: true // true, false
  // 著者名
  author: 'radishzz'
  // サイトURL
  url: 'https://retypeset.radishzz.cc'
  // ファビコンURL
  // 推奨フォーマット: svg, png, ico
  favicon: '/icons/favicon.svg' // または https://example.com/favicon.svg
}
```

### テーマカラー

```ts
color: {
  // デフォルトテーマモード
  mode: 'light' // light, dark, auto
  // ライトモード
  light: {
    // プライマリカラー
    // サイトタイトル、ホバー効果などに使用
    primary: 'oklch(25% 0.005 298)'
    // セカンダリカラー
    // 通常テキストに使用
    secondary: 'oklch(40% 0.005 298)'
    // 背景色
    background: 'oklch(96% 0.005 298)'
  }
  // ダークモード
  dark: {
    // プライマリカラー
    primary: 'oklch(92% 0.005 298)'
    // セカンダリカラー
    secondary: 'oklch(77% 0.005 298)'
    // 背景色
    background: 'oklch(22% 0.005 298)'
  }
}
```

### グローバル設定

```ts
global: {
  // デフォルト言語
  // サイトのルートパス '/' の言語
  locale: 'zh' // zh, zh-tw, ja, en, es, ru, pt
  // その他の言語
  // '/ja/' '/en/' などの多言語パスを生成
  // デフォルト言語を重複して入力しないでください、空の配列 [] も可能です
  moreLocales: ['zh-tw', 'ja', 'en', 'es', 'ru', 'pt'] // ['zh', 'zh-tw', 'ja', 'en', 'es', 'ru', 'pt']
  // フォントスタイル
  fontStyle: 'sans' // sans, serif
  // 記事の日付フォーマット
  // 2025-04-13, 04-13-2025, 13-04-2025, Apr 13 2025，13 Apr 2025
  // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  dateFormat: 'YYYY-MM-DD'
  // 数式表示のためのKaTeXを有効化
  katex: true // true, false
}
```

### コメントシステム

```ts
comment: {
  // コメント機能を有効にする
  enabled: true // true, false
  // waline コメント
  waline: {
    // サーバー URL
    serverURL: 'https://retypeset-comment.radishzz.cc'
    // 絵文字 URL
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // その他の絵文字: https://waline.js.org/en/guide/features/emoji.html
    ]
    // gif 検索
    search: false // true, false
    // 画像アップローダー
    imageUploader: false // true, false
  }
}
```

### 検索エンジン最適化

```ts
seo: {
  // @twitter ID
  twitterID: '@radishzz_'
  // サイト認証
  verification: {
    // Google Search Console
    google: 'AUCrz5F1e5qbnmKKDXl2Sf8u6y0kOpEO1wLs6HMMmlM'
    // Bing ウェブマスターツール
    bing: '64708CD514011A7965C84DDE1D169F87'
    // Yandex ウェブマスター
    yandex: ''
    // Baidu 検索
    baidu: ''
  }
  // Google Analytics
  googleAnalyticsID: ''
  // Umami Analytics
  umamiAnalyticsID: '520af332-bfb7-4e7c-9386-5f273ee3d697'
  // フォロー認証
  follow: {
    // フィードID
    feedID: ''
    // ユーザーID
    userID: ''
  }
  // APIFlash アクセスキー
  // OpenGraph 用のウェブサイトスクリーンショットを自動生成
  // アクセスキーの取得: https://apiflash.com/
  apiflashKey: ''
}
```

### フッター設定

```ts
footer: {
  // ソーシャルリンク
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
  // サイト開始年
  startYear: 2024
}
```

### リソースプリロード

```ts
preload: {
  // リンクプリフェッチ戦略
  linkPrefetch: 'viewport' // hover, tap, viewport, load
  // コメントサーバー URL
  commentURL: 'https://retypeset-comment.radishzz.cc'
  // 画像ホスティング URL
  imageHostURL: 'https://image.radishzz.cc'
  // カスタム Google Analytics JS
  // アナリティクス JavaScript をカスタムドメインにルーティングするユーザー向け
  customGoogleAnalyticsJS: ''
  // カスタム Umami Analytics JS
  // Umamiを自己デプロイしたり、アナリティクス JavaScript をカスタムドメインにルーティングするユーザー向け
  customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js'
}
```

## その他の設定

設定ファイル `src/config.ts` 以外にも、一部の設定は他のファイルにあります。

### シンタックスハイライト

コードブロックのシンタックスハイライトテーマ。

```ts
// astro.config.ts

shikiConfig: {
  // 利用可能なテーマ: https://shiki.style/themes
  // 背景色はデフォルトでシンタックスハイライトテーマではなく、ブログテーマに従います
  themes: {
    light: 'github-light' // ライトテーマ
    dark: 'github-dark' // ダークテーマ
  }
}
```

### 記事の抜粋

記事の自動抜粋の文字数。

```ts
// src/utils/description.ts

const EXCERPT_LENGTHS: Record<ExcerptScene, {
  cjk: number // 中国語、日本語、韓国語
  other: number // その他の言語
}> = {
  list: { // ホームページ記事リスト
    cjk: 120, // 先頭から120文字を自動抜粋
    other: 240, // 先頭から240文字を自動抜粋
  },
}
```

### Open Graph

Open Graphソーシャル画像スタイル。

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // ローカルパスのPNG形式が必要
    size: [250], // ロゴの幅
  },
  font: {
    title: { // タイトル
      families: ['Noto Sans SC'], // フォント
      weight: 'Bold', // 太さ
      color: [34, 33, 36], // 色
      lineHeight: 1.5, // 行の高さ
    },
  },
  fonts: [ // フォントパス（ローカルまたはリモート）
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // 背景色
  // その他の設定: https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### RSSフィード

RSSフィードページスタイル。

```html
<!-- public/rss/rss-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* フォントカラー */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* 背景色 */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* セカンダリフォントカラー */
</style>
```

## 新しい記事の作成

`src/content/posts/` ディレクトリに `.md` または `.mdx` 拡張子を持つ新しいファイルを作成し、ファイルの先頭に `Front Matter` メタデータを追加します。

### Front Matter

```markdown
---
# 必須
title: テーマ使用ガイド
published: 2025-01-26

# 任意
description: 記事の最初の120文字が自動的に要約として選択されます。
updated: 2025-03-26
tags:
  - ブログテーマ
  - ガイド

# 高度な設定（任意）
draft: true/false
pin: 1-99
toc: true/false
lang: zh/zh-tw/ja/en/es/ru
abbrlink: theme-guide
---
```

### 高度な設定

#### draft

記事を下書きとしてマークします。true に設定すると、記事は公開されず、ローカル開発プレビューでのみ利用可能です。デフォルトは false です。

#### pin

記事をトップに固定します。数字が大きいほど、固定された記事の優先度が高くなります。デフォルトは 0 で、固定されていないことを意味します。

#### toc

目次を自動生成するかどうか。h2からh4までの見出しを表示します。デフォルトは true。

#### lang

記事の言語を指定します。一つの言語のみ指定できます。指定しない場合、記事はデフォルトですべての言語パスに表示されます。

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

記事のURLをカスタマイズします。小文字、数字、ハイフン `-` のみ使用できます。

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
