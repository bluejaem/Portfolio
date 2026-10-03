import { Award } from 'lucide-react'

interface CertItem {
  institution: string
  hours: string
  title: string
  description: string
  year: string
}

interface CertSlide {
  id: string
  categoryBadge: string
  stageNumber: string
  title: string
  items: CertItem[]
}

const certificationSlides: CertSlide[] = [
  {
    id: 'alto-impacto',
    categoryBadge: 'Formações de Alto Impacto',
    stageNumber: '01 / 06',
    title: 'Fundamentos de Grande Porte & Conquistas Nacionais',
    items: [
      {
        institution: 'Harvard / Fundação Estudar',
        hours: '70h',
        title: 'CS50: Introduction to Computer Science',
        description: 'Imersão em algoritmos, complexidade assintótica, estruturas de dados e gerenciamento de memória em C e desenvolvimento de software.',
        year: '2025'
      },
      {
        institution: 'Desenvolve Já',
        hours: '112h',
        title: 'Qualificação Profissional para Call Center',
        description: 'Capacitação intensiva em comunicação assertiva, resolução ágil de incidentes, escuta ativa e relacionamento sob métricas de atendimento.',
        year: '2025'
      },
      {
        institution: 'UNICAMP',
        hours: '48h',
        title: 'Semifinalista da 16ª ONHB',
        description: 'Avanço até a Fase 6 (semifinal nacional) com análise crítica e metodológica de fontes históricas primárias e produção textual interdisciplinar.',
        year: '2024'
      },
      {
        institution: 'UNINTER',
        hours: '42h',
        title: 'Língua Inglesa NEW UBEST Intermediate (Nível 2)',
        description: 'Consolidação de habilidades de comunicação oral, leitura técnica avançada e redação em língua inglesa para o ecossistema tecnológico.',
        year: '2026'
      }
    ]
  },
  {
    id: 'dados-ia',
    categoryBadge: 'Dados, BI & Inteligência Artificial',
    stageNumber: '02 / 06',
    title: 'Especialização em Análise de Dados e Modelos Generativos',
    items: [
      {
        institution: 'Gran Faculdade',
        hours: '30h',
        title: 'Análise de Dados e Inteligência de Negócios',
        description: 'Análise exploratória multivariada, estruturação de métricas analíticas e suporte estratégico a decisões orientadas a dados.',
        year: '2026'
      },
      {
        institution: 'Gran Faculdade',
        hours: '30h',
        title: 'Engenharia de Prompt',
        description: 'Arquitetura e refinamento avançado de comandos para LLMs, automação de tarefas e contextualização de modelos de linguagem.',
        year: '2026'
      },
      {
        institution: 'Gran Faculdade',
        hours: '30h',
        title: 'Inteligência Artificial na Prática: Domine as Ferramentas',
        description: 'Integração de ferramentas generativas aplicadas à rotina de dados, produtividade e resolução de problemas práticos.',
        year: '2026'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Transformers em Ação: A Nova Era dos Agentes com LLMs',
        description: 'Mecanismos de auto-atenção, arquiteturas de modelos Transformers e o ecossistema contemporâneo de agentes inteligentes.',
        year: '2025'
      },
      {
        institution: 'Gran Faculdade',
        hours: '1h',
        title: 'Fundamentos de IA para Gestão, Liderança e Estratégia',
        description: 'Alinhamento estratégico entre modelos preditivos, governança tecnológica e ganhos de escala empresarial.',
        year: '2026'
      }
    ]
  },
  {
    id: 'redes-hardware',
    categoryBadge: 'Infraestrutura, Hardware & Redes',
    stageNumber: '03 / 06',
    title: 'Camada Física, Protocolos e Redes de Comunicação',
    items: [
      {
        institution: 'Cisco Networking Academy',
        hours: 'Certificação',
        title: 'Conceitos Básicos de Redes (Networking Basics)',
        description: 'Modelos OSI e TCP/IP, endereçamento IPv4 e IPv6, comutação, roteamento estático e dinâmico e diagnósticos de conectividade.',
        year: '2026'
      },
      {
        institution: 'Centro Universitário ETEP',
        hours: '30h',
        title: 'Introdução à Tecnologia da Informação',
        description: 'Fundamentação estruturada de arquitetura de TI, alinhamento de infraestrutura a processos computacionais e governança.',
        year: '2026'
      },
      {
        institution: 'Fundação Bradesco',
        hours: '7h',
        title: 'Fundamentos de TI: Hardware e Software',
        description: 'Arquitetura funcional de computadores, barramentos, memória, dispositivos de E/S e rotinas de manutenção e diagnóstico.',
        year: '2026'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'O Funcionamento dos Circuitos Elétricos',
        description: 'Fundamentos de eletricidade e grandezas físicas (tensão, corrente, resistência) aplicadas ao funcionamento de circuitos digitais.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Choque de Conhecimento: Eletricidade no Dia a Dia',
        description: 'Conceitos fundamentais de circuitos elétricos práticos, potência, segurança operacional e conversão de energia.',
        year: '2024'
      }
    ]
  },
  {
    id: 'dev-metodos',
    categoryBadge: 'Desenvolvimento & Engenharia de Software',
    stageNumber: '04 / 06',
    title: 'Lógica Computacional, Web & Automação',
    items: [
      {
        institution: 'Fundação Bradesco',
        hours: '18h',
        title: 'Linguagem de Programação Python Básico',
        description: 'Sintaxe essencial, controle de fluxo, estruturas de dados integradas (listas, tuplas e dicionários) e automação de scripts.',
        year: '2025'
      },
      {
        institution: 'Fundação Bradesco',
        hours: '4h',
        title: 'Crie um Site Simples usando HTML, CSS e JavaScript',
        description: 'Desenvolvimento web com marcação semântica em HTML5, estilização moderna em CSS3 e manipulação de eventos do DOM.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '10h',
        title: 'II Semana de Línguas UNINTER',
        description: 'Linguística aplicada, comunicação multilíngue e metodologias de internacionalização acadêmica e técnica.',
        year: '2026'
      },
      {
        institution: 'Instituto Dom Fernando Gomes',
        hours: '35h',
        title: 'Espanhol Básico',
        description: 'Domínio gramatical fundamental, vocabulário funcional e leitura técnica intermediária na língua espanhola.',
        year: '2018'
      },
      {
        institution: 'Instituto Dom Fernando Gomes',
        hours: '2º Lugar',
        title: 'Mostra Científica: Transformando o Mundo',
        description: 'Premiação científica em projeto sobre biotecnologia, impactos socioambientais e metodologia de pesquisa.',
        year: '2022'
      }
    ]
  },
  {
    id: 'gestao-produtividade',
    categoryBadge: 'Gestão, Processos & Governança',
    stageNumber: '05 / 06',
    title: 'Produtividade Pessoal, Foco e Relações Profissionais',
    items: [
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Gestão do Tempo e Produtividade',
        description: 'Técnicas de priorização de tarefas, eliminação de gargalos e métodos de planejamento de rotinas de alta eficiência.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Metas Pessoais e Profissionais',
        description: 'Alinhamento de objetivos individuais, métricas de crescimento e construção estruturada de planos de carreira.',
        year: '2026'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Postura Profissional: O que o Mercado Espera',
        description: 'Comportamento corporativo assertivo, ética em ambientes dinâmicos de tecnologia e exigências do mercado.',
        year: '2026'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Como se Expressar Bem em Entrevistas',
        description: 'Domínio de comunicação verbal e não-verbal, estruturação de raciocínio sob pressão e assertividade técnica.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Diferenciando Relação de Emprego x Trabalho',
        description: 'Compreensão de vínculos regulatórios, obrigações contratuais e dinâmica legal do ambiente de trabalho corporativo.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Desvendando a Folha de Pagamento: Holerite',
        description: 'Compreensão de remuneração, encargos trabalhistas, benefícios e estrutura contábil de pagamentos.',
        year: '2024'
      }
    ]
  },
  {
    id: 'sociedade-saude',
    categoryBadge: 'Bem-Estar, Saúde & Comunicação',
    stageNumber: '06 / 06',
    title: 'Relações Interpessoais, Saúde Pública e Sociedade',
    items: [
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Comunicação Eficaz: Habilidades Essenciais',
        description: 'Técnicas de escuta ativa, persuasão ética, transmissão clara de mensagens e mediação de conflitos.',
        year: '2024'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Humanização do Atendimento e Relações Interpessoais',
        description: 'Princípios de empatia, resolução humanizada de incidentes e construção de relações de confiança com usuários.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Respira, Organiza e Segue: Gestão de Estresse',
        description: 'Estratégias de regulação emocional, resiliência psicológica e mitigação de sobrecarga cognitiva em ambientes analíticos.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'O Bem-Estar Animal e a Saúde Única',
        description: 'Abordagem interdisciplinar integrando saúde animal, preservação ambiental e impactos na saúde coletiva humana.',
        year: '2025'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Estamos Tomando Remédio Demais! Uso de Medicamentos',
        description: 'Análise de prescrição consciente, prevenção a substâncias desnecessárias e conscientização sobre saúde pública.',
        year: '2026'
      },
      {
        institution: 'UNINTER',
        hours: '1h',
        title: 'Primeiros Socorros para Leigos',
        description: 'Protocolos básicos de resposta inicial a emergências e socorro pré-hospitalar para preservação da integridade física.',
        year: '2024'
      }
    ]
  }
]

export function CertificationsSection() {
  const certificationItems = certificationSlides.flatMap((slide) =>
    slide.items.map((item) => ({ ...item, category: slide.categoryBadge })),
  )

  return (
    <section id="certificacoes" className="relative w-full px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400">APRENDIZADO CONTÍNUO</p>
          <h2 className="text-3xl font-bold text-zinc-100 md:text-4xl">
            CERTIFICAÇÕES &amp; CONQUISTAS<span className="text-purple-400">.</span>
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificationItems.map((item) => (
            <article
              key={`${item.institution}-${item.title}`}
              className="group flex h-full flex-col rounded-3xl border border-purple-500/20 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-200">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                  <span className="rounded-full border border-purple-500/25 bg-purple-950/40 px-3 py-1 text-xs text-purple-200">{item.year}</span>
                  <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300">{item.hours}</span>
                </div>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-purple-300">{item.institution}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-zinc-100">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-zinc-300">{item.description}</p>
              <span className="mt-5 self-start rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-300">
                {item.category}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}