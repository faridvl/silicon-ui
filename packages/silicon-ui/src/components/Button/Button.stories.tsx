import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'dark', 'light'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'icon'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Get started' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Learn more' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Sign up' },
}

export const Loading: Story = {
  args: { variant: 'primary', loading: true, children: 'Saving...' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="light">Light</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
}
