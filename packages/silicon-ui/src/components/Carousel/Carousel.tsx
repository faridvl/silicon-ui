'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

// ─── Context ─────────────────────────────────────────────────────────────────

interface CarouselContextValue {
  currentIndex: number
  itemCount: number
  setItemCount: React.Dispatch<React.SetStateAction<number>>
  prev: () => void
  next: () => void
  goTo: (index: number) => void
  canPrev: boolean
  canNext: boolean
  loop: boolean
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) throw new Error('Carousel parts must be used within <Carousel>')
  return ctx
}

// ─── Carousel (root) ──────────────────────────────────────────────────────────

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultIndex?: number
  loop?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      defaultIndex = 0,
      loop = false,
      autoPlay = false,
      autoPlayInterval = 4000,
      children,
      ...props
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(defaultIndex)
    const [itemCount, setItemCount] = React.useState(0)

    const canPrev = loop || currentIndex > 0
    const canNext = loop || currentIndex < itemCount - 1

    const prev = React.useCallback(() => {
      setCurrentIndex((i) =>
        i === 0 ? (loop ? itemCount - 1 : 0) : i - 1,
      )
    }, [loop, itemCount])

    const next = React.useCallback(() => {
      setCurrentIndex((i) =>
        i === itemCount - 1 ? (loop ? 0 : itemCount - 1) : i + 1,
      )
    }, [loop, itemCount])

    const goTo = React.useCallback((index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, itemCount - 1)))
    }, [itemCount])

    React.useEffect(() => {
      if (!autoPlay || itemCount === 0) return
      const t = setInterval(next, autoPlayInterval)
      return () => clearInterval(t)
    }, [autoPlay, autoPlayInterval, next, itemCount])

    return (
      <CarouselContext.Provider
        value={{ currentIndex, itemCount, setItemCount, prev, next, goTo, canPrev, canNext, loop }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = 'Carousel'

// ─── CarouselContent ──────────────────────────────────────────────────────────

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { setItemCount, currentIndex } = useCarousel()
    const items = React.Children.toArray(children)

    React.useLayoutEffect(() => {
      setItemCount(items.length)
    }, [items.length, setItemCount])

    return (
      <div ref={ref} className={cn('overflow-hidden', className)} {...props}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    )
  },
)
CarouselContent.displayName = 'CarouselContent'

// ─── CarouselItem ─────────────────────────────────────────────────────────────

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn('w-full', className)}
      {...props}
    />
  ),
)
CarouselItem.displayName = 'CarouselItem'

// ─── CarouselPrevious ─────────────────────────────────────────────────────────

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const { prev, canPrev } = useCarousel()

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Previous slide"
      disabled={!canPrev}
      onClick={(e) => { prev(); onClick?.(e) }}
      className={cn(
        'absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--si-body-bg]/90 shadow border border-[--si-border-color] text-[--si-body-color] transition-all hover:bg-[--si-body-bg] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-40',
        className,
      )}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

// ─── CarouselNext ─────────────────────────────────────────────────────────────

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const { next, canNext } = useCarousel()

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Next slide"
      disabled={!canNext}
      onClick={(e) => { next(); onClick?.(e) }}
      className={cn(
        'absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--si-body-bg]/90 shadow border border-[--si-border-color] text-[--si-body-color] transition-all hover:bg-[--si-body-bg] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-40',
        className,
      )}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  )
})
CarouselNext.displayName = 'CarouselNext'

// ─── CarouselIndicators ───────────────────────────────────────────────────────

const CarouselIndicators = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { currentIndex, itemCount, goTo } = useCarousel()

    return (
      <div
        ref={ref}
        className={cn('absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5', className)}
        {...props}
      >
        {Array.from({ length: itemCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === currentIndex
                ? 'w-5 bg-[--si-primary]'
                : 'w-1.5 bg-[--si-gray-300] hover:bg-[--si-gray-400]',
            )}
          />
        ))}
      </div>
    )
  },
)
CarouselIndicators.displayName = 'CarouselIndicators'

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
}
