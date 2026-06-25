import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const progressIndicatorVariants = cva('h-full w-full flex-1 transition-all duration-300', {
  variants: {
    variant: {
      primary: 'bg-[--si-primary]',
      success: 'bg-[--si-success]',
      warning: 'bg-[--si-warning]',
      danger: 'bg-[--si-danger]',
      info: 'bg-[--si-info]',
    },
  },
  defaultVariants: { variant: 'primary' },
})

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressIndicatorVariants> {
  value?: number
  max?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, variant, value = 0, max = 100, ...props }, ref) => (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-[--si-secondary]',
        className,
      )}
      {...props}
    >
      <div
        className={cn(progressIndicatorVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
      />
    </div>
  ),
)
Progress.displayName = 'Progress'

export { Progress, progressIndicatorVariants }
