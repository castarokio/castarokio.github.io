export type Accent = "blue" | "cyan" | "coral" | "yellow";

export interface Capability {
  title: string;
  label: string;
  description: string;
  accent: Accent;
}

export interface Project {
  name: string;
  category: string;
  role: string;
  description: string;
  challenge: string;
  outcome: string;
  stack: string[];
  image: string;
  accent: Accent;
  liveUrl?: string;
  sourceUrl?: string;
}

export const navItems = [
  { name: "Home", url: "#home" },
  { name: "Capabilities", url: "#capabilities" },
  { name: "Projects", url: "#projects" },
  { name: "Stack", url: "#stack" },
  { name: "Contact", url: "#contact" },
];

export const capabilities: Capability[] = [
  {
    label: "01 / Build",
    title: "Frontend Engineering",
    description:
      "Modern Next.js builds, reusable components, responsive systems, and performance-aware interfaces that stay maintainable.",
    accent: "blue",
  },
  {
    label: "02 / Experience",
    title: "UI / UX Direction",
    description:
      "Clear hierarchy, conversion flow, interaction design, motion, and mobile refinement that make a product feel intentional.",
    accent: "coral",
  },
  {
    label: "03 / Identity",
    title: "Brand & Identity Thinking",
    description:
      "Color discipline, tone, visual consistency, and brand thinking that keep the interface from feeling like a code demo.",
    accent: "yellow",
  },
  {
    label: "04 / Execution",
    title: "Launch-Ready Product Work",
    description:
      "Admin panels, forms, booking funnels, checkout logic, deployment, and the operational details products need to work.",
    accent: "cyan",
  },
];

export const projects: Project[] = [
  {
    name: "Maison Voyage",
    category: "Luxury tourism agency platform",
    role: "Product UX, frontend build, booking logic, visual direction",
    description:
      "A travel marketplace shaped around destination discovery, package details, guided booking, payment proof, and agency review.",
    challenge:
      "Keep the experience premium while making a multi-step booking and payment process easy to understand.",
    outcome:
      "A clearer booking funnel with stronger expectations and an admin-ready review model.",
    stack: ["Next.js", "Travel UX", "Booking Flow", "Brand System"],
    image: "/projects/maison-voyage.png",
    accent: "yellow",
    sourceUrl: "https://github.com/castarokio/maison-voyage-tourism-agency",
  },
  {
    name: "Floya Store",
    category: "E-commerce for a beauty brand",
    role: "Storefront UI, product presentation, responsive structure",
    description:
      "A bilingual beauty storefront with polished product presentation, calm browsing, and a premium mobile shopping rhythm.",
    challenge:
      "Balance visual softness with practical catalog scanning and responsive product discovery.",
    outcome:
      "A stronger storefront shell ready for products, campaigns, and catalog growth.",
    stack: ["Next.js", "Shadcn", "RTL", "Catalog UX"],
    image: "/projects/floya-store.png",
    accent: "coral",
    liveUrl: "https://floya-store-nine.vercel.app",
  },
  {
    name: "ScholarPath",
    category: "Education platform",
    role: "SaaS interface, funnel structure, payments-oriented UI",
    description:
      "A study-abroad and e-learning platform combining guidance, pricing, payments, and a credible SaaS product shell.",
    challenge:
      "Make a service-heavy education offer feel organized, trustworthy, and easy to explore.",
    outcome:
      "A clearer acquisition flow with stronger product cues and conversion-ready sections.",
    stack: ["Next.js 15", "Stripe", "SaaS UI", "Funnels"],
    image: "/projects/scholarpath.png",
    accent: "blue",
    liveUrl: "https://scholarpath-nine.vercel.app",
    sourceUrl: "https://github.com/castarokio/scholarpath",
  },
  {
    name: "Drop of Change",
    category: "Operational agency platform",
    role: "Workflow UX, admin structure, file and application flow",
    description:
      "A public-to-admin service workflow for applications, file uploads, review, and client communication.",
    challenge:
      "Turn a messy service process into a readable public journey and practical back office.",
    outcome:
      "A system that supports client intake, internal decisions, files, and follow-up in one flow.",
    stack: ["Supabase", "Admin", "Workflow", "Resend"],
    image: "/projects/drop-of-change.png",
    accent: "cyan",
    liveUrl: "https://drop-of-change.vercel.app",
    sourceUrl: "https://github.com/castarokio/drop-of-change",
  },
];

export const stackGroups = [
  {
    title: "Build",
    accent: "blue" as Accent,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    detail: "Fast, typed interfaces with a component system that can grow.",
  },
  {
    title: "Systems",
    accent: "cyan" as Accent,
    items: ["Supabase", "Prisma", "Auth", "Forms", "Operational flows"],
    detail: "The data, access, and workflow layers behind the visible product.",
  },
  {
    title: "Design",
    accent: "coral" as Accent,
    items: ["Brand identity", "UI motion", "Design tokens", "CRO awareness"],
    detail: "A coherent visual language instead of styling added at the end.",
  },
  {
    title: "Delivery",
    accent: "yellow" as Accent,
    items: ["Vercel", "Responsive QA", "Accessibility", "Performance", "Handoff"],
    detail: "The final polish and practical checks required to launch confidently.",
  },
];
