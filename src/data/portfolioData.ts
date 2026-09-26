import type {
  EducationItem,
  PillarArticulation,
  Profile,
  ProjectItem,
  SkillCategory,
  SocialLinks,
  TrajectoryHighlight,
} from '../types/portfolio'

export const profileData: Profile = {
  name: 'João Guilherme Machado de Melo',
  role: 'Desenvolvedor & Estudante de Computação e Dados',
  headline: 'Dados + Matemática + Computação + Engenharia de Software',
  bio: 'Estudante em formação interdisciplinar unindo fundamentos matemáticos, engenharia de sistemas e análise quantitativa de dados. Foco no desenvolvimento de software estruturado, orientado a soluções reais e arquiteturas sustentáveis.',
  location: 'Sergipe, Brasil',
  availability: 'Disponível para estágios e posições iniciais em Dados e Tecnologia',
  direction: [
    'Ciência de Dados & Análise Quantitativa',
    'Engenharia de Software',
    'Desenvolvimento Frontend (React / TypeScript)',
    'Automação e Scripts em Python',
    'Sistemas & Ambiente Linux',
  ],
}

export const socialLinks: SocialLinks = {
  github: '[https://github.com/bluejaem](https://github.com/bluejaem)',
  email: 'machadodemelojoaoguilherme@gmail.com',
  linkedin: '[https://www.linkedin.com/in/joão-guilherme-machado-de-melo-21639a265/](https://www.linkedin.com/in/joão-guilherme-machado-de-melo-21639a265/)',
}

export const educationData: EducationItem[] = [
  {
    id: 'matematica-ufs',
    institution: 'Universidade Federal de Sergipe (UFS)',
    degree: 'Bacharelado em Matemática Aplicada e Computacional',
    level: 'Graduação',
    status: 'Em andamento',
    expectedGraduation: '2030',
    focusAreas: ['Matemática Aplicada', 'Modelagem Matemática', 'Cálculo', 'Álgebra Linear', 'Estatística', 'Pensamento Algorítmico', 'Computação Aplicada'],
    description: 'Construção de base analítica sólida e modelagem quantitativa voltada à formulação e resolução de problemas matemáticos e computacionais.',
  },
  {
    id: 'ciencia-de-dados-gran',
    institution: 'Gran Faculdade',
    degree: 'Tecnólogo em Ciência de Dados',
    level: 'Graduação',
    status: 'Em andamento',
    expectedGraduation: 'Dezembro de 2028',
    focusAreas: ['Análise de Dados', 'Estatística Aplicada', 'Tratamento de Dados', 'Visualização', 'Machine Learning', 'Tomada de Decisão em Dados'],
    description: 'Eixo central de aplicação prática em dados, focado em pipelines analíticos, métodos probabilísticos e modelagem preditiva.',
  },
  {
    id: 'engenharia-computacao-uninter',
    institution: 'UNINTER',
    degree: 'Bacharelado em Engenharia da Computação',
    level: 'Graduação',
    status: 'Em andamento',
    expectedGraduation: '2031',
    focusAreas: ['Sistemas Computacionais', 'Arquitetura de Computadores', 'Sistemas Operacionais', 'Engenharia de Software', 'Hardware'],
    description: 'Estudo da arquitetura, ciclo de vida de software e fundamentos estruturais de sistemas de computação.',
  },
  {
    id: 'gestao-ti-etep',
    institution: 'ETEP',
    degree: 'Gestão da Tecnologia da Informação + Extensão em Inteligência Artificial',
    level: 'Graduação',
    status: 'Em andamento',
    expectedGraduation: 'Dezembro de 2028',
    focusAreas: ['Gestão de Tecnologia', 'Processos e Governança de TI', 'Visão Organizacional', 'Aplicações de IA'],
    description: 'Complementação estratégica que integra processos de gestão, fluxos organizacionais e impacto prático de IA.',
  },
  {
    id: 'tecnico-informatica-uninter',
    institution: 'UNINTER',
    degree: 'Técnico em Informática',
    level: 'Técnico',
    status: 'Em andamento',
    expectedGraduation: 'Dezembro de 2027',
    focusAreas: ['Fundamentos Práticos de TI', 'Redes de Computadores', 'Infraestrutura', 'Sistemas Operacionais'],
    description: 'Base prática e operacional em computação, suporte e entendimento direto de infraestrutura tecnológica.',
  },
]

export const educationPillars: PillarArticulation[] = [
  { area: 'Matemática', course: 'Matemática Aplicada (UFS)', role: 'Fundamentos quantitativos, abstração algorítmica e modelagem rigorosa de problemas.' },
  { area: 'Computação & Sistemas', course: 'Engenharia da Computação (UNINTER)', role: 'Entendimento da estrutura de sistemas operacionais, hardware e engenharia de software.' },
  { area: 'Dados & Inferência', course: 'Ciência de Dados (Gran Faculdade)', role: 'Pipelines de análise, estatística aplicada e modelagem para tomada de decisão.' },
  { area: 'Processos & IA', course: 'Gestão de TI + Extensão em IA (ETEP)', role: 'Perspectiva organizacional, governança tecnológica e aplicações de inteligência artificial.' },
  { area: 'Fundamentos Práticos', course: 'Técnico em Informática (UNINTER)', role: 'Prática contínua de suporte, redes e infraestrutura local de computadores.' },
]

