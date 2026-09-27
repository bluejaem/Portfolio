import type {
  CertificationItem,
  DimensionItem,
  EducationItem,
  GeneralCertificate,
  HighlightCertificate,
  ProfileData,
  ProjectItem,
  SkillCategory,
  TrajectoryItem,
  TrajectoryMilestone,
} from '../types/portfolio'

export const profileInfo: ProfileData = {
  name: 'João Guilherme Machado de Melo',
  photoUrl: '/profile.jpg',
  role: 'Tecnologia em Formação | Foco em Ciência de Dados',
  headline: 'Dados & Análise Quantitativa apoiados por Matemática, Computação e Tecnologia',
  bio: 'Trajetória construída com foco em Ciência de Dados e resolução de problemas práticos, fundamentada no pensamento analítico quantitativo e na compreensão estrutural de sistemas computacionais.',
  location: 'Sergipe, Brasil',
  availability: 'Disponível para estágios e posições iniciais em Dados e Tecnologia',
  github: '[https://github.com/bluejaem](https://github.com/bluejaem)',
  email: 'machadodemelojoaoguilherme@gmail.com',
  linkedin: '[https://www.linkedin.com/in/joão-guilherme-machado-de-melo-21639a265/](https://www.linkedin.com/in/joão-guilherme-machado-de-melo-21639a265/)',
}

