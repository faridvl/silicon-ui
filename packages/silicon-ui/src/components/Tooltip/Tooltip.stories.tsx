import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Tooltip } from './Tooltip'
import { Button } from '../Button'

const meta: Meta<typeof Tooltip> = {
  title: 'Base/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: { type: 'number', min: 0, max: 1000, step: 100 } },
    content: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: { content: 'This is a tooltip', side: 'top' },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
}

export const AllSides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-12">
      <Tooltip content="Top tooltip" side="top">
        <Button variant="outline" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button variant="outline" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button variant="outline" size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
}
