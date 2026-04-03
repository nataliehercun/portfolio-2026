"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    y: "100%",
    transition: {
      y: { duration: 0.3, ease: easeOut },
      opacity: { duration: 0.25, ease: easeOut },
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { duration: 0.55, ease: easeOut },
      opacity: { duration: 0.3, ease: easeOut },
    },
  },
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
                  rounded-none sm:rounded-xl
                  min-h-screen sm:min-h-0
                  max-w-none sm:max-w-[720px] lg:max-w-[1000px]
                "
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="
                    absolute top-4 right-4 z-10
                    w-8 h-8 flex items-center justify-center
                    rounded-full bg-bg-fill-hover
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
                  <div className="max-w-2xl">
                    {/* Title */}
                    <h2 className="text-heading-xl pr-10">{project.title}</h2>

                    {/* Description */}
                    <p className="mt-3 text-body-big text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-col gap-0.5 mt-3 text-body-sm text-text-tertiary">
                      <span>Role: {project.role}</span>
                      <span>{project.company} {project.year}</span>
                    </div>
                  </div>

                  {/* Image slideshow */}
                  {project.images.length > 0 && (
                    <div className="mt-6">
                      <ImageSlideshow
                        images={project.images}
                        backgroundColor={project.slideshowBackground}
                      />
                    </div>
                  )}

                  {/* Detail sections */}
                  {project.sections.length > 0 && (
                    <div className="mt-8 flex flex-col gap-6 max-w-2xl">
                      {project.sections.map((section) => (
                        <SectionBlock key={section.title} section={section} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ContentBlock({ block }: { block: SectionContent }) {
  if (block.type === "text") {
    return (
      <p className="mt-3 text-body-sm text-text-secondary">{block.value}</p>
    );
  }
  return (
    <ul className="mt-3 flex flex-col gap-1 list-disc pl-4">
      {block.value.map((bullet, i) => (
        <li
          key={i}
          className="text-body-sm text-text-secondary [&_a]:underline [&_a]:text-text hover:[&_a]:text-text-secondary"
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
            <p className="mt-3 text-body-sm text-text-secondary">{section.intro}</p>
          )}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1 list-disc pl-4">
              {section.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-body-sm text-text-secondary [&_a]:underline [&_a]:text-text hover:[&_a]:text-text-secondary"
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
