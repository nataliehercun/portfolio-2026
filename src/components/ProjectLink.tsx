"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectLinkProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectLink({
  project,
  index,
  onSelect,
}: ProjectLinkProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
      onClick={() => onSelect(project)}
      className="group flex items-start gap-3 w-full text-left py-3 border-b border-border last:border-0 transition-colors hover:bg-bg-fill-hover rounded-sm px-1 -mx-1"
    >
      <span className="text-body-big text-icon mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
        {project.icon}
      </span>
      <div>
        <span className="text-heading">{project.title}</span>
        <p className="text-caption text-text-secondary mt-0.5">
          {project.description}
        </p>
      </div>
    </motion.button>
  );
}
