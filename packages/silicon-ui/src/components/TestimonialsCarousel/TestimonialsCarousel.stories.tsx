import type { Meta, StoryObj } from '@storybook/react'
import { TestimonialsCarousel } from './TestimonialsCarousel'

const meta: Meta<typeof TestimonialsCarousel> = {
  title: 'Sections/TestimonialsCarousel',
  component: TestimonialsCarousel,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark', 'gray'] },
    layout: { control: 'select', options: ['carousel', 'grid'] },
  },
}

export default meta
type Story = StoryObj<typeof TestimonialsCarousel>

const testimonials = [
  {
    quote: 'Silicon cut our design-to-production time in half. The component library is incredibly well-thought-out and the Tailwind integration is seamless.',
    author: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Notion',
    rating: 5 as const,
  },
  {
    quote: "We shipped our entire redesign in three weeks. With Silicon's section components, we didn't need a single custom CSS file.",
    author: 'Marcus Webb',
    role: 'CTO',
    company: 'Linear',
    rating: 5 as const,
  },
  {
    quote: 'The dark mode support is flawless. Our users love the polished feel, and the team loves how easy it was to implement.',
    author: 'Priya Sharma',
    role: 'Design Lead',
    company: 'Vercel',
    rating: 5 as const,
  },
  {
    quote: 'Best design system investment we have made. The PageConfig AI builder alone paid for itself on the first project.',
    author: 'Tom Erikson',
    role: 'Founder',
    company: 'Cortex',
    rating: 4 as const,
  },
]

const base = {
  badge: 'Testimonials',
  headline: 'Loved by thousands of teams',
  subheadline: "See what developers and designers around the world are saying about Silicon.",
  testimonials,
}

export const CarouselLight: Story = {
  args: { ...base, variant: 'light', layout: 'carousel' },
}

export const GridGray: Story = {
  args: { ...base, variant: 'gray', layout: 'grid' },
}

export const Dark: Story = {
  args: { ...base, variant: 'dark', layout: 'carousel' },
}
