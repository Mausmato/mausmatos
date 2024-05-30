"use client";

import { cn } from "../../lib/utils";
import { Variants, motion } from "framer-motion";
import "../style.css"

interface Title {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function Title({
  words,
  delay = 0.35,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: Title) {
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "text-3xl font-extrabold tracking-normal sm:text-4xl xl:text-5xl/none", // Updated to a larger text size
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
