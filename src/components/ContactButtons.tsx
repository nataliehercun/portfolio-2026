"use client";

import { motion } from "framer-motion";

const buttonClass = [
  "inline-flex items-center justify-center rounded-[4px] bg-bg-fill-hover px-2 py-1 text-body-sm text-text",
  "transition-colors duration-150",
  "hover:bg-bg-fill-selected",
].join(" ");

const bounceTransition = {
  type: "spring" as const,
  stiffness: 500,
  damping: 30,
};

export default function ContactButtons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.85, ease: "linear" }}
      className="flex gap-[10px]"
      aria-label="Contact options"
    >
      <motion.a
        href="mailto:hercun.natalie@gmail.com"
        className={buttonClass}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.92 }}
        transition={bounceTransition}
      >
        Email&nbsp;↗
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/nataliehercun/"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.92 }}
        transition={bounceTransition}
      >
        Linkedin&nbsp;↗
      </motion.a>
      <motion.button
        type="button"
        className={buttonClass}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.92 }}
        transition={bounceTransition}
      >
        CV&nbsp;↗
      </motion.button>
    </motion.div>
  );
}
