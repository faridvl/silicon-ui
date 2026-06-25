import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export type StatsSectionVariant = 'light' | 'dark' | 'gray'
export type StatsSectionLayout = 'row' | 'grid'

export interface StatItem {
  value: string
  label: string
  suffix?: string
}

const sectionCva = cva('w-full py-16 lg:py-24', {
  variants: {
    variant: {
      light: 'bg-[--si-body-bg]',
      dark: 'bg-[--si-dark]',
      gray: 'bg-[--si-secondary-bg]',
    },
  },
  defaultVariants: { variant: 'light' },
})

const valueCva = cva('text-5xl font-extrabold tracking-tight', {
  variants: {
    variant: {
      light: 'text-[--si-heading-color]',
      dark: 'text-white',
      gray: 'text-[--si-heading-color]',
    },
  },
  defaultVariants: { variant: 'light' },
})

const labelCva = cva('mt-2 text-sm font-medium uppercase tracking-widest', {
  variants: {
    variant: {
      light: 'text-[--si-body-color]',
      dark: 'text-[--si-gray-400]',
      gray: 'text-[--si-body-color]',
    },
  },
  defaultVariants: { variant: 'light' },
})

const dividerCva = cva('hidden h-16 w-px self-center lg:block', {
  variants: {
    variant: {
      light: 'bg-[--si-border-color]',
      dark: 'bg-white/10',
      gray: 'bg-[--si-border-color]',
    },
  },
  defaultVariants: { variant: 'light' },
})

const cardCva = cva('rounded-2xl p-8 text-center shadow-sm', {
  variants: {
    variant: {
      light: 'bg-[--si-card-bg] border border-[--si-border-color]',
      dark: 'bg-white/5',
      gray: 'bg-[--si-body-bg] border border-[--si-border-color]',
    },
  },
  defaultVariants: { variant: 'light' },
})

export interface StatsSectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionCva> {
  layout?: StatsSectionLayout
  stats: StatItem[]
  headline?: string
}

const StatsSection = React.forwardRef<HTMLElement, StatsSectionProps>(
  ({ className, variant = 'light', layout = 'row', stats, headline, ...props }, ref) => {
    const isDark = variant === 'dark'

    return (
      <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {headline && (
            <h2
              className={cn(
                'mb-12 text-center text-2xl font-bold',
                isDark ? 'text-white' : 'text-[--si-heading-color]',
              )}
            >
              {headline}
            </h2>
          )}

          {layout === 'row' ? (
            <div className="flex flex-wrap items-start justify-around gap-8">
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className={cn(dividerCva({ variant }))} />}
                  <div className="min-w-[140px] flex-1 text-center">
                    <p className={cn(valueCva({ variant }))}>
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-[--si-primary]">{stat.suffix}</span>
                      )}
                    </p>
                    <p className={cn(labelCva({ variant }))}>{stat.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i} className={cn(cardCva({ variant }))}>
                  <p className={cn(valueCva({ variant }))}>
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-[--si-primary]">{stat.suffix}</span>
                    )}
                  </p>
                  <p className={cn(labelCva({ variant }))}>{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  },
)
StatsSection.displayName = 'StatsSection'

export { StatsSection }
