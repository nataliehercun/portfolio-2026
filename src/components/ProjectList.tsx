"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectLink from "./ProjectLink";
import ProjectModal from "./ProjectModal";

export default function ProjectList() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section>
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
    </section>
  );
}
