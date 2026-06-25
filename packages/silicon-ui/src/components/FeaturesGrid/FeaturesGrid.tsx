import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Badge } from '../Badge'
import { Icon } from '../Icon'

export interface FeatureItem {
  icon: string
  title: string
  description: string
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

const gridCva = cva('grid gap-6 lg:gap-8', {
  variants: {
    columns: {
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    },
  },
  defaultVariants: { columns: 3 },
})

const iconWrapCva = cva('mb-4 flex items-center justify-center', {
  variants: {
    iconStyle: {
      boxed: 'h-14 w-14 rounded-xl bg-[--si-primary-faded]',
      circle: 'h-14 w-14 rounded-full bg-[--si-primary-faded]',
      flat: 'h-10 w-10',
    },
  },
  defaultVariants: { iconStyle: 'boxed' },
})

export type FeaturesVariant = 'light' | 'dark' | 'gray'
export type FeaturesIconStyle = 'boxed' | 'circle' | 'flat'

export interface FeaturesGridProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionCva> {
  badge?: string
  headline: string
  subheadline?: string
  columns?: 2 | 3 | 4
  features: FeatureItem[]
  iconStyle?: FeaturesIconStyle
}

const FeaturesGrid = React.forwardRef<HTMLElement, FeaturesGridProps>(
  (
    {
      className,
      variant,
      badge,
      headline,
      subheadline,
      columns = 3,
      features,
      iconStyle = 'boxed',
      ...props
    },
    ref,
  ) => {
    const isDark = variant === 'dark'

    return (
      <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
        <div className="container mx-auto px-4 lg:px-8">
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

          <div className={cn(gridCva({ columns }))}>
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} iconStyle={iconStyle} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>
    )
  },
)
FeaturesGrid.displayName = 'FeaturesGrid'

interface FeatureCardProps {
  feature: FeatureItem
  iconStyle: FeaturesIconStyle
  isDark: boolean
}

function FeatureCard({ feature, iconStyle, isDark }: FeatureCardProps) {
  return (
    <div className="flex flex-col">
      <div className={cn(iconWrapCva({ iconStyle }))}>
        <Icon name={feature.icon} size="2xl" className="text-[--si-primary]" />
      </div>
      <h3
        className={cn(
          'mb-2 text-lg font-semibold',
          isDark ? 'text-white' : 'text-[--si-heading-color]',
        )}
      >
        {feature.title}
      </h3>
      <p
        className={cn(
          'text-sm leading-relaxed',
          isDark ? 'text-[--si-gray-400]' : 'text-[--si-body-color]',
        )}
      >
        {feature.description}
      </p>
    </div>
  )
}

export { FeaturesGrid }
