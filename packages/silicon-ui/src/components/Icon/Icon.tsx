import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const iconVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
  },
  defaultVariants: { size: 'md' },
})

export interface IconProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof iconVariants> {
  name: string
  type?: 'regular' | 'solid' | 'logos'
}

const Icon = React.forwardRef<HTMLElement, IconProps>(
  ({ name, type = 'regular', size, className, ...props }, ref) => {
    const prefix = type === 'solid' ? 'bxs' : type === 'logos' ? 'bxl' : 'bx'
    return (
      <i
        ref={ref}
        className={cn(`${prefix} ${prefix}-${name}`, iconVariants({ size }), className)}
        aria-hidden="true"
        {...props}
      />
    )
  },
)
Icon.displayName = 'Icon'

export { Icon, iconVariants }
