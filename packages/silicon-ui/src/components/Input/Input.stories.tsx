import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Input, Textarea, Label, FormGroup, FormHint, FormError } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Base/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'url'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Enter your email', type: 'email' },
  render: (args) => (
    <FormGroup className="w-80">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" {...args} />
    </FormGroup>
  ),
}

export const WithHint: Story = {
  render: () => (
    <FormGroup className="w-80">
      <Label htmlFor="pwd">Password</Label>
      <Input id="pwd" type="password" placeholder="••••••••" />
      <FormHint>Must be at least 8 characters.</FormHint>
    </FormGroup>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormGroup className="w-80">
      <Label htmlFor="email-err">Email</Label>
      <Input id="email-err" type="email" placeholder="you@example.com" aria-invalid />
      <FormError>Please enter a valid email address.</FormError>
    </FormGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <FormGroup className="w-80">
      <Label htmlFor="dis">Username</Label>
      <Input id="dis" disabled value="john.doe" readOnly />
    </FormGroup>
  ),
}

export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => (
    <FormGroup className="w-80">
      <Label htmlFor="msg">Message</Label>
      <Textarea id="msg" rows={4} placeholder="Write your message here..." />
      <FormHint>Max 500 characters.</FormHint>
    </FormGroup>
  ),
}
