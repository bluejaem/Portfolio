import { AnimatePresence, motion, type Variants } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Binary,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  GitBranch,
  LineChart,
  Mail,
  Menu,
  MapPin,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'

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

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
    filter: 'blur(6px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.98,
    filter: 'blur(6px)',
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentFormation, setCurrentFormation] = useState(0)
  const [formationDir, setFormationDir] = useState(1)

  const [projectImageIndexes, setProjectImageIndexes] = useState<Record<string, number>>({})

  const [certStage, setCertStage] = useState(0)
  const [certDir, setCertDir] = useState(1)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'auto'
      return
    }

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  const formation = dimensionsData[currentFormation]
  const isLastFormation = currentFormation === dimensionsData.length - 1
  const isFirstFormation = currentFormation === 0

  const updateProjectImageIndex = (projectId: string, nextIndex: number) => {
    setProjectImageIndexes((previous) => ({
      ...previous,
      [projectId]: nextIndex,
    }))
  }

  const showPreviousProjectImage = (projectId: string, projectImages: string[]) => {
    const currentIndex = projectImageIndexes[projectId] ?? 0
    const nextIndex = currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1
    updateProjectImageIndex(projectId, nextIndex)
  }

  const showNextProjectImage = (projectId: string, projectImages: string[]) => {
    const currentIndex = projectImageIndexes[projectId] ?? 0
    const nextIndex = currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1
    updateProjectImageIndex(projectId, nextIndex)
  }

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
          year: '2025',
        },
        {
          institution: 'Desenvolve Já',
          hours: '112h',
          title: 'Qualificação Profissional para Call Center',
          desc: 'Capacitação intensiva em comunicação assertiva, resolução ágil de incidentes, escuta ativa e relacionamento sob métricas de atendimento.',
          year: '2025',
        },
        {
          institution: 'UNICAMP',
          hours: '48h',
          title: 'Semifinalista da 16ª ONHB',
          desc: 'Avanço até a Fase 6 (semifinal nacional) com análise crítica e metodológica de fontes históricas primárias e produção textual.',
          year: '2024',
        },
        {
          institution: 'UNINTER',
          hours: '42h',
          title: 'Língua Inglesa NEW UBEST Intermediate (Nível 2)',
          desc: 'Consolidação de competências de comunicação oral, leitura técnica avançada e redação em língua inglesa para tecnologia.',
          year: '2026',
        },
      ],
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
          year: '2026',
        },
        {
          institution: 'Gran Faculdade',
          hours: '30h',
          title: 'Engenharia de Prompt',
          desc: 'Arquitetura e refinamento avançado de comandos para LLMs, automação de tarefas e contextualização de modelos de linguagem.',
          year: '2026',
        },
        {
          institution: 'Gran Faculdade',
          hours: '30h',
          title: 'Inteligência Artificial na Prática: Domine as Ferramentas',
          desc: 'Integração de ferramentas generativas aplicadas à rotina de dados, produtividade e resolução de problemas práticos.',
          year: '2026',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Transformers em Ação: Agentes com LLMs',
          desc: 'Mecanismos de auto-atenção, arquiteturas de modelos Transformers e o ecossistema contemporâneo de agentes inteligentes.',
          year: '2025',
        },
        {
          institution: 'Gran Faculdade',
          hours: '1h',
          title: 'Fundamentos de IA para Gestão e Estratégia',
          desc: 'Alinhamento estratégico entre modelos preditivos, governança tecnológica e ganhos de escala empresarial.',
          year: '2026',
        },
      ],
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
          year: '2026',
        },
        {
          institution: 'Centro Universitário ETEP',
          hours: '30h',
          title: 'Introdução à Tecnologia da Informação',
          desc: 'Fundamentação estruturada de arquitetura de TI, alinhamento de infraestrutura a processos computacionais e governança.',
          year: '2026',
        },
        {
          institution: 'Fundação Bradesco',
          hours: '7h',
          title: 'Fundamentos de TI: Hardware e Software',
          desc: 'Arquitetura funcional de computadores, barramentos, memória, dispositivos de E/S e rotinas de manutenção e diagnóstico.',
          year: '2026',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'O Funcionamento dos Circuitos Elétricos',
          desc: 'Fundamentos de eletricidade e grandezas físicas (tensão, corrente, resistência) aplicadas ao funcionamento de circuitos.',
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Choque de Conhecimento: Eletricidade no Dia a Dia',
          desc: 'Conceitos fundamentais de circuitos elétricos práticos, potência, segurança operacional e conversão de energia.',
          year: '2024',
        },
      ],
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
          year: '2025',
        },
        {
          institution: 'Fundação Bradesco',
          hours: '4h',
          title: 'Crie um Site Simples usando HTML, CSS e JavaScript',
          desc: 'Desenvolvimento web com marcação semântica em HTML5, estilização moderna em CSS3 e manipulação de eventos do DOM.',
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '10h',
          title: 'II Semana de Línguas UNINTER',
          desc: 'Linguística aplicada, comunicação multilíngue e metodologias de internacionalização acadêmica e técnica.',
          year: '2026',
        },
        {
          institution: 'Instituto Dom Fernando Gomes',
          hours: '35h',
          title: 'Espanhol Básico',
          desc: 'Domínio gramatical fundamental, vocabulário funcional e leitura técnica intermediária na língua espanhola.',
          year: '2018',
        },
        {
          institution: 'Instituto Dom Fernando Gomes',
          hours: '2º Lugar',
          title: 'Mostra Científica: Transformando o Mundo',
          desc: 'Premiação científica em projeto sobre biotecnologia, impactos socioambientais e metodologia de pesquisa.',
          year: '2022',
        },
      ],
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
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Metas Pessoais e Profissionais',
          desc: 'Alinhamento de objetivos individuais, métricas de crescimento e construção estruturada de planos de carreira.',
          year: '2026',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Postura Profissional: O que o Mercado Espera',
          desc: 'Comportamento corporativo assertivo, ética em ambientes dinâmicos de tecnologia e exigências do mercado.',
          year: '2026',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Como se Expressar Bem em Entrevistas',
          desc: 'Domínio de comunicação verbal e não-verbal, estruturação de raciocínio sob pressão e assertividade técnica.',
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Diferenciando Relação de Emprego x Trabalho',
          desc: 'Compreensão de vínculos regulatórios, obrigações contratuais e dinâmica legal do ambiente de trabalho corporativo.',
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Desvendando a Folha de Pagamento: Holerite',
          desc: 'Compreensão de remuneração, encargos trabalhistas, benefícios e estrutura contábil de pagamentos.',
          year: '2024',
        },
      ],
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
          year: '2024',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Humanização do Atendimento e Relações Interpessoais',
          desc: 'Princípios de empatia, resolução humanizada de incidentes e construção de relações de confiança com usuários.',
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Respira, Organiza e Segue: Gestão de Estresse',
          desc: 'Estratégias de regulação emocional, resiliência psicológica e mitigação de sobrecarga cognitiva em ambientes analíticos.',
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'O Bem-Estar Animal e a Saúde Única',
          desc: 'Abordagem interdisciplinar integrando saúde animal, preservação ambiental e impactos na saúde coletiva humana.',
          year: '2025',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Uso Racional de Medicamentos',
          desc: 'Análise de prescrição consciente, prevenção a substâncias desnecessárias e conscientização sobre saúde pública.',
          year: '2026',
        },
        {
          institution: 'UNINTER',
          hours: '1h',
          title: 'Primeiros Socorros para Leigos',
          desc: 'Protocolos básicos de resposta inicial a emergências e socorro pré-hospitalar para preservação da integridade física.',
          year: '2024',
        },
      ],
    },
  ]

  const activeSlide = certificationSlides[certStage] || certificationSlides[0]

  const specialtyCards = [
    {
      title: 'Business Intelligence & Power BI',
      description:
        'Desenvolvimento de dashboards interativos, modelagem de dados, cálculos em DAX, ETL no Power Query e visualização estratégica orientada à tomada de decisão com foco em decisões factuais e escaláveis.',
      icon: BarChart3,
    },
    {
      title: 'Análise Exploratória & Estatística',
      description:
        'Limpeza e tratamento de dados, análise descritiva e inferencial, definição de KPIs, identificação de padrões, correlação e resolução de problemas de negócio com rigor quantitativo.',
      icon: LineChart,
    },
    {
      title: 'Manipulação de Dados com SQL & Python',
      description:
        'Consultas relacionais com agregação, filtros e JOINs para extração analítica; manipulação, automação e análise exploratória com bibliotecas Python para ciência de dados.',
      icon: Database,
    },
    {
      title: 'Fundamentos Matemáticos & Computação Científica',
      description:
        'Rigor quantitativo apoiado por cálculo, estatística, álgebra linear computacional e pensamento lógico-algorítmico estruturado para modelagem, inferência e otimização.',
      icon: Binary,
    },
    {
      title: 'Engenharia de Software & Frontend Reativo',
      description:
        'Construção de aplicações e interfaces modulares com JavaScript ES6+, TypeScript, React, Tailwind CSS e consumo de APIs para entregar soluções claras e produtivas.',
      icon: Code2,
    },
    {
      title: 'Infraestrutura, Sistemas & Redes',
      description:
        'Compreensão de arquitetura computacional, sistemas operativos Linux/Windows, redes locais, protocolos e suporte técnico para manter ecossistemas digitais estáveis.',
      icon: Cpu,
    },
  ]

  const imageMap: Record<string, string> = {
    dados: '/education/data-science.jpeg',
    'gestao-ia': '/education/tecnologia-da-informacao-800x533.jpeg',
    computacao: '/education/ec.jpg',
    matematica: '/education/matematica-aplicada.jpg',
    tecnico: '/education/ti.jpg',
  }

  const formacaoCountLabel = `${String(currentFormation + 1).padStart(2, '0')} / ${String(dimensionsData.length).padStart(2, '0')}`

  const showPreviousFormation = () => {
    setFormationDir(-1)
    setCurrentFormation((prev) => (prev === 0 ? dimensionsData.length - 1 : prev - 1))
  }

  const showNextFormation = () => {
    setFormationDir(1)
    setCurrentFormation((prev) => (prev === dimensionsData.length - 1 ? 0 : prev + 1))
  }

  const showPreviousCertStage = () => {
    setCertDir(-1)
    setCertStage((prev) => (prev === 0 ? certificationSlides.length - 1 : prev - 1))
  }

  const showNextCertStage = () => {
    setCertDir(1)
    setCertStage((prev) => (prev === certificationSlides.length - 1 ? 0 : prev + 1))
  }

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (submitStatus === 'success') {
      setSubmitStatus('idle')
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitStatus('success')
    setFormData({ nome: '', email: '', mensagem: '' })
  }

  return (
    <div className={`h-screen ${isMobileMenuOpen ? 'overflow-hidden' : 'overflow-y-auto'} overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[#090611] text-zinc-100`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-7rem] h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute left-[-8rem] top-1/3 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="absolute right-[-8rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-700/20 blur-[150px]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090611]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-start">
            <a href="#inicio" className="group inline-flex items-center gap-3 text-zinc-100 transition-all duration-300 hover:text-white">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-violet-400/40 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <img src={profileInfo.photoUrl} alt={profileInfo.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-[0.12em] text-zinc-100">JOÃO</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-400 transition-colors duration-300 group-hover:text-violet-200">
                  Guilherme
                </span>
              </div>
            </a>
          </div>

          <nav aria-label="Navegação principal" className="hidden flex-1 items-center justify-center gap-2 md:flex">
            {[
              { label: 'Sobre', href: '#sobre' },
              { label: 'Início', href: '#inicio' },
              { label: 'Formações', href: '#formacoes' },
              { label: 'Especialidades', href: '#especialidades' },
              { label: 'Projetos', href: '#projetos' },
              { label: 'Certificações', href: '#certificacoes' },
              { label: 'Contato', href: '#contato' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-zinc-300 transition-all duration-300 hover:scale-105 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href="#contato"
              className="hidden items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] md:inline-flex"
            >
              Contato
            </a>
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Fechar menu móvel' : 'Abrir menu móvel'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex items-center justify-center rounded-xl border border-purple-500/25 bg-purple-950/40 p-2 text-zinc-100 transition-colors hover:border-purple-400/50 hover:bg-purple-900/40 md:hidden"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu móvel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              id="mobile-navigation"
              aria-label="Menu móvel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[75vw] max-w-sm flex-col justify-between border-l border-purple-500/25 bg-[#0d071b] p-6 md:hidden"
            >
              <div>
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-5">
                  <a
                    href="#inicio"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold text-zinc-100"
                  >
                    João Guilherme<span className="text-purple-400">.</span>
                  </a>
                  <button
                    type="button"
                    aria-label="Fechar menu móvel"
                    className="rounded-xl border border-purple-500/25 bg-purple-950/40 p-2 text-zinc-100 transition-colors hover:border-purple-400/50 hover:bg-purple-900/40"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav aria-label="Navegação móvel" className="mt-8 flex flex-col gap-2">
                  {[
                    { label: 'Início', href: '#inicio' },
                    { label: 'Especialidades', href: '#especialidades' },
                    { label: 'Sobre', href: '#sobre' },
                    { label: 'Projetos', href: '#projetos' },
                    { label: 'Certificações', href: '#certificacoes' },
                    { label: 'Contato', href: '#contato' },
                  ].map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 text-lg font-medium text-zinc-300 transition-all duration-300 hover:bg-purple-950/40 hover:text-purple-100"
                    >
                      <span className="text-xs font-semibold text-purple-400/70">0{index + 1}</span>
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-5 border-t border-purple-500/20 pt-5">
                <a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                >
                  Vamos conversar
                </a>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={normalizeLink(contactsData.github)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-purple-500/25 bg-purple-950/40 p-2.5 text-zinc-300 transition-all duration-300 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <GitBranch className="h-4 w-4" />
                  </a>
                  <a
                    href={normalizeLink(contactsData.linkedin)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-purple-500/25 bg-purple-950/40 p-2.5 text-zinc-300 transition-all duration-300 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <BriefcaseBusiness className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${contactsData.email}`}
                    aria-label="Enviar e-mail"
                    className="rounded-full border border-purple-500/25 bg-purple-950/40 p-2.5 text-zinc-300 transition-all duration-300 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <main className="w-full">
        {/* ================================================================= */}
        {/* SEÇÃO 1: HERO / APRESENTAÇÃO                                      */}
        {/* ================================================================= */}
        <section id="inicio" className="relative flex min-h-screen w-full items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -28, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-violet-200 shadow-[0_0_18px_rgba(168,85,247,0.15)]">
                Ciência de Dados & Tecnologia
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-none tracking-[-0.06em] text-zinc-50 sm:text-5xl lg:text-7xl">
                {profileInfo.name}
                <span className="ml-1 text-violet-400">.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                {profileInfo.headline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]"
                >
                  Fale comigo
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#formacoes"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-300 hover:scale-105 hover:border-violet-400/50 hover:text-white"
                >
                  Ver formações
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-zinc-900/50 px-3.5 py-2 text-sm text-zinc-300 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-violet-300" />
                {profileInfo.location}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28, y: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
              transition={{
                opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' },
                x: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute inset-5 rounded-[2rem] bg-violet-500/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/30 bg-zinc-950/70 p-3 shadow-[0_0_40px_rgba(168,85,247,0.18)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900">
                  <img
                    src={profileInfo.photoUrl}
                    alt={profileInfo.name}
                    className="h-[420px] w-full object-cover sm:h-[480px]"
                    onError={(event) => {
                      const target = event.currentTarget
                      target.style.display = 'none'
                      const fallback = target.parentElement?.parentElement?.querySelector('[data-fallback]') as HTMLElement | null
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div
                    data-fallback
                    className="hidden h-[420px] w-full items-center justify-center bg-gradient-to-br from-violet-600/50 via-fuchsia-500/30 to-zinc-950 text-5xl font-bold tracking-[0.22em] text-violet-100 sm:h-[480px]"
                  >
                    JG
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 2: SOBRE MIM                                                 */}
        {/* ================================================================= */}
        <section id="sobre" className="relative w-full scroll-mt-16 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-purple-500/30 bg-zinc-950/60 p-3 shadow-[0_0_35px_rgba(168,85,247,0.15)] backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10" />
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/80">
                  <img
                    src={profileInfo.photoUrl}
                    alt={profileInfo.name}
                    className="h-[420px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[500px]"
                    onError={(event) => {
                      const target = event.currentTarget
                      target.style.display = 'none'
                      const fallback = target.parentElement?.parentElement?.querySelector('[data-about-fallback]') as HTMLElement | null
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div
                    data-about-fallback
                    className="hidden h-[420px] w-full items-center justify-center bg-gradient-to-br from-violet-600/60 via-fuchsia-500/20 to-zinc-950 text-5xl font-bold tracking-[0.2em] text-violet-100 sm:h-[500px]"
                  >
                    JG
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400">Sobre Mim</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                MUITO PRAZER,
                <span className="mt-2 block text-zinc-100">
                  SOU O JOÃO GUILHERME<span className="text-violet-400">.</span>
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-zinc-300">
                <p>
                  Sou uma pessoa apaixonada por Dados e Tecnologia, com formação em Analista de Dados pela Educadados e certificação Microsoft PL-300 (Power BI Data Analyst). A minha trajetória foi construída para transformar informação em conhecimento útil, conectando análise, visualização e estratégia de negócio.
                </p>

                <p>
                  A minha base analítica é multidisciplinar: estudo ciência de dados, engenharia da computação, matemática aplicada e computacional e gestão de TI. Essa combinação me permite olhar para problemas de negócio com visão técnica, lógica e operacional, conectando dados, sistemas e decisões.
                </p>

                <p>
                  Hoje, meu foco é evoluir em posições iniciais de Dados/BI e construir experiência prática para crescer como Analista de Dados Júnior, com foco em dashboards, modelagem, análise exploratória e soluções orientadas à tomada de decisão.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={normalizeLink(contactsData.linkedin)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                >
                  <BriefcaseBusiness className="h-4 w-4 text-violet-300" />
                  LinkedIn
                </a>

                <a
                  href={normalizeLink(contactsData.github)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                >
                  <GitBranch className="h-4 w-4 text-violet-300" />
                  GitHub
                </a>

                <a
                  href={`mailto:${contactsData.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                >
                  <Mail className="h-4 w-4 text-violet-300" />
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 2: FORMAÇÕES ACADÊMICAS                                     */}
        {/* ================================================================= */}
        <section id="formacoes" className="relative h-screen w-full snap-center scroll-mt-16 flex flex-col justify-center items-center py-6 px-2 sm:px-4 lg:px-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[98vw] 2xl:max-w-[1650px] mx-auto flex flex-col justify-center h-full max-h-[calc(100vh-80px)]"
          >
            <div className="mb-3 w-full px-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-purple-400 font-semibold mb-0.5">Formações acadêmicas</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Formações Acadêmicas Interdisciplinares</h2>
            </div>

            <div className="w-full h-[580px] bg-purple-950/20 backdrop-blur-2xl border border-purple-500/25 border-t-purple-400/50 rounded-3xl p-5 lg:p-7 shadow-[0_12px_45px_rgba(76,29,149,0.25)] flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="wait" custom={formationDir}>
                <motion.div
                  key={formation.id}
                  custom={formationDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start my-auto w-full"
                >
                  <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-[420px]">
                    <div className="relative w-full h-[320px] overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-950/40 shadow-md">
                      <img
                        src={imageMap[formation.id] ?? imageMap.dados}
                        alt={formation.title}
                        className="w-full h-full object-cover transition duration-500 hover:scale-[1.02]"
                        style={{
                          objectPosition:
                            formation.id === 'dados'
                              ? '50% 6%'
                              : formation.id === 'matematica'
                              ? '50% 28%'
                              : formation.id === 'computacao'
                              ? '50% 12%'
                              : formation.id === 'tecnico'
                              ? '50% 14%'
                              : '50% 8%',
                        }}
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

                  <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between h-[420px]">
                    <div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
                      {formation.detailGroups?.slice(0, 4).map((group) => (
                        <div key={`${formation.id}-${group.title}`} className="p-3.5 rounded-2xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/30 transition-all duration-300 flex flex-col justify-between h-[120px]">
                          <h5 className="text-[10.5px] font-bold uppercase tracking-wider text-purple-300 mb-1 line-clamp-1">{group.title}</h5>
                          <p className="text-xs text-zinc-300/90 leading-relaxed line-clamp-3">{group.items.join(' ')}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  {dimensionsData.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Selecionar formação ${item.title}`}
                      onClick={() => {
                        setFormationDir(index > currentFormation ? 1 : -1)
                        setCurrentFormation(index)
                      }}
                      className={`h-2 rounded-full transition-all duration-500 ${index === currentFormation ? 'w-8 bg-purple-400' : 'w-2 bg-purple-900/50 hover:bg-purple-600'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPreviousFormation}
                    disabled={isFirstFormation}
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-3.5 py-1.5 text-xs font-medium text-purple-200 transition duration-300 hover:bg-purple-900/50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Anterior
                  </button>

                  <button
                    type="button"
                    onClick={showNextFormation}
                    disabled={isLastFormation}
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-600 px-3.5 py-1.5 text-xs font-medium text-white transition duration-300 hover:bg-purple-500 shadow-lg shadow-purple-950/50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Próxima Formação
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 3: ESPECIALIDADES / HABILIDADES                            */}
        {/* ================================================================= */}
        <section id="especialidades" className="relative w-full snap-center scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300">Competências &amp; Domínios</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
                Minhas Especialidades<span className="text-violet-400">.</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specialtyCards.map(({ title, description, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-200 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400/60 group-hover:text-violet-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 3: PROJETOS (COM CARROSSEL DE IMAGENS INTERNO)              */}
        {/* ================================================================= */}
        <section id="projetos" className="relative w-full scroll-mt-16 overflow-x-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400">Portfólio</p>
              <h2 className="text-3xl font-bold text-zinc-100 md:text-4xl">
                MEUS PROJETOS<span className="text-purple-400">.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                Soluções construídas com foco em dados, análise, automação e experiência de produto digital.
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              {projectsList.map((project, index) => {
                const projectImages = project.images && project.images.length > 0 ? project.images : [project.image || '']
                const currentImageIndex = projectImageIndexes[project.id] ?? 0
                const currentImage = projectImages[currentImageIndex] || project.image || ''

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group overflow-hidden rounded-3xl border border-purple-500/20 bg-zinc-900/60 shadow-[0_0_0_1px_rgba(168,85,247,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                  >
                    <div className="relative overflow-hidden bg-zinc-950/70">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={currentImage}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(event) => {
                            const target = event.currentTarget
                            target.style.opacity = '0.35'
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                        {project.badge ? (
                          <span className="absolute left-4 top-4 rounded-full border border-purple-500/30 bg-purple-950/75 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-200 backdrop-blur-md">
                            {project.badge}
                          </span>
                        ) : null}

                        {projectImages.length > 1 ? (
                          <>
                            <button
                              type="button"
                              aria-label="Imagem anterior"
                              onClick={() => showPreviousProjectImage(project.id, projectImages)}
                              className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-zinc-950/70 text-zinc-100 transition-all duration-200 hover:border-purple-400/60 hover:bg-purple-600/80"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>

                            <button
                              type="button"
                              aria-label="Próxima imagem"
                              onClick={() => showNextProjectImage(project.id, projectImages)}
                              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-zinc-950/70 text-zinc-100 transition-all duration-200 hover:border-purple-400/60 hover:bg-purple-600/80"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>

                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-purple-500/20 bg-zinc-950/70 px-2 py-1 backdrop-blur-sm">
                              {projectImages.map((_, imageIndex) => (
                                <button
                                  key={`${project.id}-dot-${imageIndex}`}
                                  type="button"
                                  onClick={() => updateProjectImageIndex(project.id, imageIndex)}
                                  aria-label={`Ir para a imagem ${imageIndex + 1}`}
                                  className={`h-1.5 rounded-full transition-all duration-300 ${
                                    currentImageIndex === imageIndex ? 'w-4 bg-purple-400' : 'w-1.5 bg-purple-900/60 hover:bg-purple-500'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-5 p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-purple-500/30 bg-purple-900/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-200">
                          {project.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-zinc-100">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-zinc-300">{project.overview}</p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.architectureHighlights.slice(0, 2).map((highlight) => (
                          <div
                            key={`${project.id}-${highlight.title}`}
                            className="rounded-2xl border border-purple-500/15 bg-purple-900/20 p-3"
                          >
                            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-300">
                              {highlight.title}
                            </h4>
                            <p className="mt-2 text-xs leading-6 text-zinc-300">{highlight.detail}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={`${project.id}-${tech}`}
                            className="rounded-md border border-purple-500/25 bg-purple-900/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.liveUrl ? (
                          <a
                            href={normalizeLink(project.liveUrl)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_18px_rgba(168,85,247,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                          >
                            Live Demo
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        ) : null}

                        {project.repoUrl ? (
                          <a
                            href={normalizeLink(project.repoUrl)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-zinc-950/60 px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 hover:scale-105 hover:border-purple-400/40 hover:text-white"
                          >
                            Repositório
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 4: CERTIFICAÇÕES                                            */}
        {/* ================================================================= */}
        <section id="certificacoes" className="relative h-screen w-full snap-center scroll-mt-16 flex flex-col justify-center items-center py-6 px-2 sm:px-4 lg:px-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[98vw] 2xl:max-w-[1650px] mx-auto flex flex-col justify-center h-full max-h-[calc(100vh-80px)]"
          >
            <div className="mb-3 w-full px-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-purple-400 font-semibold mb-0.5">Certificações e conquistas</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Aprendizado Contínuo em Análise de Tecnologia e Aplicação Prática</h2>
            </div>

            <div className="w-full h-[570px] bg-purple-950/20 backdrop-blur-2xl border border-purple-500/25 border-t-purple-400/50 rounded-3xl p-5 lg:p-7 shadow-[0_12px_45px_rgba(76,29,149,0.25)] flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-2.5">
                <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  {activeSlide.badge}
                </span>
                <span className="text-xs font-mono text-purple-300/80">
                  {activeSlide.stage}
                </span>
              </div>

              <AnimatePresence mode="wait" custom={certDir}>
                <motion.div
                  key={activeSlide.badge}
                  custom={certDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 my-auto overflow-hidden w-full"
                >
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
                </motion.div>
              </AnimatePresence>

              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {certificationSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCertDir(idx > certStage ? 1 : -1)
                        setCertStage(idx)
                      }}
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
                    onClick={showPreviousCertStage}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 hover:bg-purple-900/50 transition-colors"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="button"
                    onClick={showNextCertStage}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/50"
                  >
                    Próxima Categoria →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================================================================= */}
        {/* SEÇÃO 5: CONTATO                                                  */}
        {/* ================================================================= */}
        <section id="contato" className="relative w-full scroll-mt-16 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400">Fale Comigo</p>
              <h2 className="text-3xl font-bold text-zinc-100 md:text-4xl">
                ENTRE EM CONTATO<span className="text-purple-400">.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                Estou aberto a oportunidades em Dados, BI, tecnologia e projetos que conectem visão analítica com impacto real.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-purple-500/25 bg-zinc-900/60 p-6 shadow-[0_0_30px_rgba(168,85,247,0.08)] backdrop-blur-sm md:p-8"
                >
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="nome" className="mb-2 block text-sm font-medium text-zinc-200">
                        Nome Completo
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleFieldChange}
                        placeholder="Seu nome"
                        className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/50 focus:shadow-[0_0_18px_rgba(168,85,247,0.25)]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">
                        E-mail para retorno
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFieldChange}
                        placeholder="seu@email.com"
                        className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/50 focus:shadow-[0_0_18px_rgba(168,85,247,0.25)]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-zinc-200">
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        value={formData.mensagem}
                        onChange={handleFieldChange}
                        placeholder="Fale um pouco sobre a oportunidade, projeto ou conversa que você deseja iniciar..."
                        className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/50 focus:shadow-[0_0_18px_rgba(168,85,247,0.25)]"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                      >
                        Enviar Mensagem
                      </button>

                      {submitStatus === 'success' ? (
                        <span className="text-sm text-emerald-300">Mensagem enviada com sucesso.</span>
                      ) : null}
                    </div>
                  </form>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-purple-500/25 bg-purple-950/20 p-6 shadow-[0_0_25px_rgba(168,85,247,0.08)] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-purple-300">
                    <div className="rounded-full border border-purple-500/30 bg-violet-500/10 p-2">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-300">Contato direto</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <a
                      href={`mailto:${contactsData.email}`}
                      className="block rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_18px_rgba(168,85,247,0.2)]"
                    >
                      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">E-mail</p>
                      <p className="mt-2 text-sm text-zinc-100">{contactsData.email}</p>
                    </a>

                    <div className="space-y-3">
                      <a
                        href={normalizeLink(contactsData.linkedin)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_18px_rgba(168,85,247,0.2)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-full border border-purple-500/30 bg-violet-500/10 p-2">
                            <BriefcaseBusiness className="h-4 w-4 text-violet-200" />
                          </div>
                          <span className="text-sm font-medium text-zinc-100">LinkedIn</span>
                        </div>
                        <span className="text-xs uppercase tracking-[0.18em] text-purple-300">Abrir</span>
                      </a>

                      <a
                        href={normalizeLink(contactsData.github)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_18px_rgba(168,85,247,0.2)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-full border border-purple-500/30 bg-violet-500/10 p-2">
                            <GitBranch className="h-4 w-4 text-violet-200" />
                          </div>
                          <span className="text-sm font-medium text-zinc-100">GitHub</span>
                        </div>
                        <span className="text-xs uppercase tracking-[0.18em] text-purple-300">Abrir</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-purple-500/20 bg-zinc-950/60 p-4">
                    <div className="flex items-center gap-3 text-purple-300">
                      <div className="rounded-full border border-purple-500/30 bg-violet-500/10 p-2">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-300">Disponibilidade</span>
                    </div>

                    <p className="mt-4 text-lg font-semibold text-zinc-100">
                      Disponível para estágios e oportunidades iniciais em Dados e Tecnologia.
                    </p>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">{profileInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <footer className="-mx-4 mt-20 border-t border-purple-500/20 bg-zinc-950/80 px-4 py-10 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="text-lg font-semibold text-zinc-100">
                  João Guilherme<span className="text-purple-400">.</span>
                </p>
                <p className="mt-1 text-xs text-zinc-400">Ciência de Dados &amp; Tecnologia</p>
              </div>

              <nav aria-label="Redes sociais" className="flex items-center gap-3">
                <a
                  href={normalizeLink(contactsData.github)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-purple-500/25 bg-purple-950/40 p-2.5 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <GitBranch className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={normalizeLink(contactsData.linkedin)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-purple-500/25 bg-purple-950/40 p-2.5 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${contactsData.email}`}
                  aria-label="Enviar e-mail"
                  className="rounded-full border border-purple-500/25 bg-purple-950/40 p-2.5 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </nav>

              <p className="text-xs font-medium tracking-wide text-zinc-400">
                © {new Date().getFullYear()} João Guilherme Machado de Melo. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App