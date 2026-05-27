import { Check, ChevronDown, ChevronUp, LayoutTemplate } from 'lucide-react'
import { useState } from 'react'
import { templates } from '../../data/dummy'
import { SectionHeader } from '../ui/SectionHeader'

const VISIBLE_DEFAULT = 4

const line = 'h-1.5 rounded-sm bg-[#2f2f2f]/20'
const lineShort = 'h-1.5 rounded-sm bg-[#2f2f2f]/15'

function MiniDocumentPreview({ variant, accent }: { variant: string; accent: string }) {
  switch (variant) {
    case 'classic':
      return (
        <div className="flex h-full flex-col p-3">
          <div className="mx-auto mb-2 h-1 w-12 rounded" style={{ backgroundColor: accent }} />
          <div className="mx-auto mb-3 h-2 w-20 rounded bg-secondary/20" />
          <div className="space-y-2">
            <div className={`w-full ${line}`} />
            <div className={`w-[90%] ${line}`} />
            <div className={`w-full ${line}`} />
            <div className={`mt-2 w-1/3 ${lineShort}`} />
            <div className={`w-full ${line}`} />
          </div>
          <div className="mt-auto pt-2 text-center text-[8px] text-muted">Page 1</div>
        </div>
      )

    case 'minimal':
      return (
        <div className="flex h-full flex-col p-4">
          <div className="mb-4 h-2 w-16 rounded bg-secondary/15" />
          <div className="space-y-2">
            <div className="h-px w-full bg-border" />
            <div className="h-1 w-full rounded bg-secondary/8" />
            <div className="h-1 w-[70%] rounded bg-secondary/8" />
            <div className="h-px w-full bg-border" />
            <div className="h-1 w-[80%] rounded bg-secondary/8" />
          </div>
        </div>
      )

    case 'premium':
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
            </div>
          </div>
        </div>
      )

    case 'research':
      return (
        <div className="flex h-full flex-col p-3 text-[8px]">
          <div className="mb-1 font-semibold uppercase tracking-wide text-muted">Abstract</div>
          <div className="mb-2 space-y-0.5">
            <div className="h-1 w-full rounded bg-secondary/10" />
            <div className="h-1 w-[95%] rounded bg-secondary/10" />
          </div>
          <div className="mb-1 font-semibold text-secondary/70">1. Introduction</div>
          <div className="h-1 w-full rounded bg-secondary/10" />
          <div className="mt-2 font-semibold text-secondary/70">References</div>
        </div>
      )

    case 'formal-report':
      return (
        <div className="flex h-full flex-col">
          <div className="px-3 py-1.5 text-[8px] font-semibold text-white" style={{ backgroundColor: accent }}>
            EXECUTIVE SUMMARY
          </div>
          <div className="flex flex-1 gap-2 p-2">
            <div className="w-4 shrink-0 space-y-2 border-r border-border pr-1">
              {['1', '2', '3'].map((n) => (
                <div key={n} className="text-[7px] font-bold text-muted">
                  {n}
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-1">
              <div className="h-1 w-full rounded bg-secondary/12" />
              <div className="h-1 w-[85%] rounded bg-secondary/12" />
              <div className="h-1 w-full rounded bg-secondary/12" />
            </div>
          </div>
          <div className="border-t border-border px-2 py-1 text-right text-[7px] text-muted">
            Page 3 of 12
          </div>
        </div>
      )

    case 'thesis':
      return (
        <div className="flex h-full flex-col px-2 py-3">
          <div className="mx-6 flex-1 space-y-2 border-x border-border/80 px-3">
            <div className="text-[8px] font-semibold" style={{ color: accent }}>
              Chapter II
            </div>
            <div className="h-1.5 w-3/4 rounded bg-secondary/15" />
            <div className="space-y-1.5">
              <div className="h-1 w-full rounded bg-secondary/8" />
              <div className="h-1 w-full rounded bg-secondary/8" />
              <div className="h-1 w-[90%] rounded bg-secondary/8" />
            </div>
            <div className="mt-2 border-t border-dashed border-border pt-2 text-[7px] text-muted">
              Table of Contents ··· 4
            </div>
          </div>
        </div>
      )

    case 'notebook':
      return (
        <div
          className="relative flex h-full flex-col p-3"
          style={{
            backgroundImage:
              'repeating-linear-gradient(transparent, transparent 11px, #e5dfd4 11px, #e5dfd4 12px)',
          }}
        >
          <div className="absolute bottom-0 left-6 top-0 w-px bg-red-300/70" />
          <div className="pl-4">
            <div className="mb-2 h-2 w-14 rounded bg-secondary/15" />
            <div className="space-y-3">
              <div className="h-1 w-[80%] rounded bg-secondary/10" />
              <div className="h-1 w-[65%] rounded bg-secondary/10" />
              <div className="h-1 w-[75%] rounded bg-secondary/10" />
            </div>
          </div>
        </div>
      )

    case 'modern-academic':
      return (
        <div className="flex h-full gap-2 p-3">
          <div className="w-1/3 shrink-0 space-y-2">
            <div className="h-2 w-full rounded" style={{ backgroundColor: accent }} />
            <div className="h-1 w-full rounded bg-secondary/10" />
            <div className="h-1 w-full rounded bg-secondary/10" />
          </div>
          <div className="flex-1 space-y-1 pt-1">
            <div className="h-1 w-full rounded bg-secondary/10" />
            <div className="h-1 w-full rounded bg-secondary/10" />
            <div className="h-1 w-[70%] rounded bg-secondary/10" />
            <div className="mt-2 h-1 w-1/2 rounded bg-secondary/15" />
            <div className="h-1 w-full rounded bg-secondary/8" />
          </div>
        </div>
      )

    case 'elegant-cover':
      return (
        <div
          className="flex h-full flex-col items-center justify-center p-4 text-center"
          style={{ background: `linear-gradient(180deg, ${accent}08 0%, transparent 60%)` }}
        >
          <div className="mb-1 h-px w-10" style={{ backgroundColor: accent }} />
          <div className="mb-2 h-2.5 w-24 rounded bg-secondary/20" />
          <div className="mb-3 h-1 w-16 rounded bg-secondary/10" />
          <div className="space-y-1 text-[7px] text-muted">
            <div>Course · HLTH 204</div>
            <div>May 27, 2026</div>
          </div>
          <div className="mt-4 h-px w-10" style={{ backgroundColor: accent }} />
        </div>
      )

    case 'simple-student':
      return (
        <div className="flex h-full flex-col p-4">
          <div className="mb-3 h-2 w-20 rounded bg-secondary/20" />
          <ul className="space-y-2">
            {['• Point one', '• Point two', '• Point three'].map((item) => (
              <li key={item} className="text-[8px] text-muted">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto h-1 w-2/3 rounded bg-secondary/10" />
        </div>
      )

    default:
      return (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
          <div className={`w-3/4 ${line}`} />
          <div className={`w-1/2 ${lineShort}`} />
          <span className="text-[10px] text-muted">Template preview</span>
        </div>
      )
  }
}

export function TemplateGallery() {
  const [showMoreTemplates, setShowMoreTemplates] = useState(false)

  const visibleTemplates = showMoreTemplates
    ? templates
    : templates.slice(0, VISIBLE_DEFAULT)

  return (
    <section id="templates" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Templates"
          title="Professional layouts for every assignment"
          description="Each template is crafted for academic clarity — preview the structure before you format."
        />

        {templates.length === 0 ? (
          <p className="text-center text-muted">No templates available.</p>
        ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTemplates.map((template) => (
            <article
              key={template.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft-lg"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-border bg-white transition-colors group-hover:bg-[#faf8f5]">
                <div className="absolute inset-0">
                  <MiniDocumentPreview variant={template.id} accent={template.accent} />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-secondary">
                    {template.name}
                  </h3>
                  {template.popular && (
                    <span className="shrink-0 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{template.description}</p>
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-sm font-medium text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Check className="h-4 w-4 opacity-70" />
                  Use Template
                </button>
              </div>
            </article>
          ))}
        </div>
        )}

        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={() => setShowMoreTemplates((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-accent/40 bg-gradient-to-r from-accent/10 via-card to-accent/5 px-8 py-3.5 font-semibold text-secondary shadow-soft transition-all duration-300 hover:border-accent hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LayoutTemplate className="h-5 w-5 text-accent" />
            {showMoreTemplates ? 'Show Less' : 'View More Templates'}
            {showMoreTemplates ? (
              <ChevronUp className="h-4 w-4 text-muted" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
