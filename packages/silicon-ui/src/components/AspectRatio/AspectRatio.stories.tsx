import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { AspectRatio } from './AspectRatio'

const meta: Meta<typeof AspectRatio> = {
  title: 'Base/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: [16 / 9, 4 / 3, 1, 9 / 16, 21 / 9],
      mapping: {
        '16/9': 16 / 9,
        '4/3': 4 / 3,
        '1/1': 1,
        '9/16': 9 / 16,
        '21/9': 21 / 9,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Landscape: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="w-80 rounded-xl overflow-hidden bg-[--si-secondary]">
      <div className="flex h-full items-center justify-center text-[--si-body-color]">16 / 9</div>
    </AspectRatio>
  ),
}

export const Square: Story = {
  render: () => (
    <AspectRatio ratio={1} className="w-48 rounded-xl overflow-hidden bg-[--si-primary-faded]">
      <div className="flex h-full items-center justify-center text-[--si-primary]">1 / 1</div>
    </AspectRatio>
  ),
}

export const WithImage: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="w-80 rounded-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&q=80"
        alt="Code on screen"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  ),
}
