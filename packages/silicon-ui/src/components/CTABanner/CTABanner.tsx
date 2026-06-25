import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { buttonVariants } from '../Button'

export type CTABannerVariant = 'primary' | 'dark' | 'gradient'

export interface CTABannerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CTABannerVariant
  headline: string
  subheadline?: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

const sectionCva = cva('relative w-full overflow-hidden py-16 lg:py-24', {
  variants: {
    variant: {
      primary: 'bg-[--si-primary]',
      dark: 'bg-[--si-dark]',
      gradient: 'bg-gradient-to-br from-[--si-primary] to-[#4338ca]',
    },
  },
  defaultVariants: { variant: 'primary' },
})

const headlineCva = cva(
  'font-extrabold tracking-tight leading-tight text-white text-3xl sm:text-4xl lg:text-5xl',
  {
    variants: {
      variant: {
        primary: '',
        dark: '',
        gradient: '',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
)

const subCva = cva('mt-4 text-lg max-w-2xl mx-auto', {
  variants: {
    variant: {
      primary: 'text-white/80',
      dark: 'text-[--si-gray-400]',
      gradient: 'text-white/80',
    },
  },
  defaultVariants: { variant: 'primary' },
})

const CTABanner = React.forwardRef<HTMLElement, CTABannerProps>(
  (
    { className, variant = 'primary', headline, subheadline, ctaPrimary, ctaSecondary, ...props },
    ref,
  ) => (
    <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
      {/* Decorative noise overlay for gradient variant */}
      {variant === 'gradient' && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          />
        </>
      )}

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={cn(headlineCva({ variant }))}>{headline}</h2>

        {subheadline && <p className={cn(subCva({ variant }))}>{subheadline}</p>}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={ctaPrimary.href} className={cn(buttonVariants({ variant: 'light', size: 'lg' }))}>
            {ctaPrimary.label}
          </a>
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }),
                'text-white hover:bg-white/10',
              )}
            >
              {ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  ),
)
CTABanner.displayName = 'CTABanner'

export { CTABanner }
