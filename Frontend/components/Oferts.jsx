import React from 'react'
import { motion } from 'framer-motion'
import Subheading from './ui/Subheading'
import { textVariant } from '@/constants'
import PropertyCarousel from './ui/VideoCarousel'

const Oferts = () => {
  return (
    <section className='container overflow-hidden'>
      <Subheading text="Our Recommendation" />
      <div className='overflow-hidden'>
        <motion.h2
          variants={textVariant(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-4xl font-bold text-blue-200 dark:text-white mt-4"
        >
          Featured Houses
        </motion.h2>
      </div>
    </section>
  )
}

export default Oferts
