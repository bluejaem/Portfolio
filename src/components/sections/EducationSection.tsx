import { BookOpenText } from 'lucide-react'

import { portfolioData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function EducationSection() {
  return (
    <section id="formacao" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Formação"
          title="Trajetória acadêmica e formação técnica."
          description="Caminho em matemática aplicada, engenharia computacional, ciência de dados e informática prática."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {portfolioData.education.map((item) => (
            <Card key={`${item.institution}-${item.degree}`} className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{item.institution}</p>
                  <h3 className="mt-3 text-xl font-medium text-zinc-100">{item.degree}</h3>
                </div>
                <Badge className="border-zinc-700 bg-zinc-950 text-zinc-200">{item.period}</Badge>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-zinc-400">
                <BookOpenText className="h-4 w-4" />
                Formação em andamento
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
