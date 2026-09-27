import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, MapPin, Rocket, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

import {
  contactsData,
  dimensionsData,
  educationList,
  profileInfo,
  projectsList,
  trajectoryList,
} from './data/portfolioData'

const slideMeta = [
  { id: 'perfil', label: '01. Perfil' },
  { id: 'dimensoes', label: '02. As 4 Dimensões' },
  { id: 'formacao', label: '03. Formação' },
  { id: 'projetos', label: '04. Projetos' },
  { id: 'trajetoria', label: '05. Trajetória' },
  { id: 'contato', label: '06. Contato' },
]

function normalizeLink(value: string | null) {
  if (!value) return '#'
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => Math.min(current + 1, slideMeta.length - 1))
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const goTo = (index: number) => setActiveIndex(Math.min(Math.max(index, 0), slideMeta.length - 1))
  const isFirst = activeIndex === 0
  const isLast = activeIndex === slideMeta.length - 1

  const renderSlide = () => {
    switch (slideMeta[activeIndex].id) {
      case 'perfil':
        return (
          <div className="grid h-full items-center gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-zinc-400">{profileInfo.role}</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl">
                {profileInfo.name}
              </h1>

              <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-300">{profileInfo.headline}</p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-300">
                <MapPin className="h-4 w-4 text-zinc-400" />
                {profileInfo.location}
              </div>

              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300">{profileInfo.bio}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={normalizeLink(contactsData.github)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-zinc-500"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${contactsData.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
                >
                  E-mail
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-center gap-2 text-zinc-200">
                <Sparkles className="h-4 w-4 text-zinc-400" />
                <span className="text-[11px] font-medium uppercase tracking-[0.3em]">Disponibilidade</span>
              </div>
              <p className="mt-5 text-lg text-zinc-100">{profileInfo.availability}</p>

              <div className="mt-8 space-y-3">
                {[
                  'Ciência de Dados & Análise Quantitativa',
                  'Matemática Aplicada & Modelagem',
                  'Computação & Sistemas',
                  'Tecnologia & IA aplicada',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-300">
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
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-zinc-400">As 4 dimensões</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">
                Base sólida para atuação em tecnologia e dados.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {dimensionsData.map((dimension) => (
                <div key={dimension.id} className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{dimension.pillar}</p>
                  <h3 className="mt-3 text-xl font-medium text-zinc-100">{dimension.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{dimension.courses}</p>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{dimension.role}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {dimension.highlights.map((item) => (
                      <span key={`${dimension.id}-${item}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-zinc-300">
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
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-zinc-400">Formação</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">Formação multidisciplinar em andamento.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {educationList.map((item) => (
                <div key={item.id} className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{item.level}</p>
                    <span className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-zinc-100">{item.degree}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{item.institution}</p>
                  <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.topics.map((topic) => (
                      <span key={`${item.id}-${topic}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300">
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
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-zinc-400">Projetos</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">Projetos com foco em solução, organização e dados.</h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {projectsList.map((project) => (
                <div key={project.id} className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{project.badge}</p>
                    <Rocket className="h-4 w-4 text-zinc-400" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-zinc-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{project.shortDescription}</p>

                  <div className="mt-5 space-y-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Problema</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Solução</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span key={`${project.id}-${item}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a href={normalizeLink(project.liveUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-100">
                        Demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a href={normalizeLink(project.repoUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-300">
                        Código <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'trajetoria':
        return (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-zinc-400">Trajetória</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">Marcos de crescimento e formação contínua.</h2>
            </div>

            <div className="space-y-3">
              {trajectoryList.map((item) => (
                <div key={`${item.year}-${item.title}`} className="grid gap-3 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-4 md:grid-cols-[96px_1fr] md:items-start">
                  <div className="text-sm font-medium text-zinc-300">{item.year}</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">{item.category}</p>
                    <h3 className="mt-2 text-lg font-medium text-zinc-100">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{item.institution}</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'contato':
        return (
          <div className="grid h-full items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-zinc-400">Contato</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-5xl">Disponível para colaborar em dados, tecnologia e produtos.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
                Estou em busca de oportunidades que conectem análise quantitativa, arquitetura de software e aplicação prática de tecnologia em ambientes reais.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${contactsData.email}`} className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-zinc-500">
                  <Mail className="h-4 w-4" />
                  Contato por e-mail
                </a>
                <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100">
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">E-mail</p>
                <p className="mt-3 text-base text-zinc-100">{contactsData.email}</p>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">GitHub</p>
                <p className="mt-3 text-base text-zinc-100">bluejaem</p>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">LinkedIn</p>
                <p className="mt-3 text-base text-zinc-100">Perfil profissional</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-100">
              JM
            </span>
            <span className="text-sm uppercase tracking-[0.2em] text-zinc-200">João</span>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {slideMeta.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(index)}
                className={`rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  index === activeIndex ? 'bg-zinc-100 text-zinc-950' : 'text-zinc-300 hover:text-zinc-100'
                }`}
              >
                {slide.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => goTo(slideMeta.length - 1)}
            className="hidden rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-zinc-500 md:inline-flex"
          >
            Falar comigo
          </button>
        </div>
      </header>

      <main className="mx-auto flex h-[calc(100vh-73px)] max-w-6xl flex-col justify-between px-6 py-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          <span>{slideMeta[activeIndex].label}</span>
          <span>
            {activeIndex + 1} / {slideMeta.length}
          </span>
        </div>

        <div className="relative mt-6 flex-1 overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/60 p-5 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideMeta[activeIndex].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="h-full"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={isFirst}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={isLast}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Próximo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {slideMeta.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ir para ${slide.label}`}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-10 bg-zinc-100' : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
