import React from 'react'
import Image from 'next/image';
import WordFadeIn from './ui/WordFadeIn';
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const HeroMain = () => {
  const words = [
    { text: "Find", className: "text-blue-200 sm:text-6xl text-5xl" },
    { text: "The Place To", className: "text-blue-200 sm:text-6xl text-5xl" },
    { text: "<br/>" },
    { text: "Live", className: "text-green-200 sm:text-6xl text-5xl" },
    { text: "Your Dreams", className: "text-green-200 sm:text-6xl text-5xl" },
    { text: "Easily", className: "text-blue-200 sm:text-6xl text-5xl" },
    { text: "Here", className: "text-blue-200 sm:text-6xl text-5xl" },
  ];
  

  return (
    <section className="container">
      <div className="sub-container flex flex-col-reverse items-center justify-between lg:flex-row lg:space-x-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <WordFadeIn words={words} className="header text-center sm:text-left" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end py-10">
          <motion.img
            src="/images/hero-img.png"
            alt="Hero Image"
            className="side-img w-full h-auto"
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