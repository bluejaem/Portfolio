import { certificationsList } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionTitle
          eyebrow="Trajetória"
          title="Marcos acadêmicos e de formação técnica."
          description="Competição, certificações e evolução contínua mostram o caminho de aprofundamento em computação, dados e tecnologia."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certificationsList.map((item) => (
            <Card key={item.id} className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{item.category}</p>
                  <h3 className="mt-3 text-lg font-medium text-zinc-100">{item.title}</h3>
                </div>
                <Badge className="border-zinc-700 bg-zinc-950 text-zinc-200">{item.year}</Badge>
              </div>

              <p className="mt-4 text-sm font-medium text-zinc-300">{item.issuer}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.hours ? `${item.hours} de formação` : 'Certificação técnica'}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
