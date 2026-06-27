import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Progress } from './Progress'

const meta: Meta<typeof Progress> = {
  title: 'Base/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: { value: 65 },
  render: (args) => <Progress {...args} className="w-72" />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <Progress variant="primary" value={80} />
      <Progress variant="success" value={65} />
      <Progress variant="warning" value={45} />
      <Progress variant="danger" value={30} />
      <Progress variant="info" value={55} />
    </div>
  ),
}
