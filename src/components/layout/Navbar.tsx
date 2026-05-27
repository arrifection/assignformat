import { FileText, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'

const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#templates', label: 'Templates' },
  { href: '#formatting', label: 'Formatting' },
  { href: '#preview', label: 'AI Preview' },
  { href: '#dashboard', label: 'Dashboard' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/80 bg-background/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
            <FileText className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold text-secondary">
            Assign<span className="text-primary">Format</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" className="!px-4 !py-2 text-sm">
            Sign in
          </Button>
          <Button variant="primary" className="!px-5 !py-2.5 text-sm">
            Start Formatting
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-secondary transition-colors hover:bg-border-light lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background/98 px-4 py-6 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="outline" className="w-full">
              Sign in
            </Button>
            <Button variant="primary" className="w-full">
              Start Formatting
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
