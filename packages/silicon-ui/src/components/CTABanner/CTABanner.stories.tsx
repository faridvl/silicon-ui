import type { Meta, StoryObj } from '@storybook/react'
import { CTABanner } from './CTABanner'

const meta: Meta<typeof CTABanner> = {
  title: 'Sections/CTABanner',
  component: CTABanner,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'dark', 'gradient'] },
    headline: { control: 'text' },
    subheadline: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof CTABanner>

const base = {
  headline: 'Start building with Silicon today',
  subheadline: 'Join 10,000+ teams already shipping faster with our design system.',
  ctaPrimary: { label: 'Get started free', href: '#' },
  ctaSecondary: { label: 'Talk to sales', href: '#' },
}

export const Primary: Story = {
  args: { ...base, variant: 'primary' },
}

export const Dark: Story = {
  args: { ...base, variant: 'dark' },
}

export const Gradient: Story = {
  args: { ...base, variant: 'gradient' },
}
