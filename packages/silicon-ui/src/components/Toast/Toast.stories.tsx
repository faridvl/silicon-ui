import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ToastProvider, useToast } from './Toast'
import { Button } from '../Button'

const meta: Meta = {
  title: 'Base/Toast',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

function ToastDemo({ position = 'bottom-right' as const }: { position?: React.ComponentProps<typeof ToastProvider>['position'] }) {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" onClick={() => toast({ title: 'Saved!', description: 'Your changes have been saved.', variant: 'success' })}>Success</Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ title: 'Heads up', description: 'Check your email for confirmation.', variant: 'info' })}>Info</Button>
      <Button size="sm" variant="outline" onClick={() => toast({ title: 'Warning', description: 'Your session will expire soon.', variant: 'warning' })}>Warning</Button>
      <Button size="sm" variant="danger" onClick={() => toast({ title: 'Error', description: 'Something went wrong. Try again.', variant: 'danger' })}>Danger</Button>
      <Button size="sm" variant="ghost" onClick={() => toast({ title: 'Notification', description: 'You have a new message.' })}>Default</Button>
    </div>
  )
}

export const BottomRight: Story = {
  render: () => (
    <ToastProvider position="bottom-right">
      <ToastDemo position="bottom-right" />
    </ToastProvider>
  ),
}

export const TopCenter: Story = {
  render: () => (
    <ToastProvider position="top-center">
      <ToastDemo position="top-center" />
    </ToastProvider>
  ),
}
