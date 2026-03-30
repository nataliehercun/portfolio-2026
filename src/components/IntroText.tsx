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
        I like helping teams frame ambiguous problems, imagine novel solutions, create high quality
        products, and most importantly—to have fun through it{"\u00a0"}all.
      </p>
      <p>
        Previously, I worked at{" "}
        <a
          href="https://www.shopify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text underline underline-offset-[3px] transition-colors duration-200 hover:text-bg-fill-brand"
        >
          Shopify
        </a>{" "}
        where I was part of the design team on{" "}
        <a
          href="https://www.shopify.com/ca/marketing-automation-tools"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text underline underline-offset-[3px] transition-colors duration-200 hover:text-bg-fill-brand"
        >
          Marketing tools
        </a>{" "}
        and{" "}
        <a
          href="https://www.shopify.com/ca/payments"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text underline underline-offset-[3px] transition-colors duration-200 hover:text-bg-fill-brand"
        >
          Payments
        </a>
        . I contributed to the development of commerce products trusted by millions of entrepreneurs.
      </p>
    </motion.section>
  );
}
