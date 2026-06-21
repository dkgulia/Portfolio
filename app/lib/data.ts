export const profile = {
  name: "Deepak Gulia",
  handle: "deepak.dev",
  tagline: "I build production-grade systems, end-to-end.",
  email: "deepakgulia0809@gmail.com",
  phone: "+91 70657 46203",
  phoneHref: "+917065746203",
  location: "New Delhi, India",
  website: "https://deepakgulia.online",
  github: "https://github.com/dkgulia",
  linkedin: "https://www.linkedin.com/in/deepak0809/",
  resume: "https://drive.google.com/file/d/1W5XQCAHp4v4oUtAiASRsn0nHRw_Yvooa/view?usp=sharing",
  intro:
    "Full-Stack Engineer architecting and operating production-grade systems in healthcare and e-commerce. I own large-scale Next.js, TypeScript, Fastify, PostgreSQL and AWS deployments — specializing in multi-tenant architecture, role-based access control, payments, and real-time systems.",
};

export const about = [
  "I'm a full-stack engineer who builds and operates production systems end-to-end — from multi-tenant database design and Fastify backends to AWS infrastructure and the React front-ends on top.",
  "Most recently I built an in-house Hospital Management System that replaced 5 third-party SaaS tools and serves 70+ daily staff across two branches, plus a LeadSquared-style CRM handling 67k+ leads and 777k+ messages. I own the full production AWS stack — Multi-AZ VPC, ALB, RDS with KMS encryption, and zero-downtime SSM deploys.",
  "I care about the unglamorous parts that make software trustworthy: RBAC and data isolation enforced down to every SQL query, idempotent migrations, end-to-end encryption, audit logging, and deploys that ship in under 90 seconds with no downtime.",
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  impact: string;
};

