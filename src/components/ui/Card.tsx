import type { ElementType, HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
}

export function Card({ children, className = '', as: Component = 'div', ...props }: CardProps) {
  return (
    <Component
      className={[
        'rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-[0_1px_0_rgba(255,255,255,0.02)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
}
