import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from '../tailwind.config'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (cfg) => {
    return mergeConfig(cfg, {
      css: {
        postcss: {
          plugins: [
            tailwindcss(tailwindConfig as Parameters<typeof tailwindcss>[0]),
            autoprefixer(),
          ],
        },
      },
    })
  },
}

export default config
