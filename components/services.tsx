'use client'

import { motion } from 'framer-motion'
import {
  ClipboardList,
  Calculator,
  Building2,
  Globe,
  Smartphone,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type ServiceGroup = {
  icon: LucideIcon
  title: string
  items: string[]
}

const groups: ServiceGroup[] = [
  {
    icon: ClipboardList,
    title: 'Administration Support',
    items: [
      'Personal Assistant',
      'Virtual Assistant',
      'Onsite Assistant',
      'Communication and Scheduling',
      'Diary and Email Management',
      'Holiday Cover',
      'Data Entry',
      'Record Keeping and Documentation',
      'Project and Task Coordination',
    ],
  },
  {
    icon: Calculator,
    title: 'Finance & Business Support',
    items: [
      'Invoicing and Credit Control',
      'Bookkeeping',
      'Credit Control',
      'Financial Administration',
      'Spreadsheet Creation and Management',
      'Excel Reporting',
    ],
  },
  {
    icon: Building2,
    title: 'Property Management Support',
    items: [
      'Airbnb Management',
      'Property Management Administration',
      'Tenant Communication',
      'Booking Coordination',
      'Documentation Management',
    ],
  },
  {
    icon: Globe,
    title: 'Website Services',
    items: [
      'Full Website Builds',
      'Website Remakes',
      'Content Updates',
      'Website Training',
      'Security Monitoring',
      'Technical Consultation',
    ],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    items: [
      'Bespoke App Development',
      'iOS Applications',
      'Android Applications',
      'Web Applications',
      'App Store Release Management',
      'Ongoing Development',
      'Post Launch Support Packages',
    ],
  },
]

function ServiceCard({ group, index }: { group: ServiceGroup; index: number }) {
  const Icon = group.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group glass-gold relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 p-8 transition-all duration-500 hover:border-gold/50 hover:gold-glow"
    >
      {/* sheen */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-heading text-xl font-medium tracking-wide text-foreground">
          {group.title}
        </h3>
      </div>

      <ul className="flex flex-col gap-3">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
            <span className="text-sm font-light leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Offer"
          title="Premium Services, Tailored to You"
          description="A complete suite of administration, finance, property, web and app development services — delivered with discretion and precision."
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <ServiceCard key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
