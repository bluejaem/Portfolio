import type {
  Certification,
  Education,
  Profile,
  Project,
  Skill,
  SocialLink,
} from '../types/portfolio'

export const profile: Profile = {
  name: 'João Guilherme Machado de Melo',
  title: 'Graduando em Matemática Aplicada e Computacional, Engenharia da Computação e Ciência de Dados',
  location: 'Sergipe, Brasil',
  email: 'joaogmelo.dev@gmail.com',
  phone: '+55 (79) 00000-0000',
  summary:
    'Foco no desenvolvimento de software e soluções com base matemática, computacional e em dados. Interesse constante por arquiteturas limpas, sistemas e algoritmos.',
  availability: 'Disponível para oportunidades e colaborações',
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/bluejaem', icon: 'github' },
  { label: 'Email', href: 'mailto:joaogmelo.dev@gmail.com', icon: 'mail' },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'Linguagens', level: 'Avançado' },
  { name: 'TypeScript', category: 'Linguagens', level: 'Avançado' },
  { name: 'JavaScript', category: 'Linguagens', level: 'Avançado' },
  { name: 'C', category: 'Linguagens', level: 'Intermediário' },
  { name: 'C#', category: 'Linguagens', level: 'Intermediário' },
  { name: 'React', category: 'Frontend & Ecossistema', level: 'Avançado' },
  { name: 'Tailwind CSS', category: 'Frontend & Ecossistema', level: 'Avançado' },
  { name: 'Vite', category: 'Frontend & Ecossistema', level: 'Avançado' },
  { name: 'Zustand', category: 'Frontend & Ecossistema', level: 'Intermediário' },
  { name: 'HTML/CSS', category: 'Frontend & Ecossistema', level: 'Avançado' },
  { name: 'Linux (Mint, Ubuntu)', category: 'Sistemas & Ferramentas', level: 'Avançado' },
  { name: 'Git', category: 'Sistemas & Ferramentas', level: 'Avançado' },
  { name: 'GitHub', category: 'Sistemas & Ferramentas', level: 'Avançado' },
  { name: 'VS Code', category: 'Sistemas & Ferramentas', level: 'Avançado' },
]

export const projects: Project[] = [
  {
    name: 'Meu LIFE OS',
    summary: 'Dashboard web para gestão de rotina acadêmica e pessoal.',
    description:
      'Dashboard web para organização pessoal e acadêmica, com foco em rotina, produtividade e acompanhamento de objetivos.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase'],
    featured: true,
    link: '#',
    repository: '#',
  },
  {
    name: 'GovLocal App',
    summary: 'Proposta de extensão cívica para acesso ágil a serviços e emergências públicas.',
    description:
      'Aplicação conceitual voltada para facilitar o acesso a serviços públicos, emergências e informações locais com interface centrada no usuário.',
    tags: ['TypeScript', 'React'],
    link: '#',
    repository: '#',
  },
  {
    name: 'Consulta de Salários Tech Brasil',
    summary: 'CLI em Python para estimativa e análise de faixas salariais do mercado tecnológico brasileiro.',
    description:
      'Ferramenta em Python para consulta e análise de faixas salariais na tecnologia brasileira, com foco em visualização e comparação de mercado.',
    tags: ['Python'],
    link: '#',
    repository: '#',
  },
  {
    name: 'Véu Umbral',
    summary: 'Especificação e projeto conceitual de jogo de sobrevivência e mecânicas de furtividade.',
    description:
      'Conceito de jogo com foco em sobrevivência, furtividade e criação de mecânicas de narrativa e immersion.',
    tags: ['C#'],
    link: '#',
    repository: '#',
  },
]

export const education: Education[] = [
  {
    institution: 'UFS',
    degree: 'Bacharelado em Matemática Aplicada e Computacional',
    period: 'Em andamento',
    description: 'Formação acadêmica com foco em modelagem matemática, computação e análise quantitativa aplicada.',
  },
  {
    institution: 'UNINTER',
    degree: 'Bacharelado em Engenharia da Computação',
    period: 'Em andamento',
    description: 'Desenvolvimento de base em engenharia de software, sistemas computacionais e arquitetura de sistemas.',
  },
  {
    institution: 'Gran Faculdade',
    degree: 'Tecnólogo em Ciência de Dados',
    period: 'Em andamento',
    description: 'Estudo de dados, análise, visualização, estatística aplicada e tomada de decisão orientada por dados.',
  },
  {
    institution: 'UNINTER',
    degree: 'Técnico em Informática',
    period: 'Em andamento',
    description: 'Formação técnica em infraestrutura, suporte e fundamentos de informática aplicada.',
  },
]

export const certifications: Certification[] = [
  {
    name: 'CS50: Introduction to Computer Science',
    issuer: 'Harvard / Fundação Estudar',
    year: '2025',
    credential: 'Curso concluído',
  },
  {
    name: 'Conceitos Básicos de Redes',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    credential: 'Certificação concluída',
  },
  {
    name: 'Data Analysis and Business Intelligence',
    issuer: 'Gran Faculdade',
    year: '2026',
    credential: 'Curso em andamento',
  },
  {
    name: 'Linguagem Python Básico',
    issuer: 'Fundação Bradesco',
    year: '2025',
    credential: 'Curso concluído',
  },
]

export const portfolioData = {
  profile,
  socialLinks,
  skills,
  projects,
  education,
  certifications,
}

export default portfolioData
