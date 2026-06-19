'use client'

import { motion } from 'framer-motion'
import {
  HardHat,
  Zap,
  Wrench,
  Hammer,
  Car,
  Building2,
  Landmark,
  Sparkles,
  Store,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const industries: { icon: LucideIcon; label: string }[] = [
  { icon: HardHat, label: 'Construction' },
  { icon: Zap, label: 'Electricians' },
  { icon: Wrench, label: 'Plumbers' },
  { icon: Hammer, label: 'Carpenters' },
  { icon: Car, label: 'Mechanics' },
  { icon: Building2, label: 'Property Management' },
  { icon: Landmark, label: 'Finance' },
  { icon: Sparkles, label: 'Health and Beauty' },
  { icon: Store, label: 'Small Businesses' },
  { icon: Rocket, label: 'Startups' },
]

export function Industries() {
  return (
    <section id="industries" className="relative px-6 py-28 lg:py-36">
      {/* divider line */}
      <div className="section-divider mx-auto mb-24 h-px max-w-4xl" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries We Support"
          description="Trusted across trades, property, finance and beyond — we adapt to the rhythm of your business."
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (i % 5) * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group glass flex flex-col items-center gap-4 rounded-xl border border-gold/15 px-4 py-8 text-center transition-all duration-400 hover:border-gold/50 hover:bg-gold/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-light tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                  {ind.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
