"use client";

import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease: "linear" }}
      className="space-y-[18px] text-body-sm text-text-secondary"
    >
      <p>I&apos;m a product designer based in Montreal, CA.</p>
      <p>
        Previously, I worked at{" "}
        <span className="text-text underline">Shopify</span> where I was part of
        the design team on{" "}
        <span className="text-text underline">Marketing Automation tools</span>{" "}
        and <span className="text-text underline">Payments</span>.
      </p>
      <p>
        I&apos;m currently spending some time with family &amp; exploring new
        creative opportunities. Finding joy in designing personal &amp; freelance
        projects that have allowed me to nourish my creative practice, flex my
        problem solving skills, learn new tools &amp; have lots of fun
        collaborating with inspiring entrepreneurs.
      </p>
    </motion.section>
  );
}
