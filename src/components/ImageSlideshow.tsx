"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".ogg"];

function isVideo(src: string) {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

interface ImageSlideshowProps {
  images: string[];
  /** Hex (e.g. #550D00). Falls back to theme fill when omitted. */
  backgroundColor?: string;
}

export default function ImageSlideshow({ images, backgroundColor }: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div
      className={`relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border shadow-sm ${backgroundColor ? "" : "bg-bg-fill-hover"}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          {isVideo(images[current]) ? (
              <video
                src={images[current]}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
          ) : (
            <Image
              src={images[current]}
              alt={`Slide ${current + 1} of ${images.length}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 800px"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-[30px] h-[30px] pr-[2px] rounded-full bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.65)] transition-colors duration-150 flex items-center justify-center"
            aria-label="Previous image"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M5 1L1 5L5 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-[30px] h-[30px] pl-[2px] rounded-full bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.65)] transition-colors duration-150 flex items-center justify-center"
            aria-label="Next image"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M1 1L5 5L1 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
