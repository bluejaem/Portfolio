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
                  {project.techStack.slice(0, 3).map((item) => (
                    <Badge key={`${project.id}-${item}`} className="border-zinc-700 bg-zinc-950 text-zinc-200">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">{project.shortDescription}</p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Problema</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Solução</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{project.solution}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Papel</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{project.role}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Arquitetura</p>
                    <ul className="mt-2 space-y-2 text-sm leading-7 text-zinc-400">
                      {(project.architectureDecisions ?? []).map((decision) => (
                        <li key={decision} className="list-disc pl-5">
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Funcionalidades</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(project.features ?? []).map((feature) => (
                    <Badge key={`${project.id}-${feature}`} className="border-zinc-700 bg-zinc-950 text-zinc-200">
                      {feature}
                    </Badge>
                  ))}
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

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Aprendizados</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-400">
                  {(project.learnings ?? []).map((learning) => (
                    <li key={learning} className="list-disc pl-5">
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
