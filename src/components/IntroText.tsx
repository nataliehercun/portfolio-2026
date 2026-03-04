"use client";

import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="mb-16 max-w-md space-y-4 text-body-big text-text-secondary"
    >
      <p>
        Placeholder introduction paragraph. Describe who you are, what you care
        about, and the kind of work you do. Keep it personal and concise — two
        to three sentences is plenty.
      </p>
      <p>
        A second paragraph can add context: where you&apos;re based, who
        you&apos;ve worked with, or what you&apos;re currently focused on. This
        is your chance to set the tone for the rest of the page.
      </p>
    </motion.section>
  );
}
