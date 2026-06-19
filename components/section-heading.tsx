import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="flex items-center gap-3 text-xs font-light uppercase tracking-[0.32em] text-gold">
          <span className="h-px w-8 bg-gold/50" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-heading text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty text-base font-light leading-relaxed text-muted-foreground',
            align === 'center' ? 'max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
