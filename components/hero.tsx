'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-texture relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* ambient gold orbs */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute bottom-0 right-10 h-96 w-96 rounded-full bg-gold/8 blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="AB Admin Services logo"
            width={220}
            height={220}
            priority
            className="h-40 w-auto object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.35)] sm:h-52"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 inline-block text-xs font-light uppercase tracking-[0.35em] text-gold"
        >
          Luxury Business Support
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="gold-text-shadow text-balance font-heading text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Professional Business Support That Gives You{' '}
          <span className="text-gold-gradient italic">Back Your Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-2xl text-pretty text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
        >
          Administration, Virtual Assistance, Property Management, Websites and App
          Development for Trades, Small Businesses and Growing Companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-gold-gradient cursor-pointer gold-glow group flex items-center gap-2 rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Book a Consultation
          </button>
          <button
            onClick={() => scrollTo('#services')}
            className="cursor-pointer rounded-full border border-gold/40 px-9 py-4 text-sm font-light uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:border-gold hover:bg-gold/5"
          >
            View Services
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 cursor-pointer left-1/2 -translate-x-1/2 text-gold/60 transition-colors hover:text-gold"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.button>
    </section>
  )
}
