'use client'

import { Mail } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/social-icons'
import { Reveal } from '@/components/reveal'

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 lg:py-36">
      <div className="section-divider mx-auto mb-24 h-px max-w-4xl" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-1">
        {/* Left */}
        <div className="flex flex-col gap-8 items-center text-center">
          <Reveal>
            <span className="flex items-center gap-3 text-xs font-light uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold/50" />
              Get In Touch
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-heading text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s Discuss Your Business
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base font-light leading-relaxed text-muted-foreground">
              Tell us where you need support and we&apos;ll craft a tailored plan that
              gives you back your time. Every enquiry is handled personally and in
              confidence.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href="mailto:office@abadmin.services"
              className="cursor-pointer glass group flex w-fit items-center gap-4 rounded-xl border border-gold/20 px-6 py-4 transition-all duration-300 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email Us
                </span>
                <span className="text-base font-light text-foreground">
                  office@abadmin.services
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61587848471183"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AB Admin Services on Facebook"
                className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-primary-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/abadmin2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AB Admin Services on Instagram"
                className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-primary-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
