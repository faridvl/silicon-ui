import * as React from 'react'
import { cn } from '../../lib/utils'

// ─── Pagination root ──────────────────────────────────────────────────────────

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
}

function generatePages(page: number, total: number, siblings: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const left = Math.max(2, page - siblings)
  const right = Math.min(total - 1, page + siblings)
  const pages: (number | '...')[] = [1]

  if (left > 2) pages.push('...')
  for (let i = left; i <= right; i++) pages.push(i)
  if (right < total - 1) pages.push('...')
  pages.push(total)

  return pages
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, page, totalPages, onPageChange, siblingCount = 1, ...props }, ref) => {
    const pages = generatePages(page, totalPages, siblingCount)

    return (
      <nav ref={ref} role="navigation" aria-label="pagination" className={cn('', className)} {...props}>
        <ul className="flex items-center gap-1">
          <li>
            <PaginationPrevious
              disabled={page <= 1}
              onClick={() => onPageChange(page - 1)}
            />
          </li>

          {pages.map((p, i) =>
            p === '...' ? (
              <li key={`ellipsis-${i}`}>
                <PaginationEllipsis />
              </li>
            ) : (
              <li key={p}>
                <PaginationButton
                  isActive={p === page}
                  onClick={() => onPageChange(p as number)}
                  aria-label={`Page ${p}`}
                  aria-current={p === page ? 'page' : undefined}
                >
                  {p}
                </PaginationButton>
              </li>
            ),
          )}

          <li>
            <PaginationNext
              disabled={page >= totalPages}
              onClick={() => onPageChange(page + 1)}
            />
          </li>
        </ul>
      </nav>
    )
  },
)
Pagination.displayName = 'Pagination'

// ─── PaginationButton ─────────────────────────────────────────────────────────

export interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

const PaginationButton = React.forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ className, isActive, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        'inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-[--si-primary] text-white'
          : 'text-[--si-body-color] hover:bg-[--si-secondary]',
        className,
      )}
      {...props}
    />
  ),
)
PaginationButton.displayName = 'PaginationButton'

// ─── PaginationPrevious ───────────────────────────────────────────────────────

const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to previous page"
    className={cn(
      'inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-[--si-body-color] transition-colors hover:bg-[--si-secondary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
    <span>Prev</span>
  </button>
))
PaginationPrevious.displayName = 'PaginationPrevious'

// ─── PaginationNext ───────────────────────────────────────────────────────────

const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to next page"
    className={cn(
      'inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-[--si-body-color] transition-colors hover:bg-[--si-secondary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  >
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
))
PaginationNext.displayName = 'PaginationNext'

// ─── PaginationEllipsis ───────────────────────────────────────────────────────

function PaginationEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-flex h-9 w-9 items-center justify-center text-sm text-[--si-gray-500]', className)}
      {...props}
    >
      &#8230;
    </span>
  )
}
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
