import React from 'react'
import { motion } from 'framer-motion'
import Subheading from './ui/Subheading'
import { textVariant } from '@/constants'
import { FaHome, FaBuilding, FaCity, FaHouseUser  } from 'react-icons/fa'; 
import { useState } from 'react'
import { AppleCardsCarouselDemo } from './ui/carouseltest';


const Oferts = () => {

  const [activeButton, setActiveButton] = useState('House');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <section className='container overflow-hidden sm:mt-0 mt-10'>
      <Subheading text="Our Recommendation" />
      <div className='overflow-hidden flex flex-row justify-between items-center mt-4'>
        <div>
          <motion.h2
            variants={textVariant(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-4xl font-bold text-blue-200 dark:text-white"
          >
            Featured Houses
          </motion.h2>
        </div>

        <div className='lg:flex gap-5 mx-auto my-2 hidden'>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`relative inline-flex w-[106px] items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-2 outline-none ${
              activeButton === 'House' ? 'bg-[#D1FAE5] text-[#10B981]' : 'bg-white text-[#888B97] border border-gray-300'
            }`}
            onClick={() => handleButtonClick('House')}
          >
            <FaHome className="mr-2" />
            House
          </motion.button>
            
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`relative inline-flex w-[146px] items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-2 outline-none ${
              activeButton === 'Office' ? 'bg-[#D1FAE5] text-[#10B981]' : 'bg-white text-[#888B97] border border-gray-300'
            }`}
            onClick={() => handleButtonClick('Office')}
          >
            <FaBuilding className="mr-2" />
            Office
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`relative inline-flex w-[146px] items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-2 outline-none ${
              activeButton === 'Studio' ? 'bg-[#D1FAE5] text-[#10B981]' : 'bg-white text-[#888B97] border border-gray-300'
            }`}
            onClick={() => handleButtonClick('Studio')}
          >
            <FaHouseUser  className="mr-2" />
            Studio
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`relative inline-flex w-[146px] items-center justify-center gap-x-1.5 overflow-hidden rounded-full px-3 py-2 outline-none ${
              activeButton === 'Apartment' ? 'bg-[#D1FAE5] text-[#10B981]' : 'bg-white text-[#888B97] border border-gray-300'
            }`}
            onClick={() => handleButtonClick('Apartment')}
          >
            <FaCity className="mr-2" />
            Apartment
          </motion.button>
        </div>

        {/* <div className='bg-transparent w-[100px] h-[50px] hidden lg:flex'>
        </div> */}
      </div>
      <AppleCardsCarouselDemo />
    </section>
  )
}


export default Oferts