export const projects: Project[] = [
  {
    title: "Hospital Management System",
    subtitle: "Healthcare SaaS · In-house",
    description:
      "End-to-end HMS covering patient registry, appointments, treatment plans, tooth chart, billing, consents and a patient portal — replacing 5 third-party SaaS tools.",
    overview:
      "An in-house Hospital Management System built end-to-end to replace five separate third-party SaaS tools (Practo, Zoho, LeadSquared). It covers the full clinical and operational workflow — patient registry, appointments, treatment plans, an interactive tooth chart, billing, digital consents and a patient portal — and runs across two branches with strict branch-level data isolation, scaling toward a UAE launch.",
    technologies: ["Next.js 16", "React 19", "Redux Toolkit", "Fastify 5", "Node.js 20", "PostgreSQL 17", "AWS", "Socket.io", "libsodium"],
    features: [
      "Eight role-based portals (FOE, Doctor, HOD, Clinic Head, CEO, HR, Accounts, Marketing) on a single Next.js 16 / React 19 frontend",
      "Branch-level data isolation enforced from JWT down to every SQL query",
      "Full clinical suite: registry, appointments, treatment plans, tooth chart, billing, consents and patient portal",
      "Real-time staff chat with end-to-end encryption (Socket.io + libsodium)",
      "Production AWS stack: Multi-AZ VPC, ALB + ACM TLS, Multi-AZ RDS with KMS, Amplify SSR",
      "Zero-downtime deploys via tarball + S3 + SSM Run Command in under 90 seconds",
    ],
    challenges: [
      "Enforcing strict multi-tenant data isolation across branches with zero leaks",
      "Replacing five established SaaS tools with one platform staff would actually adopt",
      "Hardening sensitive healthcare data with encryption, audit logging, OTP and rate limiting",
      "Operating a full production AWS stack solo with zero-downtime requirements",
    ],
    learnings: [
      "Designing multi-tenant architecture and RBAC that scales to new branches",
      "Owning end-to-end AWS infrastructure with least-privilege IAM",
      "Building security-first systems with encryption and audit trails",
      "Shipping safely with idempotent migrations and automated deploys",
    ],
    liveUrl: "https://stunningdentistry.org/login",
    githubUrl: null,
    impact: "Replaced 5 SaaS tools · 70+ daily staff · 2 branches scaling to UAE.",
  },
  {
    title: "Align Agent",
    subtitle: "AI Automation · In Development",
    description:
      "A tool built with Next.js 15 and Playwright that scans live websites, finds SEO/GEO gaps, and proposes code changes via GitHub Pull Requests.",
    overview:
      "A product-focused automation tool that scans live websites, identifies SEO and GEO (generative-engine optimization) gaps, and proposes the actual code changes as GitHub Pull Requests. Built with Next.js 15 and Playwright, it authenticates with GitHub via OAuth2 and turns audits into ready-to-merge fixes.",
    technologies: ["Next.js 15", "Playwright", "TypeScript", "GitHub OAuth2", "OpenAI"],
    features: [
      "Crawls live sites with Playwright to extract metadata, structure and content signals",
      "Detects SEO/GEO gaps for AI search engines like ChatGPT, Perplexity and Claude",
      "Generates targeted code changes and opens them as GitHub Pull Requests",
      "GitHub OAuth2 authentication and repository access",
      "Free public SEO tooling",
    ],
    challenges: [
      "Reliably parsing and rendering arbitrary live websites",
      "Producing safe, targeted diffs that apply cleanly across project types",
      "Mapping audit findings to concrete, reviewable code changes",
    ],
    learnings: [
      "Browser automation at scale with Playwright",
      "Programmatic GitHub PR generation via OAuth2 and the GitHub API",
      "Designing AI-native developer tooling",
    ],
    liveUrl: "https://alignagent.online/",
    githubUrl: null,
    impact: "Automated SEO/GEO remediation delivered as GitHub PRs.",
  },
  {
    title: "IgniPC E-commerce Platform",
    subtitle: "Production B2C Platform",
    description:
      "Production B2C e-commerce platform serving 1,000+ products with a DFS-based PC Builder, AWS Cognito auth and PayU payments.",
    overview:
      "A production B2C e-commerce platform serving 1,000+ products across 15+ categories, with SEO-optimized routing, a custom PC Builder, secure authentication and integrated payments — operated on AWS with zero-downtime CI/CD.",
    technologies: ["Next.js 14", "TypeScript", "Fastify", "PostgreSQL", "AWS Cognito", "OpenSearch", "PayU", "CloudFront"],
    features: [
      "1,000+ products across 15+ categories with SEO-optimized routing",
      "PC Builder powered by a DFS-based compatibility algorithm (CPU, motherboard, RAM, GPU)",
      "AWS Cognito auth with Lambda triggers (Phone OTP via MSG91, Email/Password, JWT, RBAC)",
      "PayU payment integration with hash verification and price-locking",
      "Amazon OpenSearch full-text search with sub-100ms responses",
      "REST APIs with 70+ migrations, transactional safety and idempotency",
    ],
    challenges: [
      "Building a correct real-time component compatibility engine",
      "Guaranteeing transactional safety and idempotency across cart, order and inventory",
      "Keeping full-text search fast (sub-100ms) at catalog scale",
    ],
    learnings: [
      "Designing resilient commerce backends with Fastify and PostgreSQL",
      "Integrating payments securely with hash verification and price-locking",
      "Operating AWS infrastructure with zero-downtime CI/CD",
    ],
    liveUrl: "https://ignipc.com",
    githubUrl: null,
    impact: "1,000+ products · sub-100ms search · zero-downtime deploys.",
  },
  {
    title: "LeadSquared-style CRM",
    subtitle: "Sales CRM · In-house",
    description:
      "A LeadSquared-replacement CRM on an independent Fastify backend — 51 tables, 67k+ leads, 777k+ messages, with WATI/IVR sync.",
    overview:
      "A LeadSquared-replacement CRM built on an independent Fastify backend with its own PostgreSQL database — 51 tables holding 67k+ leads and 777k+ messages — with telephony integration and lead-management automation.",
    technologies: ["Fastify 5", "Node.js 20", "PostgreSQL 17", "Drizzle ORM", "WATI", "node-pg-migrate"],
    features: [
      "51-table schema managing 67k+ leads and 777k+ messages",
      "WATI / IVR call sync for omnichannel lead activity",
      "TAT (turnaround-time) alerts for lead follow-ups",
      "Independent Fastify backend with an isolated PostgreSQL database",
      "600MB Postgres 17 dump migration",
    ],
    challenges: [
      "Migrating a 600MB production dataset without downtime or data loss",
      "Modeling complex lead and message relationships across 51 tables",
      "Syncing telephony (WATI/IVR) events reliably",
    ],
    learnings: [
      "Large-scale data migration and schema design",
      "Integrating third-party telephony and messaging systems",
      "Building automation around SLAs and alerts",
    ],
    liveUrl: "https://stunningdentistry.org/login",
    githubUrl: null,
    impact: "51 tables · 67k+ leads · 777k+ messages migrated.",
  },
  {
    title: "BuildStack — AI PC Builder",
    subtitle: "SaaS Product",
    description:
      "AI PC builder with real-time compatibility checking across 5000+ parts, DeepSeek recommendations, wizards, templates and shareable builds.",
    overview:
      "An AI-powered PC builder that designs custom builds with real-time compatibility checking and intelligent recommendations across a 5,000+ part database — with guided wizards, templates, comparison and shareable links, all without requiring signup.",
    technologies: ["Next.js 14", "TypeScript", "Supabase", "DeepSeek AI", "Framer Motion", "Radix UI"],
    features: [
      "5,000+ components across 9 categories with real-time compatibility validation",
      "DeepSeek-driven recommendations with a heuristic fallback for reliability",
      "Guided wizards for Gaming / Editing / Coding / Office use cases",
      "120+ pre-built templates with budget-aware allocation",
      "Side-by-side comparison, shareable build links and bottleneck detection",
      "Zero-friction, no-signup access via Supabase Row-Level Security",
    ],
    challenges: [
      "Encoding hardware compatibility rules accurately (sockets, wattage, fit, thermals)",
      "Balancing AI recommendations with deterministic fallbacks",
      "Designing no-signup public access while keeping data secure",
    ],
    learnings: [
      "Building rules engines alongside AI suggestions",
      "Designing flexible JSONB schemas with fast filtered queries",
      "Reducing onboarding friction with RLS-based public access",
    ],
    liveUrl: "https://build-stack-lilac.vercel.app/",
    githubUrl: null,
    impact: "5000+ components with real-time compatibility validation and AI-powered builds.",
  },
];

