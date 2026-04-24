"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Stepper } from "pasito";

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
        <div className="slideshow-nav absolute left-1/2 bottom-3 -translate-x-1/2 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="slideshow-nav-btn w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.12)] transition-colors duration-150"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
              <path d="M5 1L1 5L5 9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <Stepper
            className="slideshow-stepper"
            count={images.length}
            active={current}
            onStepClick={setCurrent}
          />

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="slideshow-nav-btn w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.12)] transition-colors duration-150"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
              <path d="M1 1L5 5L1 9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
