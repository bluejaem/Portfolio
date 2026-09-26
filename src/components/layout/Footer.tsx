import { ArrowUpRight } from 'lucide-react'

import { profileData, socialLinks } from '../../data/portfolioData'
import { Container } from './Container'

function normalizeLink(value: string) {
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

export function Footer() {
  return (
    <footer id="contato" className="border-t border-zinc-800 bg-zinc-950">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Contato</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-100">{profileData.name}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href={normalizeLink(socialLinks.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-zinc-50">
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-zinc-50">
            E-mail
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={normalizeLink(socialLinks.linkedin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-zinc-50">
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
