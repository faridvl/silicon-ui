/**
 * Silicon Builder — Tipos del sistema
 * Este schema es el contrato entre el AI Agent y el Builder UI.
 * El agente genera un PageConfig; el builder lo renderiza.
 */

export type ColorPalette = {
  primary: string
  secondary: string
  accent?: string
  dark?: string
}

export type SectionType =
  | 'hero'
  | 'features-grid'
  | 'how-it-works'
  | 'pricing'
  | 'testimonials'
  | 'team'
  | 'faq'
  | 'cta-banner'
  | 'stats'
  | 'logo-cloud'
  | 'blog-grid'
  | 'contact'
  | 'footer'
  | 'newsletter'

export type HeroVariant = 'saas' | 'agency' | 'app' | 'financial' | 'minimal'

export type HeroSectionConfig = {
  type: 'hero'
  variant: HeroVariant
  badge?: string
  headline: string
  subheadline: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  media?: { type: 'image' | 'lottie' | 'video'; src: string; alt?: string }
}

export type FeatureItem = {
  icon: string
  title: string
  description: string
}

export type FeaturesSectionConfig = {
  type: 'features-grid'
  badge?: string
  headline: string
  subheadline?: string
  columns: 2 | 3 | 4
  features: FeatureItem[]
}

export type PricingPlan = {
  name: string
  price: { monthly: number; annual: number }
  currency: string
  description: string
  features: string[]
  cta: { label: string; href: string }
  highlighted?: boolean
  badge?: string
}

export type PricingSectionConfig = {
  type: 'pricing'
  badge?: string
  headline: string
  subheadline?: string
  plans: PricingPlan[]
}

export type TestimonialItem = {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
  rating?: 1 | 2 | 3 | 4 | 5
}

export type TestimonialsSectionConfig = {
  type: 'testimonials'
  badge?: string
  headline: string
  testimonials: TestimonialItem[]
}

export type StatItem = {
  value: string
  label: string
  suffix?: string
}

export type StatsSectionConfig = {
  type: 'stats'
  stats: StatItem[]
  layout: 'row' | 'grid'
}

export type FAQItem = {
  question: string
  answer: string
}

export type FAQSectionConfig = {
  type: 'faq'
  badge?: string
  headline: string
  items: FAQItem[]
}

export type CTABannerConfig = {
  type: 'cta-banner'
  headline: string
  subheadline?: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  variant: 'primary' | 'dark' | 'gradient'
}

export type LogoCloudConfig = {
  type: 'logo-cloud'
  headline?: string
  logos: { name: string; src: string; href?: string }[]
}

export type FooterConfig = {
  type: 'footer'
  logo?: string
  tagline?: string
  columns: {
    title: string
    links: { label: string; href: string }[]
  }[]
  social?: { platform: string; href: string }[]
  copyright: string
}

export type SectionConfig =
  | HeroSectionConfig
  | FeaturesSectionConfig
  | PricingSectionConfig
  | TestimonialsSectionConfig
  | StatsSectionConfig
  | FAQSectionConfig
  | CTABannerConfig
  | LogoCloudConfig
  | FooterConfig

export type TemplateId =
  | 'saas-v1'
  | 'saas-v2'
  | 'agency'
  | 'app-showcase'
  | 'financial'
  | 'medical'
  | 'portfolio'
  | 'software-company'

export type PageConfig = {
  id: string
  templateId: TemplateId
  name: string
  description: string
  colors: ColorPalette
  fonts?: { primary?: string }
  sections: SectionConfig[]
  meta?: {
    title: string
    description: string
  }
}

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  pageConfig?: PageConfig
}
