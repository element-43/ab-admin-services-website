'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass border-b border-gold/15 py-3'
          : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={() => go('#hero')}
          className="flex items-center gap-3"
          aria-label="AB Admin Services home"
        >
          <Image
            src="/images/ab-logo.png"
            alt="AB Admin Services logo"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
          />
          <span className="hidden font-heading text-xl font-medium tracking-wide text-foreground sm:block">
            AB <span className="text-gold">Admin</span> Services
          </span>
        </button>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="group relative text-sm font-light uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go('#contact')}
          className="hidden rounded-full border border-gold/40 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground md:block"
        >
          Book a Consultation
        </button>

        <button
          className="text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass overflow-hidden border-t border-gold/15 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="block w-full py-3 text-left text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => go('#contact')}
                  className="w-full rounded-full bg-gold-gradient py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
                >
                  Book a Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
