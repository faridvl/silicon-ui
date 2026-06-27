import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Checkbox, Radio } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Base/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { label: 'Accept terms and conditions' },
}

export const Checked: Story = {
  args: { label: 'Remember me', defaultChecked: true },
}

export const Disabled: Story = {
  args: { label: 'Disabled option', disabled: true },
}

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Email notifications" defaultChecked />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Push notifications" defaultChecked />
      <Checkbox label="Marketing emails" disabled />
    </div>
  ),
}

export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Radio name="plan" value="free" label="Free — $0/month" defaultChecked />
      <Radio name="plan" value="pro" label="Pro — $19/month" />
      <Radio name="plan" value="enterprise" label="Enterprise — Custom pricing" />
    </div>
  ),
}
