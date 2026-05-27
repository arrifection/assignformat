import { ArrowRight, FileDown, LayoutTemplate, Sparkles, Type } from 'lucide-react'
import { formattedPreview, rawPasteText } from '../../data/dummy'
import { Button } from '../ui/Button'

const floatingBadges = [
  { label: 'PDF', icon: FileDown, position: 'top-4 right-4 sm:top-6 sm:right-8' },
  { label: 'DOCX', icon: FileDown, position: 'top-20 right-2 sm:top-24 sm:right-4' },
  { label: 'Bold Headings', icon: Type, position: 'bottom-28 left-2 sm:bottom-32 sm:left-4' },
  { label: 'AI Layout', icon: Sparkles, position: 'bottom-8 left-4 sm:bottom-10 sm:left-8' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted shadow-soft">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>AI-powered assignment formatting</span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-secondary sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Turn Raw Assignment Material Into a{' '}
            <span className="text-gradient">Perfectly Formatted File</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Paste your content, choose a template, customize fonts and headings, and let AI
            arrange everything into a clean PDF or DOCX.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button variant="primary" icon={ArrowRight} iconPosition="right">
              Start Formatting
            </Button>
            <a href="#templates" className="inline-flex">
              <Button variant="outline" icon={LayoutTemplate} className="w-full sm:w-auto">
                View Templates
              </Button>
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16 lg:mt-20">
          {floatingBadges.map(({ label, icon: Icon, position }) => (
            <div
              key={label}
              className={`absolute z-10 hidden items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-secondary shadow-soft transition-transform duration-300 hover:scale-105 sm:flex ${position}`}
            >
              <Icon className="h-3.5 w-3.5 text-primary" />
              {label}
            </div>
          ))}

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft-lg shadow-glow transition-shadow duration-500 hover:shadow-glow">
            <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#E8A0A0]" />
              <span className="h-3 w-3 rounded-full bg-accent/60" />
              <span className="h-3 w-3 rounded-full bg-[#A8C9A0]" />
              <span className="ml-2 text-xs font-medium text-muted">Assignment Editor</span>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="border-b border-border p-4 sm:p-5 md:border-b-0 md:border-r">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Raw input
                  </span>
                  <span className="rounded-md bg-border-light px-2 py-0.5 text-[10px] font-medium text-muted">
                    Pasted
                  </span>
                </div>
                <pre className="max-h-48 overflow-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-muted/90 sm:max-h-56 sm:text-sm">
                  {rawPasteText}
                </pre>
              </div>

              <div className="bg-background/40 p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Formatted preview
                  </span>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    AI arranged
                  </span>
                </div>
                <article className="max-h-48 overflow-auto sm:max-h-56">
                  <h3 className="font-display text-sm font-semibold text-secondary sm:text-base">
                    {formattedPreview.title}
                  </h3>
                  <div className="mt-3 space-y-2 text-xs sm:text-sm">
                    {formattedPreview.sections.slice(0, 5).map((section, i) => {
                      if (section.type === 'heading') {
                        return (
                          <p key={i} className="font-semibold text-secondary">
                            {section.text}
                          </p>
                        )
                      }
                      if (section.type === 'subheading') {
                        return (
                          <p key={i} className="font-medium text-muted">
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
                      if (section.type === 'list' && section.items) {
                        return (
                          <ul key={i} className="list-disc space-y-0.5 pl-4 text-muted">
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
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
            {floatingBadges.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold text-secondary"
              >
                <Icon className="h-3 w-3 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
