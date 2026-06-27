import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Base/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { label: 'Enable notifications', size: 'md' },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" defaultChecked />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { label: 'Disabled switch', disabled: true },
}
