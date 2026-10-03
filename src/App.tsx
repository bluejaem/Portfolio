import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  LineChart,
  Database,
  FunctionSquare,
  Code2,
  Network,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Award,
  Terminal as TerminalIcon,
  CheckCircle2,
  Calendar,
  Clock
} from 'lucide-react';
import { contactsData, profileInfo as portfolioProfileInfo, projects, educationList } from './data/portfolioData';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const profileInfo = {
    ...portfolioProfileInfo,
    contacts: { ...contactsData, location: portfolioProfileInfo.location },
  };

  // Estados dos carrosséis de imagens dos projetos
  const [projectImageIndexes, setProjectImageIndexes] = useState<{ [key: string]: number }>({});

  const handleNextProjectImage = (projectId: string, maxImages: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages,
    }));
  };

  const handlePrevProjectImage = (projectId: string, maxImages: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxImages) % maxImages,
    }));
  };

  // Bloqueio de scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileInfo.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const normalizeLink = (url: string | null) => {
    if (!url) return '#';
    const match = url.match(/^\[(.+?)\]\((.+?)\)$/);
    return match ? match[2] : url;
  };

  // Lista consolidada de certificações e credenciais
  const certifications = [
    {
      id: 'pl300',
      title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      issuer: 'Microsoft',
      badge: 'Certificação Oficial',
      year: '2026',
      hours: 'Oficial',
      description: 'Modelagem analítica em estrela, cálculos DAX avançados, ETL e preparação com Power Query, implementação de segurança RLS e publicação de relatórios estratégicos.',
      highlight: true
    },
    {
      id: 'educadados',
      title: 'Formação Analista de Dados',
      issuer: 'Educadados',
      badge: 'Formação Prática',
      year: '2026',
      hours: 'Imersão',
      description: 'Desenvolvimento prático ponta a ponta: análise exploratória, consultas SQL com agregação e JOINs, Python aplicado a dados, métricas de negócio, KPIs e dashboards executivos.',
      highlight: true
    },
    {
      id: 'cs50',
      title: 'CS50: Introduction to Computer Science',
      issuer: 'Harvard University / Fundação Estudar',
      badge: 'Fundação Computacional',
      year: '2025',
      hours: '120h',
      description: 'Rigor algorítmico, complexidade assintótica, estruturas de dados fundamentais em C, algoritmos de ordenação e memória.',
      highlight: false
    },
    {
      id: 'networking',
      title: 'Basic Networking Concepts',
      issuer: 'Cisco Networking Academy',
      badge: 'Infraestrutura',
      year: '2026',
      hours: 'Fundamentos',
      description: 'Conceitos de redes de computadores, arquitetura TCP/IP, endereçamento IP, roteamento, comutação e protocolos essenciais.',
      highlight: false
    },
    {
      id: 'onhb',
      title: 'Semifinalista da 16ª ONHB',
      issuer: 'UNICAMP',
      badge: 'Conquista Acadêmica',
      year: '2024',
      hours: 'Fase 6',
      description: 'Avanço até a fase semifinal nacional com análise crítica documental, hermenêutica de fontes e rigor metodológico.',
      highlight: false
    },
    {
      id: 'english',
      title: 'Língua Inglesa NEW UBEST Intermediate (Nível 2)',
      issuer: 'UNINTER',
      badge: 'Comunicação',
      year: '2026',
      hours: '42h',
      description: 'Consolidação de leitura técnica em documentações de tecnologia, redação e comunicação instrumental para o ambiente corporativo.',
      highlight: false
    }
  ];

  const specialties = [
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Business Intelligence & Power BI',
      description: 'Modelagem de dados dimensional, cálculos DAX com medidas contextuais, ETL ágil com Power Query e visualização estratégica de relatórios para tomada de decisão (Certificação PL-300).'
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-400" />,
      title: 'Análise Exploratória & Estatística',
      description: 'Limpeza e preparação de bases brutas, identificação de padrões e distribuições, formulação de perguntas de negócio e cálculo de KPIs focados em impacto quantificável.'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Manipulação de Dados com SQL & Python',
      description: 'Consultas relacionais estruturadas (SELECT, filtros, agrupamentos, JOINs); manipulação, tratamento e análise de datasets com bibliotecas Python (Pandas e NumPy).'
    },
    {
      icon: <FunctionSquare className="w-6 h-6 text-purple-400" />,
      title: 'Fundamentos Matemáticos & Computação',
      description: 'Sólida base quantitativa apoiada em cálculo, álgebra linear computacional, estatística aplicada e raciocínio lógico-algorítmico formal.'
    },
    {
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      title: 'Engenharia de Software & Frontend',
      description: 'Construção de ecossistemas reativos, dashboards web e Single Page Applications utilizando JavaScript ES6+, TypeScript, React, Tailwind CSS e consumo de APIs REST.'
    },
    {
      icon: <Network className="w-6 h-6 text-purple-400" />,
      title: 'Infraestrutura, Redes & Sistemas',
      description: 'Compreensão de arquitetura de processadores, ambientes Linux/Windows, redes locais, diagnóstico estruturado e sustentação técnica de ativos de TI.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#07020d] text-zinc-100 overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* HEADER / MENU */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07020d]/80 backdrop-blur-xl border-b border-purple-500/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Identidade */}
          <a href="#inicio" className="group flex items-center gap-2">
            <span className="font-bold text-lg tracking-wider text-zinc-100 group-hover:text-purple-300 transition-colors">
              JOÃO GUILHERME<span className="text-purple-400">.</span>
            </span>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200">Início</a>
            <a href="#especialidades" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200">Especialidades</a>
            <a href="#sobre" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200">Sobre</a>
            <a href="#formacoes" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200">Formações</a>
            <a href="#projetos" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200">Projetos</a>
            <a href="#certificacoes" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200">Certificações</a>
          </nav>

          {/* Botão de Ação Direta */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contato"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-semibold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              Contato
            </a>
          </div>

          {/* Gatilho Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-purple-950/40 border border-purple-500/25 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* DRAWER MENU MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-4/5 max-w-sm h-full bg-[#0d071b] border-l border-purple-500/20 p-6 flex flex-col justify-between md:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-purple-500/15">
                  <span className="font-bold text-sm tracking-wider text-zinc-100">
                    NAVEGAÇÃO<span className="text-purple-400">.</span>
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  {[
                    { label: 'Início', href: '#inicio' },
                    { label: 'Especialidades', href: '#especialidades' },
                    { label: 'Sobre Mim', href: '#sobre' },
                    { label: 'Formações Acadêmicas', href: '#formacoes' },
                    { label: 'Meus Projetos', href: '#projetos' },
                    { label: 'Certificações & Conquistas', href: '#certificacoes' },
                    { label: 'Entre em Contato', href: '#contato' }
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium text-zinc-300 hover:text-purple-400 hover:translate-x-1 transition-all py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-purple-500/15 flex items-center justify-around text-zinc-400">
                <a href={normalizeLink(profileInfo.contacts.github)} target="_blank" rel="noreferrer" className="p-2 hover:text-purple-300 transition-colors">
                  <GitBranch className="w-5 h-5" />
                </a>
                <a href={normalizeLink(profileInfo.contacts.linkedin)} target="_blank" rel="noreferrer" className="p-2 hover:text-purple-300 transition-colors">
                  <BriefcaseBusiness className="w-5 h-5" />
                </a>
                <a href={`mailto:${profileInfo.contacts.email}`} className="p-2 hover:text-purple-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* SEÇÃO 1: HERO / TOPO */}
        <section id="inicio" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Lado Esquerdo: Textos & CTAs */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-medium tracking-wide mb-6">
              <span>CIÊNCIA DE DADOS & TECNOLOGIA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 leading-tight tracking-tight">
              João Guilherme Machado de Melo<span className="text-purple-400">.</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-xl">
              Estudante de Ciência de Dados, Engenharia da Computação e Matemática Aplicada. Formado em Analista de Dados pela Educadados e certificado Microsoft PL-300, com foco em unir rigor analítico à tomada de decisão estratégica em negócios.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-semibold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 inline-flex items-center gap-2"
              >
                Fale comigo <span>→</span>
              </a>
              <a
                href="#formacoes"
                className="px-6 py-3 rounded-full bg-zinc-900/60 border border-zinc-700 hover:border-purple-500/50 text-zinc-300 hover:text-white text-xs font-medium tracking-wide transition-all duration-300"
              >
                Ver formações
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{profileInfo.contacts.location}</span>
            </div>
          </div>

          {/* Lado Direito: Composição Visual Analítica Flutuante (Sem duplicação de foto) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-md"
            >
              {/* Glow de fundo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 rounded-3xl blur-2xl -z-10" />

              {/* Card Terminal / Metrics */}
              <div className="bg-zinc-900/70 border border-purple-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                {/* Header de Terminal */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                    <TerminalIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>data_stack.py</span>
                  </div>
                </div>

                {/* Conteúdo Técnico */}
                <div className="mt-5 space-y-3 font-mono text-xs">
                  <div className="text-zinc-400">
                    <span className="text-purple-400">const</span> <span className="text-fuchsia-300">analystProfile</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1 text-zinc-300">
                    <p>certification: <span className="text-emerald-400">'Microsoft PL-300'</span>,</p>
                    <p>specialization: <span className="text-emerald-400">'Educadados BI & Data'</span>,</p>
                    <p>coreTools: [<span className="text-purple-300">'Power BI'</span>, <span className="text-purple-300">'SQL'</span>, <span className="text-purple-300">'DAX'</span>, <span className="text-purple-300">'Python'</span>],</p>
                    <p>focus: <span className="text-emerald-400">'Business Intelligence & Insights'</span></p>
                  </div>
                  <div className="text-zinc-400">&#125;;</div>
                </div>

                {/* Status de Disponibilidade em Destaque */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs text-zinc-300 font-medium">Disponível para Estágio em Dados</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 font-semibold">
                    Ativo 2026
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO 2: ESPECIALIDADES */}
        <section id="especialidades" className="py-24 md:py-28 border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400 mb-2">COMPETÊNCIAS & DOMÍNIOS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
                Minhas Especialidades<span className="text-purple-400">.</span>
              </h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
                Competências práticas aplicadas em modelagem, exploração de dados e desenvolvimento de soluções funcionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {specialties.map((spec, index) => (
                <div
                  key={index}
                  className="group bg-zinc-900/60 border border-purple-500/15 rounded-3xl p-7 hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mt-5 group-hover:text-purple-200 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed font-normal">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: SOBRE MIM (Com o retrato pessoal exclusivo) */}
        <section id="sobre" className="py-24 md:py-28 border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Lado Esquerdo: Fotografia de Estúdio Exclusiva */}
              <div className="md:col-span-5 flex justify-center">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative group w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.2)] bg-zinc-900"
                >
                  <img
                    src={profileInfo.photoUrl}
                    alt={profileInfo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07020d] via-transparent to-transparent opacity-40 pointer-events-none" />
                </motion.div>
              </div>

              {/* Lado Direito: Narrativa & Trajetória */}
              <div className="md:col-span-7 flex flex-col items-start">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400 mb-2">SOBRE MIM</p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
                  MUITO PRAZER,<br />SOU O JOÃO GUILHERME<span className="text-purple-400">.</span>
                </h2>

                <div className="mt-6 flex w-full items-center gap-4 rounded-2xl border border-purple-500/25 bg-zinc-900/60 p-3.5 shadow-[0_0_24px_rgba(168,85,247,0.12)] sm:gap-5 sm:p-4">
                  <img
                    src="/certifications/microsoft-pl-300.png"
                    alt="Selo Microsoft Certified: Data Analyst Associate"
                    loading="lazy"
                    decoding="async"
                    className="h-24 w-24 shrink-0 rounded-xl bg-white p-1 object-contain sm:h-28 sm:w-28"
                  />
                  <div className="min-w-0">
                    <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-950/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-purple-200">
                      Microsoft · 2026
                    </span>
                    <h3 className="mt-2 text-sm font-bold leading-snug text-zinc-100 sm:text-base">
                      Power BI Data Analyst Associate
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">Certificação PL-300</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-zinc-300 leading-relaxed font-normal">
                  <p>
                    Minha formação em Análise de Dados pela Educadados e a certificação Microsoft PL-300 (Power BI Data Analyst) reforçam minha capacidade de transformar informação em conhecimento claro, conectando análise, modelagem e estratégia.
                  </p>
                  <p>
                    Minha trajetória integra cinco frentes: Ciência de Dados (Gran Faculdade), Engenharia da Computação (UNINTER), Matemática Aplicada e Computacional (UFS), Gestão da TI com extensão em IA (ETEP) e formação técnica em Informática (UNINTER). Essa base conecta perspectivas técnicas, computacionais, quantitativas e organizacionais.
                  </p>
                  <p>
                    Busco contribuir em diferentes desafios de Tecnologia, Computação e Dados, aplicando essa formação multidisciplinar para desenvolver soluções, interpretar informações e apoiar decisões em contextos variados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: FORMAÇÕES ACADÊMICAS (Novo Grid Aberto sem Carrossel Fechado) */}
        <section id="formacoes" className="py-24 md:py-28 border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400 mb-2">TRAJETÓRIA ACADÊMICA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
                Formações Acadêmicas<span className="text-purple-400">.</span>
              </h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
                Graduações e cursos técnicos em andamento, construindo uma sólida base interdisciplinar.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-14 md:grid-cols-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className={`bg-zinc-900/60 border border-purple-500/15 rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 md:col-span-2 ${idx === 3 ? 'md:col-start-2' : idx === 4 ? 'md:col-start-4' : ''}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/25 text-purple-300">
                        {edu.level || 'Ensino Superior'}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{edu.expectedGraduation}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-zinc-100 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-purple-300/80 font-medium mt-1">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  </div>

                  {edu.topics.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                      {edu.topics.slice(0, 3).map((topic) => (
                        <span
                          key={`${edu.id}-${topic}`}
                          className="text-[10px] px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-zinc-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: MEUS PROJETOS */}
        <section id="projetos" className="py-24 md:py-28 border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400 mb-2">PORTFÓLIO</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
                Meus Projetos<span className="text-purple-400">.</span>
              </h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
                Soluções práticas desenvolvidas com foco em manipulação de dados, análise e produto digital.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
              {projects.map((proj) => {
                const currentImgIdx = projectImageIndexes[proj.id] || 0;
                const images = proj.images || [];

                return (
                  <div
                    key={proj.id}
                    className="group bg-zinc-900/60 border border-purple-500/20 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)] transition-all duration-300"
                  >
                    <div>
                      {/* Área da Imagem com Carrossel Local */}
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-950/80 border border-zinc-800 flex items-center justify-center">
                        {images.length > 0 ? (
                          <img
                            src={images[currentImgIdx]}
                            alt={proj.title}
                            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="text-zinc-600 text-xs">Sem visualização</div>
                        )}

                        {images.length > 1 && (
                          <>
                            <button
                              onClick={() => handlePrevProjectImage(proj.id, images.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                              aria-label="Imagem Anterior"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleNextProjectImage(proj.id, images.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                              aria-label="Próxima Imagem"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                              {images.map((_, dotIdx) => (
                                <span
                                  key={dotIdx}
                                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                                    dotIdx === currentImgIdx ? 'bg-purple-400 w-3' : 'bg-white/40'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Header do Card */}
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/25 text-purple-300">
                          {proj.category}
                        </span>
                        {proj.badge && (
                          <span className="text-[10px] text-zinc-400 font-medium">
                            {proj.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-zinc-100 mt-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                        {proj.problemSolved}
                      </p>

                      {/* Destaques Técnicos Equalizados */}
                      {proj.architectureHighlights && proj.architectureHighlights.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {proj.architectureHighlights.map((arch) => (
                            <div
                              key={`${proj.id}-${arch.title}`}
                              className="bg-zinc-950/50 border border-zinc-800/70 p-2.5 rounded-xl min-h-[4.5rem] flex flex-col justify-center"
                            >
                              <span className="text-[10px] font-semibold text-purple-300 leading-tight">
                                {arch.title}
                              </span>
                              <span className="text-[10px] text-zinc-400 mt-0.5 leading-tight">
                                {arch.detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Rodapé do Card */}
                    <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col gap-4">
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.techStack.map((tech: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-purple-950/30 border border-purple-500/20 text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Ações */}
                      <div className="flex items-center gap-3">
                        {proj.liveUrl && (
                          <a
                            href={normalizeLink(proj.liveUrl)}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all flex items-center gap-1.5"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {proj.repoUrl && (
                          <a
                            href={normalizeLink(proj.repoUrl)}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-full bg-zinc-950/80 border border-zinc-700 hover:border-purple-400 text-zinc-300 hover:text-white text-xs font-medium transition-all flex items-center gap-1.5"
                          >
                            <span>Repositório</span>
                            <GitBranch className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: CERTIFICAÇÕES & CONQUISTAS (Novo Grid Aberto e Direto) */}
        <section id="certificacoes" className="py-24 md:py-28 border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400 mb-2">QUALIFICAÇÕES & CERTIFICAÇÕES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
                Certificações & Conquistas<span className="text-purple-400">.</span>
              </h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
                Credenciais práticas e acadêmicas atestando competências em Business Intelligence, Ciência de Dados e Computação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`bg-zinc-900/60 border rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 ${
                    cert.highlight
                      ? 'border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
                      : 'border-purple-500/15 hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        cert.highlight
                          ? 'bg-purple-950/80 border-purple-400 text-purple-200'
                          : 'bg-zinc-950/80 border-zinc-800 text-zinc-400'
                      }`}>
                        {cert.badge}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                        <span>{cert.hours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className={`w-5 h-5 flex-shrink-0 mt-0.5 ${cert.highlight ? 'text-purple-400' : 'text-zinc-500'}`} />
                      <div>
                        <h3 className="text-sm font-bold text-zinc-100 leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-purple-300/80 font-medium mt-1">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 7: ENTRE EM CONTATO */}
        <section id="contato" className="py-24 md:py-28 border-t border-purple-500/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-400 mb-2">FALE COMIGO</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
                Entre em Contato<span className="text-purple-400">.</span>
              </h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
                Aberto a oportunidades em Dados, BI, tecnologia e projetos que conectem visão analítica com impacto real.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-14 items-stretch">
              {/* Formulário */}
              <div className="lg:col-span-7 h-full bg-zinc-900/60 border border-purple-500/20 rounded-3xl p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Mensagem enviada com sucesso! Retornarei em breve.');
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-950/70 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">E-mail para Retorno</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-950/70 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Conte um pouco sobre a oportunidade, projeto ou conversa que deseja iniciar..."
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-950/70 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-semibold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Informações Diretas */}
              <div className="lg:col-span-5 h-full bg-zinc-900/60 border border-purple-500/20 rounded-3xl p-8 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                    <Mail className="w-4 h-4" />
                    <span>Contato Direto</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs text-zinc-300 font-mono truncate mr-2">
                      {profileInfo.contacts.email}
                    </span>
                    <button
                      onClick={copyEmail}
                      className="text-[11px] text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      {copiedEmail ? 'Copiado!' : 'COPIAR'}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={normalizeLink(profileInfo.contacts.linkedin)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-300 hover:border-purple-400/50 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <BriefcaseBusiness className="w-4 h-4 text-purple-400" />
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-[11px] text-purple-400 font-semibold">ABRIR ↗</span>
                  </a>

                  <a
                    href={normalizeLink(profileInfo.contacts.github)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-300 hover:border-purple-400/50 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <GitBranch className="w-4 h-4 text-purple-400" />
                      <span>GitHub</span>
                    </div>
                    <span className="text-[11px] text-purple-400 font-semibold">ABRIR ↗</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Disponibilidade</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                    Disponível para estágios e oportunidades iniciais em Dados, BI e Tecnologia.
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {profileInfo.contacts.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-purple-500/20 bg-zinc-950/90 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="font-bold text-sm tracking-wider text-zinc-100">
              João Guilherme<span className="text-purple-400">.</span>
            </span>
            <p className="text-xs text-zinc-400 mt-1">Ciência de Dados & Tecnologia</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={normalizeLink(profileInfo.contacts.github)}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-purple-950/40 border border-purple-500/25 text-zinc-300 hover:text-white hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="GitHub"
            >
              <GitBranch className="w-4 h-4" />
            </a>
            <a
              href={normalizeLink(profileInfo.contacts.linkedin)}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-purple-950/40 border border-purple-500/25 text-zinc-300 hover:text-white hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileInfo.contacts.email}`}
              className="p-2.5 rounded-full bg-purple-950/40 border border-purple-500/25 text-zinc-300 hover:text-white hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} João Guilherme Machado de Melo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}