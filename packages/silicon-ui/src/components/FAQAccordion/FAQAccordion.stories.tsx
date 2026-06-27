import type { Meta, StoryObj } from '@storybook/react'
import { FAQAccordion } from './FAQAccordion'

const meta: Meta<typeof FAQAccordion> = {
  title: 'Sections/FAQAccordion',
  component: FAQAccordion,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark', 'gray'] },
  },
}

export default meta
type Story = StoryObj<typeof FAQAccordion>

const items = [
  { question: 'Is @silicon/ui free to use?', answer: 'Yes, the core library is open-source and MIT licensed. Pro templates and support plans are available separately.' },
  { question: 'Does it support dark mode?', answer: 'Absolutely. All components are built with CSS custom properties that swap automatically when you add the `.dark` class to your HTML element.' },
  { question: 'Can I use it with Next.js?', answer: "Yes — silicon-ui is fully compatible with Next.js 13+ App Router, including server and client components. Use the 'use client' directive for interactive components." },
  { question: 'How do I customize the primary color?', answer: 'Simply update the `--si-primary` CSS variable on `:root`. All components reference it, so the change propagates instantly across your entire app.' },
  { question: 'Is TypeScript required?', answer: 'TypeScript is strongly recommended and all types are exported, but the library works with plain JavaScript too.' },
]

const base = {
  badge: 'FAQ',
  headline: 'Frequently asked questions',
  items,
}

export const Light: Story = {
  args: { ...base, variant: 'light' },
}

export const Dark: Story = {
  args: { ...base, variant: 'dark' },
}

export const Gray: Story = {
  args: { ...base, variant: 'gray' },
}
