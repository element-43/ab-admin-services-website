'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    n: '01',
    title: 'Discovery Call',
    copy: 'We learn about your business, challenges and the support you need.',
  },
  {
    n: '02',
    title: 'Business Assessment',
    copy: 'A clear review of your operations to identify where we add the most value.',
  },
  {
    n: '03',
    title: 'Tailored Support Plan',
    copy: 'A bespoke package built around your goals, schedule and budget.',
  },
  {
    n: '04',
    title: 'Ongoing Partnership',
    copy: 'A trusted extension of your team, evolving as your business grows.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative px-6 py-28 lg:py-36">
      <div className="section-divider mx-auto mb-24 h-px max-w-4xl" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How We Work"
          title="A Seamless Process"
          description="From first conversation to long-term partnership — refined, transparent and built around you."
          className="mb-20"
        />

        <div className="relative grid gap-10 md:grid-cols-4">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <span className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-background font-heading text-2xl font-light text-gold-gradient">
                {s.n}
              </span>
              <h3 className="mb-3 font-heading text-xl font-medium tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
                {s.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
