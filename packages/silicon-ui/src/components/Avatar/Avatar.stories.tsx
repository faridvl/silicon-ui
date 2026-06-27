import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Base/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithFallback: Story = {
  args: { size: 'md' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>FV</AvatarFallback>
    </Avatar>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarImage src="https://i.pravatar.cc/64" alt="User avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}
