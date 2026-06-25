import type { Config } from 'tailwindcss'
import siliconPreset from '@silicon/config-tailwind/silicon-preset'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/silicon-ui/src/**/*.{ts,tsx}',
  ],
  presets: [siliconPreset as Config],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
