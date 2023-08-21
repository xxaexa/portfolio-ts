'use client'

import Hero from '@/components/Hero'
import Portfolios from '@/components/Portfolios'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="tracking-widest text-2xl text-white font-crushed">
      <Navbar />
      <motion.div>
        <Hero />
        <Portfolios />
      </motion.div>
      <Footer />
    </main>
  )
}
