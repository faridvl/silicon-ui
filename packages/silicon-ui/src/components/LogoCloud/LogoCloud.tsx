import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export interface LogoItem {
  name: string
  src: string
  href?: string
}

const sectionCva = cva('w-full py-12 lg:py-20', {
  variants: {
    variant: {
      light: 'bg-[--si-body-bg]',
      dark: 'bg-[--si-dark]',
      gray: 'bg-[--si-secondary-bg]',
    },
  },
  defaultVariants: { variant: 'light' },
})

const headlineCva = cva('mb-10 text-center text-sm font-semibold uppercase tracking-widest', {
  variants: {
    variant: {
      light: 'text-[--si-body-color]',
      dark: 'text-[--si-gray-400]',
      gray: 'text-[--si-body-color]',
    },
  },
  defaultVariants: { variant: 'light' },
})

const logoCva = cva(
  'transition-all duration-200 grayscale hover:grayscale-0 hover:opacity-100',
  {
    variants: {
      variant: {
        light: 'opacity-50',
        dark: 'opacity-40 brightness-200',
        gray: 'opacity-50',
      },
    },
    defaultVariants: { variant: 'light' },
  },
)

export type LogoCloudVariant = 'light' | 'dark' | 'gray'

export interface LogoCloudProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionCva> {
  headline?: string
  logos: LogoItem[]
}

const LogoCloud = React.forwardRef<HTMLElement, LogoCloudProps>(
  ({ className, variant = 'light', headline, logos, ...props }, ref) => (
    <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {headline && <p className={cn(headlineCva({ variant }))}>{headline}</p>}

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {logos.map((logo) => {
            const img = (
              <img
                src={logo.src}
                alt={logo.name}
                className={cn('h-8 w-auto object-contain lg:h-10', logoCva({ variant }))}
              />
            )

            return logo.href ? (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
              >
                {img}
              </a>
            ) : (
              <span key={logo.name}>{img}</span>
            )
          })}
        </div>
      </div>
    </section>
  ),
)
LogoCloud.displayName = 'LogoCloud'

export { LogoCloud }
