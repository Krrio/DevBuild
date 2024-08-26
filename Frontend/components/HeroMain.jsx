import React from 'react';
import Image from 'next/image';
import WordFadeIn from './ui/WordFadeIn';
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { AnimatedList } from './ui/AnimatedList';
import HouseList from './HouseList';

const HeroMain = () => {
  const words = [
    { text: "Find", className: "text-blue-200 sm:text-[50px] text-[32px] leading-[1.1]" },
    { text: "The Place To", className: "text-blue-200 sm:text-[50px] text-[32px] leading-[1.2]" },
    { text: "<br/>" },
    { text: "Live", className: "text-green-200 sm:text-[50px] text-[32px] leading-[1.2]" },
    { text: "Your Dreams", className: "text-green-200 sm:text-[50px] text-[32px] leading-[1.2]" },
    { text: "<br/>" },
    { text: "Easily", className: "text-blue-200 sm:text-[50px] text-[32px] leading-[1.2]" },
    { text: "Here", className: "text-blue-200 sm:text-[50px] text-[32px] leading-[1.2]" },
  ];

  return (
    <section className="container mx-auto sm:-top-20 top-0">
      <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] h-auto lg:h-[70vh]">
        <div className="flex flex-col justify-between p-4 overflow-hidden">
          <div className="flex flex-1 flex-col justify-end p-4 sm:mt-[30px]">
            <WordFadeIn words={words} className="header text-center lg:text-left py-0" />
          </div>
          <div className="flex-1 p-4 hidden lg:block mb-[160px] overflow-hidden">
            <HouseList />
          </div>
        </div>
        
        <div className="flex justify-center items-center p-4 ">
          <motion.img
            src="/images/hero-img.png"
            alt="Hero Image"
            className="w-full h-auto lg:max-h-[50vh] object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
