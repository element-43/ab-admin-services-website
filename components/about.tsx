'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, Layers, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const badges = [
  { icon: ShieldCheck, label: 'Fully Insured' },
  { icon: BadgeCheck, label: 'Reliable & Professional' },
  { icon: Layers, label: 'Flexible Support Packages' },
  { icon: MapPin, label: 'Remote & Onsite Services' },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Image */}
        <Reveal y={48} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-gold/20">
            <Image
              src="/images/about-luxury.png"
              alt="Elegant professional workspace representing AB Admin Services"
              width={720}
              height={820}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          {/* floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-gold absolute -bottom-6 -right-4 rounded-xl border border-gold/30 px-7 py-5 sm:-right-8"
          >
            <p className="font-heading text-4xl font-light text-gold-gradient">10+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Industries Supported
            </p>
          </motion.div>
        </Reveal>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="flex items-center gap-3 text-xs font-light uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold/50" />
              About Us
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-heading text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              About AB Admin Services
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 text-base font-light leading-relaxed text-muted-foreground">
              <p>
                AB Admin Services provides professional administration, business
                support and digital services to tradespeople, property professionals
                and growing businesses.
              </p>
              <p>
                Working closely with industries including construction, electricians,
                plumbers, mechanics, carpenters, property management, health and
                beauty, and finance, we help businesses streamline operations, improve
                organisation and maintain a professional presence both online and
                offline.
              </p>
              <p>
                From diary management and bookkeeping through to website development
                and bespoke mobile applications, AB Admin Services acts as a trusted
                extension of your business.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="glass flex items-center gap-3 rounded-lg border border-gold/15 px-4 py-3.5 transition-colors duration-300 hover:border-gold/40"
                >
                  <b.icon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-light text-foreground">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
