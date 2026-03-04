"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectLink from "./ProjectLink";
import ProjectModal from "./ProjectModal";

export default function ProjectList() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.65, ease: "linear" }}
      className="flex flex-col gap-[3px]"
    >
      <h2 className="text-heading">Selected work</h2>
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectLink
            key={project.id}
            project={project}
            index={i}
            onSelect={setSelected}
          />
        ))}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </motion.section>
  );
}
