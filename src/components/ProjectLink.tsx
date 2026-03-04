"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

function FolderIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M3.5 5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H7.58579C7.851 4.5 8.10536 4.60536 8.29289 4.79289L9.70711 6.20711C9.89464 6.39464 10.149 6.5 10.4142 6.5H15.5C16.0523 6.5 16.5 6.94772 16.5 7.5V14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      className="group w-full text-left py-2 px-2 rounded-lg transition-colors hover:bg-bg-fill-hover"
    >
      <span className="flex items-center gap-3 transition-transform duration-300 ease-out group-hover:translate-x-2">
        <span className="text-icon">
          <FolderIcon />
        </span>
        <span className="text-body-sm text-text">{project.title}</span>
      </span>
    </motion.button>
  );
}
