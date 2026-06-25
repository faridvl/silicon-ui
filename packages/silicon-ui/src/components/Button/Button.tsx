import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[--si-primary] text-white shadow-[0_4px_16px_rgba(99,102,241,0.35)] hover:brightness-110 focus-visible:ring-[--si-primary]',
        secondary:
          'bg-[--si-secondary] text-[--si-dark] hover:bg-gray-200 focus-visible:ring-gray-300',
        outline:
          'border-2 border-[--si-primary] text-[--si-primary] bg-transparent hover:bg-[--si-primary] hover:text-white focus-visible:ring-[--si-primary]',
        ghost: 'text-[--si-primary] bg-transparent hover:bg-[--si-primary-faded]',
        danger:
          'bg-[--si-danger] text-white hover:brightness-110 focus-visible:ring-[--si-danger]',
        dark: 'bg-[--si-dark] text-white hover:brightness-125 focus-visible:ring-[--si-dark]',
        light: 'bg-white text-[--si-dark] shadow-sm hover:shadow focus-visible:ring-gray-300',
      },
      size: {
        sm: 'h-8 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
        xl: 'h-15 px-10 text-lg',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, iconLeft, iconRight, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled ?? loading}
        {...props}
      >
        {loading ? (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          iconLeft
        )}
        {children}
        {!loading && iconRight}
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
