import { ArrowUpRight } from 'lucide-react'

import { portfolioData } from '../../data/portfolioData'
import { Container } from './Container'

export function Footer() {
  return (
    <footer id="contato" className="border-t border-stone-800 bg-stone-950">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Contato</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-100">{portfolioData.profile.name}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {portfolioData.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-stone-200 transition-colors hover:border-stone-500 hover:text-stone-50"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
