import { portfolioData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Certificações"
          title="Aprendizado contínuo e formação prática."
          description="Certificações e cursos alinhados à área de tecnologia, dados e fundamentos computacionais."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {portfolioData.certifications.map((certification) => (
            <Card key={`${certification.name}-${certification.year}`} className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{certification.issuer}</p>
                  <h3 className="mt-3 text-lg font-medium text-zinc-100">{certification.name}</h3>
                </div>
                <Badge className="border-zinc-700 bg-zinc-950 text-zinc-200">{certification.year}</Badge>
              </div>

              <p className="mt-4 text-sm text-zinc-400">{certification.credential}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
