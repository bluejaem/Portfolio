import type {
  CertificationItem,
  DimensionItem,
  EducationItem,
  ProfileData,
  ProjectItem,
  SkillCategory,
  TrajectoryItem,
  TrajectoryMilestone,
} from '../types/portfolio'

export const profileInfo: ProfileData = {
  name: 'João Guilherme Machado de Melo',
  role: 'Tecnologia em Formação | Foco em Ciência de Dados',
  headline: 'Dados & Análise Quantitativa apoiados por Matemática, Computação e Tecnologia',
  bio: 'Trajetória construída com foco em Ciência de Dados e resolução de problemas práticos, fundamentada no pensamento analítico quantitativo e na compreensão estrutural de sistemas computacionais.',
  location: 'Sergipe, Brasil',
  availability: 'Disponível para estágios e posições iniciais em Dados e Tecnologia',
}

export const dimensionsData: DimensionItem[] = [
  {
    id: 'dados',
    title: 'Dados & Ciência de Dados',
    pillar: 'Eixo Central de Atuação',
    course: 'Ciência de Dados (Gran Faculdade)',
    role: 'Principal direção profissional. Análise exploratória, métodos estatísticos, modelagem preditiva e tomada de decisão orientada a dados.',
    highlights: ['Análise Quantitativa', 'Estatística Aplicada', 'Visualização de Métricas', 'Fundamentos de Machine Learning'],
  },
  {
    id: 'matematica',
    title: 'Matemática Aplicada & Computacional',
    pillar: 'Base Analítica e Quantitativa',
    course: 'Matemática Aplicada e Computacional (UFS)',
    role: 'Rigor analítico, formulação matemática de problemas, cálculo diferencial, álgebra linear e pensamento algorítmico estruturado.',
    highlights: ['Modelagem Matemática', 'Cálculo & Álgebra Linear', 'Métodos Analíticos', 'Pensamento Algorítmico'],
  },
  {
    id: 'computacao',
    title: 'Computação & Sistemas',
    pillar: 'Base Estrutural de Tecnologia',
    course: 'Engenharia da Computação & Técnico em Informática (UNINTER)',
    role: 'Domínio da camada técnica: circuitos lógicos, hardware, arquitetura de computadores, redes e desenvolvimento de software.',
    highlights: ['Arquitetura de Computadores', 'Sistemas Operacionais & Linux', 'Redes & Infraestrutura', 'Estruturas de Dados'],
  },
  {
    id: 'gestao-ia',
    title: 'Gestão de Tecnologia & IA',
    pillar: 'Visão Organizacional e Futuro',
    course: 'Gestão de TI + Extensão em IA (ETEP)',
    role: 'Articulação entre viabilidade de processos organizacionais, governança tecnológica e o impacto prático de ferramentas de inteligência artificial.',
    highlights: ['Processos e Governança de TI', 'Engenharia de Prompt', 'Aplicações Práticas de IA', 'Visão Organizacional'],
  },
]

export const educationList: EducationItem[] = [
  {
    id: 'gran-dados',
    institution: 'Gran Faculdade',
    degree: 'Tecnólogo em Ciência de Dados',
    level: 'Graduação',
    expectedGraduation: 'Dezembro de 2028',
    status: 'Em andamento',
    dimension: 'Dados & Ciência de Dados',
    topics: ['Estatística Aplicada', 'Visualização de Dados', 'Machine Learning', 'Pipelines de Dados'],
  },
  {
    id: 'ufs-matematica',
    institution: 'Universidade Federal de Sergipe (UFS)',
    degree: 'Bacharelado em Matemática Aplicada e Computacional',
    level: 'Graduação',
    expectedGraduation: '2030',
    status: 'Em andamento',
    dimension: 'Matemática e Modelagem',
    topics: ['Cálculo Numérico', 'Álgebra Linear', 'Otimização', 'Computação Científica'],
  },
  {
    id: 'uninter-eng',
    institution: 'UNINTER',
    degree: 'Bacharelado em Engenharia da Computação',
    level: 'Graduação',
    expectedGraduation: '2031',
    status: 'Em andamento',
    dimension: 'Computação e Sistemas',
    topics: ['Arquitetura de Sistemas', 'Circuitos Elétricos', 'Sistemas Operacionais', 'Engenharia de Computação'],
  },
  {
    id: 'etep-gti',
    institution: 'ETEP',
    degree: 'Gestão da Tecnologia da Informação + Extensão em IA',
    level: 'Graduação',
    expectedGraduation: 'Dezembro de 2028',
    status: 'Em andamento',
    dimension: 'Gestão e Inteligência Artificial',
    topics: ['Governança de TI', 'Estratégia de Negócios', 'Inteligência Artificial Aplicada'],
  },
  {
    id: 'uninter-tec',
    institution: 'UNINTER',
    degree: 'Técnico em Informática',
    level: 'Técnico',
    expectedGraduation: 'Dezembro de 2027',
    status: 'Em andamento',
    dimension: 'Infraestrutura e Suporte',
    topics: ['Redes de Computadores', 'Hardware & Software', 'Sistemas Operacionais', 'Infraestrutura'],
  },
]

