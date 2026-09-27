import { ArrowUpRight } from 'lucide-react'

import { projectsData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

function getProjectLink(link: string | null) {
  if (!link) return '#'
  const match = link.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : link
}

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos que integram produto, lógica e dados."
          description="Iniciativas pensadas para resolver problemas reais, organizar conhecimento e ampliar a clareza técnica aplicada."
        />

        <div className="mt-10 space-y-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="h-full p-6 md:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{project.badge || 'Projeto'}</p>
                  <h3 className="mt-3 text-2xl font-medium text-zinc-100">{project.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((item) => (
                    <Badge key={`${project.id}-${item}`} className="border-zinc-700 bg-zinc-950 text-zinc-200">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">{project.overview}</p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Problema resolvido</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{project.problemSolved}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Visão geral</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{project.overview}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Destaques de arquitetura</p>
                    <ul className="mt-2 space-y-2 text-sm leading-7 text-zinc-400">
                      {project.architectureHighlights.map((highlight) => (
                        <li key={`${project.id}-${highlight.title}`} className="list-disc pl-5">
                          <span className="font-medium text-zinc-200">{highlight.title}</span>: {highlight.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={getProjectLink(project.liveUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-zinc-500"
                  >
                    Ver projeto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={getProjectLink(project.repoUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
                  >
                    Repositório
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
