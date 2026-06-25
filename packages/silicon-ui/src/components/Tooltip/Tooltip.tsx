import * as React from 'react'
import { cn } from '../../lib/utils'

// ─── Context ─────────────────────────────────────────────────────────────────

interface TooltipContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  delay: number
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null)

function useTooltipContext() {
  const ctx = React.useContext(TooltipContext)
  if (!ctx) throw new Error('Tooltip parts must be used within <TooltipProvider>')
  return ctx
}

// ─── TooltipProvider ──────────────────────────────────────────────────────────

export interface TooltipProviderProps {
  children: React.ReactNode
  delay?: number
}

function TooltipProvider({ children, delay = 300 }: TooltipProviderProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <TooltipContext.Provider value={{ open, setOpen, delay }}>
      {children}
    </TooltipContext.Provider>
  )
}
TooltipProvider.displayName = 'TooltipProvider'

// ─── Tooltip (standalone shortcut) ───────────────────────────────────────────

export interface TooltipProps {
  content: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
  children: React.ReactNode
}

function Tooltip({ content, side = 'top', delay = 300, className, children }: TooltipProps) {
  const [open, setOpen] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    timer.current = setTimeout(() => setOpen(true), delay)
  }
  const hide = () => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(false)
  }

  const sideClasses: Record<string, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {open && (
        <span
          role="tooltip"
          className={cn(
            'pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-[--si-dark] px-2.5 py-1.5 text-xs font-medium text-white shadow-lg',
            sideClasses[side],
            className,
          )}
        >
          {content}
        </span>
      )}
    </span>
  )
}
Tooltip.displayName = 'Tooltip'

// ─── Compound API ─────────────────────────────────────────────────────────────

const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
  const { setOpen, delay } = useTooltipContext()
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => { timer.current = setTimeout(() => setOpen(true), delay) }
  const hide = () => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(false)
  }

  return (
    <button
      ref={ref}
      type="button"
      className={cn('', className)}
      onMouseEnter={(e) => { show(); onMouseEnter?.(e) }}
      onMouseLeave={(e) => { hide(); onMouseLeave?.(e) }}
      onFocus={(e) => { show(); onFocus?.(e) }}
      onBlur={(e) => { hide(); onBlur?.(e) }}
      {...props}
    />
  )
})
TooltipTrigger.displayName = 'TooltipTrigger'

export interface TooltipContentProps extends React.HTMLAttributes<HTMLSpanElement> {
  side?: 'top' | 'bottom' | 'left' | 'right'
}

const TooltipContent = React.forwardRef<HTMLSpanElement, TooltipContentProps>(
  ({ className, side = 'top', ...props }, ref) => {
    const { open } = useTooltipContext()
    if (!open) return null

    const sideClasses: Record<string, string> = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    }

    return (
      <span
        ref={ref}
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-[--si-dark] px-2.5 py-1.5 text-xs font-medium text-white shadow-lg',
          sideClasses[side],
          className,
        )}
        {...props}
      />
    )
  },
)
TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent }
