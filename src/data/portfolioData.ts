import type {
  DimensionItem,
  EducationItem,
  ProfileData,
  ProjectItem,
  SkillCategory,
  TrajectoryItem,
} from '../types/portfolio'

export const profileInfo: ProfileData = {
  name: 'João Guilherme Machado de Melo',
  role: 'Profissional de Tecnologia em Formação | Foco em Ciência de Dados',
  headline: 'Dados & Análise Quantitativa apoiados por Matemática, Computação e Tecnologia',
  bio: 'Trajetória construída com foco em Ciência de Dados e resolução de problemas práticos, fundamentada no pensamento matemático quantitativo e no domínio estrutural de sistemas computacionais.',
  location: 'Sergipe, Brasil',
  availability: 'Disponível para estágios e posições iniciais em Dados e Tecnologia',
  direction: [
    'Ciência de Dados & Análise Quantitativa',
    'Matemática Aplicada & Modelagem',
    'Computação & Sistemas',
    'Tecnologia & IA aplicada',
  ],
}

export const dimensionsData: DimensionItem[] = [
  {
    id: 'dados',
    title: 'Dados & Ciência de Dados',
    pillar: 'Eixo Central de Atuação',
    courses: 'Ciência de Dados (Gran Faculdade)',
    role: 'Principal direção profissional. Aplicação direta em análise quantitativa, métodos probabilísticos, tratamento de pipelines e tomada de decisão orientada a dados.',
    highlights: ['Análise Exploratória & Estatística', 'Tratamento e Modelagem de Dados', 'Visualização de Métricas', 'Fundamentos de Machine Learning'],
  },
  {
    id: 'matematica',
    title: 'Matemática Aplicada & Computacional',
    pillar: 'Base Analítica e Quantitativa',
    courses: 'Matemática Aplicada e Computacional (UFS)',
    role: 'Desenvolvimento do raciocínio analítico abstrato, resolução formal de problemas, cálculo diferencial, álgebra linear e pensamento algorítmico rigoroso.',
    highlights: ['Modelagem Quantitativa', 'Cálculo & Álgebra Linear', 'Métodos Analíticos', 'Pensamento Algorítmico'],
  },
  {
    id: 'computacao',
    title: 'Computação & Sistemas',
    pillar: 'Base Estrutural de Tecnologia',
    courses: 'Engenharia da Computação & Técnico em Informática (UNINTER)',
    role: 'Compreensão da camada estrutural: circuitos, hardware, arquitetura de computadores, sistemas operacionais e desenvolvimento em programação de sistemas.',
    highlights: ['Arquitetura de Computadores', 'Sistemas Operacionais & Linux', 'Lógica e Estruturas de Dados', 'Redes e Infraestrutura'],
  },
  {
    id: 'gestao-ia',
    title: 'Gestão de Tecnologia & IA',
    pillar: 'Visão Organizacional e Futuro',
    courses: 'Gestão de TI + Extensão em IA (ETEP)',
    role: 'Perspectiva sobre processos corporativos de tecnologia, governança, viabilidade de projetos e o impacto da inteligência artificial nas organizações.',
    highlights: ['Processos e Governança de TI', 'Visão Organizacional', 'Aplicações Práticas de IA', 'Alinhamento Estratégico'],
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
    description: 'Foco no tratamento analítico de dados, inferência estatística e ferramentas de análise para decisão de produto e negócios.',
    topics: ['Estatística Aplicada', 'Visualização', 'Machine Learning', 'Pipelines de Dados'],
    focusAreas: ['Estatística Aplicada', 'Visualização', 'Machine Learning', 'Pipelines de Dados'],
  },
  {
    id: 'ufs-matematica',
    institution: 'Universidade Federal de Sergipe (UFS)',
    degree: 'Bacharelado em Matemática Aplicada e Computacional',
    level: 'Graduação',
    expectedGraduation: '2030',
    status: 'Em andamento',
    dimension: 'Matemática e Modelagem',
    description: 'Base teórica e analítica profunda para modelagem de cenários complexos, cálculo e métodos quantitativos.',
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
    description: 'Estudo aprofundado dos fundamentos de computação, sistemas embarcados, redes e engenharia estrutural.',
    topics: ['Arquitetura de Sistemas', 'Hardware', 'Sistemas Operacionais', 'Engenharia de Sistemas'],
  },
  {
    id: 'etep-gti',
    institution: 'ETEP',
    degree: 'Gestão da Tecnologia da Informação + Extensão em IA',
    level: 'Graduação',
    expectedGraduation: 'Dezembro de 2028',
    status: 'Em andamento',
    dimension: 'Gestão e Inteligência Artificial',
    description: 'Integração de metodologias de gerenciamento de tecnologia com aplicações contemporâneas de inteligência artificial.',
    topics: ['Governança de TI', 'Estratégia Tecnológica', 'Inteligência Artificial Aplicada'],
  },
  {
    id: 'uninter-tec',
    institution: 'UNINTER',
    degree: 'Técnico em Informática',
    level: 'Técnico',
    expectedGraduation: 'Dezembro de 2027',
    status: 'Em andamento',
    dimension: 'Prática de TI e Infraestrutura',
    description: 'Prática operacional direta em configuração de redes locais, manutenção e suporte de sistemas computacionais.',
    topics: ['Infraestrutura Local', 'Redes IP', 'Sistemas Operacionais', 'Manutenção'],
  },
]

