import type { Preview } from '@storybook/react'
import '../src/tokens/index.css'
import './storybook.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0b0f19' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
  },
}

export default preview
