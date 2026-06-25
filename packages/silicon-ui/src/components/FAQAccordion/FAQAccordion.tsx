import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Badge } from '../Badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../Accordion'

export interface FAQItem {
  question: string
  answer: string
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

const triggerCva = cva('', {
  variants: {
    variant: {
      light: '',
      dark: 'text-white hover:text-[--si-primary] [&[aria-expanded=true]]:text-white',
      gray: '',
    },
  },
  defaultVariants: { variant: 'light' },
})

const contentCva = cva('', {
  variants: {
    variant: {
      light: '',
      dark: 'text-[--si-gray-400]',
      gray: '',
    },
  },
  defaultVariants: { variant: 'light' },
})

const accordionCva = cva('', {
  variants: {
    variant: {
      light: 'divide-[--si-border-color]',
      dark: 'divide-white/10',
      gray: 'divide-[--si-border-color]',
    },
  },
  defaultVariants: { variant: 'light' },
})

export type FAQVariant = 'light' | 'dark' | 'gray'

export interface FAQAccordionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionCva> {
  badge?: string
  headline: string
  items: FAQItem[]
}

const FAQAccordion = React.forwardRef<HTMLElement, FAQAccordionProps>(
  ({ className, variant = 'light', badge, headline, items, ...props }, ref) => {
    const isDark = variant === 'dark'

    return (
      <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            {badge && (
              <Badge variant={isDark ? 'light' : 'primary'} className="mb-4">
                {badge}
              </Badge>
            )}
            <h2
              className={cn(
                'text-3xl font-bold lg:text-4xl',
                isDark ? 'text-white' : 'text-[--si-heading-color]',
              )}
            >
              {headline}
            </h2>
          </div>

          <Accordion
            type="single"
            className={cn('divide-y', accordionCva({ variant }))}
          >
            {items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger
                  className={cn(
                    'py-5 text-base font-semibold',
                    isDark
                      ? 'text-white hover:text-[--si-primary]'
                      : 'text-[--si-heading-color] hover:text-[--si-primary]',
                    triggerCva({ variant }),
                  )}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    'text-base leading-relaxed',
                    isDark ? 'text-[--si-gray-400]' : 'text-[--si-body-color]',
                    contentCva({ variant }),
                  )}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  },
)
FAQAccordion.displayName = 'FAQAccordion'

export { FAQAccordion }
