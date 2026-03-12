export interface ProjectSection {
  title: string;
  intro?: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  role: string;
  year: string;
  company: string;
  images: string[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "shopify-email",
    title: "Shopify Email",
    icon: "◆",
    description:
      "A comprehensive brand identity system including logo, typography, color palette, and guidelines. The project explored the intersection of minimalism and sustainability.",
    details:
      "A comprehensive brand identity system including logo, typography, color palette, and guidelines. The project explored the intersection of minimalism and sustainability.",
    role: "Product Designer",
    year: "2024",
    company: "Shopify",
    images: ["/images/project-1-a.jpg", "/images/project-1-b.jpg"],
    sections: [
      {
        title: "Challenge",
        intro:
          "In January 2023, with the rise of AI's potential in generating content, our team was tasked with exploring the following questions:",
        bullets: [
          "What kind of merchant problems can AI solve in the contexte of email marketing?",
          "What are some initiatives we could ship quickly and learn from?",
          "What are bigger opportunities worth exploring?",
        ],
      },
      {
        title: "Solution",
        bullets: [
          "First milestone: Leverage LLMs to generate email subject lines and body text in order to reduce friction in email creation and improve campaign performance",
          "Tightly partnered with the Shopify Magic team, that was responsible for developing broader Shopify AI patterns and principles. We brought in domain context, and co-creating patterns to insure scalability across the pattern",
          "Future thinking: Explore and identify broader ways to use AI in email experience in order to guide project roadmap, and ressources.",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Positive impact on open rates",
          "Developing a shared pattern enabled us to ship improvements and next versions quickly across the platform",
          "Contributed to the first iterating of AI content generation features at Shopify.",
          "Our team was called out as a successful collaboration case study.",
          "Laid the foundation for how to think about AI & email, which lead to many new product launched",
        ],
      },
      {
        title: "Bonus",
        bullets: [
          "Positive impact on open rates",
          "Developing a shared pattern enabled us to ship improvements and next versions quickly across the platform",
          "Contributed to the first iterating of AI content generation features at Shopify.",
          "Our team was called out as a successful collaboration case study.",
          "Laid the foundation for how to think about AI & email, which lead to many new product launched",
        ],
      },
    ],
  },
  {
    id: "ai-generated-content",
    title: "AI generated content for email",
    icon: "▲",
    description:
      "Editorial design spanning 120 pages, balancing expressive typography with restrained white space. Each spread was designed to guide the reader through longform narratives.",
    details:
      "Editorial design spanning 120 pages, balancing expressive typography with restrained white space. Each spread was designed to guide the reader through longform narratives.",
    role: "Product Designer",
    year: "2024",
    company: "Shopify",
    images: ["/images/project-2-a.mov", "/images/project-2-b.png", "/images/project-2-c.png"],
    sections: [
      {
        title: "Challenge",
        intro:
          "In January 2023, with the rise of AI's potential in generating content, our team was tasked with exploring the following questions:",
        bullets: [
          "What kind of merchant problems can AI solve in the contexte of email marketing?",
          "What are some initiatives we could ship quickly and learn from?",
          "What are bigger opportunities worth exploring?",
        ],
      },
      {
        title: "Solution",
        bullets: [
          "First milestone: Leverage LLMs to generate email subject lines and body text in order to reduce friction in email creation and improve campaign performance",
          "Tightly partnered with the Shopify Magic team, that was responsible for developing broader Shopify AI patterns and principles. We brought in domain context, and co-creating patterns to insure scalability across the pattern",
          "Future thinking: Explore and identify broader ways to use AI in email experience in order to guide project roadmap, and ressources.",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Positive impact on open rates",
          "Developing a shared pattern enabled us to ship improvements and next versions quickly across the platform",
          "Contributed to the first iterating of AI content generation features at Shopify.",
          "Our team was called out as a successful collaboration case study.",
          "Laid the foundation for how to think about AI & email, which lead to many new product launched",
        ],
      },
      {
        title: "Bonus",
        bullets: [
          "Positive impact on open rates",
          "Developing a shared pattern enabled us to ship improvements and next versions quickly across the platform",
          "Contributed to the first iterating of AI content generation features at Shopify.",
          "Our team was called out as a successful collaboration case study.",
          "Laid the foundation for how to think about AI & email, which lead to many new product launched",
        ],
      },
    ],
  },
  {
    id: "marketing-automations",
    title: "Marketing automations",
    icon: "●",
    description:
      "End-to-end UI/UX design for a financial analytics platform. The focus was on making complex data feel approachable through clear hierarchy and subtle motion.",
    details:
      "End-to-end UI/UX design for a financial analytics platform. The focus was on making complex data feel approachable through clear hierarchy and subtle motion.",
    role: "Product Designer",
    year: "2023",
    company: "Shopify",
    images: [
      "/images/automations/automations-quick-visual.png",
      "/images/automations/automations-main.mp4",
      "/images/automations/automations-marketing-home.png",
      "/images/automations/automations-template-picker.png",
      "/images/automations/automations-flow.png",
      "/images/automations/automations-email-card.png",
      "/images/automations/automations-editor.png",
      "/images/automations/automations-report.png",
    ],
    sections: [
      {
        title: "Challenge",
        intro:
          "In January 2023, with the rise of AI's potential in generating content, our team was tasked with exploring the following questions:",
        bullets: [
          "What kind of merchant problems can AI solve in the contexte of email marketing?",
          "What are some initiatives we could ship quickly and learn from?",
          "What are bigger opportunities worth exploring?",
        ],
      },
      {
        title: "Solution",
        bullets: [
          "First milestone: Leverage LLMs to generate email subject lines and body text in order to reduce friction in email creation and improve campaign performance",
          "Tightly partnered with the Shopify Magic team, that was responsible for developing broader Shopify AI patterns and principles. We brought in domain context, and co-creating patterns to insure scalability across the pattern",
          "Future thinking: Explore and identify broader ways to use AI in email experience in order to guide project roadmap, and ressources.",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Positive impact on open rates",
          "Developing a shared pattern enabled us to ship improvements and next versions quickly across the platform",
          "Contributed to the first iterating of AI content generation features at Shopify.",
          "Our team was called out as a successful collaboration case study.",
          "Laid the foundation for how to think about AI & email, which lead to many new product launched",
        ],
      },
    ],
  },
  {
    id: "shopify-payments-1099k",
    title: "Shopify Payments 1099k tax filling automation",
    icon: "■",
    description:
      "A variable typeface designed to reflect the institution's dual identity — historical roots and contemporary programming. Delivered in 4 weights with italic counterparts.",
    details:
      "A variable typeface designed to reflect the institution's dual identity — historical roots and contemporary programming. Delivered in 4 weights with italic counterparts.",
    role: "Product Designer",
    year: "2023",
    company: "Shopify",
    images: [
      "/images/payments/payments-comms.png",
      "/images/payments/payments-settings.png",
    ],
    sections: [
      {
        title: "Challenge",
        intro:
          "In January 2023, with the rise of AI's potential in generating content, our team was tasked with exploring the following questions:",
        bullets: [
          "What kind of merchant problems can AI solve in the contexte of email marketing?",
          "What are some initiatives we could ship quickly and learn from?",
          "What are bigger opportunities worth exploring?",
        ],
      },
      {
        title: "Solution",
        bullets: [
          "First milestone: Leverage LLMs to generate email subject lines and body text in order to reduce friction in email creation and improve campaign performance",
          "Tightly partnered with the Shopify Magic team, that was responsible for developing broader Shopify AI patterns and principles. We brought in domain context, and co-creating patterns to insure scalability across the pattern",
          "Future thinking: Explore and identify broader ways to use AI in email experience in order to guide project roadmap, and ressources.",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Positive impact on open rates",
          "Developing a shared pattern enabled us to ship improvements and next versions quickly across the platform",
          "Contributed to the first iterating of AI content generation features at Shopify.",
          "Our team was called out as a successful collaboration case study.",
          "Laid the foundation for how to think about AI & email, which lead to many new product launched",
        ],
      },
    ],
  },
];
