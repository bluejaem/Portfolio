import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

import {
  certificationsList,
  contactsData,
  dimensionsData,
  educationList,
  profileInfo,
  projectsList,
  trajectoryMilestones,
} from './data/portfolioData'

const slideMeta = [
  { id: 'perfil', label: '01 Perfil' },
  { id: 'dimensoes', label: '02 4 Dimensões' },
  { id: 'formacao', label: '03 Formação' },
  { id: 'projetos', label: '04 Projetos' },
  { id: 'certificacoes', label: '05 Certificações & Trajetória' },
  { id: 'contato', label: '06 Contato' },
]

function normalizeLink(value: string | null) {
  if (!value) return '#'
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setActiveSlide((current) => Math.min(current + 1, slideMeta.length - 1))
      if (event.key === 'ArrowLeft') setActiveSlide((current) => Math.max(current - 1, 0))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const goToSlide = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), slideMeta.length - 1)
    setActiveSlide(nextIndex)
  }

  const renderSlide = () => {
    switch (slideMeta[activeSlide].id) {
      case 'perfil':
        return (
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-zinc-300">
                <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
                Ciência de Dados
              </div>

              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400">{profileInfo.role}</p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl">{profileInfo.name}</h1>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-300">{profileInfo.headline}</p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-300">
                <MapPin className="h-4 w-4 text-zinc-400" />
                {profileInfo.location}
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">{profileInfo.bio}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => goToSlide(1)}
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Iniciar Apresentação
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={normalizeLink(contactsData.github)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 hover:border-zinc-500"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${contactsData.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:text-zinc-100"
                >
                  E-mail
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="flex items-center gap-2 text-zinc-200">
                <Briefcase className="h-4 w-4 text-zinc-400" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">Disponibilidade</span>
              </div>

              <p className="mt-5 text-lg text-zinc-100">{profileInfo.availability}</p>

              <div className="mt-8 space-y-3">
                {[
                  'Dados & Ciência de Dados',
                  'Matemática Aplicada',
                  'Computação & Sistemas',
                  'Gestão de Tecnologia & IA',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'dimensoes':
        return (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">As 4 dimensões</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-50 md:text-4xl">Base sólida para atuação em tecnologia e dados.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {dimensionsData.map((dimension) => (
                <div key={dimension.id} className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{dimension.pillar}</p>
                  <h3 className="mt-3 text-xl font-medium text-zinc-100">{dimension.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{dimension.course}</p>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{dimension.role}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {dimension.highlights.map((item) => (
                      <span key={`${dimension.id}-${item}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'formacao':
        return (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">Formação integrada</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-50 md:text-4xl">Interseção entre formação acadêmica e base técnica aplicada.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {educationList.map((item) => (
                <div key={item.id} className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{item.level}</p>
                    <span className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-zinc-300">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-medium text-zinc-100">{item.degree}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{item.institution}</p>
                  <p className="mt-2 text-sm text-zinc-400">Previsão: {item.expectedGraduation}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(item.topics ?? []).map((topic) => (
                      <span key={`${item.id}-${topic}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-zinc-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'projetos':
        return (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">Projetos</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-50 md:text-4xl">Projetos orientados a solução concreta, organização e dados.</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/70 p-5 md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{projectsList[0].badge}</p>
                    <h3 className="mt-3 text-2xl font-medium text-zinc-100">{projectsList[0].title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projectsList[0].techStack.map((item) => (
                      <span key={`${projectsList[0].id}-${item}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">{projectsList[0].shortDescription}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a href={normalizeLink(projectsList[0].liveUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-zinc-100 hover:border-zinc-500">
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={normalizeLink(projectsList[0].repoUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:text-zinc-100">
                    Repositório
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {projectsList.slice(1).map((project) => (
                  <div key={project.id} className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{project.badge}</p>
                    <h3 className="mt-3 text-xl font-medium text-zinc-100">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{project.shortDescription}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((item) => (
                        <span key={`${project.id}-${item}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-zinc-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'certificacoes':
        return (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">Certificações & trajetória</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-50 md:text-4xl">Crescimento com foco em dados, IA e fundamentos técnicos.</h2>
            </div>

            <div className="space-y-4">
              {trajectoryMilestones.map((item) => (
                <div key={`${item.year}-${item.title}`} className="rounded-[24px] border border-zinc-800 bg-zinc-900/60 p-4 md:p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{item.badge}</p>
                      <h3 className="mt-2 text-lg font-medium text-zinc-100">{item.title}</h3>
                    </div>
                    <span className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-zinc-300">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300">{item.organization}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {certificationsList.slice(0, 6).map((item) => (
                <div key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-zinc-300">
                      {item.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">{item.year}</span>
                  </div>
                  <h4 className="mt-3 text-sm font-medium text-zinc-100">{item.title}</h4>
                  <p className="mt-2 text-xs text-zinc-400">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 'contato':
        return (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">Contato</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-50 md:text-5xl">Disponível para estágios e posições em Dados e Tecnologia.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
                Posso contribuir com raciocínio analítico, desenvolvimento prático, organização de dados e base técnica para projetos reais.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${contactsData.email}`} className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 hover:border-zinc-500">
                  <Mail className="h-4 w-4" />
                  E-mail
                </a>
                <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:text-zinc-100">
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:text-zinc-100">
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/70 p-6">
              <div className="flex items-center gap-2 text-zinc-200">
                <GraduationCap className="h-4 w-4 text-zinc-400" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">Disponibilidade</span>
              </div>

              <p className="mt-5 text-xl text-zinc-100">{profileInfo.availability}</p>

              <div className="mt-7 space-y-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">E-mail</p>
                  <p className="mt-2 text-sm text-zinc-200">{contactsData.email}</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">LinkedIn</p>
                  <p className="mt-2 text-sm text-zinc-200">Perfil profissional</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">GitHub</p>
                  <p className="mt-2 text-sm text-zinc-200">@bluejaem</p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-between overflow-x-hidden bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-100">
              JM
            </span>
            <div>
              <p className="text-sm font-medium text-zinc-100">João Guilherme</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {slideMeta.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors ${
                  activeSlide === index
                    ? 'border-zinc-700 bg-zinc-800 text-zinc-100'
                    : 'border-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {slide.label}
              </button>
            ))}
          </nav>

          <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-zinc-300">
            Ciência de Dados
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-6 py-6">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideMeta[activeSlide].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="w-full rounded-[32px] border border-zinc-800 bg-zinc-950/60 p-5 md:p-8"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 pb-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            Etapa {activeSlide + 1} de {slideMeta.length} — {slideMeta[activeSlide].label}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToSlide(activeSlide - 1)}
              disabled={activeSlide === 0}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </button>

            <button
              type="button"
              onClick={() => goToSlide(activeSlide + 1)}
              disabled={activeSlide === slideMeta.length - 1}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Próximo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
