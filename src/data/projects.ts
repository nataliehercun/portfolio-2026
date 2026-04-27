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
  /** Hex background behind the modal image/video slideshow (letterboxing). */
  slideshowBackground?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "shopify-email",
    title: "Shopify Email",
    icon: "◆",
    description:
      "Designed and scaled a commerce first email marketing platform, helping merchants engage with their customers and grow their sales.",
    details:
      "A comprehensive brand identity system including logo, typography, color palette, and guidelines. The project explored the intersection of minimalism and sustainability.",
    role: "First designer on 0-1 MVP → Designer Lead",
    year: "2019-2023",
    company: "Shopify",
    images: ["/images/Shopify Email/shopify-email.mov"],
    slideshowBackground: "#550D00",
    sections: [
      {
        title: "Challenge",
        intro:
          "Marketing was consistently merchants’ biggest frustration, and while email marketing was a proven way to connect with customers in a crowded commerce landscape, many new merchants faced significant barriers to getting started."
      },
      {
        title: "Solution",
        content: [
          {
            type: "text",
            value:
              "Led design for Shopify’s native email marketing app, built from the ground up and integrated directly into Shopify Admin. Delivered an end-to-end tool that enables merchants to create, send, and measure campaigns inside Shopify.  At launch, the product included:",
          },
          {
            type: "bullets",
            value: [
              "Brand-generated templates auto-populated with store colours, logo, and products",
              "A flexible, Gmail-inspired WYSIWYG editor, with no rigid multi-step flow",
              "Deep integration with store data and domain-based sending",
              "Scheduling, basic segmentation, and built-in campaign analytics",
            ],
          },
          {
            type: "text",
            value:
              "The result: a scalable email marketing experience embedded directly within Shopify’s ecosystem.",
          },
        ],
      },
      {
        title: "Impact",
        bullets: [
          "After launch, I was a pillar in leading the product’s vision and growth, scaling it into a mature platform. I onboarded & mentored 10 new UX team members over time, and consistency fostered an environnement of learning, collaboration & impact.",
          "By the time I transitioned off the team, Shopify Email had 568K+ active senders and generated $896M in merchant GMV annually.",
          'Co-inventor on a <a href="https://patents.google.com/patent/US12106035B2/en?inventor=Natalie+Hercun" target="_blank" rel="noopener noreferrer">granted patent</a> for systems enabling dynamic generation of digital layouts and content experiences at scale.',
        ],
      },
    ],
  },
  {
    id: "ai-generated-content",
    title: "AI generated email content",
    icon: "▲",
    description:
      "Launched Shopify’s first AI-generated email tools, enabling merchants to create high-performing campaigns faster. ",
    details:
      "Editorial design spanning 120 pages, balancing expressive typography with restrained white space. Each spread was designed to guide the reader through longform narratives.",
    role: "Design Lead and project champion",
    year: "2023",
    company: "Shopify",
    images: ["/images/Email AI/ai-1.mov", "/images/Email AI/ai-2.mov"],
    slideshowBackground: "#EEA380",
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
          "Short term: Leverage LLMs to generate email subject lines and body text in order to reduce friction in email creation and improve campaign performance. Tightly partnered with the Shopify Magic team, that was responsible for developing broader Shopify AI patterns and principles. We brought in domain context, and co-creating patterns to insure scalability across the pattern.",
          "Long term: Explore and identify broader ways to use AI in email experience in order to guide project roadmap, and ressources.",
        ],  
      },
      {
        title: "Impact",
        bullets: [
          "Positive impact on open rates.",
          "By focusing on developping a shared component, we enabled teams to ship improvements quickly at scale, as well as developping a new recognizable pattern for users. ",
          'Contributed to the first iteration of <a href="https://www.shopify.com/ca/editions/summer2023?product=shopify-magic-featured" target="_blank" rel="noopener noreferrer">Shopify Magic</a> AI-powered features.',
          'Co-inventor on a <a href="https://patents.google.com/patent/US20250148191A1/en?inventor=Natalie+Hercun" target="_blank" rel="noopener noreferrer">published patent application</a> for keyword extraction to generate subject lines.',
        ],
      },
    ],
  },
  {
    id: "marketing-automations",
    title: "Marketing automations",
    icon: "●",
    description:
      "Designed a no-code automated email marketing platform, helping merchants engage with their customers and grow their sales.",
    details:
      "End-to-end UI/UX design for a financial analytics platform. The focus was on making complex data feel approachable through clear hierarchy and subtle motion.",
    role: "Senior Product Designer",
    year: "2020-2021",
    company: "Shopify",
    slideshowBackground: "#094F4D",
    images: [
      "/images/automations/automations-new/automations-home.png",
      "/images/automations/automations-new/automations-template.png",
      "/images/automations/automations-new/automations-flow.png",
      "/images/automations/automations-new/automations-email.png",
      "/images/automations/automations-new/automations-editor.png",
      "/images/automations/automations-new/automatioms-report.png",
    ],
    sections: [
      {
        title: "Challenge",
        bullets: [
          "Shopify did not offer customizable marketing email workflows.",
          "The only existing marketing automation was tedious to edit.",
          "Merchants were paying for 3rd party automated marketing services.",
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
    title: "1099k tax filling automation",
    icon: "■",
    description:
      "Simplified tax reporting by automating data collection and improving merchant communication at scale.",
    details:
      "Simplified tax reporting by automating data collection and improving merchant communication at scale.",
    role: "Staff Product Designer",
    year: "2025",
    company: "Shopify",
    images: ["/images/payments/Payments.mov"],
    slideshowBackground: "#CEEAF5",
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
          "The 1099-K process was highly manual and error-prone—requiring merchants to handle paperwork and support teams to manually verify and update sensitive tax information.",
          "Reporting was fragmented and unreliable, leading to repeated corrections, heavy operational toil, and forms delivered dangerously close to the Internal Revenue Service deadline.",
        ],
      },
      {
        title: "Solution",
        intro:
          "We designed an automated 1099-K experience focusing on streamlined checks, self-service, and proactive communication.",
        bullets: [
          "Streamlined check services across platforms",
          "Self-serve remediation flow through the Profile Assessment platform: faster for merchants to input information, and more accurate information storing on the Shopify side.",
          "New 1099-K download pages within the Finance section of admin: easier to find.",
          "Proactive communications (emails, alerts, notifications) to guide merchants on timelines & consequences.",
          "Consolidated reporting across multiple payment processors.",
        ],
      },
      {
        title: "Impact",
        bullets: [
          "Reduced operational burden and support cost.",
          "Improved compliance readiness, data aggregation, and form delivery timeline (most delivered by January 31 instead of March).",
        ],
      },
    ],
  },
];
