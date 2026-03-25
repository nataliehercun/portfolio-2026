"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-start justify-center px-6 py-24 sm:py-32">
      <div className="w-full max-w-[500px] flex flex-col gap-[38px]">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
        >
          <Link
            href="/"
            className="text-body-sm text-text-secondary underline underline-offset-[3px] transition-colors duration-200 hover:text-bg-fill-brand"
          >
            ← Back
          </Link>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "linear" }}
          className="space-y-[18px]"
        >
          <h1 className="text-heading">About me</h1>
          <div className="space-y-[18px] text-body-sm text-text-secondary">
            <p>
              I&apos;m Natalie Hercun, a product designer based in Montreal, CA.
            </p>
            <p>
              I&apos;m good at helping teams frame ambiguous problems, imagine
              novel solutions, create high quality products, and most
              importantly—to have fun through it all.
            </p>
            <p>
              I&apos;m currently exploring new ways of working, fuelled by
              curiosity & a desire to shape the world with intention.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