export const skills = [
  {
    category: "Languages & Frontend",
    items: ["TypeScript", "JavaScript", "SQL", "Next.js 16", "React 19", "Redux Toolkit (RTK Query)", "Material-UI"],
  },
  {
    category: "Backend",
    items: ["Node.js 20", "Fastify 5", "Express.js", "REST APIs", "Socket.io", "Zod", "JWT", "RBAC", "Idempotency"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL 16/17", "MongoDB", "Drizzle ORM", "node-pg-migrate", "Indexing", "Query Optimization"],
  },
  {
    category: "AWS & DevOps",
    items: ["EC2", "RDS", "ALB", "Amplify", "KMS", "Secrets Manager", "Route 53", "S3", "IAM", "SSM", "CloudWatch", "Cognito", "Docker", "Nginx", "PM2", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Security",
    items: ["bcrypt", "AES-256-GCM", "libsodium", "OTP", "Audit Logging", "Zero-downtime deployments"],
  },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  url: string | null;
};

export const experiences: Experience[] = [
  {
    title: "Senior Full-Stack Developer",
    company: "Stunning Dentistry",
    period: "Feb 2026 — Present",
    location: "Delhi, India",
    description:
      "Building and operating an in-house healthcare platform — a full Hospital Management System and a LeadSquared-style CRM — end-to-end, from multi-tenant architecture to the production AWS stack.",
    achievements: [
      "Built an in-house HMS end-to-end (patient registry, appointments, treatment plans, tooth chart, billing, consents, patient portal), replacing 5 third-party SaaS tools and serving 70+ daily staff across 2 branches, scaling to 100+ for UAE launch.",
      "Shipped 8 role-based portals (FOE, Doctor, HOD, Clinic Head, CEO, HR, Accounts, Marketing) on a single Next.js 16 / React 19 / Redux Toolkit frontend with branch-level data isolation enforced from JWT down to every SQL query.",
      "Architected two independent Fastify (Node.js 20 / TypeScript) backends with isolated PostgreSQL databases — clinical HMS and a CRM (51 tables, 67k+ leads, 777k+ messages) — with 200+ idempotent SQL migrations via node-pg-migrate.",
      "Deployed and own the production AWS stack in ap-south-1: Multi-AZ VPC across 3 AZs, ARM EC2 behind a host-routed ALB with ACM TLS, Multi-AZ RDS with KMS encryption, Amplify SSR, Secrets Manager, Route 53, S3, IAM least-privilege, and SSM zero-SSH ops.",
      "Built real-time staff chat with end-to-end encryption (Socket.io + libsodium); hardened the platform with bcrypt + AES-256-GCM password vault, JWT revocation cache, email-OTP login, per-route rate limiting, RDS TLS, and audit logging.",
      "Designed a tarball + S3 + SSM Run Command pipeline shipping either backend in under 90 seconds with zero downtime; delivered the CRM with WATI/IVR call sync, TAT alerts, and a 600MB Postgres 17 dump migration.",
    ],
    technologies: ["Next.js 16", "React 19", "Redux Toolkit", "Fastify 5", "Node.js 20", "TypeScript", "PostgreSQL 17", "AWS", "Socket.io", "libsodium"],
    url: "https://stunningdentistry.org/login",
  },
  {
    title: "Software Engineer (Full-Stack)",
    company: "IgniPC",
    period: "Nov 2024 — Jan 2026",
    location: "New Delhi, India",
    description:
      "Developed and operated a production B2C e-commerce platform serving 1,000+ products, including a PC Builder with a real-time compatibility engine and full AWS infrastructure ownership.",
    achievements: [
      "Developed a production B2C e-commerce platform (Next.js 14, TypeScript, Fastify, PostgreSQL) serving 1,000+ products across 15+ categories with SEO-optimized routing.",
      "Implemented a PC Builder using a DFS-based compatibility algorithm validating CPU, motherboard, RAM and GPU combinations.",
      "Built secure authentication with AWS Cognito + Lambda triggers (Phone OTP via MSG91, Email/Password, JWT, RBAC) and REST APIs with 70+ migrations, transactional safety, and idempotency for cart, order, and inventory flows.",
      "Integrated PayU with hash verification and price-locking; implemented Amazon OpenSearch for full-text search with sub-100ms response times.",
      "Operated AWS (EC2, RDS, S3, CloudFront) with CI/CD for zero-downtime deployments.",
    ],
    technologies: ["Next.js 14", "TypeScript", "Fastify", "PostgreSQL", "AWS Cognito", "OpenSearch", "PayU", "CloudFront"],
    url: "https://ignipc.com",
  },
];

export const education = [
  {
    degree: "B.E. in Mechanical Engineering",
    school: "Chandigarh University",
    location: "Mohali, Punjab · 2018 — 2022",
  },
];

export const certifications = [
  "Node.js API Masterclass — Udemy",
  "Complete JavaScript Course — Professional Certificate",
  "React.js — Professional Certificate",
];

export const stats = [
  { value: "8", label: "Role-based portals shipped" },
  { value: "5", label: "SaaS tools replaced by one platform" },
  { value: "70+", label: "Daily staff on production systems" },
  { value: "1,000+", label: "E-commerce products served" },
  { value: "200+", label: "Idempotent SQL migrations" },
  { value: "<90s", label: "Zero-downtime deploys" },
];

export type SectionId =
  | "introduction"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "contact"
  | "stats";

export const sections: { id: SectionId; label: string }[] = [
  { id: "introduction", label: "Introduction" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills & Tools" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
  { id: "stats", label: "Stats" },
];
