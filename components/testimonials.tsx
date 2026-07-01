'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useMemo,  } from 'react'

import { SectionHeading } from '@/components/section-heading'
import { TestimonialItem } from '@/lib/types';

export function Testimonials() {
  const testimonials = useMemo<TestimonialItem[]>(() => ([
    {
      company: 'Potato Pictures',
      key: 'q9syq0us',
      quote:
        'AB Admin Services have been an absolute game-changer for us at Potato Pictures. From invoicing and scheduling to taming the everyday chaos of paperwork, everything has been handled with total efficiency, care and professionalism. They’ve made our working lives easier, calmer and far more organised — and, best of all, given us our evenings back.',
    },
    {
      company: 'Serenity Skincare',
      key: '06k9gh58',
      name: 'Natasha',
      quote:
        'I was introduced to AB Admin Services through a mutual friend, and I’m honestly so glad I was. As a small business owner, I’d been thinking for a while about taking my natural skincare range to the next level and finally creating a website. I’d be lying if I said I wasn’t nervous — it felt like such a big step and, at times, really overwhelming. But from the very beginning, AB Admin Services made the whole process feel simple, calm and completely manageable. They held my hand from start to finish, explained everything clearly, and made something that felt quite daunting feel exciting instead. It has been an absolute pleasure to work with AB Admin Services, and I’m genuinely so grateful for all the support, patience and guidance along the way. A massive thank you from me — I would absolutely recommend AB Admin Services to any small business owner who is ready to take that next step. Thank you again for making what could have been a stressful experience such an enjoyable one.',
    },
  ]), [])

  return (
    <section className="relative px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by Businesses Like Yours"
          className="mb-16"
        />

        <div className={`grid gap-6 lg:grid-cols-${testimonials.length}`}>
          {testimonials.map(({ company, key, name, quote }, i) => (
            <motion.figure
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass-gold relative flex flex-col gap-6 rounded-2xl border border-gold/15 p-8 transition-all duration-500 hover:border-gold/40"
            >
              <Quote className="h-9 w-9 text-gold/40" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-pretty text-base font-light italic leading-relaxed text-foreground/90">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto border-t border-gold/15 pt-5">
                {name && (<p className="font-heading text-lg font-medium text-gold">{name}</p>)}

                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
