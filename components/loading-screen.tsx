'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/logo.png"
              alt="AB Admin Services"
              width={150}
              height={150}
              priority
              className="h-32 w-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            />
          </motion.div>

          <div className="mt-10 h-px w-48 overflow-hidden rounded-full bg-gold/15">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full bg-gold-gradient"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xs font-light uppercase tracking-[0.4em] text-gold"
          >
            AB Admin Services
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
