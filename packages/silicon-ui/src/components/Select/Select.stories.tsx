import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Select } from './Select'
import { Label, FormGroup } from '../Input'

const meta: Meta<typeof Select> = {
  title: 'Base/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    inputSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args) => (
    <FormGroup className="w-72">
      <Label htmlFor="plan">Pricing plan</Label>
      <Select id="plan" {...args}>
        <option value="">Choose a plan…</option>
        <option value="free">Free</option>
        <option value="pro">Pro — $19/mo</option>
        <option value="enterprise">Enterprise — Custom</option>
      </Select>
    </FormGroup>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Select inputSize="sm" defaultValue="sm">
        <option value="sm">Small select</option>
      </Select>
      <Select inputSize="md" defaultValue="md">
        <option value="md">Medium select</option>
      </Select>
      <Select inputSize="lg" defaultValue="lg">
        <option value="lg">Large select</option>
      </Select>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <Select error className="w-72">
      <option value="">Select country</option>
    </Select>
  ),
}
