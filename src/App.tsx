import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, GitBranch, GraduationCap, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

import {
  contactsData,
  dimensionsData,
  profileInfo,
  projectsList,
} from './data/portfolioData'

function normalizeLink(value: string | null) {
  if (!value) return '#'
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/)
  return match ? match[2] : value
}

function App() {
  const [currentFormation, setCurrentFormation] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)
  const [certStage, setCertStage] = useState(0)

  const formation = dimensionsData[currentFormation]
  const project = projectsList[currentProject]
  const isLastFormation = currentFormation === dimensionsData.length - 1
  const isFirstFormation = currentFormation === 0

  const certificationSlides = [
    {
      badge: 'Formações de Alto Impacto',
      stage: '01 / 06',
      items: [
        {
          institution: 'Harvard / Fundação Estudar',
          hours: '70h',
          title: 'CS50: Introduction to Computer Science',
          desc: 'Imersão em algoritmos, complexidade assintótica, estruturas de dados e gerenciamento de memória em C e desenvolvimento de software.',
          year: '2025'
        },
        {
          institution: 'Desenvolve Já',
          hours: '112h',
          title: 'Qualificação Profissional para Call Center',
          desc: 'Capacitação intensiva em comunicação assertiva, resolução ágil de incidentes, escuta ativa e relacionamento sob métricas de atendimento.',
          year: '2025'
        },
        {
          institution: 'UNICAMP',
          hours: '48h',
          title: 'Semifinalista da 16ª ONHB',
          desc: 'Avanço até a Fase 6 (semifinal nacional) com análise crítica e metodológica de fontes históricas primárias e produção textual.',
          year: '2024'
        },
        {
          institution: 'UNINTER',
          hours: '42h',
          title: 'Língua Inglesa NEW UBEST Intermediate (Nível 2)',
          desc: 'Consolidação de competências de comunicação oral, leitura técnica avançada e redação em língua inglesa para tecnologia.',
          year: '2026'
        }
      ]
    },
    {
      badge: 'Dados, BI & Inteligência Artificial',
      stage: '02 / 06',
      items: [
        {
          institution: 'Gran Faculdade',
          hours: '30h',
          title: 'Análise de Dados e Inteligência de Negócios',
          desc: 'Análise exploratória multivariada, estruturação de métricas analíticas e suporte estratégico a decisões orientadas a dados.',
          year: '2026'
        },
        {
          institution: 'Gran Faculdade',
          hours: '30h',
          title: 'Engenharia de Prompt',
          desc: 'Arquitetura e refinamento avançado de comandos para LLMs, automação de tarefas e contextualização de modelos de linguagem.',
          year: '2026'
        },
        {
          institution: 'Gran Faculdade',
          hours: '30h',
          title: 'Inteligência Artificial na Prática: Domine as Ferramentas',
          desc: 'Integração de ferramentas generativas aplicadas à rotina de dados, produtividade e resolução de problemas práticos.',
          year: '2026'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Transformers em Ação: Agentes com LLMs',
          desc: 'Mecanismos de auto-atenção, arquiteturas de modelos Transformers e o ecossistema contemporâneo de agentes inteligentes.',
          year: '2025'
        },
        {
          institution: 'Gran Faculdade',
          hours: '1h',
          title: 'Fundamentos de IA para Gestão e Estratégia',
          desc: 'Alinhamento estratégico entre modelos preditivos, governança tecnológica e ganhos de escala empresarial.',
          year: '2026'
        }
      ]
    },
    {
      badge: 'Infraestrutura, Redes & Hardware',
      stage: '03 / 06',
      items: [
        {
          institution: 'Cisco Networking Academy',
          hours: 'Certificação',
          title: 'Conceitos Básicos de Redes (Networking Basics)',
          desc: 'Modelos OSI e TCP/IP, endereçamento IPv4/IPv6, comutação, roteamento e diagnósticos de conectividade local e remota.',
          year: '2026'
        },
        {
          institution: 'Centro Universitário ETEP',
          hours: '30h',
          title: 'Introdução à Tecnologia da Informação',
          desc: 'Fundamentação estruturada de arquitetura de TI, alinhamento de infraestrutura a processos computacionais e governança.',
          year: '2026'
        },
        {
          institution: 'Fundação Bradesco',
          hours: '7h',
          title: 'Fundamentos de TI: Hardware e Software',
          desc: 'Arquitetura funcional de computadores, barramentos, memória, dispositivos de E/S e rotinas de manutenção e diagnóstico.',
          year: '2026'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'O Funcionamento dos Circuitos Elétricos',
          desc: 'Fundamentos de eletricidade e grandezas físicas (tensão, corrente, resistência) aplicadas ao funcionamento de circuitos.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Choque de Conhecimento: Eletricidade no Dia a Dia',
          desc: 'Conceitos fundamentais de circuitos elétricos práticos, potência, segurança operacional e conversão de energia.',
          year: '2024'
        }
      ]
    },
    {
      badge: 'Desenvolvimento, Lógica & Idiomas',
      stage: '04 / 06',
      items: [
        {
          institution: 'Fundação Bradesco',
          hours: '18h',
          title: 'Linguagem de Programação Python Básico',
          desc: 'Sintaxe essencial, controle de fluxo, estruturas de dados integradas (listas, tuplas e dicionários) e automação de rotinas.',
          year: '2025'
        },
        {
          institution: 'Fundação Bradesco',
          hours: '4h',
          title: 'Crie um Site Simples usando HTML, CSS e JavaScript',
          desc: 'Desenvolvimento web com marcação semântica em HTML5, estilização moderna em CSS3 e manipulação de eventos do DOM.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '10h',
          title: 'II Semana de Línguas UNINTER',
          desc: 'Linguística aplicada, comunicação multilíngue e metodologias de internacionalização acadêmica e técnica.',
          year: '2026'
        },
        {
          institution: 'Instituto Dom Fernando Gomes',
          hours: '35h',
          title: 'Espanhol Básico',
          desc: 'Domínio gramatical fundamental, vocabulário funcional e leitura técnica intermediária na língua espanhola.',
          year: '2018'
        },
        {
          institution: 'Instituto Dom Fernando Gomes',
          hours: '2º Lugar',
          title: 'Mostra Científica: Transformando o Mundo',
          desc: 'Premiação científica em projeto sobre biotecnologia, impactos socioambientais e metodologia de pesquisa.',
          year: '2022'
        }
      ]
    },
    {
      badge: 'Gestão, Processos & Governança',
      stage: '05 / 06',
      items: [
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Gestão do Tempo e Produtividade',
          desc: 'Técnicas de priorização de tarefas, eliminação de gargalos e métodos de planejamento de rotinas de alta eficiência.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Metas Pessoais e Profissionais',
          desc: 'Alinhamento de objetivos individuais, métricas de crescimento e construção estruturada de planos de carreira.',
          year: '2026'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Postura Profissional: O que o Mercado Espera',
          desc: 'Comportamento corporativo assertivo, ética em ambientes dinâmicos de tecnologia e exigências do mercado.',
          year: '2026'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Como se Expressar Bem em Entrevistas',
          desc: 'Domínio de comunicação verbal e não-verbal, estruturação de raciocínio sob pressão e assertividade técnica.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Diferenciando Relação de Emprego x Trabalho',
          desc: 'Compreensão de vínculos regulatórios, obrigações contratuais e dinâmica legal do ambiente de trabalho corporativo.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Desvendando a Folha de Pagamento: Holerite',
          desc: 'Compreensão de remuneração, encargos trabalhistas, benefícios e estrutura contábil de pagamentos.',
          year: '2024'
        }
      ]
    },
    {
      badge: 'Comunicação, Saúde & Sociedade',
      stage: '06 / 06',
      items: [
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Comunicação Eficaz: Habilidades Essenciais',
          desc: 'Técnicas de escuta ativa, persuasão ética, transmissão clara de mensagens e mediação de conflitos.',
          year: '2024'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Humanização do Atendimento e Relações Interpessoais',
          desc: 'Princípios de empatia, resolução humanizada de incidentes e construção de relações de confiança com usuários.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Respira, Organiza e Segue: Gestão de Estresse',
          desc: 'Estratégias de regulação emocional, resiliência psicológica e mitigação de sobrecarga cognitiva em ambientes analíticos.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'O Bem-Estar Animal e a Saúde Única',
          desc: 'Abordagem interdisciplinar integrando saúde animal, preservação ambiental e impactos na saúde coletiva humana.',
          year: '2025'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Uso Racional de Medicamentos',
          desc: 'Análise de prescrição consciente, prevenção a substâncias desnecessárias e conscientização sobre saúde pública.',
          year: '2026'
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Primeiros Socorros para Leigos',
          desc: 'Protocolos básicos de resposta inicial a emergências e socorro pré-hospitalar para preservação da integridade física.',
          year: '2024'
        }
      ]
    }
  ]

  const activeSlide = certificationSlides[certStage] || certificationSlides[0]

  const imageMap: Record<string, string> = {
    dados: '/education/data-science.jpeg',
    'gestao-ia': '/education/tecnologia-da-informacao-800x533.jpeg',
    computacao: '/education/ec.jpg',
    matematica: '/education/matematica-aplicada.jpg',
    tecnico: '/education/ti.jpg',
  }

  const projectImageMap: Record<string, string> = {
    'meu-life-os': '/projects/meu-life-os.png',
    'govlocal-app': '/projects/govlocal-app.png',
    'consulta-salarios': '/projects/consulta-salarios.png',
    'calculadora-imc': '/projects/calculadora-imc.png',
  }

  const selectedProjectImage = projectImageMap[project.id] ?? '/projects/meu-life-os.png'

  const formacaoCountLabel = `${String(currentFormation + 1).padStart(2, '0')} / ${String(dimensionsData.length).padStart(2, '0')}`
  const projectCountLabel = `${String(currentProject + 1).padStart(2, '0')} / ${String(projectsList.length).padStart(2, '0')}`

  const showPreviousFormation = () => {
    setCurrentFormation((previous) => (previous === 0 ? dimensionsData.length - 1 : previous - 1))
  }

  const showNextFormation = () => {
    setCurrentFormation((previous) => (previous === dimensionsData.length - 1 ? 0 : previous + 1))
  }

  const showPreviousProject = () => {
    setCurrentProject((previous) => (previous === 0 ? projectsList.length - 1 : previous - 1))
  }

  const showNextProject = () => {
    setCurrentProject((previous) => (previous === projectsList.length - 1 ? 0 : previous + 1))
  }

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#090611] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-7rem] h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute left-[-8rem] top-1/3 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="absolute right-[-8rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-700/20 blur-[150px]" />
      </div>

      <header className="sticky top-0 z-50 h-16 border-b border-purple-500/25 bg-zinc-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-full w-full max-w-[98vw] 2xl:max-w-[1650px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-purple-500/40 bg-gradient-to-br from-purple-500/40 to-violet-500/20 shadow-[0_0_18px_rgba(168,85,247,0.3)]">
              <img src={profileInfo.photoUrl} alt={profileInfo.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-100">João Guilherme</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-purple-500/35 bg-purple-950/60 px-3.5 py-1 text-[10px] uppercase tracking-[0.18em] text-purple-200 shadow-[0_0_16px_rgba(168,85,247,0.2)]">
              Ciência de Dados & Tecnologia
            </span>
            <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-purple-500/25 bg-purple-950/30 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-900/40 hover:text-purple-100">
              <GitBranch className="h-4 w-4" />
            </a>
            <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-purple-500/25 bg-purple-950/30 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-900/40 hover:text-purple-100">
              <BriefcaseBusiness className="h-4 w-4" />
            </a>
            <a href={`mailto:${contactsData.email}`} aria-label="E-mail" className="rounded-full border border-purple-500/25 bg-purple-950/30 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-900/40 hover:text-purple-100">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* ================================================================= */}
        {/* SEÇÃO 1: HERO / APRESENTAÇÃO                                      */}
        {/* ================================================================= */}
        <section id="inicio" className="relative h-screen w-full snap-center scroll-mt-16 flex flex-col justify-center items-center px-4 py-8 sm:px-8 overflow-hidden">
          <div className="grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-purple-500/35 bg-purple-900/30 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.2)]">
                Ciência de Dados
              </div>

              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-300/90">{profileInfo.role}</p>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-100 md:text-6xl">{profileInfo.name}</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300/90 md:text-xl">{profileInfo.headline}</p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-950/40 px-3.5 py-1.5 text-sm text-zinc-200 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                <MapPin className="h-4 w-4 text-purple-300" />
                {profileInfo.location}
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300/80">{profileInfo.bio}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#formacoes" className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-600/30 to-violet-600/20 px-5 py-2.5 text-sm font-medium text-purple-100 shadow-[0_12px_30px_rgba(168,85,247,0.25)] transition duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-[0_18px_35px_rgba(168,85,247,0.35)]">
                  Ver Formações
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-2.5 text-sm font-medium text-zinc-100 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-900/40 hover:text-purple-100">
                  Entrar em Contato
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative rounded-[2rem] border border-purple-500/40 bg-gradient-to-tr from-purple-600/30 via-purple-950/60 to-violet-600/20 p-2 shadow-[0_0_50px_rgba(168,85,247,0.35)]">
                <div className="absolute inset-4 rounded-[1.6rem] border border-purple-500/25" />
                <div className="relative h-72 w-72 overflow-hidden rounded-[1.7rem] border border-purple-500/30 bg-zinc-950/80 md:h-80 md:w-80">
                  <img
                    src={profileInfo.photoUrl}
                    alt={profileInfo.name}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      const target = event.currentTarget
                      target.style.display = 'none'
                      const fallback = target.parentElement?.querySelector('[data-fallback]') as HTMLElement | null
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div
                    data-fallback
                    className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-purple-600/40 via-violet-700/30 to-zinc-950 text-5xl font-bold tracking-[0.28em] text-purple-100"
                  >
                    JM
                  </div>
                </div>
                <div className="absolute -bottom-5 left-6 right-6 flex items-center justify-between gap-3 rounded-full border border-purple-500/30 bg-zinc-950/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(168,85,247,0.2)] backdrop-blur-xl">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Perfil</span>
                  <span className="text-sm font-semibold text-purple-200">Dados + IA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 2: FORMAÇÕES ACADÊMICAS (IMAGEM AMPLA & SEM CARD DUPLICADO) */}
        {/* ================================================================= */}
        <section id="formacoes" className="relative h-screen w-full snap-center scroll-mt-16 flex flex-col justify-center items-center py-6 px-2 sm:px-4 lg:px-6 overflow-hidden">
          <div className="w-full max-w-[98vw] 2xl:max-w-[1650px] mx-auto flex flex-col justify-center h-full max-h-[calc(100vh-80px)]">
            <div className="mb-3 w-full px-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-purple-400 font-semibold mb-0.5">Formações acadêmicas</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Formações Acadêmicas Interdisciplinares</h2>
            </div>

            <div className="w-full h-[580px] bg-purple-950/20 backdrop-blur-2xl border border-purple-500/25 border-t-purple-400/50 rounded-3xl p-5 lg:p-7 shadow-[0_12px_45px_rgba(76,29,149,0.25)] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start my-auto"
                >
                  {/* Coluna Esquerda: Imagem Expandida (Sem o card redundante de Grau/Instituição) */}
                  <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-[420px]">
                    <div className="relative w-full h-[320px] overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-950/40 shadow-md">
                      <img
                        src={imageMap[formation.id] ?? imageMap.dados}
                        alt={formation.title}
                        className="w-full h-full object-cover transition duration-500 hover:scale-[1.02]"
                        style={{ objectPosition: formation.id === 'dados' ? '50% 6%' : formation.id === 'matematica' ? '50% 28%' : formation.id === 'computacao' ? '50% 12%' : formation.id === 'tecnico' ? '50% 14%' : '50% 8%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {formation.highlights.map((item) => (
                        <span key={`${formation.id}-${item}`} className="rounded-md border border-purple-500/30 bg-purple-900/30 px-2.5 py-1 text-[9.5px] uppercase tracking-[0.1em] text-purple-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Coluna Direita: Conteúdo Curricular e Eixos */}
                  <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between h-[420px]">
                    <div>
                      {/* Topo Limpo: Badge e Contador */}
                      <div className="flex items-center justify-between border-b border-purple-500/20 pb-2.5 mb-2.5">
                        <span className="rounded-full border border-purple-500/30 bg-purple-900/40 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-200">
                          {formation.pillar}
                        </span>
                        <span className="text-xs font-mono text-purple-300/80">{formacaoCountLabel}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100">{formation.title}</h3>
                      <p className="text-sm font-semibold text-purple-300 mb-1">{formation.institution}</p>
                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-300/80 line-clamp-2 mb-2">{formation.role}</p>
                    </div>

                    {/* Eixos Curriculares: 4 Blocos em Grade 2x2 com Altura Padronizada */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
                      {formation.detailGroups?.map((group) => (
                        <div key={`${formation.id}-${group.title}`} className="p-3.5 rounded-2xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/30 transition-all duration-300 flex flex-col justify-between h-[115px]">
                          <h5 className="text-[10.5px] font-bold uppercase tracking-wider text-purple-300 mb-1 line-clamp-1">{group.title}</h5>
                          <p className="text-xs text-zinc-300/90 leading-relaxed line-clamp-3">{group.items.join(' ')}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Barra de Navegação Inferior Integrada */}
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  {dimensionsData.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Selecionar formação ${item.title}`}
                      onClick={() => setCurrentFormation(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentFormation ? 'w-8 bg-purple-400' : 'w-2 bg-purple-900/50 hover:bg-purple-600'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPreviousFormation}
                    disabled={isFirstFormation}
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-3.5 py-1.5 text-xs font-medium text-purple-200 transition hover:bg-purple-900/50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Anterior
                  </button>

                  <button
                    type="button"
                    onClick={showNextFormation}
                    disabled={isLastFormation}
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-600 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-purple-500 shadow-lg shadow-purple-950/50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Próxima Formação
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 3: PROJETOS (ROXO VÍVIDO PADRONIZADO)                       */}
        {/* ================================================================= */}
        <section id="projetos" className="relative h-screen w-full snap-center scroll-mt-16 flex flex-col justify-center items-center py-6 px-2 sm:px-4 lg:px-6 overflow-hidden">
          <div className="w-full max-w-[98vw] 2xl:max-w-[1650px] mx-auto flex flex-col justify-center h-full max-h-[calc(100vh-80px)]">
            <div className="mb-3 w-full px-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-purple-400 font-semibold mb-0.5">Projetos</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Soluções orientadas à clareza de dados e uso real.</h2>
            </div>

            <div className="w-full bg-purple-950/20 backdrop-blur-2xl border border-purple-500/25 border-t-purple-400/50 rounded-3xl p-5 lg:p-6 shadow-[0_12px_45px_rgba(76,29,149,0.25)] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start"
                >
                  <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                    <div className="group relative overflow-hidden rounded-[20px] border border-purple-500/30 bg-purple-950/40 shadow-md">
                      <img
                        src={selectedProjectImage}
                        alt={project.title}
                        className="w-full aspect-[16/10] rounded-[20px] object-cover border border-purple-500/20 shadow-md transition duration-500 group-hover:scale-[1.03]"
                      />
                      {project.badge ? (
                        <span className="absolute left-3 top-3 rounded-full border border-purple-500/40 bg-purple-950/80 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-purple-200 backdrop-blur-md">
                          {project.badge}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((item) => (
                        <span key={`${project.id}-${item}`} className="rounded-md border border-purple-500/30 bg-purple-900/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-purple-200">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.liveUrl ? (
                        <a href={normalizeLink(project.liveUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-600 px-4 py-1.5 text-xs font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-purple-500 shadow-md shadow-purple-950/50">
                          Live Demo ↗
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a href={normalizeLink(project.repoUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 text-xs font-medium text-purple-200 transition duration-200 hover:-translate-y-0.5 hover:bg-purple-900/50">
                          Repositório ↗
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between gap-3 border-b border-purple-500/20 pb-2.5 mb-2">
                      <span className="rounded-full border border-purple-500/30 bg-purple-900/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-200">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono tracking-[0.22em] text-purple-300/80">{projectCountLabel}</span>
                    </div>

                    <div>
                      <h3 className="mb-0.5 text-xl sm:text-2xl font-bold text-zinc-100">{project.title}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-300/80 mb-2">{project.overview}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
                      {project.architectureHighlights.map((highlight) => (
                        <div key={`${project.id}-${highlight.title}`} className="p-3 rounded-2xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/30 transition-all duration-300">
                          <h5 className="text-xs font-bold text-purple-300 mb-0.5">{highlight.title}</h5>
                          <p className="text-[11.5px] text-zinc-300/90 leading-relaxed">{highlight.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  {projectsList.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Selecionar projeto ${item.title}`}
                      onClick={() => setCurrentProject(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentProject ? 'w-8 bg-purple-400' : 'w-2 bg-purple-900/50 hover:bg-purple-600'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPreviousProject}
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-3.5 py-1.5 text-xs font-medium text-purple-200 transition hover:bg-purple-900/50"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Anterior
                  </button>

                  <button
                    type="button"
                    onClick={showNextProject}
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-600 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-purple-500 shadow-lg shadow-purple-950/50"
                  >
                    Próximo Projeto
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 4: CERTIFICAÇÕES (CARROSSEL EM 6 SLIDES, ALTURA RIGIDAMENTE TRAVADA) */}
        {/* ================================================================= */}
        <section id="certificacoes" className="relative h-screen w-full snap-center scroll-mt-16 flex flex-col justify-center items-center py-6 px-2 sm:px-4 lg:px-6 overflow-hidden">
          <div className="w-full max-w-[98vw] 2xl:max-w-[1650px] mx-auto flex flex-col justify-center h-full max-h-[calc(100vh-80px)]">
            <div className="mb-3 w-full px-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-purple-400 font-semibold mb-0.5">Certificações e conquistas</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Aprendizado Contínuo em Análise de Tecnologia e Aplicação Prática</h2>
            </div>

            <div className="w-full h-[570px] bg-purple-950/20 backdrop-blur-2xl border border-purple-500/25 border-t-purple-400/50 rounded-3xl p-5 lg:p-7 shadow-[0_12px_45px_rgba(76,29,149,0.25)] flex flex-col justify-between">
              
              {/* Topo Limpo: Badge e Contador */}
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-2.5">
                <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  {activeSlide.badge}
                </span>
                <span className="text-xs font-mono text-purple-300/80">
                  {activeSlide.stage}
                </span>
              </div>

              {/* Grade de 3 Colunas x 2 Linhas: sem scroll interno */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 my-auto overflow-hidden">
                {activeSlide.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/30 transition-all duration-300 flex flex-col justify-between h-[155px]"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-medium text-purple-400 mb-1.5">
                        <span className="truncate max-w-[75%]">{item.institution}</span>
                        <span className="bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 text-purple-200">
                          {item.hours}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-100 line-clamp-1 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-300/80 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-[10px] text-zinc-400 text-right">
                      {item.year}
                    </div>
                  </div>
                ))}
              </div>

              {/* Barra de Navegação Única na Base */}
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {certificationSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCertStage(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        certStage === idx ? 'w-8 bg-purple-400' : 'w-2 bg-purple-900/50 hover:bg-purple-600'
                      }`}
                      aria-label={`Ir para categoria ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCertStage((prev) => (prev === 0 ? certificationSlides.length - 1 : prev - 1))}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 hover:bg-purple-900/50 transition-colors"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="button"
                    onClick={() => setCertStage((prev) => (prev === certificationSlides.length - 1 ? 0 : prev + 1))}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/50"
                  >
                    Próxima Categoria →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 5: CONTATO (ROXO VÍVIDO PADRONIZADO)                        */}
        {/* ================================================================= */}
        <section id="contato" className="relative z-20 h-screen w-full snap-center scroll-mt-16 flex flex-col justify-center items-center py-6 px-2 sm:px-4 lg:px-6 overflow-hidden">
          <div className="w-full max-w-[98vw] 2xl:max-w-[1650px] mx-auto rounded-3xl border border-purple-500/25 border-t-purple-400/50 bg-purple-950/20 backdrop-blur-2xl p-6 md:p-8 shadow-[0_12px_45px_rgba(76,29,149,0.25)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-400 font-semibold mb-1">Contato</p>
                <h2 className="mt-2 max-w-xl text-3xl font-bold text-zinc-100 md:text-5xl">Conecte-se para projetos em Dados e Tecnologia.</h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-300/80">
                  Posso contribuir com raciocínio analítico, desenvolvimento prático, organização de dados e base técnica para projetos reais.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${contactsData.email}`} className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-600 px-4 py-2 text-xs font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-purple-500 shadow-md shadow-purple-950/50">
                    <Mail className="h-4 w-4" />
                    E-mail
                  </a>
                  <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-4 py-2 text-xs font-medium text-purple-200 transition duration-200 hover:-translate-y-0.5 hover:bg-purple-900/50">
                    <BriefcaseBusiness className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-4 py-2 text-xs font-medium text-purple-200 transition duration-200 hover:-translate-y-0.5 hover:bg-purple-900/50">
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-purple-900/20 p-5 shadow-inner">
                <div className="flex items-center gap-2 text-purple-300">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-purple-300 font-semibold">Disponibilidade</span>
                </div>

                <p className="mt-4 text-lg font-bold text-zinc-100">Disponível para estágios e posições iniciais em Dados e Tecnologia</p>
                <div className="mt-5 space-y-2.5">
                  <div className="rounded-xl border border-purple-500/20 bg-purple-950/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80">E-mail</p>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-200">{contactsData.email}</p>
                  </div>
                  <div className="rounded-xl border border-purple-500/20 bg-purple-950/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80">LinkedIn</p>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-200">Perfil profissional</p>
                  </div>
                  <div className="rounded-xl border border-purple-500/20 bg-purple-950/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80">GitHub</p>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-200">@bluejaem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App