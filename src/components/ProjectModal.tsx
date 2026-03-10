"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectSection } from "@/data/projects";
import ImageSlideshow from "./ImageSlideshow";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-[#000000]/25"
          onClick={onClose}
        >
          <div className="fixed inset-0 overflow-y-auto overscroll-contain">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, ease: "easeOut" }}
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
                  {/* Title */}
                  <h2 className="text-heading-xl pr-10">{project.title}</h2>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                    <MetaItem label="Role" value={project.role} />
                    <MetaItem label="Year" value={project.year} />
                    <MetaItem label="Company" value={project.company} />
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-body-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Image slideshow */}
                  {project.images.length > 0 && (
                    <div className="mt-6">
                      <ImageSlideshow images={project.images} />
                    </div>
                  )}

                  {/* Detail sections */}
                  {project.sections.length > 0 && (
                    <div className="mt-8 flex flex-col gap-4">
                      {project.sections.map((section) => (
                        <SectionBlock key={section.title} section={section} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <span className="text-body-sm text-text-secondary">
      <span className="text-text">{label}</span> — {value}
    </span>
  );
}

function SectionBlock({ section }: { section: ProjectSection }) {
  return (
    <div>
      <h3 className="text-heading">{section.title}</h3>
      {section.intro && (
        <p className="mt-2 text-body-sm text-text-secondary">{section.intro}</p>
      )}
      {section.bullets.length > 0 && (
        <ul className="mt-2 flex flex-col gap-1 list-disc pl-4">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="text-body-sm text-text-secondary">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
