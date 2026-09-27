import { useState } from 'react'

interface CurriculumAxis {
  title: string
  detail: string
}

interface FormationItem {
  id: string
  title: string
  institution: string
  badge: string
  degree: string
  description: string
  imageUrl: string
  tags: string[]
  curriculumAxes: CurriculumAxis[]
}

const formationsList: FormationItem[] = [
  {
    id: 'ciencia-de-dados',
    title: 'Ciência de Dados',
    institution: 'Gran Faculdade',
    badge: 'Eixo Central de Atuação',
    degree: 'Tecnólogo em Ciência de Dados',
    description: 'Formação técnica e analítica focada no ciclo de vida completo dos dados — desde a ingestão, higienização e modelagem até o desenvolvimento de sistemas preditivos e suporte a decisões de negócio.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python & SQL', 'Machine Learning', 'Estatística Inferencial', 'Pipelines ETL/ELT', 'Visualização de Dados', 'Modelagem Preditiva'],
    curriculumAxes: [
      {
        title: 'Fundamentos de Programação e Dados',
        detail: 'Estruturas de dados em Python, manipulação com Pandas e NumPy, junções relacionais com SQL e acesso a bancos NoSQL.'
      },
      {
        title: 'Estatística e Inferência',
        detail: 'Estatística descritiva e inferencial para leitura crítica de distribuições, correlações, testes de hipóteses e análise exploratória (EDA).'
      },
      {
        title: 'Machine Learning e Modelagem',
        detail: 'Aprendizado supervisionado e não-supervisionado com Scikit-Learn, validação cruzada, seleção de modelos e métricas de desempenho.'
      },
      {
        title: 'Engenharia de Dados e BI',
        detail: 'Construção de pipelines ETL/ELT, tratamento de outliers e valores faltantes, dashboards executivos e métricas de inteligência de negócios.'
      }
    ]
  },
  {
    id: 'matematica-aplicada',
    title: 'Matemática Aplicada e Computacional',
    institution: 'Universidade Federal de Sergipe (UFS)',
    badge: 'Base Analítica e Quantitativa',
    degree: 'Bacharelado',
    description: 'Formação rigorosa no formalismo matemático combinado com métodos computacionais para modelagem de problemas analíticos complexos.',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    tags: ['Cálculo Numérico', 'Álgebra Linear', 'Equações Diferenciais', 'Otimização', 'Computação Científica'],
    curriculumAxes: [
      {
        title: 'Fundamentação Matemática',
        detail: 'Cálculo diferencial e integral multivariável, espaços vetoriais, transformações lineares e geometria analítica vetorial.'
      },
      {
        title: 'Métodos Quantitativos e Análise',
        detail: 'Equações diferenciais ordinárias (EDOs), análise de estabilidade e modelagem matemática de sistemas dinâmicos.'
      },
      {
        title: 'Computação Científica',
        detail: 'Cálculo numérico, resolução de sistemas lineares/não-lineares, interpolação polinomial e propagação de erros.'
      },
      {
        title: 'Otimização e Probabilidade',
        detail: 'Teoria da otimização matemática linear e não-linear, teoria das probabilidades e processos estocásticos para tomada de decisão.'
      }
    ]
  },
  {
    id: 'engenharia-computacao',
    title: 'Engenharia da Computação',
    institution: 'Centro Universitário Internacional (UNINTER)',
    badge: 'Base Estrutural de Tecnologia',
    degree: 'Bacharelado',
    description: 'Integração entre engenharia de hardware e ciência da computação para domínio completo da camada física, circuitos e sistemas integrados.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['Arquitetura de Computadores', 'Sistemas Operacionais', 'Circuitos Elétricos', 'C/C++', 'Redes & Hardware'],
    curriculumAxes: [
      {
        title: 'Camada Física e Hardware',
        detail: 'Circuitos elétricos (leis de Kirchhoff, corrente contínua/alternada), eletrónica analógica, sistemas digitais e lógica combinacional.'
      },
      {
        title: 'Arquitetura de Processadores',
        detail: 'Organização e arquitetura de microprocessadores, hierarquia de memória (cache, RAM), registradores e execução instrucional.'
      },
      {
        title: 'Software de Baixo e Médio Nível',
        detail: 'Programação em C/C++, manipulação direta de memória, desenvolvimento de firmware e gerenciamento de concorrência/threads.'
      },
      {
        title: 'Redes e Infraestrutura',
        detail: 'Modelo OSI e arquitetura TCP/IP, protocolos de comunicação de dados, redes industriais e telemetria estruturada.'
      }
    ]
  },
  {
    id: 'gestao-ti',
    title: 'Gestão da Tecnologia da Informação',
    institution: 'Centro Universitário ETEP',
    badge: 'Visão Organizacional e Futuro',
    degree: 'Graduação + Extensão em IA',
    description: 'Alinhamento estratégico entre viabilidade de processos organizacionais, governança corporativa de TI e impacto prático da IA.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['Governança de TI', 'Engenharia de Prompt', 'Gestão de Processos', 'LGPD & Segurança', 'Estratégia de IA'],
    curriculumAxes: [
      {
        title: 'Governança e Estratégia de TI',
        detail: 'Frameworks de mercado (ITIL, COBIT), alinhamento de infraestrutura aos objetivos organizacionais e gestão ágil de projetos (Scrum).'
      },
      {
        title: 'Gestão de Riscos e Segurança',
        detail: 'Políticas corporativas de segurança da informação, auditoria de sistemas, continuidade de negócios e conformidade com a LGPD.'
      },
      {
        title: 'Inteligência Artificial Estratégica',
        detail: 'Engenharia de prompt para automação operacional, integração de APIs de LLMs em cenários reais e análise de viabilidade.'
      },
      {
        title: 'Processos e Negócios',
        detail: 'Mapeamento de fluxos de processos (BPMN), análise de eficiência operacional e gestão estratégica de mudanças tecnológicas.'
      }
    ]
  },
  {
    id: 'tecnico-informatica',
    title: 'Técnico em Informática',
    institution: 'Centro Universitário Internacional (UNINTER)',
    badge: 'Base Operacional e Suporte',
    degree: 'Formação Técnica Profissionalizante',
    description: 'Competência técnica direta em configuração de redes locais, suporte técnico a computadores, infraestrutura e administração de sistemas.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tags: ['Redes de Computadores', 'Hardware & Manutenção', 'Linux & Windows', 'Suporte Técnico', 'TCP/IP'],
    curriculumAxes: [
      {
        title: 'Hardware e Manutenção',
        detail: 'Montagem, desmontagem e diagnóstico físico de falhas em placas, barramentos, fontes e testes de integridade de memória.'
      },
      {
        title: 'Sistemas Operacionais',
        detail: 'Instalação, particionamento e administração prática de ambientes Windows e distribuições Linux com uso de terminal Shell/Bash.'
      },
      {
        title: 'Redes Locais e Infraestrutura',
        detail: 'Cabeamento estruturado, crimpagem, configuração de roteadores e switches, endereçamento IPv4/IPv6, DHCP e testes de ping/traceroute.'
      },
      {
        title: 'Suporte ao Usuário e Sustentação',
        detail: 'Resolução estruturada de chamados de TI, prevenção de incidentes técnicos e aplicação de políticas locais de segurança.'
      }
    ]
  }
]

