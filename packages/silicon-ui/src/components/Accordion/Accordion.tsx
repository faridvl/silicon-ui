import * as React from 'react'
import { cn } from '../../lib/utils'

// ─── Context ─────────────────────────────────────────────────────────────────

interface AccordionContextValue {
  openItems: string[]
  toggle: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

function useAccordion() {
  const ctx = React.useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion compound components must be used within <Accordion>')
  return ctx
}

interface AccordionItemContextValue {
  value: string
  isOpen: boolean
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null)

function useAccordionItem() {
  const ctx = React.useContext(AccordionItemContext)
  if (!ctx) throw new Error('AccordionTrigger/Content must be used within <AccordionItem>')
  return ctx
}

// ─── Accordion (root) ────────────────────────────────────────────────────────

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = 'single', defaultValue, value, onValueChange, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (defaultValue) return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      return []
    })

    const controlled = value !== undefined
    const items = controlled
      ? Array.isArray(value) ? value : value ? [value] : []
      : openItems

    const toggle = React.useCallback(
      (itemValue: string) => {
        const next =
          type === 'single'
            ? items.includes(itemValue) ? [] : [itemValue]
            : items.includes(itemValue)
              ? items.filter((v) => v !== itemValue)
              : [...items, itemValue]

        if (!controlled) setOpenItems(next)
        onValueChange?.(type === 'single' ? (next[0] ?? '') : next)
      },
      [items, type, controlled, onValueChange],
    )

    return (
      <AccordionContext.Provider value={{ openItems: items, toggle }}>
        <div ref={ref} className={cn('divide-y divide-[--si-border-color]', className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)
Accordion.displayName = 'Accordion'

// ─── AccordionItem ────────────────────────────────────────────────────────────

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { openItems } = useAccordion()
    const isOpen = openItems.includes(value)

    return (
      <AccordionItemContext.Provider value={{ value, isOpen }}>
        <div ref={ref} className={cn('py-0', className)} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  },
)
AccordionItem.displayName = 'AccordionItem'

// ─── AccordionTrigger ─────────────────────────────────────────────────────────

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { toggle } = useAccordion()
  const { value, isOpen } = useAccordionItem()

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      onClick={() => toggle(value)}
      className={cn(
        'flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-[--si-heading-color] transition-all hover:text-[--si-primary] [&[aria-expanded=true]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 text-[--si-gray-400] transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  )
})
AccordionTrigger.displayName = 'AccordionTrigger'

// ─── AccordionContent ─────────────────────────────────────────────────────────

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen } = useAccordionItem()

  return (
    <div
      className={cn(
        'grid transition-all duration-200 ease-in-out',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
    >
      <div ref={ref} className="overflow-hidden">
        <div className={cn('pb-4 text-sm text-[--si-body-color]', className)} {...props}>
          {children}
        </div>
      </div>
    </div>
  )
})
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
