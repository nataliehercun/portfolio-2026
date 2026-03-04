"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSlideshowProps {
  images: string[];
}

export default function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-video bg-bg-fill-hover rounded-md overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-caption text-text-secondary"
        >
          {images[current]} (placeholder)
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          <button
            onClick={prev}
            className="w-7 h-7 rounded-full bg-bg-fill-selected text-text text-caption hover:bg-bg-fill-hover transition-colors flex items-center justify-center"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-7 h-7 rounded-full bg-bg-fill-selected text-text text-caption hover:bg-bg-fill-hover transition-colors flex items-center justify-center"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
