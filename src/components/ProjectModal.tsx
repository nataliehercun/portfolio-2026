"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer } from "vaul";
import { Project, ProjectSection, SectionContent } from "@/data/projects";
import ImageSlideshow from "./ImageSlideshow";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const easeOut: [number, number, number, number] = [0.36, 0.66, 0, 1];

const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2, ease: easeOut },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: easeOut,
    },
  },
};

// Use the Vaul bottom sheet everywhere below `lg` (1024px) — matches the
// Molly Studio pattern where the sheet covers phone, tablet, and small-laptop
// widths and the centered modal is reserved for true desktop.
const SHEET_BREAKPOINT = 1024;

function useIsBelowBreakpoint(breakpoint: number) {
  // Default to false on server / first render so desktop-first markup hydrates
  // consistently. The modal is never open on first paint, so there is no
  // hydration mismatch risk.
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsBelow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isBelow;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const useSheet = useIsBelowBreakpoint(SHEET_BREAKPOINT);

  if (useSheet) {
    return <SheetModal project={project} onClose={onClose} />;
  }

  return <DesktopModal project={project} onClose={onClose} />;
}

/* ------------------------------------------------------------------ */
/* Mobile + tablet: iOS-style bottom sheet (Vaul)                     */
/* ------------------------------------------------------------------ */

function SheetModal({ project, onClose }: ProjectModalProps) {
  return (
    <Drawer.Root
      open={!!project}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/15" />
        <Drawer.Content
          aria-describedby={undefined}
          className="
            fixed bottom-0 left-0 right-0 z-50
            flex h-[97dvh] flex-col
            rounded-t-[16px]
            bg-bg-fill
            shadow-[0_-8px_32px_-4px_rgba(0,0,0,0.12)]
            outline-none
            focus:outline-none
          "
        >
          {/* Drag handle */}
          <div className="flex-shrink-0 pt-2.5 pb-1.5 cursor-grab active:cursor-grabbing">
            <div className="mx-auto h-[5px] w-[40px] rounded-full bg-text-tertiary" />
          </div>

          {/* Close button (visible on non-touch, larger screens) */}
          <button
            onClick={onClose}
            className="
              hidden md:flex
              absolute top-4 right-4 z-10
              w-8 h-8 items-center justify-center
              rounded-full bg-bg-fill-hover hover:bg-bg-fill-selected
              text-text-secondary hover:text-text
              transition-colors duration-150
            "
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="px-5 pt-3 pb-12 md:px-10 md:pt-10 md:pb-16 mx-auto w-full max-w-2xl">
              {project && (
                <>
                  <Drawer.Title className="sr-only">{project.title}</Drawer.Title>
                  <Drawer.Description className="sr-only">
                    {project.description}
                  </Drawer.Description>
                  <ProjectBody project={project} />
                </>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop: centered modal                                            */
/* ------------------------------------------------------------------ */

function DesktopModal({ project, onClose }: ProjectModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (project) {
      document.documentElement.style.overflow = "hidden";
    }
  }, [project]);

  const unlockScroll = useCallback(() => {
    document.documentElement.style.overflow = "";
  }, []);

  useEffect(() => {
    return () => unlockScroll();
  }, [unlockScroll]);

  return (
    <AnimatePresence onExitComplete={unlockScroll}>
      {project && (
        <motion.div key="modal" className="fixed z-50" initial="hidden" animate="visible" exit="hidden">
          <motion.div
            variants={overlayVariants}
            className="fixed inset-0 z-50 bg-[#000000]/25"
            onClick={onClose}
          />

          <motion.div
            variants={panelVariants}
            className="fixed inset-0 z-50 overflow-y-auto overscroll-contain"
            onClick={onClose}
          >
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 md:p-10">
              <div
                onClick={(e) => e.stopPropagation()}
                className="
                  relative w-full bg-bg-fill border border-border shadow-lg
                  rounded-xl
                  max-w-[720px] lg:max-w-[1000px]
                "
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="
                    absolute top-4 right-4 z-10
                    w-8 h-8 flex items-center justify-center
                    rounded-full bg-bg-fill hover:bg-bg-fill-hover
                    text-text-secondary hover:text-text
                    transition-colors duration-150
                  "
                  aria-label="Close"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L13 13M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div className="p-6 sm:p-8 lg:p-10">
                  <ProjectBody project={project} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Shared body content                                                */
/* ------------------------------------------------------------------ */

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <div className="max-w-2xl">
        <h2 className="text-heading-2xl pr-10">{project.title}</h2>

        <p className="mt-2 text-body-big text-text-secondary">
          {project.description}
        </p>

        <p className="mt-4 text-body-sm text-text-tertiary">
          {project.role} | {project.company} {project.year}
        </p>
      </div>

      {project.images.length > 0 && (
        <div className="mt-8">
          <ImageSlideshow
            images={project.images}
            backgroundColor={project.slideshowBackground}
          />
        </div>
      )}

      {project.sections.length > 0 && (
        <div className="mt-8 flex flex-col gap-6 max-w-2xl">
          {project.sections.map((section) => (
            <SectionBlock key={section.title} section={section} />
          ))}
        </div>
      )}
    </>
  );
}

function ContentBlock({ block }: { block: SectionContent }) {
  if (block.type === "text") {
    return (
      <p
        className="mt-3 text-body-sm text-text-secondary [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:text-text [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-bg-fill-brand"
        dangerouslySetInnerHTML={{ __html: block.value }}
      />
    );
  }
  return (
    <ul className="mt-3 flex flex-col gap-1 list-disc pl-4">
      {block.value.map((bullet, i) => (
        <li
          key={i}
          className="text-body-sm text-text-secondary [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:text-text [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-bg-fill-brand"
          dangerouslySetInnerHTML={{ __html: bullet }}
        />
      ))}
    </ul>
  );
}

function SectionBlock({ section }: { section: ProjectSection }) {
  return (
    <div>
      <h3 className="text-heading">{section.title}</h3>
      {section.content ? (
        section.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))
      ) : (
        <>
          {section.intro && (
            <p
              className="mt-3 text-body-sm text-text-secondary [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:text-text [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-bg-fill-brand"
              dangerouslySetInnerHTML={{ __html: section.intro }}
            />
          )}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1 list-disc pl-4">
              {section.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-body-sm text-text-secondary [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:text-text [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-bg-fill-brand"
                  dangerouslySetInnerHTML={{ __html: bullet }}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