export const projectsData: ProjectItem[] = [
  {
    id: 'meu-life-os',
    title: 'Meu LIFE OS',
    badge: 'Destaque Principal',
    shortDescription: 'Sistema web pessoal de produtividade e centralização acadêmica com gestão de estado local e visualização analítica.',
    problem: 'Administrar uma rotina acadêmica multidisciplinar com múltiplos cursos simultâneos, prazos assíncronos e projetos sem dispersão.',
    solution: 'Single Page Application com persistência local, dashboard de métricas temporais e ferramentas de foco integradas.',
    role: 'Concepção e desenvolvimento frontend integral',
    techStack: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Zustand Persist', 'Recharts', 'Framer Motion', 'Lucide React', 'date-fns'],
    architectureDecisions: [
      'Gestão de estado global com Zustand e middleware persist em localStorage para navegação sem latência de rede.',
      'Gráficos vetoriais interativos implementados com Recharts para acompanhamento de foco.',
      'Otimizações de renderização com useTransition e componentes modulares desacoplados.',
    ],
    features: [
      'Controle de disciplinas acadêmicas e cronogramas de estudo',
      'Módulo de foco com temporizador Pomodoro',
      'Dashboard analítico com histórico de produtividade',
      'Atalhos rápidos e paleta de comandos interativa',
    ],
    learnings: [
      'Modelagem de estado complexo e síncrono no cliente com Zustand',
      'Boas práticas de UX para interfaces densas sem sobrecarga visual',
    ],
    liveUrl: 'https://meu-life-os.vercel.app/',
    repoUrl: 'https://github.com/bluejaem/Meu-LIFE-OS',
  },
  {
    id: 'govlocal-app',
    title: 'GovLocal App',
    badge: 'Cívico / Extensão',
    shortDescription: 'Aplicação web mobile-first voltada ao acesso ágil e desburocratizado a serviços públicos e emergências locais.',
    problem: 'Dispersão de canais e dificuldade no acesso rápido a contatos de emergência e serviços comunitários municipais.',
    solution: 'Interface rápida e indexada para localização imediata de serviços de suporte público e canais cívicos.',
    role: 'Concepção e desenvolvimento frontend',
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    architectureDecisions: [
      'Arquitetura mobile-first pensada para conexões instáveis e carregamento prioritário de texto.',
      'Separação modular por categorias de atendimento comunitário.',
    ],
    features: [
      'Catálogo categorizado de contatos e utilidades públicas',
      'Navegação direta sem necessidade de autenticação',
    ],
    learnings: ['Design voltado para acessibilidade e usabilidade essencial'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'consulta-salarios-tech',
    title: 'Consulta de Salários Tech Brasil',
    badge: 'CLI / Dados',
    shortDescription: 'Ferramenta de linha de comando em Python para exploração e análise de médias salariais na área de tecnologia.',
    problem: 'Necessidade de consulta direta no terminal para conferência de parâmetros de remuneração de mercado sem formulários extensos.',
    solution: 'Script CLI modular que processa dados e apresenta tabelas comparativas formatadas por tecnologia e senioridade.',
    role: 'Desenvolvedor backend / script',
    techStack: ['Python'],
    architectureDecisions: [
      'Funções puras de processamento e agregação de dados.',
      'Saída tabular formatada em terminal.',
    ],
    features: [
      'Filtro salarial por tecnologia e nível de experiência',
      'Comparativo resumido para consulta rápida via terminal',
    ],
    learnings: ['Desenvolvimento de ferramentas CLI práticas e tratamento direto de dados'],
    liveUrl: null,
    repoUrl: null,
  },
]

export const trajectoryHighlights: TrajectoryHighlight[] = [
  {
    id: 'onhb-semifinal',
    year: '2026',
    title: 'Semifinalista da 16ª Olimpíada Nacional em História do Brasil (ONHB)',
    category: 'Competição Acadêmica',
    organization: 'UNICAMP',
    description: 'Classificação até a Fase 5 (semifinal nacional) em olimpíada científica competitiva baseada em análise rigorosa de fontes históricas primárias, pesquisa documental e argumentação crítica.',
  },
  {
    id: 'cert-bi-gran',
    year: '2026',
    title: 'Certificação em Data Analysis and Business Intelligence',
    category: 'Certificação',
    organization: 'Gran Faculdade',
    description: 'Análise descritiva, modelagem de dados e formulação de relatórios e indicadores analíticos.',
  },
  {
    id: 'cert-redes-cisco',
    year: '2026',
    title: 'Certificação Conceitos Básicos de Redes',
    category: 'Certificação',
    organization: 'Cisco Networking Academy',
    description: 'Fundamentos de infraestrutura, topologias, protocolos de comunicação e arquitetura IP.',
  },
  {
    id: 'cert-cs50-harvard',
    year: '2025',
    title: 'CS50: Introduction to Computer Science',
    category: 'Certificação',
    organization: 'Harvard University / Fundação Estudar',
    description: 'Fundamentos de ciência da computação, estruturas de dados, algoritmos e introdução ao desenvolvimento de software.',
  },
  {
    id: 'cert-python-bradesco',
    year: '2025',
    title: 'Linguagem Python Básico',
    category: 'Certificação',
    organization: 'Fundação Bradesco',
    description: 'Conceitos básicos de programação, manipulação de arquivos e estruturas de dados essenciais.',
  },
]

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
  profile: profileData,
  socialLinks,
  education: educationData,
  pillars: educationPillars,
  projects: projectsData,
  trajectory: trajectoryHighlights,
  certifications: trajectoryHighlights,
  skills: skillsData,
}

export default portfolioData
