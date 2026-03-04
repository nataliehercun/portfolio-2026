"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-heading-xl text-icon" aria-hidden>
          ✦
        </span>
        <h1 className="text-heading-xl">Your Name</h1>
      </div>
      <p className="text-body-sm text-text-secondary">
        Designer — working across brand, editorial, and digital
      </p>
    </motion.header>
  );
}
