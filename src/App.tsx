import { ArrowRight, ArrowUpRight, Briefcase, Globe, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react'

import {
  allGeneralCertificates,
  contactsData,
  dimensionsData,
  educationList,
  highlightCertificates,
  profileInfo,
  projectsList,
} from './data/portfolioData'

function normalizeLink(value: string | null) {
  if (!value) return '#'
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

function ProjectPreview({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'life-os':
      return (
        <div className="relative h-56 overflow-hidden rounded-t-[28px] border-b border-purple-500/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.28),_rgba(17,24,39,0)_45%)] p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-zinc-300/80">
            <span>Foco</span>
            <span>06:30</span>
          </div>

          <div className="mt-4 grid grid-cols-[1.4fr_0.6fr] gap-3">
            <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-purple-200">
                <span>Produtividade</span>
                <span>82%</span>
              </div>
              <div className="flex h-20 items-end gap-2">
                {[30, 48, 52, 64, 76, 92].map((value, index) => (
                  <span
                    key={`${projectId}-bar-${index}`}
                    className="w-full rounded-t-md bg-gradient-to-t from-violet-500 via-purple-500 to-fuchsia-300"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/70 p-3 text-center">
                <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">Timer</div>
                <div className="mt-2 text-xl font-semibold text-purple-100">25:00</div>
              </div>
              <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/70 p-3">
                <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">Meta</div>
                <div className="mt-2 h-2 rounded-full bg-zinc-800">
                  <div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-violet-500 to-purple-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    case 'govlocal':
      return (
        <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-[28px] border-b border-purple-500/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.24),_rgba(17,24,39,0)_45%)] p-4">
          <div className="w-40 rounded-[30px] border border-purple-500/20 bg-zinc-950/80 p-3 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
            <div className="mb-3 flex items-center justify-center">
              <div className="h-1.5 w-16 rounded-full bg-zinc-700" />
            </div>

            <div className="space-y-2">
              <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-2 text-center">
                <div className="text-[9px] uppercase tracking-[0.18em] text-purple-200">Urgência</div>
                <div className="mt-1 text-sm font-semibold text-zinc-100">SAMU</div>
              </div>
              <div className="rounded-xl border border-purple-500/20 bg-zinc-900/70 p-2">
                <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-400">Serviços</div>
                <div className="mt-2 space-y-1.5">
                  <div className="h-2 rounded-full bg-zinc-700" />
                  <div className="h-2 w-4/5 rounded-full bg-zinc-700" />
                  <div className="h-2 w-2/3 rounded-full bg-zinc-700" />
                </div>
              </div>
              <button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                Emergência
              </button>
            </div>
          </div>
        </div>
      )

    case 'salarios-tech':
      return (
        <div className="relative h-56 overflow-hidden rounded-t-[28px] border-b border-purple-500/20 bg-[#0b1020] p-4 font-mono text-[10px] text-zinc-200">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 text-zinc-400">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="mt-3 space-y-2">
            <div className="text-violet-300">$ python salary_analysis.py --tech "Python"</div>
            <div className="text-zinc-300">media: R$ 9.400</div>
            <div className="text-zinc-300">junior: R$ 4.900</div>
            <div className="text-zinc-300">pleno: R$ 8.300</div>
            <div className="mt-3 rounded-lg border border-violet-500/20 bg-violet-500/10 px-2 py-1 text-violet-100">
              <span className="text-zinc-300">status:</span> dataset atualizado
            </div>
          </div>
        </div>
      )

    case 'calculadora-imc':
      return (
        <div className="relative h-56 overflow-hidden rounded-t-[28px] border-b border-purple-500/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_rgba(17,24,39,0)_50%)] p-4">
          <div className="rounded-2xl border border-purple-500/20 bg-zinc-950/70 p-3">
            <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-zinc-400">
              <span>IMC</span>
              <span>Classificação</span>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-300">
                <div className="rounded-xl border border-purple-500/20 bg-zinc-900/80 p-2">
                  <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-400">Peso</div>
                  <div className="mt-1 text-base font-semibold text-zinc-100">68 kg</div>
                </div>
                <div className="rounded-xl border border-purple-500/20 bg-zinc-900/80 p-2">
                  <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-400">Altura</div>
                  <div className="mt-1 text-base font-semibold text-zinc-100">1,75 m</div>
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-rose-400" />
              </div>

              <div className="mt-3 flex justify-between text-[8px] uppercase tracking-[0.14em] text-zinc-400">
                <span>Baixo</span>
                <span>Normal</span>
                <span>Sobrepeso</span>
              </div>

              <div className="mt-3 rounded-xl border border-purple-500/20 bg-purple-500/10 p-2 text-center">
                <div className="text-[9px] uppercase tracking-[0.18em] text-purple-200">Resultado</div>
                <div className="mt-1 text-lg font-semibold text-purple-100">22,2</div>
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className="flex h-56 items-center justify-center rounded-t-[28px] border-b border-purple-500/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),_rgba(17,24,39,0)_45%)] p-4 text-zinc-200">
          <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/70 px-4 py-3 text-sm uppercase tracking-[0.2em] text-purple-200">
            Preview
          </div>
        </div>
      )
  }
}

function App() {
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
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-500/30 to-violet-500/10 text-[10px] font-semibold tracking-[0.22em] text-purple-100 shadow-[0_0_18px_rgba(168,85,247,0.2)]">
              JM
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-100">João Guilherme</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-purple-200">
              Ciência de Dados & Tecnologia
            </span>
            <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-200">
              <Globe className="h-4 w-4" />
            </a>
            <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-200">
              <Globe className="h-4 w-4" />
            </a>
            <a href={`mailto:${contactsData.email}`} className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-200">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <section id="inicio" className="grid items-center gap-8 py-8 md:grid-cols-[1.2fr_0.8fr] md:py-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.12)]">
              <Sparkles className="h-3.5 w-3.5 text-purple-300" />
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
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">As 4 dimensões</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Base sólida para atuação em tecnologia e dados.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {dimensionsData.map((dimension) => (
              <article
                key={dimension.id}
                className="rounded-2xl border border-purple-500/20 bg-zinc-900/40 p-5 shadow-[0_8px_32px_0_rgba(76,29,149,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_12px_40px_0_rgba(147,51,234,0.2)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-purple-500/30 bg-purple-950/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-purple-200">
                    {dimension.pillar}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-zinc-100">{dimension.title}</h3>
                <p className="mt-2 text-sm text-zinc-300/80">{dimension.course}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300/80">{dimension.role}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {dimension.highlights.map((item) => (
                    <span key={`${dimension.id}-${item}`} className="rounded-full border border-purple-500/20 bg-purple-950/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-purple-100">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
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
          <div className="mb-6 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Formação integrada</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Interseção entre formação acadêmica e base técnica aplicada.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="grid gap-4">
              {educationList.map((item) => (
                <article key={item.id} className="rounded-2xl border border-purple-500/20 bg-zinc-900/40 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-purple-500/20 bg-purple-950/30 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-purple-200">
                      {item.level}
                    </span>
                    <span className="rounded-full border border-purple-500/20 bg-zinc-950/60 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-zinc-300">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-zinc-100">{item.degree}</h3>
                  <p className="mt-1 text-sm text-zinc-300/80">{item.institution}</p>
                  <p className="mt-2 text-sm text-zinc-300/80">Previsão: {item.expectedGraduation}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.topics.map((topic) => (
                      <span key={`${item.id}-${topic}`} className="rounded-full border border-purple-500/20 bg-purple-950/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-purple-100">
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-5">
              <div className="rounded-[28px] border border-purple-500/20 bg-zinc-900/40 p-5 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-300/70">Destaques acadêmicos</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {highlightCertificates.map((item) => (
                    <article key={item.id} className="rounded-2xl border border-purple-500/20 bg-zinc-950/40 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full border border-purple-500/20 bg-purple-950/40 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-purple-200">
                          {item.hours}
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">{item.year}</span>
                      </div>
                      <h3 className="mt-3 text-base font-medium text-zinc-100">{item.title}</h3>
                      <p className="mt-1 text-xs text-zinc-300/80">{item.issuer}</p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-purple-200">{item.badge}</p>
                      <p className="mt-2 text-xs leading-6 text-zinc-300/80">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-purple-500/20 bg-zinc-900/40 p-5 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-300/70">Certificações Técnicas & Extensões Complementares</p>
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
          </div>
        </section>

        <section id="contato" className="py-8 md:py-12">
          <div className="rounded-[32px] border border-purple-500/20 bg-zinc-900/40 p-6 shadow-[0_8px_32px_0_rgba(76,29,149,0.15)] backdrop-blur-xl md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Contato</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold text-zinc-100 md:text-5xl">Disponível para estágios e posições em Dados e Tecnologia.</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300/80">
                  Posso contribuir com raciocínio analítico, desenvolvimento prático, organização de dados e base técnica para projetos reais.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`mailto:${contactsData.email}`} className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-100 transition hover:border-purple-400/40 hover:text-purple-100">
                    <Mail className="h-4 w-4" />
                    E-mail
                  </a>
                  <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-100">
                    <Globe className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-purple-400/40 hover:text-purple-100">
                    <Globe className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-purple-500/20 bg-zinc-950/40 p-5">
                <div className="flex items-center gap-2 text-purple-200">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-purple-200">Disponibilidade</span>
                </div>

                <p className="mt-5 text-xl font-medium text-zinc-100">{profileInfo.availability}</p>
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
