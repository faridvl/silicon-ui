import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Base/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm text-[--si-body-color] pt-4">Overview tab content — charts, summaries, KPIs.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="text-sm text-[--si-body-color] pt-4">Analytics tab content — detailed metrics and reports.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="text-sm text-[--si-body-color] pt-4">Settings tab content — account preferences and API keys.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-96">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="inactive" disabled>Inactive</TabsTrigger>
        <TabsTrigger value="draft">Draft</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p className="text-sm text-[--si-body-color] pt-4">Active campaigns are running right now.</p>
      </TabsContent>
      <TabsContent value="draft">
        <p className="text-sm text-[--si-body-color] pt-4">Draft campaigns are not yet published.</p>
      </TabsContent>
    </Tabs>
  ),
}