export const projectsList: ProjectItem[] = [
  {
    id: 'life-os',
    title: 'Meu LIFE OS',
    badge: 'Aplicação Principal',
    shortDescription: 'Sistema pessoal de produtividade e acompanhamento acadêmico multidisciplinar com métricas de tempo e foco.',
    problem: 'Controlar o fluxo simultâneo de múltiplas graduações sem fragmentar o acompanhamento de disciplinas, metas e tempo de estudo.',
    solution: 'SPA local-first de alta responsividade com persistência local de dados, gráficos analíticos em tempo real e atalhos rápidos.',
    role: 'Concepção e desenvolvimento frontend integral',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts', 'Framer Motion'],
    architecture: [
      'Gerenciamento de estado global com Zustand e middleware persist',
      'Plotagem visual de tempo e produtividade com Recharts',
      'Renderização de interface rápida e sem dependência de latência de servidor',
    ],
    architectureDecisions: [
      'Gerenciamento de estado global com Zustand e middleware persist',
      'Plotagem visual de tempo e produtividade com Recharts',
      'Renderização de interface rápida e sem dependência de latência de servidor',
    ],
    features: [
      'Painel de matérias acadêmicas e prazos',
      'Cronômetro de foco / Pomodoro integrado',
      'Gráficos de dispersão e análise temporal de foco',
    ],
    learnings: [
      'Modelagem de estado complexo e síncrono no cliente com Zustand',
      'Boas práticas de UX para interfaces densas sem sobrecarga visual',
    ],
    liveUrl: 'https://meu-life-os.vercel.app/',
    repoUrl: 'https://github.com/bluejaem/Meu-LIFE-OS',
  },
  {
    id: 'govlocal',
    title: 'GovLocal App',
    badge: 'Extensão Cívica',
    shortDescription: 'Solução mobile-first desenvolvida para centralizar e agilizar o acesso a serviços públicos e contatos de emergência locais.',
    problem: 'Dificuldade do cidadão em localizar contatos úteis e órgãos de assistência comunitária de forma imediata.',
    solution: 'Catálogo cívico indexado e simplificado para consulta pública sem barreiras de autenticação.',
    role: 'Concepção e desenvolvimento frontend',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    architecture: ['Arquitetura mobile-first otimizada para baixo consumo de dados'],
    architectureDecisions: ['Arquitetura mobile-first otimizada para baixo consumo de dados'],
    features: ['Busca categorizada por órgãos e emergências', 'Design acessível para navegação rápida'],
    learnings: ['Design voltado para acessibilidade e usabilidade essencial'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'salarios-tech',
    title: 'Consulta de Salários Tech',
    badge: 'Ferramenta CLI / Python',
    shortDescription: 'Script em Python para consulta direta em terminal de parâmetros salariais e faixas de remuneração em tecnologia.',
    problem: 'Necessidade de comparar remunerações por tecnologia e nível de experiência de forma simples no terminal.',
    solution: 'Interface de linha de comando com filtros dinâmicos e saídas tabulares estruturadas.',
    role: 'Desenvolvedor backend / script',
    techStack: ['Python'],
    architecture: ['Estrutura modular de parsing e agregação tabular'],
    architectureDecisions: ['Estrutura modular de parsing e agregação tabular'],
    features: ['Filtragem por senioridade e linguagem', 'Visualização em tabelas ASCII no terminal'],
    learnings: ['Desenvolvimento de ferramentas CLI práticas e tratamento direto de dados'],
    liveUrl: null,
    repoUrl: null,
  },
]

export const trajectoryList: TrajectoryItem[] = [
  {
    id: 'cert-bi',
    year: '2026',
    title: 'Certificação em Data Analysis and Business Intelligence',
    institution: 'Gran Faculdade',
    organization: 'Gran Faculdade',
    category: 'Certificação',
    description: 'Modelagem analítica, visualização de dados e elaboração de indicadores de suporte à tomada de decisão.',
  },
  {
    id: 'cert-redes',
    year: '2026',
    title: 'Certificação em Conceitos Básicos de Redes',
    institution: 'Cisco Networking Academy',
    organization: 'Cisco Networking Academy',
    category: 'Certificação',
    description: 'Fundamentos de tráfego, endereçamento IP, comutação e protocolos de camada de rede.',
  },
  {
    id: 'cs50',
    year: '2025',
    title: 'CS50: Introduction to Computer Science',
    institution: 'Harvard University / Fundação Estudar',
    organization: 'Harvard University / Fundação Estudar',
    category: 'Certificação',
    description: 'Estruturas de dados, algoritmos fundamentais, gerenciamento de memória em C e fundamentos de computação.',
  },
  {
    id: 'python-basico',
    year: '2025',
    title: 'Linguagem Python Básico',
    institution: 'Fundação Bradesco',
    organization: 'Fundação Bradesco',
    category: 'Certificação',
    description: 'Sintaxe estruturada, coleções de dados e automação de scripts com Python.',
  },
  {
    id: 'onhb',
    year: '2024',
    title: 'Semifinalista da 16ª Olimpíada Nacional em História do Brasil (ONHB)',
    institution: 'UNICAMP',
    organization: 'UNICAMP',
    category: 'Conquista Acadêmica',
    description: 'Avanço até a 5ª fase (semifinal nacional) em olimpíada baseada na análise crítica de fontes históricas primárias e produção textual analítica.',
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
export const trajectoryHighlights = trajectoryList
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
  trajectory: trajectoryList,
  certifications: trajectoryList,
  skills: skillsData,
}

export default portfolioData
