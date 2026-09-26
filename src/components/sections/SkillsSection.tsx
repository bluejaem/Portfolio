import { portfolioData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

const categories = ['Linguagens', 'Frontend & Ecossistema', 'Sistemas & Ferramentas']

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Habilidades"
          title="Competências técnicas e ferramentas de trabalho."
          description="Unindo matemática, desenvolvimento e solução orientada a dados em um stack técnico aplicado e moderno."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const items = portfolioData.skills.filter((skill) => skill.category === category)

            return (
              <Card key={category} className="h-full">
                <h3 className="text-lg font-medium text-zinc-100">{category}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill.name} className="border-zinc-700 bg-zinc-950 text-zinc-200">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
