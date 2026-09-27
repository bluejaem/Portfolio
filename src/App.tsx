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

  const certificationStages = [
    {
      name: 'Formações de alto impacto & grandes cargas horárias',
      title: 'ESTÁGIO 01 / 05',
      description: 'Formações de alto impacto & grandes cargas horárias',
      cards: [
        {
          badge: 'Harvard / Fundação Estudar',
          title: 'CS50: Introduction to Computer Science',
          hours: '70h',
          year: '2025',
          description: 'Fundamentos de algoritmos, estruturas de dados, memória, lógica computacional e arquitetura do pensamento de software.',
        },
        {
          badge: 'Desenvolve Já',
          title: 'Qualificação Profissional para Call Center',
          hours: '112h',
          year: '2025',
          description: 'Comunicação assertiva, resolução de problemas, atendimento ao cliente e atuação sob métricas de suporte técnico.',
        },
        {
          badge: 'UNICAMP',
          title: 'Semifinalista da 16ª ONHB',
          hours: '48h',
          year: '2024',
          description: 'Pesquisa histórica, análise documental e produção de raciocínio crítico em contextos acadêmicos e culturais.',
        },
        {
          badge: 'UNINTER',
          title: 'Língua Inglesa NEW UBEST Intermediate',
          hours: '42h',
          year: '2026',
          description: 'Leitura técnica, comunicação intermediária e consolidação de inglês acadêmico e profissional para contexto digital.',
        },
      ],
    },
    {
      name: 'Dados, business intelligence & inteligência artificial',
      title: 'ESTÁGIO 02 / 05',
      description: 'Dados, Business Intelligence & Inteligência Artificial',
      cards: [
        { badge: 'Gran Faculdade', title: 'Análise de Dados e Inteligência de Negócios', hours: '30h', year: '2026', description: 'Modelagem analítica, visualização de indicadores e suporte a decisões orientadas por dados e evidências.' },
        { badge: 'Gran Faculdade', title: 'Engenharia de Prompt', hours: '30h', year: '2026', description: 'Estruturação de instruções, automação de tarefas e aplicação de IA em fluxos de trabalho reais.' },
        { badge: 'Gran Faculdade', title: 'Inteligência Artificial na Prática', hours: '30h', year: '2026', description: 'Uso prático de ferramentas de IA para produtividade, automação e análise aplicada em contexto profissional.' },
        { badge: 'UNINTER', title: 'Transformers em Ação: Agentes com LLMs', hours: '1h', year: '2025', description: 'Introdução ao uso de agentes baseados em LLMs e lógica de automação inteligente sobre fluxos de trabalho.' },
        { badge: 'Gran Faculdade', title: 'Fundamentos de IA para Gestão, Liderança e Estratégia', hours: '1h', year: '2026', description: 'Aplicação estratégica da IA para liderança, processos e tomada de decisão em organizações.' },
      ],
    },
    {
      name: 'Computação, redes, circuitos & hardware',
      title: 'ESTÁGIO 03 / 05',
      description: 'Computação, Redes, Circuitos & Hardware',
      cards: [
        { badge: 'Cisco Networking Academy', title: 'Conceitos Básicos de Redes / Networking Basics', hours: 'Certificação', year: '2026', description: 'Fundamentos de TCP/IP, topologias, protocolos, conectividade e infraestrutura de redes locais e globais.' },
        { badge: 'Fundação Bradesco', title: 'Fundamentos de TI: Hardware e Software', hours: '7h', year: '2026', description: 'Entendimento dos pilares de sistemas computacionais, integração entre hardware, software e operação.' },
        { badge: 'UNINTER', title: 'O Funcionamento dos Circuitos Elétricos', hours: '1h', year: '2025', description: 'Leis fundamentais de eletricidade, corrente, tensão e funcionamento de circuitos em contexto técnico.' },
        { badge: 'UNINTER', title: 'Choque de Conhecimento: Eletricidade no Dia a Dia', hours: '1h', year: '2024', description: 'Aplicação prática da eletricidade em cenários corriqueiros e leitura da tecnologia ao redor.' },
        { badge: 'ETEP', title: 'Disciplina Optativa / Extensão Técnica', hours: '30h', year: '2026', description: 'Aprofundamento técnico em áreas de infraestrutura e tecnologia aplicadas ao ambiente profissional.' },
      ],
    },
    {
      name: 'Programação, gestão & produtividade',
      title: 'ESTÁGIO 04 / 05',
      description: 'Programação, Gestão & Produtividade',
      cards: [
        { badge: 'Fundação Bradesco', title: 'Linguagem de Programação Python Básico', hours: '18h', year: '2025', description: 'Estruturas de controle, funções, lógica, automação e resolução de problemas com Python.' },
        { badge: 'Fundação Bradesco', title: 'Crie um Site Simples usando HTML, CSS e JavaScript', hours: '4h', year: '2025', description: 'Noções fundamentais de front-end, layout, responsividade e interatividade em páginas web.' },
        { badge: 'UNINTER', title: 'Gestão do Tempo e Produtividade', hours: '1h', year: '2025', description: 'Organização de rotina, priorização e melhora da execução de tarefas em ambientes acadêmicos e profissionais.' },
        { badge: 'UNINTER', title: 'Metas Pessoais e Profissionais: Foco e Construção do Futuro', hours: '1h', year: '2026', description: 'Planejamento de objetivos, autoconsciência e trajetória profissional com foco em desenvolvimento contínuo.' },
        { badge: 'UNINTER', title: 'Respira, Organiza e Segue: Como Lidar com Estresse e Sobrecarga', hours: '1h', year: '2025', description: 'Estratégias emocionais e comportamentais para lidar com pressão, excesso de demandas e bem-estar.' },
      ],
    },
    {
      name: 'Desenvolvimento humano, comunicação & sociedade',
      title: 'ESTÁGIO 05 / 05',
      description: 'Desenvolvimento Humano, Comunicação & Sociedade',
      cards: [
        { badge: 'UNINTER', title: 'Comunicação Eficaz: Habilidades Essenciais para o Sucesso', hours: '1h', year: '2024', description: 'Estratégias de expressão clara, persuasão e clareza de mensagem em contextos profissionais.' },
        { badge: 'UNINTER', title: 'Como se Expressar Bem em Entrevistas: Dicas de Gramática', hours: '1h', year: '2025', description: 'Domínio de linguagem, estrutura de resposta e comunicação oral em processos seletivos.' },
        { badge: 'UNINTER', title: 'Postura Profissional: O que o Mercado Espera', hours: '1h', year: '2026', description: 'Comportamento profissional, ética e alinhamento à cultura organizacional e às exigências do mercado.' },
        { badge: 'UNINTER', title: 'Diferenciando Relação de Emprego x Relação de Trabalho', hours: '1h', year: '2025', description: 'Compreensão dos limites legais e organizacionais entre vínculo empregatício e dinâmica de trabalho.' },
        { badge: 'UNINTER', title: 'Desvendando a Folha de Pagamento: Holerite', hours: '1h', year: '2024', description: 'Leitura de direitos e remuneração, compreensão dos elementos que compõem o salário e a folha.' },
        { badge: 'UNINTER', title: 'Motivação e Benefícios Corporativos', hours: '1h', year: '2026', description: 'Noções sobre engajamento, reconhecimento e benefícios como parte do ambiente de trabalho.' },
        { badge: 'UNINTER', title: 'Humanização do Atendimento e Relações Interpessoais', hours: '1h', year: '2025', description: 'Atendimento acolhedor, empatia e construção de relações de confiança em ambientes clientes e equipe.' },
        { badge: 'UNINTER', title: 'Primeiros Socorros para Leigos', hours: '1h', year: '2024', description: 'Atendimento inicial em emergências, primeiros passos e resposta consciente em situações críticas.' },
        { badge: 'UNINTER', title: 'Uso Racional de Medicamentos', hours: '1h', year: '2026', description: 'Conscientização sobre dosagem, segurança, prescrição e uso adequado de medicamentos.' },
        { badge: 'UNINTER', title: 'Envelhecimento, Beleza e Bem-Estar', hours: '1h', year: '2024', description: 'Compreensão do bem-estar corporal, saúde e envelhecimento com perspectiva integral e cuidadosa.' },
        { badge: 'UNINTER', title: 'O Bem-Estar Animal e a Saúde Única', hours: '1h', year: '2025', description: 'Visão interdisciplinar sobre saúde animal, bem-estar e relação com a saúde humana e ambiental.' },
        { badge: 'UNINTER', title: 'Midiatização da Cultura', hours: '1h', year: '2025', description: 'Entendimento da cultura como processo mediado, social e comunicativo em distintos contextos.' },
        { badge: 'UNINTER', title: 'II Semana de Línguas', hours: '10h', year: '2026', description: 'Imersão em língua e cultura, ampliando repertório comunicativo e abertura intercultural.' },
        { badge: 'Instituto Dom Fernando Gomes', title: 'Espanhol Básico', hours: '35h', year: '2018', description: 'Base de expressão e compreensão em espanhol para comunicação internacional e leitura básica.' },
        { badge: 'Instituto Dom Fernando Gomes', title: '2º Lugar na Mostra Científica Transformando o Mundo', hours: '—', year: '2022', description: 'Reconhecimento por projeto científico, criatividade, comunicação e impacto social com proposta de inovação.' },
      ],
    },
  ]

  const currentCertStage = certificationStages[certStage]

  const showPreviousCertStage = () => {
    setCertStage((previous) => (previous === 0 ? certificationStages.length - 1 : previous - 1))
  }

  const showNextCertStage = () => {
    setCertStage((previous) => (previous === certificationStages.length - 1 ? 0 : previous + 1))
  }

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
        <div className="absolute left-1/2 top-[-7rem] h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute left-[-8rem] top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute right-[-8rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-700/15 blur-[150px]" />
      </div>

      <header className="sticky top-0 z-50 h-16 border-b border-purple-500/20 bg-zinc-950/60 backdrop-blur-xl">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-500/30 to-violet-500/10 shadow-[0_0_18px_rgba(168,85,247,0.2)]">
              <img src={profileInfo.photoUrl} alt={profileInfo.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-100">João Guilherme</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-purple-200 shadow-[0_0_16px_rgba(168,85,247,0.12)]">
              Ciência de Dados & Tecnologia
            </span>
            <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-200">
              <GitBranch className="h-4 w-4" />
            </a>
            <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-200">
              <BriefcaseBusiness className="h-4 w-4" />
            </a>
            <a href={`mailto:${contactsData.email}`} aria-label="E-mail" className="rounded-full border border-purple-500/20 bg-zinc-900/50 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-200">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="w-full">
        <section id="inicio" className="relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center px-4 py-8 sm:px-8">
          <div className="grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.12)]">
                Ciência de Dados
              </div>

              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-300/80">{profileInfo.role}</p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">{profileInfo.name}</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300/80 md:text-xl">{profileInfo.headline}</p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-900/40 px-3 py-1.5 text-sm text-zinc-200 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.08)]">
                <MapPin className="h-4 w-4 text-purple-300" />
                {profileInfo.location}
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300/80">{profileInfo.bio}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#formacoes" className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-500/20 to-violet-500/15 px-5 py-2.5 text-sm font-medium text-purple-100 shadow-[0_12px_30px_rgba(168,85,247,0.15)] transition duration-200 hover:-translate-y-0.5 hover:border-purple-300/60 hover:shadow-[0_18px_35px_rgba(168,85,247,0.2)]">
                  Ver Formações
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-100 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-100">
                  Entrar em Contato
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative rounded-[2rem] border border-purple-500/30 bg-gradient-to-tr from-purple-500/20 via-zinc-900/80 to-violet-500/10 p-2 shadow-[0_0_50px_rgba(168,85,247,0.25)]">
                <div className="absolute inset-4 rounded-[1.6rem] border border-purple-500/20" />
                <div className="relative h-72 w-72 overflow-hidden rounded-[1.7rem] border border-purple-500/20 bg-zinc-900/60 md:h-80 md:w-80">
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
                    className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/30 via-violet-600/20 to-zinc-950 text-5xl font-semibold tracking-[0.28em] text-purple-100"
                  >
                    JM
                  </div>
                </div>
                <div className="absolute -bottom-5 left-6 right-6 flex items-center justify-between gap-3 rounded-full border border-purple-500/20 bg-zinc-950/80 px-4 py-2.5 shadow-[0_10px_30px_rgba(168,85,247,0.12)] backdrop-blur-xl">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Perfil</span>
                  <span className="text-sm font-medium text-purple-100">Dados + IA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="formacoes" className="relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center px-4 py-8 sm:px-8">
          <div className="mb-6 w-full max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Formações acadêmicas</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Formações Acadêmicas Interdisciplinares</h2>
          </div>

          <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-purple-500/25 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_35%),_rgba(17,24,39,0.78)] p-8 shadow-[0_20px_60px_rgba(76,29,149,0.18)] backdrop-blur-xl sm:p-10">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full border border-purple-500/25 bg-purple-900/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.12)]">
                {formation.pillar}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">{formacaoCountLabel}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, x: 20, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="grid gap-8 xl:grid-cols-[1.05fr_1.95fr]"
              >
                <div className="group relative overflow-hidden rounded-[26px] border border-purple-500/20 bg-slate-950/60">
                  <img
                    src={imageMap[formation.id] ?? imageMap.dados}
                    alt={formation.title}
                    className="h-64 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] sm:h-72 xl:h-full"
                    style={{ objectPosition: formation.id === 'dados' ? '50% 6%' : formation.id === 'matematica' ? '50% 28%' : formation.id === 'computacao' ? '50% 12%' : formation.id === 'tecnico' ? '50% 14%' : '50% 8%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="flex flex-col justify-center gap-5">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-zinc-100 sm:text-3xl">{formation.title}</h3>
                    <p className="text-base font-medium text-purple-300">{formation.institution}</p>
                  </div>

                  <div className="rounded-2xl border border-purple-500/20 bg-zinc-950/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-purple-200">Foco</p>
                    <p className="mt-2 text-base leading-7 text-zinc-200">{formation.pillar}</p>
                  </div>

                  <div className="max-h-[500px] overflow-y-auto pr-2">
                    <p className="max-w-3xl text-sm leading-7 text-zinc-300/80 sm:text-base">{formation.role}</p>

                    {formation.detailGroups?.map((group) => (
                      <div key={`${formation.id}-${group.title}`} className="mt-5">
                        <h4 className="text-[10px] font-medium uppercase tracking-[0.18em] text-purple-200">{group.title}</h4>
                        <ul className="mt-2 space-y-2 pl-4 text-sm leading-7 text-zinc-300/80">
                          {group.items.map((item) => (
                            <li key={`${formation.id}-${group.title}-${item}`} className="list-disc marker:text-purple-300/70">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {formation.highlights.map((item) => (
                      <span key={`${formation.id}-${item}`} className="rounded-full border border-purple-500/30 bg-purple-900/30 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-purple-200 sm:text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {dimensionsData.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Selecionar formação ${item.title}`}
                    onClick={() => setCurrentFormation(index)}
                    className={`h-2.5 rounded-full transition-all ${index === currentFormation ? 'w-8 bg-purple-300' : 'w-2.5 bg-purple-500/40 hover:bg-purple-300/70'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousFormation}
                  disabled={isFirstFormation}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Anterior
                </button>

                <button
                  type="button"
                  onClick={showNextFormation}
                  disabled={isLastFormation}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Próxima Formação
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center px-4 py-8 sm:px-8">
          <div className="mb-6 w-full max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Projetos</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Soluções orientadas à clareza de dados e uso real.</h2>
          </div>

          <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-purple-500/25 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_35%),_rgba(17,24,39,0.78)] p-8 shadow-[0_20px_60px_rgba(76,29,149,0.18)] backdrop-blur-xl sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 30, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -30, y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-5">
                  <div className="group relative overflow-hidden rounded-[28px] border border-purple-500/20 bg-[#0b1220] shadow-[0_0_26px_rgba(168,85,247,0.14)]">
                    <img
                      src={selectedProjectImage}
                      alt={project.title}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-80 lg:h-[25rem]"
                    />
                    {project.badge ? (
                      <span className="absolute left-4 top-4 rounded-full border border-purple-500/30 bg-purple-950/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-purple-100">
                        {project.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span key={`${project.id}-${item}`} className="rounded-md border border-purple-500/30 bg-purple-950/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-purple-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a href={normalizeLink(project.liveUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-500/20 to-violet-500/10 px-4 py-2 text-sm text-zinc-100 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-100">
                        Live Demo ↗
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a href={normalizeLink(project.repoUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-100">
                        Repositório ↗
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-purple-500/25 bg-purple-900/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-purple-200">
                      {project.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">{projectCountLabel}</span>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-2xl font-bold text-zinc-100 sm:text-3xl">{project.title}</h3>
                    <p className="text-sm leading-7 text-zinc-300/80">{project.overview}</p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-purple-500/20 bg-zinc-950/30 p-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-purple-200">Visão geral</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300/90">{project.overview}</p>
                    </div>

                    <div className="rounded-2xl border border-purple-500/20 bg-zinc-950/30 p-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-purple-200">Problema resolvido</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300/90">{project.problemSolved}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {project.architectureHighlights.map((highlight) => (
                      <div key={`${project.id}-${highlight.title}`} className="rounded-xl border border-purple-500/20 bg-purple-950/30 p-3">
                        <span className="block text-sm font-semibold text-purple-300">{highlight.title}</span>
                        <p className="mt-0.5 text-xs leading-5 text-zinc-300/90">{highlight.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                {projectsList.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Selecionar projeto ${item.title}`}
                    onClick={() => setCurrentProject(index)}
                    className={`h-2.5 rounded-full transition-all ${index === currentProject ? 'w-8 bg-purple-300' : 'w-2.5 bg-purple-500/40 hover:bg-purple-300/70'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousProject}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Anterior
                </button>

                <button
                  type="button"
                  onClick={showNextProject}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30"
                >
                  Próximo Projeto
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="aprendizado" className="relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center px-4 py-8 sm:px-8">
          <div className="mb-6 w-full max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Certificações e conquistas</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">Aprendizado Contínuo em Análise de Tecnologia e Aplicação Prática</h2>
          </div>

          <div className="mx-auto flex w-full max-w-6xl min-h-[520px] flex-col justify-between rounded-[2rem] border border-purple-500/25 border-t-purple-400/50 bg-purple-950/20 p-6 shadow-[0_12px_45px_rgba(76,29,149,0.22)] backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full border border-purple-500/25 bg-purple-900/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.12)]">
                {currentCertStage.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                {String(certStage + 1).padStart(2, '0')} / {String(certificationStages.length).padStart(2, '0')}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentCertStage.title}
                initial={{ opacity: 0, x: 24, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -24, y: -10 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="flex-1"
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-purple-200">{currentCertStage.title}</p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-100 sm:text-2xl">{currentCertStage.description}</h3>
                  </div>
                </div>

                <div className={certStage === 0 ? 'grid gap-3 md:grid-cols-2' : 'grid gap-3 md:grid-cols-2 xl:grid-cols-3'}>
                  {currentCertStage.cards.map((item) => (
                    <div
                      key={`${currentCertStage.title}-${item.title}`}
                      className="rounded-[1.5rem] border border-purple-500/20 bg-zinc-950/55 p-4 shadow-[0_10px_25px_rgba(15,23,42,0.25)] transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/30"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full border border-purple-500/20 bg-purple-950/30 px-2 py-1 text-[8px] uppercase tracking-[0.12em] text-purple-100">
                          {item.badge}
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.14em] text-zinc-400">{item.hours}</span>
                      </div>

                      <h4 className="mt-3 text-sm font-medium text-zinc-100 sm:text-base">{item.title}</h4>
                      <p className="mt-2 text-[11px] text-zinc-300/80">{item.description}</p>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <span className="text-[9px] uppercase tracking-[0.14em] text-zinc-500">{item.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="flex flex-1 items-center justify-center gap-2">
                {certificationStages.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Selecionar estágio ${index + 1}`}
                    onClick={() => setCertStage(index)}
                    className={`h-2.5 rounded-full transition-all ${index === certStage ? 'w-8 bg-purple-300' : 'w-2.5 bg-purple-500/40 hover:bg-purple-300/70'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousCertStage}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Anterior
                </button>

                <button
                  type="button"
                  onClick={showNextCertStage}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-2 text-xs font-medium text-purple-100 transition hover:border-purple-400/60 hover:bg-purple-900/30"
                >
                  Próxima Categoria
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center px-4 py-8 sm:px-8">
          <div className="w-full max-w-5xl rounded-[2rem] border border-purple-500/20 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_35%),_rgba(17,24,39,0.8)] p-6 shadow-[0_20px_60px_rgba(76,29,149,0.18)] backdrop-blur-xl md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">Contato</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold text-zinc-100 md:text-5xl">Conecte-se para projetos em Dados e Tecnologia.</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300/80">
                  Posso contribuir com raciocínio analítico, desenvolvimento prático, organização de dados e base técnica para projetos reais.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`mailto:${contactsData.email}`} className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-100 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-100">
                    <Mail className="h-4 w-4" />
                    E-mail
                  </a>
                  <a href={normalizeLink(contactsData.linkedin)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-100">
                    <BriefcaseBusiness className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a href={normalizeLink(contactsData.github)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-purple-100">
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-purple-500/20 bg-zinc-950/40 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.35)]">
                <div className="flex items-center gap-2 text-purple-200">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-purple-200">Disponibilidade</span>
                </div>

                <p className="mt-5 text-xl font-medium text-zinc-100">Disponível para estágios e posições iniciais em Dados e Tecnologia</p>
                <div className="mt-7 space-y-3">
                  <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">E-mail</p>
                    <p className="mt-2 text-sm text-zinc-200">{contactsData.email}</p>
                  </div>
                  <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">LinkedIn</p>
                    <p className="mt-2 text-sm text-zinc-200">Perfil profissional</p>
                  </div>
                  <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">GitHub</p>
                    <p className="mt-2 text-sm text-zinc-200">@bluejaem</p>
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
