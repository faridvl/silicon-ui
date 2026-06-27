import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  title: 'Base/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <p className="text-sm text-[--si-body-color]">Above the separator</p>
      <Separator />
      <p className="text-sm text-[--si-body-color]">Below the separator</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center gap-4">
      <span className="text-sm text-[--si-body-color]">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-[--si-body-color]">Middle</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-[--si-body-color]">Right</span>
    </div>
  ),
}
