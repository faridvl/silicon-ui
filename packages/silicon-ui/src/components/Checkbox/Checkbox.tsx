import * as React from 'react'
import { cn } from '../../lib/utils'

// ─── Checkbox ────────────────────────────────────────────────────────────────

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const uid = React.useId()
    const inputId = id ?? uid

    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border-[--si-border-color] accent-[--si-primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="cursor-pointer select-none text-sm font-medium text-[--si-body-color] peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            {label}
          </label>
        )}
      </div>
    )
  },
)
Checkbox.displayName = 'Checkbox'

// ─── Radio ───────────────────────────────────────────────────────────────────

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const uid = React.useId()
    const inputId = id ?? uid

    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          id={inputId}
          type="radio"
          className={cn(
            'h-4 w-4 border-[--si-border-color] accent-[--si-primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="cursor-pointer select-none text-sm font-medium text-[--si-body-color] peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            {label}
          </label>
        )}
      </div>
    )
  },
)
Radio.displayName = 'Radio'

export { Checkbox, Radio }
