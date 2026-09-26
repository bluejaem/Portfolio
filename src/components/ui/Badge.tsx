import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-200',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
