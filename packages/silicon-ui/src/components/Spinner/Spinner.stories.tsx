import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Base/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: { size: 'md' },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
}

export const Colored: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="text-[--si-primary]" />
      <Spinner className="text-[--si-success]" />
      <Spinner className="text-[--si-danger]" />
      <Spinner className="text-[--si-warning]" />
    </div>
  ),
}
