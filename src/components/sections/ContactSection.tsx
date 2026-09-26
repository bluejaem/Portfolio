import { ArrowUpRight, GitBranch, LinkIcon, Mail } from 'lucide-react'

import { profileData, socialLinks } from '../../data/portfolioData'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

function normalizeLink(value: string) {
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

export function ContactSection() {
  return (
    <section id="contato" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionTitle
          eyebrow="Contato"
          title="Disponível para projetos, estágio e colaboração técnica."
          description="Se você busca alguém com base em dados, matemática, desenvolvimento e engenharia de software, podemos conversar."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <a href={normalizeLink(socialLinks.github)} target="_blank" rel="noreferrer" className="group block">
            <Card className="flex items-center justify-between gap-3 p-5 text-zinc-200 transition-colors hover:border-zinc-700">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-zinc-100">
                  <GitBranch className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">GitHub</span>
                  <span className="mt-1 block text-sm font-medium text-zinc-100">bluejaem</span>
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Card>
          </a>

          <a href={`mailto:${socialLinks.email}`} className="group block">
            <Card className="flex items-center justify-between gap-3 p-5 text-zinc-200 transition-colors hover:border-zinc-700">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-zinc-100">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">E-mail</span>
                  <span className="mt-1 block text-sm font-medium text-zinc-100">{socialLinks.email}</span>
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Card>
          </a>

          <a href={normalizeLink(socialLinks.linkedin)} target="_blank" rel="noreferrer" className="group block">
            <Card className="flex items-center justify-between gap-3 p-5 text-zinc-200 transition-colors hover:border-zinc-700">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-zinc-100">
                  <LinkIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">LinkedIn</span>
                  <span className="mt-1 block text-sm font-medium text-zinc-100">Perfil profissional</span>
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Card>
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300">
            {profileData.availability}
          </span>
        </div>
      </div>
    </section>
  )
}
