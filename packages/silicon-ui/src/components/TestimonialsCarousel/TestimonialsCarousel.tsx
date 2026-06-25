'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Badge } from '../Badge'

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
  rating?: 1 | 2 | 3 | 4 | 5
}

export type TestimonialsVariant = 'light' | 'dark' | 'gray'
export type TestimonialsLayout = 'carousel' | 'grid'

export interface TestimonialsCarouselProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TestimonialsVariant
  layout?: TestimonialsLayout
  badge?: string
  headline: string
  subheadline?: string
  testimonials: TestimonialItem[]
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

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? '60%' : '-60%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? '-60%' : '60%', opacity: 0 }),
}

function Stars({
  rating,
  isDark,
}: {
  rating: number
  isDark: boolean
}) {
  return (
    <div className="mb-5 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn(
            'h-4 w-4',
            i < rating ? 'text-[--si-warning]' : isDark ? 'text-white/20' : 'text-[--si-gray-300]',
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Initials({ name, isDark }: { name: string; isDark: boolean }) {
  const letters = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <span
      className={cn(
        'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold',
        isDark ? 'bg-white/10 text-white' : 'bg-[--si-primary]/10 text-[--si-primary]',
      )}
    >
      {letters}
    </span>
  )
}

interface TestimonialCardProps {
  item: TestimonialItem
  isDark: boolean
  elevated?: boolean
}

function TestimonialCard({ item, isDark, elevated }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-[--si-border-radius-xl] p-8',
        isDark
          ? 'border border-white/10 bg-white/5'
          : elevated
            ? 'border border-[--si-border-color] bg-[--si-body-bg] shadow-[--si-shadow-xl]'
            : 'border border-[--si-border-color] bg-[--si-body-bg] shadow-[--si-shadow]',
      )}
    >
      {item.rating !== undefined && <Stars rating={item.rating} isDark={isDark} />}

      <blockquote
        className={cn(
          'mb-6 flex-1 text-base leading-relaxed',
          isDark ? 'text-white' : 'text-[--si-heading-color]',
        )}
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        {item.avatar ? (
          <img
            src={item.avatar}
            alt={item.author}
            className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
          />
        ) : (
          <Initials name={item.author} isDark={isDark} />
        )}
        <div>
          <p
            className={cn(
              'text-sm font-semibold',
              isDark ? 'text-white' : 'text-[--si-heading-color]',
            )}
          >
            {item.author}
          </p>
          <p className={cn('text-xs', isDark ? 'text-[--si-gray-400]' : 'text-[--si-body-color]')}>
            {item.role}
            {item.company && `, ${item.company}`}
          </p>
        </div>
      </div>
    </div>
  )
}

interface SectionHeaderProps {
  badge?: string | undefined
  headline: string
  subheadline?: string | undefined
  isDark: boolean
}

function SectionHeader({ badge, headline, subheadline, isDark }: SectionHeaderProps) {
  return (
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
  )
}

const TestimonialsCarousel = React.forwardRef<HTMLElement, TestimonialsCarouselProps>(
  (
    {
      className,
      variant = 'light',
      layout = 'carousel',
      badge,
      headline,
      subheadline,
      testimonials,
      ...props
    },
    ref,
  ) => {
    const [current, setCurrent] = React.useState(0)
    const [direction, setDirection] = React.useState(1)
    const isDark = variant === 'dark'
    const total = testimonials.length

    const go = React.useCallback(
      (next: number) => {
        const normalized = (next + total) % total
        setDirection(next >= current ? 1 : -1)
        setCurrent(normalized)
      },
      [current, total],
    )

    // ── Grid layout ──────────────────────────────────────────────────────────
    if (layout === 'grid') {
      const colsCls =
        total <= 2
          ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

      return (
        <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader badge={badge} headline={headline} subheadline={subheadline} isDark={isDark} />
            <div className={cn('grid gap-6 lg:gap-8', colsCls)}>
              {testimonials.map((item, i) => (
                <TestimonialCard
                  key={i}
                  item={item}
                  isDark={isDark}
                  elevated={total === 3 && i === 1}
                />
              ))}
            </div>
          </div>
        </section>
      )
    }

    // ── Carousel layout ──────────────────────────────────────────────────────
    const navBtnCls = cn(
      'absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm transition-colors',
      isDark
        ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
        : 'border-[--si-border-color] bg-[--si-body-bg] text-[--si-heading-color] hover:bg-[--si-secondary-bg]',
    )

    return (
      <section ref={ref} className={cn(sectionCva({ variant }), className)} {...props}>
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader badge={badge} headline={headline} subheadline={subheadline} isDark={isDark} />

          <div className="relative mx-auto max-w-2xl">
            <div className="overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <TestimonialCard item={testimonials[current]} isDark={isDark} elevated />
                </motion.div>
              </AnimatePresence>
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(current - 1)}
                  className={cn(navBtnCls, '-left-5 lg:-left-14')}
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(current + 1)}
                  className={cn(navBtnCls, '-right-5 lg:-right-14')}
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === current
                      ? 'w-6 bg-[--si-primary]'
                      : isDark
                        ? 'w-2 bg-white/20 hover:bg-white/40'
                        : 'w-2 bg-[--si-gray-300] hover:bg-[--si-gray-500]',
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    )
  },
)
TestimonialsCarousel.displayName = 'TestimonialsCarousel'

export { TestimonialsCarousel }
