import type { Meta, StoryObj } from '@storybook/react'
import { HowItWorksSteps } from './HowItWorksSteps'

const meta: Meta<typeof HowItWorksSteps> = {
  title: 'Sections/HowItWorksSteps',
  component: HowItWorksSteps,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark', 'gray'] },
  },
}

export default meta
type Story = StoryObj<typeof HowItWorksSteps>

const steps = [
  { step: 1, title: 'Describe your product', description: 'Tell the AI what you are building — a SaaS, an agency site, a mobile app. One sentence is enough.', icon: 'edit' },
  { step: 2, title: 'Review the generated page', description: 'The agent produces a full PageConfig in seconds. Preview it instantly in the builder.', icon: 'show' },
  { step: 3, title: 'Customize and export', description: 'Tweak colors, copy, and sections visually. Export as static HTML or a full Next.js project.', icon: 'download' },
]

const base = {
  badge: 'How it works',
  headline: 'From idea to production in minutes',
  subheadline: 'No design skills required. Just describe what you want and let Silicon do the rest.',
  steps,
}

export const Light: Story = {
  args: { ...base, variant: 'light' },
}

export const Dark: Story = {
  args: { ...base, variant: 'dark' },
}

export const Gray: Story = {
  args: { ...base, variant: 'gray' },
}