export const dimensionsData: DimensionItem[] = [
  {
    id: 'dados',
    title: 'Ciência de Dados',
    pillar: 'Eixo Central de Atuação',
    institution: 'Gran Faculdade',
    course: '',
    role: 'Imersão em estatística aplicada, análise quantitativa, modelagem preditiva, pipelines de manipulação e exploração de dados para geração de inteligência de produto e suporte a decisões de negócio.',
    highlights: ['Estatística Aplicada', 'Visualização de Dados', 'Machine Learning', 'Data Wrangling', 'Pipelines de Dados'],
  },
  {
    id: 'matematica',
    title: 'Matemática Aplicada e Computacional',
    pillar: 'Base Analítica, Rigor Quantitativo e Modelagem Formal',
    institution: 'Universidade Federal de Sergipe',
    course: '',
    role: 'Formação em cálculo diferencial e integral, álgebra linear computacional, otimização e métodos numéricos, fornecendo o rigor matemático para abstração algorítmica e análise quantitativa complexa.',
    highlights: ['Cálculo Numérico', 'Álgebra Linear', 'Otimização', 'Modelagem Matemática', 'Computação Científica'],
  },
  {
    id: 'computacao',
    title: 'Engenharia da Computação',
    pillar: 'Arquitetura de Sistemas, Hardware e Engenharia de Computação',
    institution: 'Centro Universitário Internacional',
    course: '',
    role: 'Fundamentação estrutural de computação: organização de circuitos elétricos e digitais, arquitetura de microprocessadores, sistemas operacionais, redes e programação de baixo e alto nível.',
    highlights: ['Arquitetura de Computadores', 'Sistemas Operacionais', 'Circuitos Elétricos', 'Redes & Hardware', 'Sistemas Embarcados'],
  },
  {
    id: 'gestao-ia',
    title: 'Gestão da Tecnologia da Informação',
    pillar: 'Governança Tecnológica, Processos e Inteligência Artificial Aplicada',
    institution: 'Centro Universitário ETEP',
    course: '',
    role: 'Alinhamento entre estratégia de negócios, governança corporativa de TI, engenharia de prompt e viabilidade de implementação prática de ferramentas de inteligência artificial nas organizações.',
    highlights: ['Governança de TI', 'Engenharia de Prompt', 'Aplicações Práticas de IA', 'Gestão de Processos', 'Estratégia Tecnológica'],
  },
  {
    id: 'tecnico',
    title: 'Técnico em Informática',
    pillar: 'Base Operacional de TI, Infraestrutura e Prática Técnica',
    institution: 'Centro Universitário Internacional',
    course: '',
    role: 'Competência prática e direta em configuração e diagnóstico de redes locais, suporte técnico a computadores, instalação e administração de sistemas operacionais (Linux/Windows) e infraestrutura de hardware.',
    highlights: ['Redes de Computadores', 'Hardware & Manutenção', 'Sistemas Operacionais & Linux', 'Suporte & Infraestrutura'],
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
    id: 'meu-life-os',
    title: 'Meu LIFE OS',
    category: 'Produtividade & Gestão Acadêmica',
    badge: 'Projeto Principal',
    shortDescription: 'Sistema pessoal de produtividade e gestão acadêmica multidisciplinar com métricas de tempo e foco.',
    problem: 'Controlar a rotina de múltiplos cursos simultâneos sem perder o foco em prazos, metas e presença de atenção.',
    role: 'Desenvolvimento do produto, estrutura do fluxo e análise contínua de produtividade.',
    solution: 'Single Page Application local-first de alta responsividade construída com persistência de dados no cliente e análise de métricas visuais.',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts', 'Framer Motion'],
    architecture: ['Persistência local em cliente para manter o ambiente funcional sem dependência de rede', 'Visualização analítica de foco e produtividade em gráficos interativos', 'Arquitetura modular para evolução contínua do sistema'],
    architectureDecisions: ['Priorizar fluidez e baixa latência no uso pessoal diário.', 'Estruturar dados de rotina para visualização imediata e análise prática.'],
    features: ['Painel de atividades acadêmicas por disciplina', 'Timer de foco e organização de rotina', 'Métricas de produtividade e acompanhamento de tempo'],
    learnings: ['A clareza operacional impacta diretamente a execução de múltiplas demandas.', 'Sistemas pessoais ganham muito com persistência local e métricas acessíveis.'],
    liveUrl: '[https://meu-life-os.vercel.app/](https://meu-life-os.vercel.app/)',
    repoUrl: '[https://github.com/bluejaem/Meu-LIFE-OS](https://github.com/bluejaem/Meu-LIFE-OS)',
    imageUrl: '',
  },
  {
    id: 'govlocal-app',
    title: 'GovLocal App',
    category: 'Cívico & Serviços Públicos',
    badge: 'Extensão Universitária',
    shortDescription: 'Aplicação web mobile-first voltada ao acesso ágil e desburocratizado a serviços públicos essenciais e contatos de emergência locais.',
    problem: 'A dificuldade de localizar rapidamente serviços públicos relevantes em momentos de urgência ou necessidade prática.',
    role: 'Estruturação da interface e organização de informações para consulta simples.',
    solution: 'Catálogo cívico indexado para consulta pública imediata e sem barreiras de autenticação.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    architecture: ['Interface mobile-first com foco em velocidade de leitura', 'Organização por categorias de utilidade pública', 'Consulta direta, sem necessidade de cadastro'],
    architectureDecisions: ['Reduzir ruído visual e priorizar acessibilidade informacional.', 'Estruturar a navegação para resposta rápida em contexto real.'],
    features: ['Catálogo de serviços e contatos', 'Consulta de emergência e suporte local', 'Acesso simples e direto sem cadastro'],
    learnings: ['A informação pública melhorada exige clareza e priorização funcional.', 'Interfaces cívicas precisam ser enxutas e confiáveis.'],
    liveUrl: null,
    repoUrl: '[https://github.com/bluejaem/GovLocalApp](https://github.com/bluejaem/GovLocalApp)',
    imageUrl: '',
  },
  {
    id: 'consulta-salarios',
    title: 'Consulta de Salários Tech Brasil',
    category: 'CLI & Dados',
    badge: 'Ferramenta CLI / Python',
    shortDescription: 'Ferramenta em linha de comando (CLI) em Python para exploração e análise de parâmetros salariais no mercado tecnológico brasileiro.',
    problem: 'Comparar rapidamente remuneração por linguagem e senioridade sem depender de ferramentas pesadas ou serviços externos.',
    role: 'Construção da camada lógica de análise e filtragem dos dados.',
    solution: 'Processamento e agregação modular de dados via terminal com saídas tabulares estruturadas por linguagem e senioridade.',
    techStack: ['Python', 'Parsing de Dados'],
    architecture: ['Leitura e processamento modular de dados em Python', 'Saída tabular final para comparação direta', 'Filtros por tecnologia e faixa de experiência'],
    architectureDecisions: ['Priorizar clareza terminal e legibilidade dos resultados.', 'Manter a ferramenta leve e de execução direta no ambiente local.'],
    features: ['Consulta por tecnologia', 'Comparação por senioridade', 'Saída tabular para análise rápida'],
    learnings: ['Dados bem organizados geram análise mais confiável e útil.', 'Simplicidade de interface pode aumentar muito a adoção.'],
    liveUrl: null,
    repoUrl: '[https://github.com/bluejaem/Projeto-Salarios-Tech-Brasil](https://github.com/bluejaem/Projeto-Salarios-Tech-Brasil)',
    imageUrl: '',
  },
  {
    id: 'calculadora-imc',
    title: 'Calculadora de IMC Interativa',
    category: 'Aplicação Web',
    badge: 'Web Interativa',
    shortDescription: 'Aplicação web interactiva para cálculo instantâneo e classificação de faixas de índice de massa corporal.',
    problem: 'Oferecer uma avaliação simples e visual de saúde corporal com retorno rápido e fácil de interpretar.',
    role: 'Interface interativa e lógica de cálculo do índice de massa corporal.',
    solution: 'Interface limpa com validação dinâmica de entradas numéricas, manipulação direta de DOM e feedback visual imediato.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    architecture: ['Formulário dinâmico com validação de entrada', 'Cálculo em tempo real com resposta visual', 'Feedback imediato por faixa de classificação'],
    architectureDecisions: ['Simplificar a experiência para evitar fricção de uso.', 'Dar retorno visual claro para facilitar a interpretação do resultado.'],
    features: ['Input de peso e altura', 'Cálculo em tempo real', 'Classificação visual por faixa de IMC'],
    learnings: ['A clareza de feedback visual é tão importante quanto o cálculo em si.', 'Interfaces simples e acessíveis ajudam na compreensão de indicadores de saúde.'],
    liveUrl: '[https://bluejaem.github.io/Calculadora-IMC/](https://bluejaem.github.io/Calculadora-IMC/)',
    repoUrl: '[https://github.com/bluejaem/Calculadora-IMC](https://github.com/bluejaem/Calculadora-IMC)',
    imageUrl: '',
  },
]

