import { FileDown, FileType } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const formats = [
  {
    id: 'pdf',
    label: 'Download PDF',
    description: 'Print-ready, fixed layout — ideal for submission portals.',
    icon: FileDown,
    accent: 'from-primary/10 to-primary/5',
    iconBg: 'bg-primary text-white',
  },
  {
    id: 'docx',
    label: 'Download DOCX',
    description: 'Editable Word format — perfect for last-minute revisions.',
    icon: FileType,
    accent: 'from-accent/15 to-accent/5',
    iconBg: 'bg-accent text-secondary',
  },
] as const

export function DownloadOutput() {
  return (
    <section id="download" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Export"
          title="Download your formatted assignment"
          description="One click to export — both formats preserve your template, fonts, and structure."
        />

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {formats.map((format) => {
            const Icon = format.icon
            return (
              <button
                key={format.id}
                type="button"
                className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${format.accent} p-8 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-110 ${format.iconBg}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary sm:text-2xl">
                  {format.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{format.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Export now
                  <FileDown className="h-4 w-4" />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
