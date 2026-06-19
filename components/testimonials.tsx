'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'AB Admin Services transformed how we run our trade business. Invoicing, scheduling and the chaos of paperwork — all handled flawlessly. We finally have our evenings back.',
    name: 'James Holloway',
    role: 'Director, Holloway Electrical',
  },
  {
    quote:
      'From bookkeeping to a stunning new website, the level of professionalism is second to none. It genuinely feels like having a dedicated office team without the overhead.',
    name: 'Sophie Bennett',
    role: 'Founder, Bennett Property Lettings',
  },
  {
    quote:
      'They built our bespoke booking app and continue to support it brilliantly. Reliable, discreet and always one step ahead. An essential partner for our growth.',
    name: 'Daniel Pryce',
    role: 'Owner, Pryce Mechanical',
  },
]

export function Testimonials() {
  return (
    <section className="relative px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by Businesses Like Yours"
          className="mb-16"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass-gold relative flex flex-col gap-6 rounded-2xl border border-gold/15 p-8 transition-all duration-500 hover:border-gold/40"
            >
              <Quote className="h-9 w-9 text-gold/40" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-pretty text-base font-light italic leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto border-t border-gold/15 pt-5">
                <p className="font-heading text-lg font-medium text-gold">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
