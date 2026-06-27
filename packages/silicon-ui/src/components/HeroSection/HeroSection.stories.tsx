import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'

const meta: Meta<typeof HeroSection> = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['saas', 'agency', 'app', 'financial', 'minimal'],
    },
    badge: { control: 'text' },
    headline: { control: 'text' },
    subheadline: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof HeroSection>

const base = {
  badge: 'New — Version 2.0 released',
  headline: 'Build beautiful products faster',
  subheadline: 'Silicon gives your team a complete design system so you can focus on what matters — shipping features your users love.',
  ctaPrimary: { label: 'Get started for free', href: '#' },
  ctaSecondary: { label: 'View demo', href: '#' },
}

export const Saas: Story = {
  args: { ...base, variant: 'saas' },
}

export const Agency: Story = {
  args: { ...base, variant: 'agency', headline: 'We craft digital experiences that convert' },
}

export const App: Story = {
  args: { ...base, variant: 'app', headline: 'Your productivity, supercharged', badge: 'Now on iOS & Android' },
}

export const Financial: Story = {
  args: {
    ...base,
    variant: 'financial',
    headline: 'Smart investing starts here',
    subheadline: 'Track your portfolio, automate strategies, and grow wealth with institutional-grade tools.',
    badge: undefined,
  },
}

export const Minimal: Story = {
  args: {
    ...base,
    variant: 'minimal',
    headline: 'Design. Build. Launch.',
    subheadline: 'The fastest way to turn your idea into a polished product.',
    ctaSecondary: undefined,
  },
}