export function EducationSection() {
  const [currentFormation, setCurrentFormation] = useState(0)
  const currentFormationData = formationsList[currentFormation]

  return (
    <section id="formacao" className="min-h-screen w-full flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 relative snap-start">
      {/* Cabeçalho da Secção */}
      <div className="w-full max-w-[95vw] 2xl:max-w-[1400px] mb-6">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-1">
          FORMAÇÕES ACADÉMICAS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100">
          Formações Académicas Interdisciplinares
        </h2>
      </div>

      {/* Card Principal em Largura Total */}
      <div className="w-full max-w-[95vw] 2xl:max-w-[1400px] bg-purple-950/20 backdrop-blur-2xl border border-purple-500/25 border-t-purple-400/50 rounded-3xl p-6 lg:p-8 shadow-[0_12px_45px_rgba(76,29,149,0.25)] flex flex-col justify-between">
        
        {/* Grid em 12 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Coluna Esquerda: Imagem e Metadados (4 Colunas) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/20 shadow-inner">
              <img 
                src={currentFormationData.imageUrl} 
                alt={currentFormationData.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-purple-900/20 border border-purple-500/20 text-xs text-zinc-300">
              <span className="text-purple-400 font-semibold uppercase tracking-wider block mb-1">Grau & Instituição</span>
              <p className="font-medium text-zinc-100">{currentFormationData.degree} — {currentFormationData.institution}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {currentFormationData.tags.map((tag, idx) => (
                <span key={idx} className="bg-purple-950/40 border border-purple-500/30 text-purple-200 text-[11px] px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Conteúdo Curricular e Eixos (8 Colunas) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            {/* Topo Único */}
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3 mb-4">
              <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                {currentFormationData.badge}
              </span>
              <span className="text-xs font-mono text-purple-300/80">
                {String(currentFormation + 1).padStart(2, '0')} / {String(formationsList.length).padStart(2, '0')}
              </span>
            </div>

            {/* Título e Visão Geral */}
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-1">
              {currentFormationData.title}
            </h3>
            <p className="text-sm font-semibold text-purple-300 mb-3">
              {currentFormationData.institution}
            </p>
            <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-4">
              {currentFormationData.description}
            </p>

            {/* Eixos Curriculares Distribuídos em 2 Colunas Horizontais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
              {currentFormationData.curriculumAxes.map((eixo, i) => (
                <div key={i} className="p-3 rounded-xl bg-purple-900/20 border border-purple-500/20">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">
                    {eixo.title}
                  </h4>
                  <p className="text-xs text-zinc-300/80 leading-relaxed">
                    {eixo.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Barra de Navegação Inferior Integrada */}
        <div className="pt-5 mt-6 border-t border-purple-500/20 flex items-center justify-between">
          {/* Indicadores de Ponto (Dots) */}
          <div className="flex items-center gap-2">
            {formationsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFormation(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentFormation === idx ? 'w-8 bg-purple-400' : 'w-2 bg-purple-900/50 hover:bg-purple-600'
                }`}
                aria-label={`Ir para formação ${idx + 1}`}
              />
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentFormation(prev => (prev === 0 ? formationsList.length - 1 : prev - 1))}
              className="px-4 py-2 text-xs sm:text-sm rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 hover:bg-purple-900/50 transition-colors"
            >
              ← Anterior
            </button>
            <button
              onClick={() => setCurrentFormation(prev => (prev === formationsList.length - 1 ? 0 : prev + 1))}
              className="px-4 py-2 text-xs sm:text-sm rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/50"
            >
              Próxima Formação →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}