interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 lg:mb-16 ${alignClass}`}>
      <span className="mb-3 inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {label}
      </span>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-secondary sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  )
}
