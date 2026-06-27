import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownLabel, DropdownSeparator } from './Dropdown'
import { Button } from '../Button'

const meta: Meta<typeof Dropdown> = {
  title: 'Base/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownTrigger asChild>
        <Button variant="secondary">Options ▾</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Account</DropdownLabel>
        <DropdownItem>Profile settings</DropdownItem>
        <DropdownItem>Billing</DropdownItem>
        <DropdownItem>API keys</DropdownItem>
        <DropdownSeparator />
        <DropdownItem className="text-[--si-danger]">Sign out</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
}

export const AlignEnd: Story = {
  render: () => (
    <Dropdown align="end">
      <DropdownTrigger asChild>
        <Button size="icon" variant="ghost">⋮</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem className="text-[--si-danger]">Delete</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
}
