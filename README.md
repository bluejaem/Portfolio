# Portfólio Profissional — João Guilherme Machado de Melo

Portfólio pessoal e profissional desenvolvido com uma arquitetura moderna, responsiva e fluida baseada no ecossistema **React 18**, **TypeScript**, **Tailwind CSS** e **Framer Motion**. O projeto adota a estética visual *Dark Modern* com toques minimalistas e iluminação neon/glow, concebido para destacar competências práticas em **Ciência de Dados**, **Business Intelligence**, **Engenharia de Software** e **Matemática Computacional**.

---

## Demonstração Online

- **Deploy de Produção:** [https://portfolio-two-red-85.vercel.app](https://portfolio-two-red-85.vercel.app)
- **Repositório:** [https://github.com/bluejaem/Portfolio](https://github.com/bluejaem/Portfolio)

---

## Proposta & Diretrizes Visuais

- **Estética Dark Modern:** Fundo ultra-escuro (`#07020d`), tipografia com alto contraste em tons de cinza suave (`zinc-100` a `zinc-400`) e pontos focais em gradientes de roxo/magenta com sombras neon difusas.
- **Navegação Fluida (Sem Bloqueios):** Eliminação de *scroll snap* rígido e paginações fechadas por abas, garantindo uma rolagem vertical natural e contínua do topo ao rodapé.
- **Autoridade Técnica Imediata:** O topo (*Hero*) substitui a foto duplicada por um terminal interativo flutuante que resume as credenciais e stack de dados em tempo real.
- **Destaque Multidisciplinar:** Integração visual de 5 formações acadêmicas e técnicas concomitantes e certificações de prestígio internacional (**Microsoft PL-300** e **CS50 de Harvard**).

---

## Tecnologias & Bibliotecas

| Categoria | Tecnologias Utilizadas |
| :--- | :--- |
| **Core & Linguagem** | [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) |
| **Estilização & UI** | [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer) |
| **Animações & Gestos** | [Framer Motion](https://www.framer.com/motion/) |
| **Iconografia** | [Lucide React](https://lucide.dev/) |
| **Hospedagem & CI/CD** | [Vercel](https://vercel.com/), [GitHub Actions](https://github.com/features/actions) |

---

## Estrutura das Seções

1. **Header (Navegação):** Barra fixa com efeito *glassmorphism* (`backdrop-blur-xl`), logo estilizada, links internos ordenados e gaveta lateral responsiva (*Mobile Drawer*).
2. **Hero (Topo do Site):** Proposta de valor em computação e dados, chamada para ação e *Data Stack Terminal* com efeito contínuo de flutuação via Framer Motion.
3. **Especialidades:** Grid aberto com 6 cartões detalhando competências em Business Intelligence (Power BI/DAX), Análise Exploratória, SQL & Python, Rigor Matemático, Frontend Reativo e Infraestrutura de TI.
4. **Sobre Mim:** Espaço exclusivo dedicado à apresentação biográfica, trajetória multidisciplinar e retrato fotográfico com iluminação de fundo.
5. **Formações Acadêmicas:** Exibição em grid limpo de 5 graduações e cursos técnicos (Ciência de Dados, Engenharia da Computação, Matemática Aplicada, Gestão da TI e Informática), com centralização harmoniosa da linha inferior.
6. **Projetos em Destaque:** Portfólio de aplicações práticas com carrossel visual individual, highlights de engenharia sem truncamentos, badges de stack e links diretos para Live Demo e Repositório GitHub:
   - **Meu LIFE OS:** Single Page Application *Local-First* para gestão acadêmica e produtividade pessoal.
   - **GovLocal App:** PWA voltada a acesso rápido e georreferenciado a serviços cívicos e emergências.
   - **Painel de Remuneração & Stacks Tech Brasil:** Plataforma analítica de remunerações e simulador fiscal (CLT vs PJ).
   - **Calculadora Biométrica & Analisador de IMC:** Aplicação de validação antropométrica baseada em parâmetros da OMS.
7. **Certificações & Conquistas:** Grid aberto evidenciando as principais credenciais analíticas:
   - Microsoft Certified: Power BI Data Analyst Associate (PL-300) [2026]
   - Formação Analista de Dados — Educadados [2026]
   - CS50: Introduction to Computer Science — Harvard / Fundação Estudar
   - Semifinalista da 16ª Olimpíada Nacional em História do Brasil (ONHB) — UNICAMP
   - Basic Networking Concepts — Cisco Networking Academy
   - Língua Inglesa NEW UBEST Intermediate — UNINTER
8. **Contato & Rodapé:** Formulário com validação local estilizada em cards de alturas equalizadas, canais diretos (E-mail com botão de cópia de um clique, LinkedIn e GitHub) e copyright dinâmico.

---

## Como Rodar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a Passo

```bash
# 1. Clone o repositório
git clone [https://github.com/bluejaem/Portfolio.git](https://github.com/bluejaem/Portfolio.git)

# 2. Acesse a pasta do projeto
cd Portfolio

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev