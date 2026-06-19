'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/social-icons'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      toast.success('Thank you — your consultation request has been received.', {
        description: 'We will be in touch within one business day.',
      })
      ;(e.target as HTMLFormElement).reset()
    }, 900)
  }

  return (
    <section id="contact" className="relative px-6 py-28 lg:py-36">
      <div className="section-divider mx-auto mb-24 h-px max-w-4xl" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col gap-8">
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
              className="glass group flex w-fit items-center gap-4 rounded-xl border border-gold/20 px-6 py-4 transition-all duration-300 hover:border-gold/50"
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
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-primary-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/abadmin2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AB Admin Services on Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-primary-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1} y={48}>
          <motion.form
            onSubmit={handleSubmit}
            className="glass-gold flex flex-col gap-5 rounded-2xl border border-gold/20 p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" placeholder="Your full name" required />
              <Field id="business" label="Business Name" placeholder="Your company" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="you@email.com"
                required
              />
              <Field id="phone" label="Phone" type="tel" placeholder="+44 0000 000000" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can support your business…"
                className="resize-none border-gold/20 bg-background/40 text-foreground placeholder:text-muted-foreground/60 focus-visible:border-gold focus-visible:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-gold-gradient group mt-2 flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
            >
              {submitting ? 'Sending…' : 'Request a Consultation'}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = 'text',
  placeholder,
  required,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="border-gold/20 bg-background/40 text-foreground placeholder:text-muted-foreground/60 focus-visible:border-gold focus-visible:ring-gold/30"
      />
    </div>
  )
}
