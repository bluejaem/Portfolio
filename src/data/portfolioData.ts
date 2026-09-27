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
    role: 'Formação técnica e analítica focada no ciclo de vida completo dos dados — desde a ingestão, higienização e modelagem até o desenvolvimento de sistemas preditivos e a comunicação de insights estratégicos.',
    highlights: ['Python & SQL', 'Machine Learning', 'Estatística Inferencial', 'Pipelines ETL/ELT', 'EDA & Visualização', 'Modelagem Preditiva'],
    detailGroups: [
      {
        title: 'Fundamentos de Programação e Dados',
        items: [
          'Estruturas de dados em Python, manipulação com Pandas e NumPy e escrita de lógica analítica para processamento de dados em escala e complexidade variável.',
          'Uso de SQL para consulta, agregação, junção e transformação de bancos relacionais, além de introdução a ambientes NoSQL e acesso a grandes volumes de informação.',
        ],
      },
      {
        title: 'Estatística e Inferência',
        items: [
          'Estatística descritiva e inferencial para leitura crítica de distribuições, correlações, variabilidade e padrões amostrais.',
          'Análise exploratória multivariada, testes de hipóteses, probabilidade, validação estatística e interpretação de resultados para suporte à tomada de decisão.',
        ],
      },
      {
        title: 'Machine Learning e Modelagem',
        items: [
          'Aprendizado supervisionado e não supervisionado com regressão, classificação e clustering em bibliotecas como Scikit-Learn.',
          'Métricas de validação, cross-validation, seleção de modelos, redução de dimensionalidade e comparação de desempenho para soluções preditivas confiáveis.',
        ],
      },
      {
        title: 'Engenharia de Dados e BI',
        items: [
          'Construção de pipelines ETL/ELT, tratamento de dados faltantes e outliers, organização de fluxo analítico e preparação de bases para uso operacional.',
          'Visualização de indicadores com dashboards e comunicação analítica para transformar resultados em conhecimento acionável para negócios.',
        ],
      },
      {
        title: 'Ética e IA Responsável',
        items: [
          'Governança de dados, conformidade com LGPD, responsabilidade na análise de dados sensíveis e explicabilidade de modelos preditivos.',
          'Arquitetura de soluções analíticas com foco em qualidade, rastreabilidade, ética e capacidade de interpretação dos resultados.',
        ],
      },
    ],
  },
  {
    id: 'matematica',
    title: 'Matemática Aplicada e Computacional',
    pillar: 'Base Analítica, Rigor Quantitativo e Modelagem Formal',
    institution: 'Universidade Federal de Sergipe (UFS)',
    course: '',
    role: 'Formação sólida no rigor matemático formal combinado com métodos computacionais para a resolução de sistemas físicos, financeiros e algorítmicos complexos.',
    highlights: ['Cálculo Multivariável', 'Álgebra Linear Computacional', 'Cálculo Numérico', 'Equações Diferenciais', 'Otimização Matemática', 'Modelagem Estocástica'],
    detailGroups: [
      {
        title: 'Fundamentação Matemática',
        items: [
          'Cálculo diferencial e integral em uma e várias variáveis, com desenvolvimento de raciocínio formal para análise de limites, continuidade, derivadas e integrais em contextos aplicados.',
          'Álgebra linear avançada com espaços vetoriais, transformações lineares, autovalores, autovetores, decomposição espectral e geometria analítica para representação de sistemas complexos.',
        ],
      },
      {
        title: 'Métodos Quantitativos e Análise',
        items: [
          'Equações diferenciais ordinárias e parciais para modelagem de fenômenos dinâmicos e variação temporal em sistemas físicos e matemáticos.',
          'Análise real e formulação de modelos matemáticos que quantificam comportamento, estabilidade, crescimento e dependência entre variáveis.',
        ],
      },
      {
        title: 'Computação Científica',
        items: [
          'Cálculo numérico com interpolação, integração numérica, resolução de sistemas lineares e não-lineares e avaliação de convergência e estabilidade de algoritmos.',
          'Programação matemática e fundamentação da computação científica para implementar soluções numéricas de forma eficiente e segura.',
        ],
      },
      {
        title: 'Otimização e Probabilidade',
        items: [
          'Teoria da otimização linear e não-linear como base para tomada de decisão em cenários econômicos, logísticos e de engenharia.',
          'Teoria das probabilidades e modelos estocásticos, essencial para lidar com incerteza, risco e comportamento aleatório em processos reais.',
        ],
      },
    ],
  },
  {
    id: 'computacao',
    title: 'Engenharia da Computação',
    pillar: 'Arquitetura de Sistemas, Hardware e Engenharia de Computação',
    institution: 'Centro Universitário Internacional (UNINTER)',
    course: '',
    role: 'Formação multidisciplinar que integra princípios da engenharia eletrônica à ciência da computação, preparando para o projeto, análise e implementação de hardware, software embarcado e sistemas integrados.',
    highlights: ['Arquitetura de Microprocessadores', 'Circuitos Elétricos & Digitais', 'Sistemas Embarcados & C/C++', 'Sistemas Operacionais', 'Redes de Computadores', 'Eletrônica Digital'],
    detailGroups: [
      {
        title: 'Camada Física e Hardware',
        items: [
          'Circuitos elétricos com análise de malhas e nós, leis de Kirchhoff, sinais contínuos e alternados, além de fundamentos de eletrônica analógica e digital.',
          'Sistemas digitais, circuitos lógicos combinacionais e sequenciais e aplicação de abstrações de hardware na resolução de problemas práticos de automação e processamento.',
        ],
      },
      {
        title: 'Arquitetura de Processadores',
        items: [
          'Organização e arquitetura de computadores, hierarquia de memória, cache, RAM e virtualização, além de estudo de microprocessadores e microcontroladores.',
          'Compreensão da relação entre software e hardware, incluindo execução instrucional, pipelines e restrições de desempenho.',
        ],
      },
      {
        title: 'Software de Baixo e Médio Nível',
        items: [
          'Programação em C/C++ para manipulação direta de registradores, desenvolvimento de firmware e entendimento profundo do comportamento do sistema computacional.',
          'Sistemas operacionais e gerenciamento de concorrência, threads e recursos compartilhados em ambientes computacionais reais.',
        ],
      },
      {
        title: 'Redes e Infraestrutura',
        items: [
          'Arquitetura TCP/IP, modelo OSI, protocolos de comunicação, redes industriais e sistemas distribuídos para conectividade eficiente e segura.',
          'Fundamentos de infraestrutura tecnológica aplicados a comunicação entre dispositivos, serviços e plataformas embutidas.',
        ],
      },
    ],
  },
  {
    id: 'gestao-ia',
    title: 'Gestão da Tecnologia da Informação',
    pillar: 'Governança Tecnológica, Processos e Inteligência Artificial Aplicada',
    institution: 'Centro Universitário ETEP',
    course: '',
    role: 'Foco no alinhamento estratégico entre tecnologia, processos organizacionais e negócios, integrando governança contemporânea à aplicação de IA generativa no ambiente corporativo.',
    highlights: ['Governança de TI (ITIL/COBIT)', 'Engenharia de Prompt & LLMs', 'Gestão Ágil de Projetos', 'Segurança da Informação & LGPD', 'Mapeamento de Processos', 'Estratégia Tecnológica'],
    detailGroups: [
      {
        title: 'Governança e Estratégia de TI',
        items: [
          'Frameworks de boas práticas como ITIL e COBIT para estruturar serviços, infraestrutura e gestão de tecnologia alinhadas aos objetivos organizacionais.',
          'Gerenciamento de projetos digitais, priorização de demandas e uso de metodologias ágeis como Scrum e Kanban para execução eficiente.',
        ],
      },
      {
        title: 'Gestão de Riscos e Segurança',
        items: [
          'Políticas de segurança da informação, auditoria de sistemas, continuidade de negócios e conformidade regulatória, incluindo atuação em cenários com LGPD.',
          'Avaliação de riscos operacionais, governança de dados e mitigação de impactos em ambientes corporativos.',
        ],
      },
      {
        title: 'Inteligência Artificial Estratégica',
        items: [
          'Engenharia de prompt para automação operacional, otimização de fluxo de trabalho e uso de sistemas de IA generativa em cenários reais de negócio.',
          'Integração de APIs de LLMs, análise de viabilidade econômica e mensuração de impacto produtivo e operacional de soluções de IA.',
        ],
      },
      {
        title: 'Processos e Negócios',
        items: [
          'Mapeamento de processos com foco em BPMN, análise de eficiência operacional e identificação de gargalos organizacionais.',
          'Gestão de mudança, liderança técnica e alinhamento entre as áreas de negócio e tecnologia para execução estratégica.',
        ],
      },
    ],
  },
  {
    id: 'tecnico',
    title: 'Técnico em Informática',
    pillar: 'Base Operacional de TI, Infraestrutura e Prática Técnica',
    institution: 'Centro Universitário Internacional (UNINTER)',
    course: '',
    role: 'Base operacional prática voltada para manutenção, configuração, suporte e sustentação de infraestruturas locais de tecnologia da informação.',
    highlights: ['Hardware & Diagnóstico', 'Administração Linux/Windows', 'Redes de Computadores & Cabeamento', 'Protocolos TCP/IP', 'Shell Scripting', 'Suporte Técnico'],
    detailGroups: [
      {
        title: 'Hardware e Manutenção',
        items: [
          'Montagem, desmontagem e diagnóstico de falhas em componentes físicos, fontes, memórias, periféricos e barramentos de comunicação.',
          'Testes de integridade de hardware e identificação estruturada de problemas para manutenção preventiva e corretiva.',
        ],
      },
      {
        title: 'Sistemas Operacionais',
        items: [
          'Instalação, particionamento e administração de ambientes Windows e distribuições Linux com foco em operação local e estabilidade do sistema.',
          'Automação básica e uso de shell (Bash) para tarefas de manutenção, monitoramento e organização de ambiente computacional.',
        ],
      },
      {
        title: 'Redes Locais e Infraestrutura',
        items: [
          'Cabeamento estruturado, crimpagem, configuração de roteadores e switches, atribuição de endereços IPv4/IPv6 e uso de DHCP para suporte a redes locais.',
          'Diagnóstico de conectividade com ping, traceroute, netstat e análise de falhas em protocolos de rede e comunicação.',
        ],
      },
      {
        title: 'Suporte ao Usuário e Sustentação',
        items: [
          'Resolução estruturada de chamados de TI, configuração de periféricos, suporte ao usuário final e alinhamento com políticas de segurança local.',
          'Prevenção de incidentes técnicos e manutenção de ambiente produtivo com foco em confiabilidade, desempenho e continuidade de operação.',
        ],
      },
    ],
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
