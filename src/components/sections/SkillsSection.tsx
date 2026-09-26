import { skillsData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionTitle
          eyebrow="Habilidades"
          title="Competências técnicas e ferramentas de trabalho."
          description="Linguagens, interfaces, análise quantitativa e ferramentas de ambiente formam a base da minha formação e prática."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillsData.map((skillGroup) => (
            <Card key={skillGroup.category} className="h-full">
              <h3 className="text-lg font-medium text-zinc-100">{skillGroup.category}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{skillGroup.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <Badge key={`${skillGroup.category}-${item}`} className="border-zinc-700 bg-zinc-950 text-zinc-200">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
