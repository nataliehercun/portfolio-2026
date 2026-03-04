"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "linear" }}
    >
      <div className="flex items-center gap-2">
        <div
          className="size-[30px] shrink-0 rounded-full bg-bg-fill-brand"
          aria-hidden
        />
        <div className="flex flex-col">
          <h1 className="text-heading">Natalie Hercun</h1>
          <p className="text-body-sm text-text-secondary">Staff Designer</p>
        </div>
      </div>
    </motion.header>
  );
}