export const highlightCertificates: HighlightCertificate[] = [
  {
    id: 'cs50-harvard',
    title: 'Ciência da Computação de Harvard no Brasil (CS50)',
    issuer: 'Harvard University / Fundação Estudar',
    year: '2025',
    hours: '70h',
    badge: 'Fundação Computacional Rigorosa',
    description: 'Imersão em algoritmos, complexidade assintótica, alocação dinâmica de memória em C, estruturas de dados e desenvolvimento de software.',
  },
  {
    id: 'onhb-unicamp',
    title: 'Semifinalista da 16ª Olimpíada Nacional em História do Brasil (ONHB)',
    issuer: 'UNICAMP',
    year: '2024',
    hours: '48h',
    badge: 'Destaque Acadêmico Nacional',
    description: 'Avanço até a Fase 6 (semifinal nacional) com análise crítica e metodológica de fontes históricas primárias, pesquisa documental e produção textual interdisciplinar.',
  },
  {
    id: 'english-ubest',
    title: 'Língua Inglesa NEW UBEST - Intermediate (Nível 2)',
    issuer: 'UNINTER',
    year: '2026',
    hours: '42h',
    badge: 'Proficiência em Idiomas',
    description: 'Desenvolvimento e consolidação de habilidades de comunicação oral, leitura técnica e redação em língua inglesa em nível intermediário.',
  },
  {
    id: 'qualif-callcenter',
    title: 'Qualificação Profissional para Call Center e Atendimento Técnico',
    issuer: 'Desenvolve Já',
    year: '2025',
    hours: '112h',
    badge: 'Comunicação & Resolução Técnica',
    description: 'Capacitação prática em comunicação assertiva, resolução ágil de incidentes, relacionamento interpessoal e operação sob métricas de atendimento.',
  },
]

