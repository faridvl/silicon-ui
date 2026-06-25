import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Badge } from '../Badge'
import { Icon } from '../Icon'

export interface HowItWorksStep {
  step: number
  title: string
  description: string
  icon?: string
}

const sectionCva = cva('relative w-full py-16 lg:py-24', {
  variants: {
    variant: {
      light: 'bg-[--si-body-bg]',
      dark: 'bg-[--si-dark]',
      gray: 'bg-[--si-secondary-bg]',
    },
  },
  defaultVariants: { variant: 'light' },
})

const stepNumberCva = cva(
  'flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold ring-2',
  {
    variants: {
      variant: {
        light: 'bg-[--si-primary-faded] text-[--si-primary] ring-[--si-primary-faded]',
        dark: 'bg-[--si-primary]/20 text-[--si-primary] ring-[--si-primary]/30',
        gray: 'bg-[--si-primary-faded] text-[--si-primary] ring-[--si-primary-faded]',
      },
    },
    defaultVariants: { variant: 'light' },
  },
)

const connectorCva = cva('hidden lg:block absolute top-6 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-px', {
  variants: {
    variant: {
      light: 'bg-[--si-border-color]',
      dark: 'bg-white/10',
      gray: 'bg-[--si-border-color]',
    },
  },
  defaultVariants: { variant: 'light' },
})

export type HowItWorksVariant = 'light' | 'dark' | 'gray'

export interface HowItWorksStepsProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionCva> {
  badge?: string
  headline: string
  subheadline?: string
  steps: HowItWorksStep[]
}

const HowItWorksSteps = React.forwardRef<HTMLElement, HowItWorksStepsProps>(
  ({ className, variant = 'light', badge, headline, subheadline, steps, ...props }, ref) => {
    const isDark = variant === 'dark'

    return (
      <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            {badge && (
              <Badge variant={isDark ? 'light' : 'primary'} className="mb-4">
                {badge}
              </Badge>
            )}
            <h2
              className={cn(
                'mb-4 text-3xl font-bold lg:text-4xl',
                isDark ? 'text-white' : 'text-[--si-heading-color]',
              )}
            >
              {headline}
            </h2>
            {subheadline && (
              <p
                className={cn(
                  'text-base lg:text-lg',
                  isDark ? 'text-[--si-gray-400]' : 'text-[--si-body-color]',
                )}
              >
                {subheadline}
              </p>
            )}
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Connector line between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className={cn(connectorCva({ variant }))} />
                )}

                {/* Step circle */}
                <div className={cn(stepNumberCva({ variant }))}>
                  {step.icon ? (
                    <Icon name={step.icon} size="lg" />
                  ) : (
                    <span>{step.step}</span>
                  )}
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3
                    className={cn(
                      'mb-2 text-base font-semibold',
                      isDark ? 'text-white' : 'text-[--si-heading-color]',
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      'text-sm leading-relaxed',
                      isDark ? 'text-[--si-gray-400]' : 'text-[--si-body-color]',
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  },
)
HowItWorksSteps.displayName = 'HowItWorksSteps'

export { HowItWorksSteps }
