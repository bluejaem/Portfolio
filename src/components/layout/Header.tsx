import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Container } from './Container'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <Container className="relative flex items-center justify-between py-4">
        <a href="#top" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-200">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[10px] text-zinc-100">
            JM
          </span>
          João
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-zinc-300 transition-colors hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            Vamos conversar
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 md:hidden"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="border-t border-zinc-800 bg-zinc-950/95 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  )
}
