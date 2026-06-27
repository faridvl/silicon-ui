import type { Config } from 'tailwindcss'
import siliconPreset from '@silicon/config-tailwind/silicon-preset'

export default {
  darkMode: 'class',
  presets: [siliconPreset as Config],
  content: ['./src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
} satisfies Config
