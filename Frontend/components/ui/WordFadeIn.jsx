"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const WordFadeIn = ({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}) => {
  const _words = words.map((word, index) => ({
    ...word,
    key: `${word.text}-${index}`,
  }));

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {_words.map((word, i) =>
        word.text === "<br/>" ? (
          <br key={i} />
        ) : (
          <motion.span
            key={word.key}
            custom={i}
            variants={variants}
            className={cn(word.className)}
          >
            {word.text}{" "}
          </motion.span>
        )
      )}
    </motion.h1>
  );
};

export default WordFadeIn;
