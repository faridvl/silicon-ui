'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'

// ─── Context ─────────────────────────────────────────────────────────────────

interface ModalContextValue {
  onClose: () => void
}

const ModalContext = React.createContext<ModalContextValue | null>(null)

// ─── Modal ────────────────────────────────────────────────────────────────────

export interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnOverlayClick?: boolean
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[95vw]',
}

function Modal({
  open,
  onOpenChange,
  children,
  size = 'md',
  closeOnOverlayClick = true,
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onOpenChange(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <ModalContext.Provider value={{ onClose: () => onOpenChange(false) }}>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeOnOverlayClick ? () => onOpenChange(false) : undefined}
              aria-hidden="true"
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              className={cn(
                'relative z-10 w-full rounded-xl bg-[--si-body-bg] shadow-[--si-shadow-xl]',
                sizeClasses[size],
              )}
            >
              {children}
            </motion.div>
          </div>
        </ModalContext.Provider>
      )}
    </AnimatePresence>,
    document.body,
  )
}
Modal.displayName = 'Modal'

// ─── ModalHeader ──────────────────────────────────────────────────────────────

const ModalHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const ctx = React.useContext(ModalContext)

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start justify-between gap-4 border-b border-[--si-border-color] p-6',
          className,
        )}
        {...props}
      >
        <div className="flex-1">{children}</div>
        {ctx && (
          <button
            type="button"
            onClick={ctx.onClose}
            aria-label="Close dialog"
            className="rounded-md p-1 text-[--si-gray-500] transition-colors hover:bg-[--si-secondary] hover:text-[--si-heading-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    )
  },
)
ModalHeader.displayName = 'ModalHeader'

const ModalTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-bold text-[--si-heading-color]', className)}
      {...props}
    />
  ),
)
ModalTitle.displayName = 'ModalTitle'

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('mt-1 text-sm text-[--si-gray-500]', className)} {...props} />
))
ModalDescription.displayName = 'ModalDescription'

// ─── ModalBody ────────────────────────────────────────────────────────────────

const ModalBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  ),
)
ModalBody.displayName = 'ModalBody'

// ─── ModalFooter ──────────────────────────────────────────────────────────────

const ModalFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-end gap-3 border-t border-[--si-border-color] p-6',
        className,
      )}
      {...props}
    />
  ),
)
ModalFooter.displayName = 'ModalFooter'

export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter }
