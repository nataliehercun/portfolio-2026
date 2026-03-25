"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "linear" }}
    >
      <h1 className="text-heading-xl text-bg-fill-brand">Natalie Hercun</h1>
    </motion.header>
  );
}
