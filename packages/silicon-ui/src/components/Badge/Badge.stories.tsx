import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Base/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light'],
    },
    size: { control: 'select', options: ['sm', 'md'] },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: { variant: 'primary', children: 'New feature' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="dark">Dark</Badge>
      <Badge variant="light">Light</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  ),
}