export const allGeneralCertificates: GeneralCertificate[] = [
  {
    id: 'cert-dados-bi',
    title: 'Análise de Dados e Inteligência de Negócios',
    issuer: 'Gran Faculdade',
    year: '2026',
    hours: '30h',
    category: 'Dados & IA',
  },
  {
    id: 'cert-prompt-eng',
    title: 'Engenharia de Prompt',
    issuer: 'Gran Faculdade',
    year: '2026',
    hours: '30h',
    category: 'Dados & IA',
  },
  {
    id: 'cert-ia-pratica',
    title: 'Inteligência Artificial na Prática: Domine as Ferramentas e Saia na Frente',
    issuer: 'Gran Faculdade',
    year: '2026',
    hours: '30h',
    category: 'Dados & IA',
  },
  {
    id: 'cert-transformers-llm',
    title: 'Transformers em Ação - A Nova Era dos Agentes Conversacionais com LLMs',
    issuer: 'UNINTER',
    year: '2026',
    hours: '1h',
    category: 'Dados & IA',
  },
  {
    id: 'cert-ia-gestao',
    title: 'Fundamentos de IA para Gestão, Liderança e Estratégia',
    issuer: 'Gran Faculdade',
    year: '2026',
    hours: '1h',
    category: 'Dados & IA',
  },
  {
    id: 'cert-redes-cisco',
    title: 'Conceitos Básicos de Redes',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    hours: 'Certificação Oficial',
    category: 'Computação, Redes & Hardware',
  },
  {
    id: 'cert-ti-bradesco',
    title: 'Fundamentos de TI: Hardware e Software',
    issuer: 'Fundação Bradesco',
    year: '2026',
    hours: '7h',
    category: 'Computação, Redes & Hardware',
  },
  {
    id: 'cert-circuitos-eletricos',
    title: 'O Funcionamento dos Circuitos Elétricos - Entendendo a Eletricidade',
    issuer: 'UNINTER',
    year: '2026',
    hours: '1h',
    category: 'Computação, Redes & Hardware',
  },
  {
    id: 'cert-python-bradesco',
    title: 'Linguagem de Programação Python - Básico',
    issuer: 'Fundação Bradesco',
    year: '2025',
    hours: '18h',
    category: 'Programação & Web',
  },
  {
    id: 'cert-html-css-js',
    title: 'Crie um Site Simples usando HTML, CSS e JavaScript',
    issuer: 'Fundação Bradesco',
    year: '2025',
    hours: '4h',
    category: 'Programação & Web',
  },
  {
    id: 'cert-semana-linguas',
    title: 'II Semana de Línguas UNINTER',
    issuer: 'UNINTER',
    year: '2026',
    hours: '10h',
    category: 'Idiomas & Comunicação',
  },
  {
    id: 'cert-espanhol-basico',
    title: 'Espanhol Básico',
    issuer: 'Instituto Dom Fernando Gomes',
    year: '2018',
    hours: '35h',
    category: 'Idiomas & Comunicação',
  },
]
export const certificationsList: CertificationItem[] = allGeneralCertificates as unknown as CertificationItem[]

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
export const highlightCertificatesData = highlightCertificates
export const allGeneralCertificatesData = allGeneralCertificates
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
