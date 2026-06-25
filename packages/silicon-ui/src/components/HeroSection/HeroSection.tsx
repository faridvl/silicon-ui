import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Badge } from '../Badge'
import { buttonVariants } from '../Button'

export type HeroVariant = 'saas' | 'agency' | 'app' | 'financial' | 'minimal'

export interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: HeroVariant
  badge?: string
  headline: string
  subheadline: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  media?: { type: 'image' | 'lottie' | 'video'; src: string; alt?: string }
}

const sectionCva = cva('relative w-full overflow-hidden', {
  variants: {
    variant: {
      saas: 'bg-[--si-body-bg] pt-20 pb-16 lg:pt-28 lg:pb-24',
      agency: 'bg-[--si-dark] pt-24 pb-20 lg:pt-36 lg:pb-32',
      app: 'pt-20 pb-16 lg:pt-28 lg:pb-24',
      financial: 'bg-[--si-body-bg] pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[--si-border-color]',
      minimal: 'bg-[--si-body-bg] pt-24 pb-20 lg:pt-32 lg:pb-28',
    },
  },
  defaultVariants: { variant: 'saas' },
})

const headlineCva = cva('font-extrabold tracking-tight leading-[1.1]', {
  variants: {
    variant: {
      saas: 'text-4xl sm:text-5xl lg:text-6xl text-[--si-heading-color]',
      agency: 'text-5xl sm:text-6xl lg:text-8xl text-white',
      app: 'text-4xl sm:text-5xl lg:text-6xl text-[--si-heading-color]',
      financial: 'text-4xl sm:text-5xl text-[--si-heading-color]',
      minimal: 'text-5xl sm:text-6xl lg:text-7xl text-[--si-heading-color] text-center',
    },
  },
  defaultVariants: { variant: 'saas' },
})

const subCva = cva('mt-5 text-lg lg:text-xl leading-relaxed', {
  variants: {
    variant: {
      saas: 'text-[--si-body-color] max-w-xl',
      agency: 'text-gray-300 max-w-2xl mx-auto text-center',
      app: 'text-[--si-body-color] max-w-xl',
      financial: 'text-[--si-body-color] max-w-xl',
      minimal: 'text-[--si-body-color] max-w-2xl mx-auto text-center',
    },
  },
  defaultVariants: { variant: 'saas' },
})

const CENTERED: HeroVariant[] = ['agency', 'minimal']

function MediaBlock({
  media,
  variant,
}: {
  media: NonNullable<HeroSectionProps['media']>
  variant: HeroVariant
}) {
  const cls = cn(
    'w-full rounded-[--si-border-radius-xl] shadow-[--si-shadow-xl] overflow-hidden',
    variant === 'app' && 'max-w-xs mx-auto',
  )

  if (media.type === 'video') {
    return (
      <video
        className={cls}
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={media.alt}
      />
    )
  }

  if (media.type === 'lottie') {
    return (
      <div
        className={cn(
          cls,
          'aspect-video bg-[--si-gray-100] flex items-center justify-center',
        )}
      >
        <span className="text-[--si-gray-400] text-sm">Lottie animation</span>
      </div>
    )
  }

  return (
    <img className={cls} src={media.src} alt={media.alt ?? ''} loading="lazy" />
  )
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      variant = 'saas',
      badge,
      headline,
      subheadline,
      ctaPrimary,
      ctaSecondary,
      media,
      className,
      ...props
    },
    ref,
  ) => {
    const centered = CENTERED.includes(variant)

    return (
      <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
        {/* Decorative blobs */}
        {variant === 'saas' && (
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, var(--si-primary) 0%, transparent 70%)',
            }}
          />
        )}
        {variant === 'app' && (
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-[--si-primary-faded] via-transparent to-transparent pointer-events-none"
          />
        )}
        {variant === 'agency' && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        )}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {centered ? (
            /* ── Centered layout: agency, minimal ── */
            <div className="flex flex-col items-center text-center">
              {badge && (
                <Badge variant={variant === 'agency' ? 'dark' : 'primary'} className="mb-5">
                  {badge}
                </Badge>
              )}
              <h1 className={headlineCva({ variant })}>{headline}</h1>
              <p className={subCva({ variant })}>{subheadline}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={ctaPrimary.href}
                  className={cn(
                    buttonVariants({
                      variant: variant === 'agency' ? 'light' : 'primary',
                      size: 'lg',
                    }),
                  )}
                >
                  {ctaPrimary.label}
                </a>
                {ctaSecondary && (
                  <a
                    href={ctaSecondary.href}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'lg' }),
                      variant === 'agency' && 'text-white hover:bg-white/10',
                    )}
                  >
                    {ctaSecondary.label}
                  </a>
                )}
              </div>
              {media && variant !== 'minimal' && (
                <div className="mt-16 w-full max-w-4xl">
                  <MediaBlock media={media} variant={variant} />
                </div>
              )}
            </div>
          ) : (
            /* ── Two-column layout: saas, app, financial ── */
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col">
                {badge && (
                  <Badge variant="primary" className="mb-5 self-start">
                    {badge}
                  </Badge>
                )}
                <h1 className={headlineCva({ variant })}>{headline}</h1>
                <p className={subCva({ variant })}>{subheadline}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={ctaPrimary.href}
                    className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
                  >
                    {ctaPrimary.label}
                  </a>
                  {ctaSecondary && (
                    <a
                      href={ctaSecondary.href}
                      className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
                    >
                      {ctaSecondary.label}
                    </a>
                  )}
                </div>
              </div>
              {media && (
                <div className="relative">
                  <MediaBlock media={media} variant={variant} />
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    )
  },
)
HeroSection.displayName = 'HeroSection'

export { HeroSection }
