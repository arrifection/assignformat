import { Check } from 'lucide-react'
import { templates } from '../../data/dummy'
import { SectionHeader } from '../ui/SectionHeader'

function MiniDocumentPreview({
  variant,
  accent,
}: {
  variant: string
  accent: string
}) {
  if (variant === 'classic') {
    return (
      <div className="flex h-full flex-col p-3">
        <div className="mx-auto mb-2 h-1 w-12 rounded" style={{ backgroundColor: accent }} />
        <div className="mx-auto mb-3 h-2 w-20 rounded bg-secondary/20" />
        <div className="space-y-1.5">
          <div className="h-1 w-full rounded bg-secondary/10" />
          <div className="h-1 w-[90%] rounded bg-secondary/10" />
          <div className="h-1 w-full rounded bg-secondary/10" />
          <div className="mt-2 h-1 w-1/3 rounded bg-secondary/15" />
          <div className="h-1 w-full rounded bg-secondary/10" />
          <div className="h-1 w-[85%] rounded bg-secondary/10" />
        </div>
        <div className="mt-auto pt-2 text-center text-[8px] text-muted">Page 1</div>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className="flex h-full flex-col p-4">
        <div className="mb-4 h-2 w-16 rounded bg-secondary/15" />
        <div className="space-y-2">
          <div className="h-px w-full bg-border" />
          <div className="h-1 w-full rounded bg-secondary/8" />
          <div className="h-1 w-[70%] rounded bg-secondary/8" />
          <div className="h-px w-full bg-border" />
          <div className="h-1 w-full rounded bg-secondary/8" />
          <div className="h-1 w-[80%] rounded bg-secondary/8" />
        </div>
      </div>
    )
  }

  if (variant === 'premium') {
    return (
      <div className="flex h-full flex-col p-2">
        <div
          className="flex flex-1 flex-col rounded border-2 p-2"
          style={{ borderColor: `${accent}40` }}
        >
          <div className="mb-2 h-1.5 w-14 rounded" style={{ backgroundColor: accent }} />
          <div className="space-y-1">
            <div className="h-1 w-full rounded bg-secondary/10" />
            <div className="h-1 w-[88%] rounded bg-secondary/10" />
            <div className="h-1 w-full rounded bg-secondary/10" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col p-3 text-[8px]">
      <div className="mb-1 font-semibold uppercase tracking-wide text-muted">Abstract</div>
      <div className="mb-2 space-y-0.5">
        <div className="h-1 w-full rounded bg-secondary/10" />
        <div className="h-1 w-[95%] rounded bg-secondary/10" />
      </div>
      <div className="mb-1 font-semibold text-secondary/70">1. Introduction</div>
      <div className="space-y-0.5">
        <div className="h-1 w-full rounded bg-secondary/10" />
        <div className="h-1 w-[80%] rounded bg-secondary/10" />
      </div>
      <div className="mt-2 mb-1 font-semibold text-secondary/70">References</div>
      <div className="h-1 w-[60%] rounded bg-secondary/10" />
    </div>
  )
}

export function TemplateGallery() {
  return (
    <section id="templates" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Templates"
          title="Professional layouts for every assignment"
          description="Each template is crafted for academic clarity — preview the structure before you format."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template, index) => (
            <article
              key={template.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg"
            >
              <div className="aspect-[3/4] border-b border-border bg-background/50 transition-colors group-hover:bg-background">
                <MiniDocumentPreview variant={template.id} accent={template.accent} />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-secondary">
                    {template.name}
                  </h3>
                  {index === 0 && (
                    <span className="shrink-0 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{template.description}</p>
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-sm font-medium text-secondary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                >
                  <Check className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  Use template
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
