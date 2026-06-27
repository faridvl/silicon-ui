import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
import { Button } from '../Button'
import { Badge } from '../Badge'

const meta: Meta<typeof Card> = {
  title: 'Base/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of what this card is about.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[--si-body-color]">Card body content goes here. It can include any kind of content.</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="secondary" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Analytics Report</CardTitle>
          <Badge variant="success">Live</Badge>
        </div>
        <CardDescription>Monthly overview of your metrics.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-[--si-heading-color]">24,892</p>
        <p className="text-sm text-[--si-body-color]">Total page views</p>
      </CardContent>
    </Card>
  ),
}
