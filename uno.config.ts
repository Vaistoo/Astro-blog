import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { themeConfig } from './src/config'

const { light, dark } = themeConfig.color

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: dark,
        },
      },
    }),
  ],
  theme: {
    colors: light,
    fontFamily: {
      'title': ['Snell-Black', 'EarlySummer-Subset', 'EarlySummer', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      'navbar': ['STIX-Italic', 'EarlySummer-Subset', 'EarlySummer', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      'time': ['Snell-Bold', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      'serif': ['STIX', 'EarlySummer', 'Georgia', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      'system-serif': ['ui-serif', 'serif'],
    },
  },
  shortcuts: {},
  rules: [
    ['scrollbar-hidden', {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
    }],
    ['ios-flash-fix', {
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
    }],
    ['force-gpu', {
      'transform': 'translateZ(0)',
      '-webkit-transform': 'translateZ(0)',
    }],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
