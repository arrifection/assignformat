import { Clock, Download, FileText, MoreHorizontal, Plus } from 'lucide-react'
import { recentAssignments } from '../../data/dummy'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'

const statusStyles = {
  Ready: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Draft: 'bg-amber-50 text-amber-800 border-amber-200',
  Downloaded: 'bg-slate-50 text-slate-600 border-border',
} as const

export function DashboardMock() {
  return (
    <section id="dashboard" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Dashboard"
          title="Your recent assignments"
          description="Pick up where you left off — every project saves your template and formatting choices."
          align="left"
        />

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft-lg">
          <div className="flex flex-col gap-4 border-b border-border bg-background/40 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-secondary">My assignments</h3>
              <p className="text-sm text-muted">3 projects · 1 ready to download</p>
            </div>
            <Button variant="primary" icon={Plus} className="!py-2.5 !text-sm w-full sm:w-auto">
              New assignment
            </Button>
          </div>

          <ul className="divide-y divide-border">
            {recentAssignments.map((assignment) => (
              <li
                key={assignment.id}
                className="flex flex-col gap-4 px-4 py-4 transition-colors hover:bg-background/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5"
              >
                <div className="flex min-w-0 items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-secondary">{assignment.title}</p>
                    <p className="text-sm text-muted">{assignment.course}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                      <Clock className="h-3 w-3" />
                      {assignment.updated}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[assignment.status]}`}
                  >
                    {assignment.status}
                  </span>
                  <div className="flex gap-2">
                    {assignment.status === 'Ready' && (
                      <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </button>
                    )}
                    <button
                      type="button"
                      className="rounded-lg p-2 text-muted transition-colors hover:bg-border-light hover:text-secondary"
                      aria-label="More options"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
