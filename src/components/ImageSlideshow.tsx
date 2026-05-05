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

const ASSET_RADIUS_CLASSES =
  "rounded-[6px] sm:rounded-[8px] lg:rounded-[10px]";
const ASSET_SHADOW =
  "0 12px 32px -8px rgba(0,0,0,0.18), 0 4px 12px -4px rgba(0,0,0,0.12)";

// Default until the first asset reports its natural dimensions. Matches the
// width/height props passed to next/image so the reserved space is correct
// for the common UI-screenshot ratio.
const DEFAULT_ASPECT_RATIO = 1600 / 1000;

export default function ImageSlideshow({
  images,
  backgroundColor,
}: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [loadedBySrc, setLoadedBySrc] = useState<Record<string, boolean>>({});
  // Locked to the first asset's natural ratio so the container height stays
  // stable across slides — only the asset itself crossfades.
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  if (images.length === 0) return null;

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  const hasMultiple = images.length > 1;
  const currentSrc = images[current];
  const currentIsLoaded = !!loadedBySrc[currentSrc];

  const lockAspectRatio = (width: number, height: number) => {
    if (aspectRatio !== null || !width || !height) return;
    setAspectRatio(width / height);
  };

  const markAssetLoaded = (src: string) => {
    setLoadedBySrc((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  };

  const navButtonClasses =
    "slideshow-nav-btn w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.12)] transition-colors duration-150";

  const prevButton = (
    <button
      type="button"
      onClick={prev}
      aria-label="Previous image"
      className={navButtonClasses}
    >
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
        <path
          d="M5 1L1 5L5 9"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  const nextButton = (
    <button
      type="button"
      onClick={next}
      aria-label="Next image"
      className={navButtonClasses}
    >
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
        <path
          d="M1 1L5 5L1 9"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div
      className={`relative w-full rounded-[24px] overflow-hidden p-6 sm:p-10 lg:px-[60px] lg:py-[50px] ${
        backgroundColor ? "" : "bg-bg-fill-hover"
      }`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {/*
        Wrapper has a fixed aspect-ratio (locked to the first asset) so the
        container height doesn't jump when the slide changes. Slides stack
        absolutely so old + new overlap during the crossfade — a true dissolve,
        not a layout shift.
      */}
      <div
        className="relative w-full"
        style={{ aspectRatio: aspectRatio ?? DEFAULT_ASPECT_RATIO }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {isVideo(currentSrc) ? (
              <div
                className={`h-full w-full ${ASSET_RADIUS_CLASSES}`}
                style={{ boxShadow: currentIsLoaded ? ASSET_SHADOW : undefined }}
              >
                <video
                  src={currentSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={(e) =>
                    lockAspectRatio(
                      e.currentTarget.videoWidth,
                      e.currentTarget.videoHeight
                    )
                  }
                  onLoadedData={() => markAssetLoaded(currentSrc)}
                  className={`block w-full h-full object-contain transition-opacity duration-150 ${ASSET_RADIUS_CLASSES} ${
                    currentIsLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ) : (
              <div
                className={`h-full w-full ${ASSET_RADIUS_CLASSES}`}
                style={{ boxShadow: currentIsLoaded ? ASSET_SHADOW : undefined }}
              >
                <Image
                  src={currentSrc}
                  alt={`Slide ${current + 1} of ${images.length}`}
                  fill
                  onLoad={() => markAssetLoaded(currentSrc)}
                  onLoadingComplete={(img) =>
                    lockAspectRatio(img.naturalWidth, img.naturalHeight)
                  }
                  className={`object-contain transition-opacity duration-150 ${ASSET_RADIUS_CLASSES} ${
                    currentIsLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 640px) 100vw, 760px"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/*
        Side-anchored arrows, vertically centered, no dot indicator. On lg+ the
        30px button is mathematically centered in the 60px horizontal padding
        strip ((60−30)/2 = 15px from the container edge). On smaller screens
        the padding is too narrow for the button to fit fully inside, so we
        let it kiss the video edge with a small inset — translucent backdrop
        blur keeps it readable over either surface.
      */}
      {hasMultiple && (
        <>
          <div className="absolute left-1 sm:left-[5px] lg:left-[15px] top-1/2 -translate-y-1/2 z-10">
            {prevButton}
          </div>
          <div className="absolute right-1 sm:right-[5px] lg:right-[15px] top-1/2 -translate-y-1/2 z-10">
            {nextButton}
          </div>
        </>
      )}
    </div>
  );
}
