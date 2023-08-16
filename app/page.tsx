'use client'

import Hero from '@/components/Hero'
import Portfolios from '@/components/Portfolios'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <main className="mb-12 tracking-widest text-2xl text-white font-crushed">
      <Navbar />
      <motion.div>
        <Hero />
        <Portfolios />
      </motion.div>
    </main>
  )
}
