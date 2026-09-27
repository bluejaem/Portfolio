import { useState } from 'react'

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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const currentSlide = certificationSlides[currentSlideIndex]

  return (
    <section id="certificacoes" className="min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 relative snap-start">
      {/* Cabeçalho da Seção com Respiro Superior Calibrado */}
      <div className="w-full max-w-[95vw] 2xl:max-w-[1400px] mb-6">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-1">
          CERTIFICAÇÕES E CONQUISTAS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100">
          Aprendizado Contínuo em Análise de Tecnologia e Aplicação Prática
        </h2>
      </div>

      {/* Card Principal com Altura Rigorosamente Travada (Fim do Card que Encolhe e Estica) */}
      <div className="w-full max-w-[95vw] 2xl:max-w-[1400px] h-[600px] bg-purple-950/20 backdrop-blur-2xl border border-purple-500/25 border-t-purple-400/50 rounded-3xl p-6 lg:p-8 shadow-[0_12px_45px_rgba(76,29,149,0.25)] flex flex-col justify-between">
        
        {/* Topo do Slide */}
        <div className="flex flex-col gap-1.5 border-b border-purple-500/20 pb-4">
          <div className="flex items-center justify-between">
            <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
              {currentSlide.categoryBadge}
            </span>
            <span className="text-xs font-mono text-purple-300/80">
              {currentSlide.stageNumber}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1">
            {currentSlide.title}
          </h3>
        </div>

        {/* Área dos Cards: Grade Homogênea Balanceada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-auto overflow-hidden">
          {currentSlide.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/30 transition-all duration-300 flex flex-col justify-between h-[135px]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-medium text-purple-400 mb-1.5">
                  <span className="truncate max-w-[70%]">{item.institution}</span>
                  <span className="bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 text-purple-200">
                    {item.hours}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-100 line-clamp-1 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300/80 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="text-[10px] text-zinc-400 text-right mt-1">
                {item.year}
              </div>
            </div>
          ))}
        </div>

        {/* Barra de Navegação Inferior Integrada (Fixa e Permanente) */}
        <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
          {/* Dots Indicadores dos 6 Slides */}
          <div className="flex items-center gap-2">
            {certificationSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlideIndex === idx ? 'w-8 bg-purple-400' : 'w-2 bg-purple-900/50 hover:bg-purple-600'
                }`}
                aria-label={`Ir para categoria ${idx + 1}`}
              />
            ))}
          </div>

          {/* Botões Laterais */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlideIndex(prev => (prev === 0 ? certificationSlides.length - 1 : prev - 1))}
              className="px-4 py-2 text-xs sm:text-sm rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 hover:bg-purple-900/50 transition-colors"
            >
              ← Anterior
            </button>
            <button
              onClick={() => setCurrentSlideIndex(prev => (prev === certificationSlides.length - 1 ? 0 : prev + 1))}
              className="px-4 py-2 text-xs sm:text-sm rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/50"
            >
              Próxima Categoria →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}