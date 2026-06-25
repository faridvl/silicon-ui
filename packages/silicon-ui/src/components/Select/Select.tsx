import * as React from 'react'
import { cn } from '../../lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  inputSize?: 'sm' | 'md' | 'lg'
  error?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, inputSize = 'md', error = false, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        'flex w-full appearance-none rounded-lg border bg-[--si-body-bg] text-[--si-body-color] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        error
          ? 'border-[--si-danger] focus-visible:ring-[--si-danger]'
          : 'border-[--si-border-color] hover:border-[--si-gray-400]',
        inputSize === 'sm' && 'h-8 px-3 text-xs',
        inputSize === 'md' && 'h-10 px-3 text-sm',
        inputSize === 'lg' && 'h-12 px-4 text-base',
        className,
      )}
      {...props}
    />
  ),
)
Select.displayName = 'Select'

export { Select }
