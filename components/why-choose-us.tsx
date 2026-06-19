'use client'

import { motion } from 'framer-motion'
import { Clock, Briefcase, Settings, MonitorSmartphone, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const reasons: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Clock,
    title: 'Save Time',
    copy: 'Focus on growing your business while we handle administration.',
  },
  {
    icon: Briefcase,
    title: 'Professional Image',
    copy: 'Consistent communication and organisation.',
  },
  {
    icon: Settings,
    title: 'Flexible Support',
    copy: 'Remote and onsite assistance available.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Complete Digital Solutions',
    copy: 'From administration through to websites and applications.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The AB Difference"
          title="Why Choose Us"
          className="mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-center gap-5 rounded-2xl border border-gold/15 bg-card/40 p-8 text-center transition-all duration-500 hover:border-gold/40"
              >
                <span className="bg-gold-gradient flex h-16 w-16 items-center justify-center rounded-full text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-heading text-xl font-medium tracking-wide text-foreground">
                  {r.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {r.copy}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
