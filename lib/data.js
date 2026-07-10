export const profile = {
  name: "Muhammad Hamza",
  role: "Frontend Developer",
  location: "Lahore, Pakistan",
  email: "muhammadhamzase2@gmail.com",
  phone: "+92 319-1538407",
  github: "https://github.com/HamzaSE007",
  linkedin: "https://www.linkedin.com/in/its-hamza/",
  resumeUrl: "/resume.pdf",
  tagline:
    "I build fast, real-time interfaces for systems that can't afford to lag — charging networks, live compute pipelines, and the dashboards people trust to be right.",
  summary:
    "Frontend Developer at Gigalabs, Lahore, currently completing a BS in Software Engineering at Virtual University of Pakistan. I work primarily in Next.js and React, shipping production interfaces for multi-portal platforms and real-time, WebSocket-driven systems.",
};

export const status = {
  role: "Frontend Developer @ Gigalabs",
  availability: "Open to select opportunities",
};

export const skills = [
  { name: "React.js", group: "core" },
  { name: "Next.js", group: "core" },
  { name: "JavaScript (ES6+)", group: "core" },
  { name: "HTML5", group: "core" },
  { name: "CSS3 / Tailwind", group: "core" },
  { name: "Express.js", group: "backend" },
  { name: "MongoDB", group: "backend" },
  { name: "REST APIs", group: "backend" },
  { name: "WebSocket / STOMP", group: "realtime" },
  { name: "React Hook Form + Zod", group: "core" },
  { name: "Git & GitHub", group: "tooling" },
  { name: "Agile Workflow", group: "tooling" },
];

export const experience = [
  {
    period: "2025 — Present",
    title: "Frontend Developer",
    org: "Gigalabs, Lahore",
    detail:
      "Converted from intern to full-time. Building production UI for multi-portal, real-time platforms in Next.js — including a dual-backend SR&ED claim system and an EV-charging contractor network.",
  },
  {
    period: "2024 — 2025",
    title: "Frontend Development Intern",
    org: "Gigalabs, Lahore",
    detail:
      "Onboarded onto live client codebases, shipped UI fixes and new form flows under senior review, and learned the team's REST + WebSocket conventions.",
  },
];

export const education = [
  {
    period: "2022 — Present",
    title: "BS Software Engineering (7th Semester)",
    org: "Virtual University of Pakistan",
  },
  {
    period: "2019 — 2021",
    title: "ICS — Physics & Computer",
    org: "Standard Group of Colleges",
  },
];

export const certifications = [
  { name: "MERN Stack — E-commerce", org: "Expert", year: "2025" },
  { name: "Front-End Development", org: "Coursera", year: "2024" },
  { name: "Mobile App Development", org: "NAVTTC", year: "2023" },
];

export const projects = [
  {
    slug: "sredible",
    name: "Sredible",
    kicker: "SR&ED claim platform",
    status: "In production",
    oneLiner:
      "Browser UI for a dual-backend SR&ED claims platform — REST for domain data, a direct STOMP WebSocket for real-time calculations and form edits.",
    role: "Frontend Developer — owns claim-entry forms and the real-time compute layer.",
    problem:
      "SR&ED claim preparation involves live calculations across employee allocations, projects, and workbook rules that need to update instantly as consultants and claimants edit data together — a plain REST cycle would feel laggy and could desync between collaborators.",
    approach: [
      "Built the Next.js App Router frontend that talks to two backends: a NestJS REST gateway for auth, billing and documents, and a Java Core service for live compute over a single STOMP connection.",
      "Implemented CoreWebSocketProvider and a useCoreWebSocket hook so claim-entry pages mount a live socket, publish mutations to /app/compute, and subscribe to /user/queue/results without ad-hoc socket handling scattered across pages.",
      "Wrote form-to-socket mappers that translate UI actions (project edits, employee allocations) into the exact payload shape the Java service expects, keeping domain logic out of components.",
      "Handled httpOnly-cookie auth with same-origin API calls and a proactive session-refresh route, plus JWT hand-off for the WebSocket handshake via a dedicated ws-token endpoint.",
      "Coordinated Mongo snapshot sync (SectionMongoSync) so a live-edited session correctly reconciles with persisted claim documents once Java Core flushes state back to the REST layer.",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "@stomp/stompjs", "React Hook Form", "Zod", "Firebase FCM"],
    highlights: [
      "Single real-time channel serving both SRED calculations and live project/employee form edits.",
      "Zero ad-hoc WebSocket connections — every real-time feature goes through one provider/hook pair.",
      "Role-scoped dashboards for claimants, technical & financial consultants, enterprise admins, and platform admins.",
    ],
  },
  {
    slug: "electric-avenue",
    name: "Electric Avenue",
    kicker: "EV charging network platform",
    status: "In production",
    oneLiner:
      "Two-portal Next.js platform for an EV-charging operator: a contractor portal for installers and an admin portal for the operator's back office.",
    role: "Frontend Developer — built both portals end to end.",
    problem:
      "The operator needed contractors who install charging pumps to register themselves, get approved, and invoice for completed installs — while the operator's team needed visibility and control over that whole pipeline from a separate admin surface.",
    approach: [
      "Built a contractor portal covering registration, profile/document verification status, install tracking per charging pump, and invoice submission.",
      "Built a parallel admin portal for reviewing contractor applications, tracking installed pump inventory, and approving or querying submitted invoices.",
      "Structured both portals as separate Next.js route groups sharing a common component and form-validation layer, so contractor-facing and admin-facing UI stay visually consistent without duplicating logic.",
      "Designed the invoicing flow so contractors can submit an invoice tied to a specific install, with clear status states (submitted, under review, approved, paid) surfaced on both sides.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "REST APIs", "React Hook Form"],
    highlights: [
      "One codebase, two role-scoped portals with a shared design system.",
      "Full install-to-invoice lifecycle visible on both the contractor and admin side.",
      "Status-driven UI so contractors always know where an application or invoice stands.",
    ],
  },
];

export const personalProjects = [
  {
    name: "Responsive eCommerce Website",
    detail:
      "Storefront built with React, Tailwind CSS and Next.js — dynamic product listings, client-side routing, and a cart structured for future feature growth.",
    stack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Weather App",
    detail:
      "Real-time weather app pulling live conditions and forecasts from a public weather API.",
    stack: ["HTML", "SCSS", "JavaScript"],
  },
];
