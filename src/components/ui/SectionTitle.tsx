interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
        {title}
      </h2>

      {description ? <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p> : null}
    </div>
  )
}
