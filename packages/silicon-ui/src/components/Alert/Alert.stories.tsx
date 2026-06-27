import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Alert, AlertTitle, AlertDescription } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Base/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Alert variant="primary">
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>Check out the new dashboard experience.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>Your subscription has been renewed.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Account expiring soon</AlertTitle>
        <AlertDescription>Your trial ends in 3 days.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>We could not process your request.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>Service will be down on Sunday 2–4 AM UTC.</AlertDescription>
      </Alert>
    </div>
  ),
}
