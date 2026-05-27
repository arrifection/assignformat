import type { LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-soft-lg',
  secondary:
    'bg-secondary text-white hover:bg-secondary/90 shadow-soft',
  outline:
    'border-2 border-border bg-card text-secondary hover:border-primary/30 hover:text-primary',
  ghost: 'text-secondary hover:bg-border-light/80 hover:text-primary',
}

export function Button({
  variant = 'primary',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 sm:px-6 sm:py-3 sm:text-base ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />}
    </button>
  )
}
