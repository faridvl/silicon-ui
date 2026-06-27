import type { Meta, StoryObj } from '@storybook/react'
import { StatsSection } from './StatsSection'

const meta: Meta<typeof StatsSection> = {
  title: 'Sections/StatsSection',
  component: StatsSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark', 'gray'] },
    layout: { control: 'select', options: ['row', 'grid'] },
  },
}

export default meta
type Story = StoryObj<typeof StatsSection>

const stats = [
  { value: '10,000', label: 'Teams using Silicon', suffix: '+' },
  { value: '2.5M', label: 'Components rendered daily', suffix: '+' },
  { value: '99.9', label: 'Uptime SLA', suffix: '%' },
  { value: '150', label: 'Countries worldwide', suffix: '+' },
]

export const RowLight: Story = {
  args: { variant: 'light', layout: 'row', stats, headline: 'Trusted at scale' },
}

export const GridGray: Story = {
  args: { variant: 'gray', layout: 'grid', stats },
}

export const Dark: Story = {
  args: { variant: 'dark', layout: 'row', stats, headline: 'Numbers that matter' },
}
