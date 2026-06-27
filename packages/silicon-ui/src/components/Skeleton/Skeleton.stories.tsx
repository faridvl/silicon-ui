import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Skeleton } from './Skeleton'
import { Avatar } from '../Avatar'

const meta: Meta<typeof Skeleton> = {
  title: 'Base/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-48" />,
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 rounded-xl border border-[--si-border-color] p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-32 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/5" />
      </div>
    </div>
  ),
}

export const TableSkeleton: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
          <Skeleton className="h-3 flex-1" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </div>
  ),
}
