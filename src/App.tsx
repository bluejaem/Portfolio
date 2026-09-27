import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, BriefcaseBusiness, GitBranch, GraduationCap, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

import {
  allGeneralCertificates,
  contactsData,
  dimensionsData,
  profileInfo,
  projectsList,
} from './data/portfolioData'

function normalizeLink(value: string | null) {
  if (!value) return '#'
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

function ProjectPreview({ projectId }: { projectId: string }) {
  const projectMap: Record<string, string> = {
    'meu-life-os': '/projects/meu-life-os.png',
    'life-os': '/projects/meu-life-os.png',
    'govlocal-app': '/projects/govlocal-app.png',
    'govlocal': '/projects/govlocal-app.png',
    'consulta-salarios': '/projects/consulta-salarios.png',
    'salarios-tech': '/projects/consulta-salarios.png',
    'calculadora-imc': '/projects/calculadora-imc.png',
  }

  const src = projectMap[projectId] ?? '/projects/meu-life-os.svg'

  return (
    <div className="relative h-56 overflow-hidden rounded-t-[28px] border-b border-purple-500/20 bg-[#0b1220]">
      <img src={src} alt={projectId} className="h-full w-full object-cover" />
    </div>
  )
}

function App() {
  const [currentFormation, setCurrentFormation] = useState(0)

  const formation = dimensionsData[currentFormation]
  const isLastFormation = currentFormation === dimensionsData.length - 1
  const isFirstFormation = currentFormation === 0

  const imageMap: Record<string, string> = {
    dados: '/education/data-science.jpeg',
    'gestao-ia': '/education/tecnologia-da-informacao-800x533.jpeg',
    computacao: '/education/engenharia-computacao.png',
    matematica: '/education/matematica-aplicada.jpg',
  }

  const formacaoCountLabel = `${String(currentFormation + 1).padStart(2, '0')} / ${String(dimensionsData.length).padStart(2, '0')}`

  const showPreviousFormation = () => {
    setCurrentFormation((previous) => (previous === 0 ? dimensionsData.length - 1 : previous - 1))
  }

  const showNextFormation = () => {
    setCurrentFormation((previous) => (previous === dimensionsData.length - 1 ? 0 : previous + 1))
  }

  return (
    <div className="min-h-screen bg-[#090611] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-7rem] h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute left-[-8rem] top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute right-[-8rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-700/15 blur-[150px]" />
      </div>

      <header className="sticky top-0 z-50 h-16 border-b border-purple-500/20 bg-zinc-950/60 backdrop-blur-xl">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-500/30 to-violet-500/10 shadow-[0_0_18px_rgba(168,85,247,0.2)]">
              <img src={profileInfo.photoUrl} alt={profileInfo.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-100">João Guilherme</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-purple-200">
              Ciência de Dados & Tecnologia
            </span>
            <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-200">
              <GitBranch className="h-4 w-4" />
            </a>
            <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-200">
              <BriefcaseBusiness className="h-4 w-4" />
            </a>
            <a href={`mailto:${contactsData.email}`} aria-label="E-mail" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-200">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <section id="inicio" className="grid items-center gap-8 py-8 md:grid-cols-[1.2fr_0.8fr] md:py-14">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.12)]">
              Ciência de Dados
            </div>

            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-300/80">{profileInfo.role}</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">{profileInfo.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300/80 md:text-xl">{profileInfo.headline}</p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-900/40 px-3 py-1.5 text-sm text-zinc-200 backdrop-blur-xl">
              <MapPin className="h-4 w-4 text-purple-300" />
              {profileInfo.location}
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300/80">{profileInfo.bio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-500/20 to-violet-500/15 px-5 py-2.5 text-sm font-medium text-purple-100 shadow-[0_12px_30px_rgba(168,85,247,0.15)] transition hover:border-purple-300/60 hover:shadow-[0_18px_35px_rgba(168,85,247,0.2)]">
                Ver Projetos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-purple-400/40 hover:text-purple-100">
                Entrar em Contato
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-full border border-purple-500/30 bg-gradient-to-tr from-purple-500/30 to-violet-500/10 p-2 shadow-[0_0_50px_rgba(168,85,247,0.25)]">
              <div className="absolute inset-3 rounded-full border border-purple-500/20" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full border border-purple-500/20 bg-zinc-900/60 md:h-80 md:w-80">
                <img
                  src={profileInfo.photoUrl}
                  alt={profileInfo.name}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    const target = event.currentTarget
                    target.style.display = 'none'
                    const fallback = target.parentElement?.querySelector('[data-fallback]') as HTMLElement | null
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div
                  data-fallback
                  className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/30 via-violet-600/20 to-zinc-950 text-5xl font-semibold tracking-[0.28em] text-purple-100"
                >
                  JM
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dimensoes" className="py-8 md:py-12">
          <div className="mb-6 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Formações acadêmicas</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Formações Acadêmicas Interdisciplinares</h2>
          </div>

          <div className="w-full max-w-4xl mx-auto min-h-[380px] rounded-3xl border border-purple-500/25 border-t-purple-400/50 bg-purple-950/20 p-6 shadow-[0_10px_40px_rgba(76,29,149,0.2)] backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full border border-purple-500/25 bg-purple-900/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-purple-200">
                {formation.pillar}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">{formacaoCountLabel}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, x: 20, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="flex flex-col justify-between gap-6"
              >
                <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-slate-950/60">
                  <img
                    src={imageMap[formation.id]}
                    alt={formation.title}
                    className="h-40 w-full object-cover opacity-90 sm:h-48"
                    style={{ objectPosition: formation.id === 'dados' ? '50% 6%' : formation.id === 'matematica' ? '50% 24%' : formation.id === 'computacao' ? '50% 12%' : '50% 8%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-zinc-100 sm:text-3xl">{formation.title}</h3>
                    <p className="text-sm font-medium text-purple-300 sm:text-base">{formation.institution}</p>
                  </div>

                  <p className="max-w-3xl text-sm leading-7 text-zinc-300/80 sm:text-base">{formation.role}</p>

                  <div className="flex flex-wrap gap-2">
                    {formation.highlights.map((item) => (
                      <span key={`${formation.id}-${item}`} className="rounded-full border border-purple-500/30 bg-purple-900/30 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-purple-200 sm:text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {dimensionsData.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Selecionar formação ${item.title}`}
                    onClick={() => setCurrentFormation(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${index === currentFormation ? 'w-7 bg-purple-300' : 'bg-purple-500/40 hover:bg-purple-300/70'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousFormation}
                  disabled={isFirstFormation}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Anterior
                </button>

                <button
                  type="button"
                  onClick={showNextFormation}
                  disabled={isLastFormation}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Próxima Formação
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="py-8 md:py-12">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Projetos</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Soluções orientadas a clareza, dados e uso real.</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-900/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-purple-200">
              <Briefcase className="h-3.5 w-3.5" />
              Experiência prática
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectsList.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[28px] border border-purple-500/20 bg-purple-950/20 shadow-[0_0_30px_rgba(168,85,247,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <div className="relative overflow-hidden">
                  <ProjectPreview projectId={project.id} />
                  {project.badge ? (
                    <span className="absolute left-4 top-4 rounded-full border border-purple-500/30 bg-purple-950/50 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-purple-100">
                      {project.badge}
                    </span>
                  ) : null}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-purple-500/20 bg-purple-950/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-purple-200">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-zinc-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300/80">{project.shortDescription}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300/80">{project.solution}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span key={`${project.id}-${item}`} className="rounded-full border border-purple-500/20 bg-purple-950/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-purple-100">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a href={normalizeLink(project.liveUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-500/20 to-violet-500/10 px-4 py-2 text-sm text-zinc-100 transition hover:border-purple-400/40 hover:text-purple-100">
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a href={normalizeLink(project.repoUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-100">
                        Repositório
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="formacao" className="py-8 md:py-12">
          <div className="mb-6 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Certificações e formações complementares</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Aprendizado contínuo em análise, tecnologia e aplicação prática</h2>
          </div>

          <div className="space-y-5">
            <div className="rounded-[28px] border border-purple-500/20 bg-zinc-900/40 p-5 backdrop-blur-xl">
              <p className="text-base leading-8 text-zinc-300/80">
                Essas formações complementares me deram uma bagagem sólida para conectar lógica, tecnologia e comunicação. Aprendi a estruturar problemas de forma mais clara, desenvolver raciocínio analítico em contextos reais, interpretar dados com criticidade e transformar conhecimento técnico em soluções úteis, acessíveis e bem fundamentadas.
              </p>
            </div>

            <div className="rounded-[28px] border border-purple-500/20 bg-zinc-900/40 p-5 backdrop-blur-xl">
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {allGeneralCertificates.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-purple-500/20 bg-zinc-950/40 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-purple-500/20 bg-purple-950/30 px-2 py-1 text-[8px] uppercase tracking-[0.12em] text-purple-100">
                        {item.category}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.14em] text-zinc-400">{item.hours}</span>
                    </div>
                    <h4 className="mt-3 text-sm font-medium text-zinc-100">{item.title}</h4>
                    <p className="mt-1 text-[11px] text-zinc-300/80">{item.issuer}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-zinc-500">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-8 md:py-12">
          <div className="rounded-[32px] border border-purple-500/20 bg-zinc-900/40 p-6 shadow-[0_8px_32px_0_rgba(76,29,149,0.15)] backdrop-blur-xl md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Contato</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold text-zinc-100 md:text-5xl">Conecte-se para projetos em Dados e Tecnologia.</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300/80">
                  Posso contribuir com raciocínio analítico, desenvolvimento prático, organização de dados e base técnica para projetos reais.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`mailto:${contactsData.email}`} className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-100 transition hover:border-purple-400/40 hover:text-purple-100">
                    <Mail className="h-4 w-4" />
                    E-mail
                  </a>
                  <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-100">
                    <BriefcaseBusiness className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-100">
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-purple-500/20 bg-zinc-950/40 p-5">
                <div className="flex items-center gap-2 text-purple-200">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-purple-200">Disponibilidade</span>
                </div>

                <p className="mt-5 text-xl font-medium text-zinc-100">Disponível para estágios e posições iniciais em Dados e Tecnologia</p>
                <div className="mt-7 space-y-3">
                  <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">E-mail</p>
                    <p className="mt-2 text-sm text-zinc-200">{contactsData.email}</p>
                  </div>
                  <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">LinkedIn</p>
                    <p className="mt-2 text-sm text-zinc-200">Perfil profissional</p>
                  </div>
                  <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">GitHub</p>
                    <p className="mt-2 text-sm text-zinc-200">@bluejaem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-purple-500/20 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5 text-sm text-zinc-400 sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} João Guilherme Machado de Melo</span>
          <span className="hidden sm:inline">Ciência de Dados • Tecnologia • IA</span>
        </div>
      </footer>
    </div>
  )
}

export default App
