import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Base/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    name: { control: 'text' },
    type: { control: 'select', options: ['regular', 'solid', 'logos'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: { name: 'rocket', type: 'solid', size: '2xl' },
}

export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 text-[--si-primary]">
      {['home', 'user', 'star', 'heart', 'bell', 'check', 'x', 'search', 'settings', 'lock', 'mail', 'send'].map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon name={name} type="solid" size="2xl" />
          <span className="text-xs text-[--si-body-color]">{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const LogoIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 text-[--si-dark]">
      {['github', 'twitter', 'linkedin', 'react', 'nodejs', 'figma'].map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon name={name} type="logos" size="2xl" />
          <span className="text-xs text-[--si-body-color]">{name}</span>
        </div>
      ))}
    </div>
  ),
}
