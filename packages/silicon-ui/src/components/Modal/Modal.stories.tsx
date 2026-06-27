import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from './Modal'
import { Button } from '../Button'

const meta: Meta<typeof Modal> = {
  title: 'Base/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
    closeOnOverlayClick: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

function ModalDemo({ size = 'md' as const, ...args }: Partial<React.ComponentProps<typeof Modal>>) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onOpenChange={setOpen} size={size} {...args}>
        <ModalHeader>
          <ModalTitle>Confirm action</ModalTitle>
          <ModalDescription>Are you sure you want to delete this item? This action cannot be undone.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-[--si-body-color]">This will permanently remove the record from the database.</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const Default: Story = {
  render: () => <ModalDemo size="md" />,
}

export const Small: Story = {
  render: () => <ModalDemo size="sm" />,
}

export const Large: Story = {
  render: () => <ModalDemo size="lg" />,
}