export const projectsList: ProjectItem[] = [
  {
    id: 'life-os',
    title: 'Meu LIFE OS',
    badge: 'Aplicação Principal',
    shortDescription: 'Sistema pessoal de produtividade e gestão acadêmica multidisciplinar com métricas de tempo e acompanhamento analítico.',
    problem: 'Controlar a rotina de múltiplos cursos simultâneos e horários sem dispersar metas e prazos.',
    solution: 'SPA local-first de alta responsividade com persistência local de dados e gráficos analíticos em tempo real.',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts', 'Framer Motion'],
    architecture: [
      'Gestão de estado global com Zustand e middleware persist em localStorage',
      'Plotagem vetorial de métricas com Recharts',
      'Desacoplamento e renderização fluida sem latência de rede',
    ],
    features: ['Painel de controle acadêmico por disciplinas', 'Temporizador Pomodoro integrado ao fluxo diário', 'Gráficos de dispersão e análise temporal de foco'],
    liveUrl: '[https://meu-life-os.vercel.app/](https://meu-life-os.vercel.app/)',
    repoUrl: '[https://github.com/bluejaem/Meu-LIFE-OS](https://github.com/bluejaem/Meu-LIFE-OS)',
  },
  {
    id: 'govlocal',
    title: 'GovLocal App',
    badge: 'Extensão Cívica',
    shortDescription: 'Aplicação web mobile-first voltada à aproximação da cidadania digital e consulta ágil de serviços públicos essenciais.',
    problem: 'Dificuldade de encontrar contatos rápidos de órgãos essenciais e emergências locais.',
    solution: 'Interface rápida e indexada para busca categorizada de suporte cívico.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    architecture: ['Mobile-first com foco em carregamento prioritário de texto'],
    features: ['Catálogo de serviços públicos', 'Interface direta sem necessidade de cadastro'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'salarios-tech',
    title: 'Consulta de Salários Tech',
    badge: 'CLI / Dados',
    shortDescription: 'Ferramenta de linha de comando em Python para filtragem e visualização de parâmetros salariais no mercado técnico brasileiro.',
    problem: 'Necessidade de comparar remunerações por tecnologia de forma simples no terminal.',
    solution: 'CLI em Python com filtros dinâmicos e saídas tabulares estruturadas.',
    techStack: ['Python'],
    architecture: ['Parsing modular de dados e formatação em terminal puro'],
    features: ['Filtros por tecnologia e senioridade', 'Tabelas comparativas via terminal'],
    liveUrl: null,
    repoUrl: null,
  },
]

export const certificationsList: CertificationItem[] = [
  { id: '1', title: 'Análise de Dados e Inteligência de Negócios', issuer: 'Faculdade Unyleya / Cursos Livres', year: '2026', hours: '30h', category: 'Dados & IA' },
  { id: '2', title: 'Engenharia de Prompt', issuer: 'Faculdade Unyleya / Cursos Livres', year: '2026', hours: '30h', category: 'Dados & IA' },
  { id: '3', title: 'Inteligência Artificial na Prática: Domine as Ferramentas', issuer: 'Faculdade Unyleya / Cursos Livres', year: '2026', hours: '30h', category: 'Dados & IA' },
  { id: '4', title: 'Transformers em Ação - A Nova Era dos Agentes Conversacionais (LLMs)', issuer: 'UNINTER (Extensão)', year: '2026', hours: '1h', category: 'Dados & IA' },
  { id: '5', title: 'Fundamentos de IA para Gestão, Liderança e Estratégia', issuer: 'Faculdade Unyleya / Cursos Livres', year: '2026', hours: '1h', category: 'Dados & IA' },
  { id: '6', title: 'Conceitos Básicos de Redes', issuer: 'Cisco Networking Academy', year: '2026', category: 'Computação & Redes' },
  { id: '7', title: 'O Funcionamento dos Circuitos Elétricos', issuer: 'UNINTER (Extensão)', year: '2026', hours: '1h', category: 'Computação & Redes' },
  { id: '8', title: 'Fundamentos de TI: Hardware e Software', issuer: 'Fundação Bradesco', year: '2026', hours: '7h', category: 'Computação & Redes' },
  { id: '9', title: 'Ciência da Computação de Harvard no Brasil (CS50)', issuer: 'Fundação Estudar / Harvard', year: '2025', hours: '70h', category: 'Programação' },
  { id: '10', title: 'Linguagem de Programação Python - Básico', issuer: 'Fundação Bradesco', year: '2025', hours: '18h', category: 'Programação' },
  { id: '11', title: 'Crie um Site Simples usando HTML, CSS e JavaScript', issuer: 'Fundação Bradesco', year: '2025', hours: '2h', category: 'Programação' },
  { id: '12', title: 'Língua Inglesa NEW UBEST - Nível 2 Intermediate', issuer: 'UNINTER (Extensão Universitária)', year: '2026', hours: '42h', category: 'Idiomas & Gestão' },
  { id: '13', title: 'II Semana de Línguas UNINTER', issuer: 'UNINTER (Extensão)', year: '2026', hours: '10h', category: 'Idiomas & Gestão' },
]

export const trajectoryMilestones: TrajectoryMilestone[] = [
  {
    year: '2026',
    title: 'Aprofundamento em Dados, IA Aplicada e Redes',
    organization: 'Gran Faculdade & Cisco & UNINTER',
    badge: 'Certificações Técnicas',
    description: 'Conclusão de certificações em Análise de Dados, Engenharia de Prompt, Redes Cisco e arquitetura de LLMs.',
  },
  {
    year: '2025',
    title: 'Fundamentação em Computação e Algoritmos',
    organization: 'Harvard CS50 / Fundação Estudar',
    badge: 'Computação',
    description: 'Formação rigorosa de 70h em algoritmos, estruturas de dados fundamentais e linguagens de programação.',
  },
  {
    year: '2024',
    title: 'Semifinalista da 16ª Olimpíada Nacional em História do Brasil (ONHB)',
    organization: 'UNICAMP',
    badge: 'Destaque Acadêmico Nacional',
    description: 'Classificação até a Fase 6 (semifinal da competição nacional), com análise aprofundada de documentos históricos primários e elaboração crítica interdisciplinar.',
  },
]

export const contactsData = {
  github: '[https://github.com/bluejaem](https://github.com/bluejaem)',
  email: 'machadodemelojoaoguilherme@gmail.com',
  linkedin: '[https://www.linkedin.com/in/joão-guilherme-machado-de-melo-21639a265/](https://www.linkedin.com/in/joão-guilherme-machado-de-melo-21639a265/)',
}

export const profile = profileInfo
export const profileData = profileInfo
export const socialLinks = contactsData
export const educationData = educationList
export const educationPillars = dimensionsData
export const projects = projectsList
export const projectsData = projectsList
export const projectData = projectsList
export const trajectoryList: TrajectoryItem[] = trajectoryMilestones as TrajectoryItem[]
export const trajectoryHighlights = trajectoryMilestones
export const certifications = certificationsList
export const certificationsData = certificationsList
export const skillsData: SkillCategory[] = [
  {
    category: 'Linguagens de Programação',
    description: 'Linguagens utilizadas em projetos, algoritmos e cursos de base.',
    items: ['Python', 'TypeScript', 'JavaScript', 'C', 'C#'],
  },
  {
    category: 'Frontend & Interfaces',
    description: 'Desenvolvimento de interfaces modernas, responsivas e reativas.',
    items: ['React', 'Tailwind CSS', 'Vite', 'Zustand', 'Lucide React', 'HTML5/CSS3'],
  },
  {
    category: 'Dados & Fundamentos Quantitativos',
    description: 'Ferramentas analíticas e conceitos aplicados.',
    items: ['Análise Quantitativa', 'Estatística Aplicada', 'Visualização de Dados', 'Recharts'],
  },
  {
    category: 'Ambiente & Sistemas',
    description: 'Ferramentas do fluxo diário de desenvolvimento.',
    items: ['Linux', 'Git', 'GitHub', 'VS Code', 'Terminal'],
  },
]

export const portfolioData = {
  profile: profileInfo,
  socialLinks: contactsData,
  education: educationList,
  pillars: dimensionsData,
  projects: projectsList,
  trajectory: trajectoryMilestones,
  certifications: certificationsList,
  skills: skillsData,
}

export default portfolioData
