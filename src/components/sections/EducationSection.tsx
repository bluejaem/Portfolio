import { BookOpenText, GraduationCap } from 'lucide-react'

import { educationData, educationPillars } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function EducationSection() {
  return (
    <section id="formacao" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionTitle
          eyebrow="Formação"
          title="Formação interdisciplinar em matemática, dados e computação."
          description="Construção contínua de uma base quantitativa e tecnológica, com foco em análise, software e arquitetura de sistemas."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {educationData.map((item) => (
            <Card key={item.id} className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{item.institution}</p>
                  <h3 className="mt-3 text-xl font-medium text-zinc-100">{item.degree}</h3>
                </div>
                <Badge className="border-zinc-700 bg-zinc-950 text-zinc-200">{item.level}</Badge>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-zinc-400">
                <BookOpenText className="h-4 w-4" />
                {item.status} · {item.expectedGraduation}
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.focusAreas.map((area) => (
                  <Badge key={`${item.id}-${area}`} className="border-zinc-700 bg-zinc-950 text-zinc-200">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 border-t border-zinc-800 pt-10">
          <div className="mb-8 flex items-center gap-3 text-zinc-200">
            <GraduationCap className="h-5 w-5 text-zinc-400" />
            <h3 className="text-xl font-medium text-zinc-100">Articulação dos pilares</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {educationPillars.map((pillar) => (
              <Card key={pillar.course} className="h-full"> 
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{pillar.area}</p>
                <h4 className="mt-3 text-lg font-medium text-zinc-100">{pillar.course}</h4>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{pillar.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
