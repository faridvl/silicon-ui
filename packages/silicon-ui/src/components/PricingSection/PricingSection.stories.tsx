import type { Meta, StoryObj } from '@storybook/react'
import { PricingSection } from './PricingSection'

const meta: Meta<typeof PricingSection> = {
  title: 'Sections/PricingSection',
  component: PricingSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark', 'gray'] },
  },
}

export default meta
type Story = StoryObj<typeof PricingSection>

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, annual: 0 },
    currency: '$',
    description: 'Perfect for side projects and solo developers.',
    features: ['5 projects', '10 GB storage', 'Community support', 'Basic analytics'],
    cta: { label: 'Get started free', href: '#' },
  },
  {
    name: 'Pro',
    price: { monthly: 19, annual: 15 },
    currency: '$',
    description: 'For growing teams that need more power.',
    features: ['Unlimited projects', '100 GB storage', 'Priority support', 'Advanced analytics', 'Team collaboration', 'API access'],
    cta: { label: 'Start free trial', href: '#' },
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    price: { monthly: 79, annual: 63 },
    currency: '$',
    description: 'For large organizations with compliance needs.',
    features: ['Unlimited everything', '1 TB storage', 'Dedicated support', 'Custom analytics', 'SSO & RBAC', 'SLA guarantee', 'On-premise option'],
    cta: { label: 'Contact sales', href: '#' },
  },
]

export const Light: Story = {
  args: {
    variant: 'light',
    badge: 'Pricing',
    headline: 'Simple, transparent pricing',
    subheadline: 'No hidden fees, no surprises. Start free and scale as you grow.',
    plans,
    annualDiscount: 'Save 20%',
  },
}

export const Dark: Story = {
  args: { ...Light.args, variant: 'dark' },
}

export const Gray: Story = {
  args: { ...Light.args, variant: 'gray' },
}
