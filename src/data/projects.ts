export interface Project {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Brand Identity System",
    icon: "◆",
    description: "Visual identity for a sustainable fashion label",
    details:
      "A comprehensive brand identity system including logo, typography, color palette, and guidelines. The project explored the intersection of minimalism and sustainability.",
    images: ["/images/project-1-a.jpg", "/images/project-1-b.jpg"],
  },
  {
    id: "project-2",
    title: "Editorial Layout",
    icon: "▲",
    description: "Art direction for an independent magazine",
    details:
      "Editorial design spanning 120 pages, balancing expressive typography with restrained white space. Each spread was designed to guide the reader through longform narratives.",
    images: ["/images/project-2-a.jpg", "/images/project-2-b.jpg"],
  },
  {
    id: "project-3",
    title: "Product Interface",
    icon: "●",
    description: "Dashboard experience for a fintech startup",
    details:
      "End-to-end UI/UX design for a financial analytics platform. The focus was on making complex data feel approachable through clear hierarchy and subtle motion.",
    images: ["/images/project-3-a.jpg", "/images/project-3-b.jpg"],
  },
  {
    id: "project-4",
    title: "Type Exploration",
    icon: "■",
    description: "Custom typeface for a cultural institution",
    details:
      "A variable typeface designed to reflect the institution's dual identity — historical roots and contemporary programming. Delivered in 4 weights with italic counterparts.",
    images: ["/images/project-4-a.jpg", "/images/project-4-b.jpg"],
  },
];
