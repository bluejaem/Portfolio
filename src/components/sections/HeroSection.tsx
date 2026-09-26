import { ArrowRight, MapPin, Sparkles } from 'lucide-react'

import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { portfolioData } from '../../data/portfolioData'

export function HeroSection() {
  return (
    <section id="sobre" className="relative overflow-hidden border-b border-zinc-800 pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14),_transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge className="mb-6 border-zinc-700 bg-zinc-900/70 text-zinc-200">
            <Sparkles className="mr-2 h-3 w-3" />
            Portfolio profissional
          </Badge>

          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-zinc-400">
            {portfolioData.profile.title}
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl">
            {portfolioData.profile.name}
          </h1>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-300">
            <MapPin className="h-4 w-4 text-zinc-400" />
            {portfolioData.profile.location}
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {portfolioData.profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" className="gap-2">
              <a href={portfolioData.socialLinks[0].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                GitHub
              </a>
            </Button>

            <Button variant="outline">
              <a href={`mailto:${portfolioData.profile.email}`} className="inline-flex items-center gap-2">
                Contato por email
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">
              {portfolioData.profile.availability}
            </span>
            <a href="#formacao" className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-zinc-100">
              Ver formação
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
