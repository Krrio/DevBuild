import React from 'react'
import { motion } from 'framer-motion'
import Subheading from './ui/Subheading'

const Oferts = () => {
  return (
    <section className='container overflow-x-hidden'>
      <Subheading text="Our Recommendation" />
      <motion.h2
        className="text-4xl font-bold text-blue-200 dark:text-white mt-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        viewport={{ once: false }}
      >
        Featured House
      </motion.h2>
    </section>
  )
}

export default Oferts
