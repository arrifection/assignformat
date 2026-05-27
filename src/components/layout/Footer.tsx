import { FileText, Globe, Mail, MessageCircle, Share2 } from 'lucide-react'

const footerLinks = {
  Product: ['Templates', 'Formatting', 'AI Layout', 'Pricing'],
  Resources: ['Documentation', 'Blog', 'Help Center', 'API (soon)'],
  Company: ['About', 'Privacy', 'Terms', 'Contact'],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <FileText className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold text-secondary">
                Assign<span className="text-primary">Format</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              The student assignment formatting platform. Paste your material, pick a
              template, and export polished PDF or DOCX files — powered by AI layout.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Share2, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all hover:border-primary/30 hover:bg-background hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} AssignFormat. All rights reserved.
          </p>
          <p className="text-sm text-muted">Built for students who care about presentation.</p>
        </div>
      </div>
    </footer>
  )
}
