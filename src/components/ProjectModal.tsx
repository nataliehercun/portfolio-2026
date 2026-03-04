"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import ImageSlideshow from "./ImageSlideshow";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-bg-fill border border-border rounded-lg p-6 shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text transition-colors text-body-sm"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-heading-xl text-icon">{project.icon}</span>
              <h2 className="text-heading-xl">{project.title}</h2>
            </div>

            <ImageSlideshow images={project.images} />

            <p className="mt-4 text-body-sm text-text-secondary">
              {project.details}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
