"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";

const EMAIL_ADDRESS = "hercun.natalie@gmail.com";

const buttonClass = [
  "inline-flex items-center justify-center rounded-[4px] border border-bg-fill-brand bg-bg px-2 py-1 text-body-sm text-bg-fill-brand",
  "transition-colors duration-150",
  "hover:bg-bg",
].join(" ");

const bounceTransition = {
  type: "spring" as const,
  stiffness: 500,
  damping: 30,
};

export default function ContactButtons() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL_ADDRESS;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast.custom((id) => (
      <div
        style={{
          background: "var(--color-text)",
          color: "var(--color-bg)",
          fontFamily: "var(--font-inter)",
          fontSize: "13px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
        }}
      >
        <span>Email copied to clipboard</span>
        <motion.button
          type="button"
          onClick={() => toast.dismiss(id)}
          aria-label="Dismiss notification"
          whileHover={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            margin: 0,
            color: "var(--color-bg)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.7,
            lineHeight: 0,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 2 L10 10 M10 2 L2 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.button>
      </div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.85, ease: "linear" }}
      className="flex gap-[10px]"
      aria-label="Contact options"
    >
      <motion.button
        type="button"
        onClick={handleCopyEmail}
        className={buttonClass}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.92 }}
        transition={bounceTransition}
        aria-label={`Copy email address ${EMAIL_ADDRESS} to clipboard`}
      >
        Email&nbsp;↗
      </motion.button>
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
