import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselIndicators } from './Carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Base/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    loop: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    autoPlayInterval: { control: { type: 'number', min: 1000, step: 500 } },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

const slides = [
  { color: 'bg-[--si-primary]/10', label: 'Slide 1 — Build fast' },
  { color: 'bg-[--si-success]/10', label: 'Slide 2 — Stay consistent' },
  { color: 'bg-[--si-info]/10', label: 'Slide 3 — Ship confidently' },
  { color: 'bg-[--si-warning]/10', label: 'Slide 4 — Iterate quickly' },
]

export const Default: Story = {
  render: (args) => (
    <div className="relative w-80">
      <Carousel {...args}>
        <CarouselContent>
          {slides.map((s) => (
            <CarouselItem key={s.label}>
              <div className={`flex h-48 items-center justify-center rounded-xl ${s.color}`}>
                <p className="font-semibold text-[--si-heading-color]">{s.label}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselIndicators className="mt-4" />
      </Carousel>
    </div>
  ),
}

export const WithAutoPlay: Story = {
  render: () => (
    <div className="relative w-80">
      <Carousel loop autoPlay autoPlayInterval={2500}>
        <CarouselContent>
          {slides.map((s) => (
            <CarouselItem key={s.label}>
              <div className={`flex h-48 items-center justify-center rounded-xl ${s.color}`}>
                <p className="font-semibold text-[--si-heading-color]">{s.label}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselIndicators className="mt-4" />
      </Carousel>
    </div>
  ),
}
