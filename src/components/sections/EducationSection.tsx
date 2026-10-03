import { educationList } from '../../data/portfolioData'

export function EducationSection() {
  return (
    <section id="formacoes" className="relative w-full px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400">
            TRAJETÓRIA ACADÊMICA
          </p>
          <h2 className="text-3xl font-bold text-zinc-100 md:text-4xl">
            FORMAÇÕES ACADÊMICAS<span className="text-purple-400">.</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            Graduações e cursos técnicos interdisciplinares conectando dados, computação e matemática.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationList.map((education) => (
            <article
              key={education.id}
              className="group flex h-full flex-col rounded-3xl border border-purple-500/20 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-purple-500/30 bg-purple-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-200">
                  {education.level}
                </span>
                <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-[10px] text-zinc-300">
                  {education.status}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-zinc-100">{education.degree}</h3>
              <p className="mt-2 text-sm font-medium text-purple-300">{education.institution}</p>
              <p className="mt-3 text-xs text-zinc-400">Previsão de conclusão: {education.expectedGraduation}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {education.topics.map((topic) => (
                  <span
                    key={`${education.id}-${topic}`}
                    className="rounded-full border border-purple-500/20 bg-purple-950/40 px-2.5 py-1 text-[10px] text-zinc-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
