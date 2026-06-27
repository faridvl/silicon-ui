import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Base/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

const items = [
  { value: 'q1', q: 'What is Silicon Design System?', a: 'A React component library built on top of the Silicon WordPress theme, offering 35+ components and 10 page sections.' },
  { value: 'q2', q: 'Is it free to use?', a: 'Yes, @silicon/ui is open-source and free to use in personal and commercial projects.' },
  { value: 'q3', q: 'Does it support dark mode?', a: 'Absolutely. All components are theme-aware via CSS custom properties and toggle via the `.dark` class.' },
  { value: 'q4', q: 'Can I customize the primary color?', a: 'Yes — update the `--si-primary` CSS variable at runtime and all components will reflect it instantly.' },
]

export const Default: Story = {
  render: (args) => (
    <Accordion {...args} className="w-96">
      {items.map(({ value, q, a }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  args: { type: 'single', defaultValue: 'q1' },
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-96" defaultValue={['q1', 'q3']}>
      {items.map(({ value, q, a }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
