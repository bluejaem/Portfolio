import { ArrowUpRight } from 'lucide-react'

import { portfolioData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos com foco em solução, análise e produto."
          description="Iniciativas pessoais e conceituais orientadas a impacto, arquitetura e clareza técnica."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <Card key={project.name} className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-zinc-100">{project.name}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>
                </div>

                {project.featured ? (
                  <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300">Destaque</Badge>
                ) : null}
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={`${project.name}-${tag}`} className="border-zinc-700 bg-zinc-950 text-zinc-200">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-zinc-50">
                <a href={project.link ?? '#'} className="inline-flex items-center gap-2">
                  Ver projeto
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
