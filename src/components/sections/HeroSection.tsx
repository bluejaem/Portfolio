import { ArrowRight, MapPin, Sparkles } from 'lucide-react'

import { profileData, socialLinks } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

function normalizeLink(value: string) {
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

export function HeroSection() {
  return (
    <section id="sobre" className="relative overflow-hidden border-b border-zinc-800 py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="max-w-3xl">
          <Badge className="mb-6 border-zinc-700 bg-zinc-900/80 text-zinc-200">
            <Sparkles className="mr-2 h-3 w-3" />
            Portfólio profissional
          </Badge>

          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-zinc-400">{profileData.role}</p>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl">{profileData.name}</h1>

          <p className="mt-4 max-w-2xl text-xl leading-8 text-zinc-300">{profileData.headline}</p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-300">
            <MapPin className="h-4 w-4 text-zinc-400" />
            {profileData.location}
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">{profileData.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" className="gap-2">
              <a href={normalizeLink(socialLinks.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                GitHub
              </a>
            </Button>

            <Button variant="outline">
              <a href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-2">
                Contato por e-mail
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {(profileData.direction ?? []).map((item) => (
              <span key={item} className="rounded-full border border-zinc-700 bg-zinc-900/70 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-300">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">
              {profileData.availability}
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
