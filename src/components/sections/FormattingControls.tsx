import {
  AlignLeft,
  BookOpen,
  Frame,
  ChevronDown,
  Heading,
  Type,
} from 'lucide-react'
import { useState } from 'react'
import { SectionHeader } from '../ui/SectionHeader'

export function FormattingControls() {
  const [headingStyle, setHeadingStyle] = useState<'bold' | 'underline'>('bold')
  const [pageBorder, setPageBorder] = useState(true)
  const [titlePage, setTitlePage] = useState(false)

  return (
    <section id="formatting" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Formatting"
          title="Fine-tune every detail before export"
          description="Control typography, spacing, and structure — see changes reflected in your preview instantly."
        />

        <div className="mx-auto max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft-lg">
            <div className="border-b border-border bg-background/50 px-5 py-4 sm:px-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-secondary">
                <Type className="h-5 w-5 text-primary" />
                Document settings
              </h3>
              <p className="mt-1 text-sm text-muted">Customize how your assignment appears</p>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary">
                  <Type className="h-4 w-4 text-muted" />
                  Font family
                </span>
                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 pr-10 text-sm text-secondary transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    defaultValue="times"
                  >
                    <option value="times">Times New Roman</option>
                    <option value="georgia">Georgia</option>
                    <option value="arial">Arial</option>
                    <option value="calibri">Calibri</option>
                    <option value="garamond">Garamond</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                </div>
              </label>

              <div>
                <span className="mb-2 block text-sm font-medium text-secondary">Font size</span>
                <div className="flex flex-wrap gap-2">
                  {['11', '12', '13', '14'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`min-w-[3rem] rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                        size === '12'
                          ? 'border-primary bg-primary text-white shadow-soft'
                          : 'border-border bg-background text-muted hover:border-primary/30 hover:text-secondary'
                      }`}
                    >
                      {size} pt
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary">
                  <Heading className="h-4 w-4 text-muted" />
                  Heading style
                </span>
                <div className="flex gap-2 rounded-xl border border-border bg-background p-1">
                  {(['bold', 'underline'] as const).map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setHeadingStyle(style)}
                      className={`flex-1 rounded-lg py-2.5 text-sm font-medium capitalize transition-all ${
                        headingStyle === style
                          ? 'bg-primary text-white shadow-soft'
                          : 'text-muted hover:text-secondary'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
                <span className="flex items-center gap-2 text-sm font-medium text-secondary">
                  <Frame className="h-4 w-4 text-muted" />
                  Page border
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={pageBorder}
                  onClick={() => setPageBorder(!pageBorder)}
                  className={`relative h-7 w-12 rounded-full transition-colors ${
                    pageBorder ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      pageBorder ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary">
                  <AlignLeft className="h-4 w-4 text-muted" />
                  Line spacing
                </span>
                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 pr-10 text-sm text-secondary transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    defaultValue="1.5"
                  >
                    <option value="1">Single</option>
                    <option value="1.15">1.15</option>
                    <option value="1.5">1.5 (recommended)</option>
                    <option value="2">Double</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                </div>
              </label>

              <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
                <span className="flex items-center gap-2 text-sm font-medium text-secondary">
                  <BookOpen className="h-4 w-4 text-muted" />
                  Title page
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={titlePage}
                  onClick={() => setTitlePage(!titlePage)}
                  className={`relative h-7 w-12 rounded-full transition-colors ${
                    titlePage ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      titlePage ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="border-t border-border bg-background/30 px-5 py-4 sm:px-6">
              <p className="text-center text-xs text-muted">
                Settings apply to PDF and DOCX export
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
