import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const inputVariants = cva(
  'flex w-full rounded-lg border bg-[--si-body-bg] text-[--si-body-color] placeholder:text-[--si-gray-400] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-[--si-border-color] hover:border-[--si-gray-400]',
        error: 'border-[--si-danger] focus-visible:ring-[--si-danger]',
      },
      inputSize: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: { variant: 'default', inputSize: 'md' },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(inputVariants({ variant, inputSize }), className)}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

// ─── Textarea ───────────────────────────────────────────────────────────────

const textareaVariants = cva(
  'flex w-full rounded-lg border bg-[--si-body-bg] px-3 py-2 text-sm text-[--si-body-color] placeholder:text-[--si-gray-400] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[80px]',
  {
    variants: {
      variant: {
        default: 'border-[--si-border-color] hover:border-[--si-gray-400]',
        error: 'border-[--si-danger] focus-visible:ring-[--si-danger]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

// ─── Label ───────────────────────────────────────────────────────────────────

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none text-[--si-heading-color] peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
)
Label.displayName = 'Label'

// ─── FormGroup ───────────────────────────────────────────────────────────────

const FormGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-1.5', className)} {...props} />
  ),
)
FormGroup.displayName = 'FormGroup'

// ─── FormHint ────────────────────────────────────────────────────────────────

const FormHint = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-xs text-[--si-gray-500]', className)} {...props} />
))
FormHint.displayName = 'FormHint'

// ─── FormError ───────────────────────────────────────────────────────────────

const FormError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-xs text-[--si-danger]', className)} {...props} />
))
FormError.displayName = 'FormError'

export { Input, Textarea, Label, FormGroup, FormHint, FormError, inputVariants, textareaVariants }
