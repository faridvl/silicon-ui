'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'

// ─── Context ─────────────────────────────────────────────────────────────────

interface DropdownContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownContext = React.createContext<DropdownContextValue | null>(null)

function useDropdownContext() {
  const ctx = React.useContext(DropdownContext)
  if (!ctx) throw new Error('Dropdown parts must be used within <Dropdown>')
  return ctx
}

// ─── Dropdown (root) ──────────────────────────────────────────────────────────

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center'
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, align = 'start', children, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClick)
      return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    React.useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false)
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    }, [])

    return (
      <DropdownContext.Provider value={{ open, setOpen }}>
        <div
          ref={(node) => {
            if (typeof ref === 'function') ref(node)
            else if (ref) ref.current = node
            ;(containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
          }}
          className={cn('relative inline-block', className)}
          data-align={align}
          {...props}
        />
      </DropdownContext.Provider>
    )
  },
)
Dropdown.displayName = 'Dropdown'

// ─── DropdownTrigger ──────────────────────────────────────────────────────────

const DropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const { open, setOpen } = useDropdownContext()

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={open}
      aria-haspopup="menu"
      onClick={(e) => {
        setOpen((v) => !v)
        onClick?.(e)
      }}
      className={cn('', className)}
      {...props}
    />
  )
})
DropdownTrigger.displayName = 'DropdownTrigger'

// ─── DropdownContent ──────────────────────────────────────────────────────────

export interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center'
}

const DropdownContent = React.forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ className, align = 'start', children, ...props }, ref) => {
    const { open } = useDropdownContext()

    const alignClasses: Record<string, string> = {
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0',
    }

    return (
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className={cn(
              'absolute top-full z-50 mt-1.5 min-w-[10rem] overflow-hidden rounded-lg border border-[--si-border-color] bg-[--si-body-bg] p-1 shadow-[--si-shadow]',
              alignClasses[align],
            )}
          >
            <div ref={ref} role="menu" className={className} {...props}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  },
)
DropdownContent.displayName = 'DropdownContent'

// ─── DropdownItem ─────────────────────────────────────────────────────────────

const DropdownItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const { setOpen } = useDropdownContext()

  return (
    <button
      ref={ref}
      type="button"
      role="menuitem"
      onClick={(e) => {
        setOpen(false)
        onClick?.(e)
      }}
      className={cn(
        'flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-[--si-body-color] transition-colors hover:bg-[--si-secondary] hover:text-[--si-heading-color] focus-visible:outline-none focus-visible:bg-[--si-secondary] disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
})
DropdownItem.displayName = 'DropdownItem'

// ─── DropdownLabel ────────────────────────────────────────────────────────────

const DropdownLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('px-2.5 py-1.5 text-xs font-semibold text-[--si-gray-500]', className)}
      {...props}
    />
  ),
)
DropdownLabel.displayName = 'DropdownLabel'

// ─── DropdownSeparator ────────────────────────────────────────────────────────

const DropdownSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn('-mx-1 my-1 h-px bg-[--si-border-color]', className)}
      {...props}
    />
  ),
)
DropdownSeparator.displayName = 'DropdownSeparator'

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
}
