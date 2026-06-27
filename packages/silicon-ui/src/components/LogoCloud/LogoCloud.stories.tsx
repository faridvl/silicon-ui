import type { Meta, StoryObj } from '@storybook/react'
import { LogoCloud } from './LogoCloud'

const meta: Meta<typeof LogoCloud> = {
  title: 'Sections/LogoCloud',
  component: LogoCloud,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark', 'gray'] },
    headline: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof LogoCloud>

function makeLogo(name: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 36"><text x="4" y="26" font-family="system-ui,sans-serif" font-size="16" font-weight="700" fill="#1f2937">${name}</text></svg>`
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

const logos = [
  { name: 'Vercel', src: makeLogo('Vercel') },
  { name: 'Stripe', src: makeLogo('Stripe') },
  { name: 'Linear', src: makeLogo('Linear') },
  { name: 'Notion', src: makeLogo('Notion') },
  { name: 'Figma', src: makeLogo('Figma') },
  { name: 'GitHub', src: makeLogo('GitHub') },
]

export const Light: Story = {
  args: { variant: 'light', headline: 'Trusted by world-class teams', logos },
}

export const Dark: Story = {
  args: { variant: 'dark', headline: 'Used by industry leaders', logos },
}

export const Gray: Story = {
  args: { variant: 'gray', logos },
}
