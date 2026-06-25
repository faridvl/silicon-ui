import * as React from 'react'
import { cn } from '../../lib/utils'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, size = 'md', ...props }, ref) => {
    const uid = React.useId()
    const inputId = id ?? uid

    const trackSizes = {
      sm: 'h-4 w-8',
      md: 'h-5 w-10',
      lg: 'h-6 w-12',
    }
    const thumbSizes = {
      sm: 'h-3 w-3 peer-checked:translate-x-4',
      md: 'h-4 w-4 peer-checked:translate-x-5',
      lg: 'h-5 w-5 peer-checked:translate-x-6',
    }

    return (
      <label htmlFor={inputId} className="inline-flex cursor-pointer items-center gap-2.5">
        <span className="relative inline-flex">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            className={cn('peer sr-only', className)}
            {...props}
          />
          <span
            className={cn(
              'rounded-full bg-[--si-gray-300] transition-colors duration-200 peer-checked:bg-[--si-primary] peer-focus-visible:ring-2 peer-focus-visible:ring-[--si-primary] peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              trackSizes[size],
            )}
          />
          <span
            className={cn(
              'absolute left-0.5 top-0.5 rounded-full bg-white shadow transition-transform duration-200',
              thumbSizes[size],
            )}
          />
        </span>
        {label && (
          <span className="select-none text-sm font-medium text-[--si-body-color]">{label}</span>
        )}
      </label>
    )
  },
)
Switch.displayName = 'Switch'

export { Switch }
