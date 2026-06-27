import type { Meta, StoryObj } from '@storybook/react'
import { FeaturesGrid } from './FeaturesGrid'

const meta: Meta<typeof FeaturesGrid> = {
  title: 'Sections/FeaturesGrid',
  component: FeaturesGrid,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark', 'gray'] },
    iconStyle: { control: 'select', options: ['boxed', 'circle', 'flat'] },
    columns: { control: 'select', options: [2, 3, 4] },
  },
}

export default meta
type Story = StoryObj<typeof FeaturesGrid>

const features = [
  { icon: 'bolt', title: 'Lightning fast', description: 'Optimized rendering and lazy-loading keep your page score above 95.' },
  { icon: 'shield', title: 'Secure by default', description: 'End-to-end encryption, RBAC, and SOC 2 compliance out of the box.' },
  { icon: 'bar-chart-alt-2', title: 'Advanced analytics', description: 'Real-time dashboards with drill-down, cohort analysis, and custom funnels.' },
  { icon: 'cloud', title: 'Cloud native', description: 'Deploy to any cloud in minutes with our one-click Helm charts.' },
  { icon: 'cog', title: 'Fully customizable', description: 'Every component, color, and interaction can be tailored to your brand.' },
  { icon: 'support', title: '24/7 support', description: 'A dedicated team of engineers is on call to unblock you at any time.' },
]

export const Light: Story = {
  args: {
    variant: 'light',
    badge: 'Features',
    headline: 'Everything you need to ship faster',
    subheadline: 'One platform to design, build, and grow your product — no context switching required.',
    features,
    columns: 3,
    iconStyle: 'boxed',
  },
}

export const Dark: Story = {
  args: { ...Light.args, variant: 'dark' },
}

export const Gray: Story = {
  args: { ...Light.args, variant: 'gray', iconStyle: 'circle' },
}

export const FourColumns: Story = {
  args: {
    variant: 'light',
    headline: 'Packed with powerful features',
    features: features.concat([
      { icon: 'link', title: 'API-first', description: 'Every action is available via REST and GraphQL endpoints.' },
      { icon: 'devices', title: 'Cross-platform', description: 'Pixel-perfect on web, iOS, Android, and desktop.' },
    ]),
    columns: 4,
    iconStyle: 'flat',
  },
}
