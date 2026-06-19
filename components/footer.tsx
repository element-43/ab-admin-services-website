'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/social-icons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-gold/15 px-6 pt-20 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/ab-logo.png"
                alt="AB Admin Services logo"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
              <span className="font-heading text-xl font-medium tracking-wide text-foreground">
                AB <span className="text-gold">Admin</span> Services
              </span>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Professional Administration, Business Support, Websites and App
              Development.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-sm font-light text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
              Connect
            </h4>
            <a
              href="mailto:office@abadmin.services"
              className="flex items-center gap-3 text-sm font-light text-muted-foreground transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" />
              office@abadmin.services
            </a>
            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61587848471183"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AB Admin Services on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/abadmin2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AB Admin Services on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mt-16 h-px w-full" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs font-light tracking-wide text-muted-foreground">
            &copy; {new Date().getFullYear()} AB Admin Services. All rights reserved.
          </p>
          <p className="text-xs font-light tracking-wide text-muted-foreground">
            Administration · Business Support · Websites · App Development
          </p>
        </div>
      </div>
    </footer>
  )
}
