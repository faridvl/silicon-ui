import type { Meta, StoryObj } from '@storybook/react'
import { FooterSection } from './FooterSection'

const meta: Meta<typeof FooterSection> = {
  title: 'Sections/FooterSection',
  component: FooterSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark'] },
  },
}

export default meta
type Story = StoryObj<typeof FooterSection>

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

const social = [
  { platform: 'twitter', href: '#' },
  { platform: 'github', href: '#' },
  { platform: 'linkedin', href: '#' },
]

export const Dark: Story = {
  args: {
    variant: 'dark',
    logo: 'Silicon',
    tagline: 'The React design system built for speed.',
    columns,
    social,
    copyright: '© 2025 Silicon. All rights reserved.',
  },
}

export const Light: Story = {
  args: { ...Dark.args, variant: 'light' },
}
