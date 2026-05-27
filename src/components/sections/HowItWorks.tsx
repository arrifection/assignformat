import { Download, FileUp, Palette, LayoutTemplate } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { howItWorksSteps } from '../../data/dummy'
import { SectionHeader } from '../ui/SectionHeader'

const stepIcons: LucideIcon[] = [FileUp, LayoutTemplate, Palette, Download]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How it works"
          title="Four steps to a submission-ready assignment"
          description="From messy notes to polished documents — no manual formatting marathon required."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {howItWorksSteps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <article
                key={step.step}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-soft-lg"
              >
                <span className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white shadow-soft">
                  {step.step}
                </span>
                <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-background text-primary transition-colors group-hover:bg-primary/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-secondary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
