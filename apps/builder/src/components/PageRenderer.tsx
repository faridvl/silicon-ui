'use client'

import * as React from 'react'
import {
  HeroSection,
  FeaturesGrid,
  HowItWorksSteps,
  PricingSection,
  TestimonialsCarousel,
  StatsSection,
  FAQAccordion,
  CTABanner,
  LogoCloud,
  FooterSection,
} from '@silicon/ui'
import type { PageConfig, SectionConfig } from '@/types/silicon'

function SectionRenderer({ section }: { section: SectionConfig }) {
  switch (section.type) {
    case 'hero':
      return (
        <HeroSection
          variant={section.variant}
          headline={section.headline}
          subheadline={section.subheadline}
          ctaPrimary={section.ctaPrimary}
          {...(section.badge !== undefined && { badge: section.badge })}
          {...(section.ctaSecondary !== undefined && { ctaSecondary: section.ctaSecondary })}
          {...(section.media !== undefined && { media: section.media })}
        />
      )

    case 'features-grid':
      return (
        <FeaturesGrid
          headline={section.headline}
          columns={section.columns}
          features={section.features}
          {...(section.badge !== undefined && { badge: section.badge })}
          {...(section.subheadline !== undefined && { subheadline: section.subheadline })}
        />
      )

    case 'how-it-works':
      return (
        <HowItWorksSteps
          headline={section.headline}
          steps={section.steps}
          {...(section.badge !== undefined && { badge: section.badge })}
          {...(section.subheadline !== undefined && { subheadline: section.subheadline })}
        />
      )

    case 'pricing':
      return (
        <PricingSection
          headline={section.headline}
          plans={section.plans}
          {...(section.badge !== undefined && { badge: section.badge })}
          {...(section.subheadline !== undefined && { subheadline: section.subheadline })}
        />
      )

    case 'testimonials':
      return (
        <TestimonialsCarousel
          headline={section.headline}
          testimonials={section.testimonials}
          {...(section.badge !== undefined && { badge: section.badge })}
        />
      )

    case 'stats':
      return (
        <StatsSection
          stats={section.stats}
          layout={section.layout}
        />
      )

    case 'faq':
      return (
        <FAQAccordion
          headline={section.headline}
          items={section.items}
          {...(section.badge !== undefined && { badge: section.badge })}
        />
      )

    case 'cta-banner':
      return (
        <CTABanner
          variant={section.variant}
          headline={section.headline}
          ctaPrimary={section.ctaPrimary}
          {...(section.subheadline !== undefined && { subheadline: section.subheadline })}
          {...(section.ctaSecondary !== undefined && { ctaSecondary: section.ctaSecondary })}
        />
      )

    case 'logo-cloud':
      return (
        <LogoCloud
          logos={section.logos}
          {...(section.headline !== undefined && { headline: section.headline })}
        />
      )

    case 'footer':
      return (
        <FooterSection
          columns={section.columns}
          copyright={section.copyright}
          {...(section.logo !== undefined && { logo: section.logo })}
          {...(section.tagline !== undefined && { tagline: section.tagline })}
          {...(section.social !== undefined && { social: section.social })}
        />
      )

    default:
      return null
  }
}

export interface PageRendererProps {
  config: PageConfig
  className?: string
}

export function PageRenderer({ config, className }: PageRendererProps) {
  return (
    <div className={className}>
      {config.sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  )
}
