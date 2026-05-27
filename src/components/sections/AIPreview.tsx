import { ArrowRight, Sparkles } from 'lucide-react'
import { aiAfterPreview, messyBeforeText } from '../../data/dummy'
import { SectionHeader } from '../ui/SectionHeader'

export function AIPreview() {
  return (
    <section id="preview" className="scroll-mt-24 bg-background/80 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="AI Preview"
          title="From messy notes to structured assignments"
          description="Our AI detects titles, sections, lists, and references — then arranges them into academic format."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
            <span className="mb-4 w-fit rounded-full bg-border-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
              Before
            </span>
            <pre className="flex-1 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">
              {messyBeforeText}
            </pre>
          </article>

          <div className="flex items-center justify-center py-2 lg:py-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-soft lg:h-14 lg:w-14">
              <ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" />
            </div>
          </div>

          <article className="flex flex-col rounded-2xl border-2 border-primary/15 bg-card p-5 shadow-soft-lg sm:p-6">
            <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              After — AI arranged
            </span>
            <div className="flex-1 space-y-3 text-sm">
              <h3 className="font-display text-base font-semibold text-secondary sm:text-lg">
                {aiAfterPreview.title}
              </h3>
              {aiAfterPreview.sections.map((section, i) => {
                if (section.type === 'heading') {
                  return (
                    <p key={i} className="font-semibold text-secondary">
                      {section.text}
                    </p>
                  )
                }
                if (section.type === 'paragraph') {
                  return (
                    <p key={i} className="leading-relaxed text-muted">
                      {section.text}
                    </p>
                  )
                }
                if (section.type === 'list') {
                  return (
                    <ul key={i} className="list-disc space-y-1 pl-5 text-muted">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                }
                return null
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
