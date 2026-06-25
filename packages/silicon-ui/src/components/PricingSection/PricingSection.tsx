import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Badge } from '../Badge'
import { buttonVariants } from '../Button'

export interface PricingPlan {
  name: string
  price: { monthly: number; annual: number }
  currency: string
  description: string
  features: string[]
  cta: { label: string; href: string }
  highlighted?: boolean
  badge?: string
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

export type PricingVariant = 'light' | 'dark' | 'gray'

export interface PricingSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: PricingVariant
  badge?: string
  headline: string
  subheadline?: string
  plans: PricingPlan[]
  annualDiscount?: string
}

const PricingSection = React.forwardRef<HTMLElement, PricingSectionProps>(
  (
    {
      className,
      variant = 'light',
      badge,
      headline,
      subheadline,
      plans,
      annualDiscount = 'Save 20%',
      ...props
    },
    ref,
  ) => {
    const [annual, setAnnual] = React.useState(false)
    const isDark = variant === 'dark'

    const colsClass =
      plans.length === 2
        ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
        : plans.length === 4
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

    return (
      <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
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

          <div className="mb-10 flex items-center justify-center gap-3">
            <span
              className={cn(
                'text-sm font-medium transition-colors',
                !annual ? 'text-[--si-primary]' : isDark ? 'text-white' : 'text-[--si-heading-color]',
              )}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual((v) => !v)}
              className={cn(
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:ring-offset-2',
                annual ? 'bg-[--si-primary]' : 'bg-[--si-gray-300]',
              )}
            >
              <span
                className={cn(
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out',
                  annual ? 'translate-x-5' : 'translate-x-0',
                )}
              />
            </button>
            <span
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                annual ? 'text-[--si-primary]' : isDark ? 'text-white' : 'text-[--si-heading-color]',
              )}
            >
              Annual
              {annualDiscount && (
                <Badge variant="success" size="sm">
                  {annualDiscount}
                </Badge>
              )}
            </span>
          </div>

          <div className={cn('grid gap-6 lg:gap-8', colsClass)}>
            {plans.map((plan, i) => (
              <PricingCard key={i} plan={plan} annual={annual} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>
    )
  },
)
PricingSection.displayName = 'PricingSection'

interface PricingCardProps {
  plan: PricingPlan
  annual: boolean
  isDark: boolean
}

function PricingCard({ plan, annual, isDark }: PricingCardProps) {
  const price = annual ? plan.price.annual : plan.price.monthly

  const cardCls = cn(
    'relative flex flex-col rounded-[--si-border-radius-xl] p-8 transition-shadow',
    plan.highlighted
      ? 'bg-[--si-primary] text-white shadow-[--si-shadow-xl]'
      : isDark
        ? 'bg-white/5 border border-white/10'
        : 'bg-[--si-body-bg] border border-[--si-border-color] shadow-[--si-shadow]',
  )

  const textMuted = plan.highlighted
    ? 'text-white/75'
    : isDark
      ? 'text-[--si-gray-400]'
      : 'text-[--si-body-color]'

  const textHeading = plan.highlighted || isDark ? 'text-white' : 'text-[--si-heading-color]'

  const dividerCls = cn('border-t', plan.highlighted ? 'border-white/20' : 'border-[--si-border-color]')

  return (
    <div className={cardCls}>
      {plan.badge && (
        <div className="mb-4">
          <Badge variant={plan.highlighted ? 'light' : 'primary'} size="sm">
            {plan.badge}
          </Badge>
        </div>
      )}

      <h3 className={cn('mb-1 text-xl font-bold', textHeading)}>{plan.name}</h3>
      <p className={cn('mb-6 text-sm leading-relaxed', textMuted)}>{plan.description}</p>

      <div className="mb-6 flex items-end gap-1">
        <span className={cn('text-sm font-medium', textMuted)}>{plan.currency}</span>
        <span className={cn('text-5xl font-extrabold leading-none', textHeading)}>{price}</span>
        <span className={cn('mb-1 text-sm', textMuted)}>/{annual ? 'yr' : 'mo'}</span>
      </div>

      <a
        href={plan.cta.href}
        className={cn(
          buttonVariants({ variant: plan.highlighted ? 'light' : 'primary', size: 'md' }),
          'mb-8 w-full justify-center',
        )}
      >
        {plan.cta.label}
      </a>

      <hr className={cn('mb-6', dividerCls)} />

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <svg
              className={cn(
                'mt-0.5 h-4 w-4 flex-shrink-0',
                plan.highlighted ? 'text-white' : 'text-[--si-primary]',
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span className={cn('text-sm', textMuted)}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { PricingSection }
