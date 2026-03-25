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
  videoBgColor?: string;
  videoScale?: number;
}

export default function ImageSlideshow({ images, videoBgColor, videoScale }: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-[16/10] bg-bg-fill-hover rounded-lg overflow-hidden border border-border shadow-sm">
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
            videoBgColor && videoScale ? (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: videoBgColor }}
              >
                <video
                  src={images[current]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: `${videoScale * 100}%`, objectFit: 'contain', borderRadius: '4px' }}
                />
              </div>
            ) : (
              <video
                src={images[current]}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )
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
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-6 h-2 bg-black/70"
                    : "w-2 h-2 bg-black/20 hover:bg-black/35"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 text-white hover:bg-black/55 transition-colors duration-150 flex items-center justify-center"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4.5L6.5 10L12 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 text-white hover:bg-black/55 transition-colors duration-150 flex items-center justify-center"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4.5L13.5 10L8 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
