export type SectionContent =
  | { type: "text"; value: string }
  | { type: "bullets"; value: string[] };

export interface ProjectSection {
  title: string;
  intro?: string;
  bullets?: string[];
  content?: SectionContent[];
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
      "Designed, launched and evolved a commerce first email marketing platform that helped merchants engage with customers and grow sales.",
    details:
      "A comprehensive brand identity system including logo, typography, color palette, and guidelines. The project explored the intersection of minimalism and sustainability.",
    role: "First designer on 0-1 MVP → Designer Lead",
    year: "2019-2023",
    company: "Shopify",
    images: [
      "/images/Shopify Email/template-library.png",
      "/images/Shopify Email/Editor.png",
      "/images/Shopify Email/editor-add-section.png",
      "/images/Shopify Email/editor-edit-section.png",
    ],
    sections: [
      {
        title: "Challenge",
        intro:
          "Marketing was consistently merchants’ biggest frustration, and while email marketing was a proven way to connect with customers in a crowded commerce landscape, many new merchants faced significant barriers to getting started."
      },
      {
        title: "Solution",
        intro:
          "Led design for Shopify’s native email marketing app, built from the ground up and integrated directly into Shopify Admin. Delivered an end-to-end tool that enables merchants to create, send, and measure campaigns inside Shopify.  At launch, the product included:",
        bullets: [
          "Brand-generated templates auto-populated with store colours, logo, and products",
          "A flexible, Gmail-inspired WYSIWYG editor, with no rigid multi-step flow",
          "Deep integration with store data and domain-based sending",
          "Scheduling, basic segmentation, and built-in campaign analytics",
          "The result: a scalable email marketing experience embedded directly within Shopify’s ecosystem.",
        ],
      },
      {
        title: "Product growth and evolution",
        intro:
          "After launch, I was a pillar in leading the product’s vision and growth,  scaling it into a mature platform. I onboarded & mentored 10 new UX team members over time, and consistency fostered an environnement of learning, collaboration & impact.",
      },
      {
        title: "Impact",
        bullets: [
          " As of July 2023, there were 352k active senders across email & automations, generating 73M in GMV.",
          " For all of 2023, those products generated $896M in GMV. We doubled sending from the beginning of the year, where we hit 568k",
          " We drove over $5M in revenue around that time, which was a 54% YOY growth ",
        ],
      },
    ],
  },
  {
    id: "ai-generated-content",
    title: "AI generated content for email",
    icon: "▲",
    description:
      "Designed and launched AI generated subject lines & text for email marketing, contributing to the first iteration of AI content generation at Shopify.",
    details:
      "Editorial design spanning 120 pages, balancing expressive typography with restrained white space. Each spread was designed to guide the reader through longform narratives.",
    role: "Design Lead and project champion",
    year: "2023",
    company: "Shopify",
    images: ["/images/Email AI/project-2-a.mov", "/images/Email AI/project-2-b.png", "/images/Email AI/project-2-c.png"],
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
          "Short term: Leverage LLMs to generate email subject lines and body text in order to reduce friction in email creation and improve campaign performance. Tightly partnered with the Shopify Magic team, that was responsible for developing broader Shopify AI patterns and principles. We brought in domain context, and co-creating patterns to insure scalability across the pattern",
          "Long term: Explore and identify broader ways to use AI in email experience in order to guide project roadmap, and ressources.",
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
    id: "marketing-automations",
    title: "Marketing automations",
    icon: "●",
    description:
      "Designed, launched and evolved a no-code automated email marketing platform that helped merchants enge with customers and grow sales.",
    details:
      "End-to-end UI/UX design for a financial analytics platform. The focus was on making complex data feel approachable through clear hierarchy and subtle motion.",
    role: "Senior Product Designer",
    year: "2020-2021",
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
        bullets: [
          "Shopify did not offer customizable marketing email workflows",
          "The only available marketing automation was an abandoned checkout flow, and editing the emails was clunky and required coding experience",
          "Merchants were paying for 3rd party automated marketing services",
        ],
      },
      {
        title: "Solution",
        intro:
          "I collaborated with multiples designers and cross-functional teams to design an automated email marketing platform. The plateforme integrated functionality from 2 existing apps into a cohesive experience that offered:",
        bullets: [
          "A library of marketing automation templates",
          "No coding email editing",
          "Customizable workflow builder",
          "Metrics and reporting to help merchants monitor and improve their automated emails",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "I was responsible for the initial strategy & aiming of the product. The foundation I etablished through collaboritive workshops & clear communication directely contributed to strong alignement with leadership on the product's vision & roadmap. It set the tone for how sisters teams would work together efficiently. ",
          "After a successful launch, I onboarded a new team lead. The foundation I estbalished in terms of team dynamics contributed a a successfull scaling of the team. ",
        ],
      },
    ],
  },
  {
    id: "shopify-payments-1099k",
    title: "Shopify Payments 1099k tax filling automation",
    icon: "■",
    description:
      "Designed and delivered an improved 1099-K filing experience for merchants using Shopify Payments by automating tax data collection, improved communication, and timely form delivery.",
    details:
      "Designed and delivered an improved 1099-K filing experience for merchants using Shopify Payments by automating tax data collection, improved communication, and timely form delivery.",
    role: "Staff Product Designer",
    year: "2025",
    company: "Shopify",
    images: [
      "/images/payments/payments-comms.png",
      "/images/payments/payments-settings.png",
    ],
    sections: [
      {
        title: "Context",
        bullets: [
          "A Taxpayer Identification Number (TIN) is a unique number assigned by a regulator such as the Internal Revenue Service (IRS) to identify a legal entity for tax reporting.",
          "TINs are required on tax reporting forms like the 1099-K, which Shopify must issue to merchants who exceed federal reporting thresholds. Merchants submit this information when filing taxes.",
          "TINs are collected during Shopify Payments onboarding. Before issuing 1099-K forms, Shopify must confirm the TIN is still accurate.",
        ],
      },
      {
        title: "Challenge",
        bullets: [
          "Prior to this project, the 1099-K process was highly manual and error-prone for both merchants and internal teams.",
          "Support had to contact merchants with incorrect TINs, and merchants had to download physical forms, print them, sign them, take photos, and upload them for review. Support teams then manually validated data and updated internal systems.",
          "Transactions across multiple stores or processors were not consistently aggregated, leading to inaccurate reporting and repeated update requests.",
          "This caused a lot of toil, causing forms to be delivered as late as March — leaving little buffer before the April IRS deadline.",
        ],
      },
      {
        title: "Solution",
        intro:
          "We designed an automated 1099-K experience focusing on streamlined checks, self-service, and proactive communication.",
        bullets: [
          "Streamlined check services across platforms",
          "Self-serve remediation flow through the Profile Assessment platform: faster for merchants to input information, and more accurate information storing on the Shopify side",
          "New 1099-K download pages within the Finance section of admin: easier to find",
          "Proactive communications (emails, alerts, notifications) to guide merchants on timelines & consequences",
          "Consolidated reporting across multiple payment processors",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Reduced operational burden and support cost",
          "Improved compliance readiness, data aggregation, and form delivery timeline (most delivered by January 31 instead of March)",
        ],
      },
    ],
  },
];
