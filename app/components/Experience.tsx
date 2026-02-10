'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

const experiences = [
  {
    title: "Founder & Full Stack Developer",
    company: "Align",
    period: "January 2025 — Present",
    location: "New Delhi",
    description: "Building an AI-powered freemium SEO platform that helps developers optimize websites for AI search engines like ChatGPT, Perplexity, and Claude. Align automatically scans sites, detects SEO issues, and creates GitHub PRs with AI-generated fixes.",
    achievements: [
      "Architected a smart site scanner using Cheerio and Puppeteer that crawls pages to extract metadata, OpenGraph tags, JSON-LD structured data, and heading hierarchy",
      "Built an AI-powered PR generator that detects project type (Next.js, React, HTML) and produces targeted code diffs using DeepSeek, OpenAI, and Anthropic APIs",
      "Designed a 4-tab dashboard (X-Ray, Schema, AI Readiness, Authority) with a 3-panel layout for site management, scan results, and fix controls",
      "Implemented end-to-end issue-to-PR tracking with GitHub webhook sync and verification scans to confirm fixes post-merge",
      "Integrated Clerk authentication, Supabase PostgreSQL database with migrations, and GitHub App (Octokit) for seamless repo access and PR creation",
      "Developed free public SEO tools including X-Ray scanner, Schema checker, Compare tool, and Authority Map"
    ],
    technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Zustand", "Clerk", "OpenAI", "GitHub App", "Puppeteer"]
  },
  {
    title: "Founder & Full Stack Developer",
    company: "BuildStack",
    period: "December 2024 — Present",
    location: "New Delhi",
    description: "Built an AI-powered PC builder SaaS that helps users design custom PC builds with real-time compatibility checking, AI-driven component recommendations, and a database of 5000+ parts across 9 categories.",
    achievements: [
      "Developed a real-time compatibility engine that validates CPU-motherboard socket matching, RAM type compatibility, PSU wattage adequacy with 1.2x headroom, GPU physical fit, and CPU cooler thermal capacity",
      "Integrated DeepSeek AI for intelligent component recommendations and guided build wizards with 4 pre-configured use cases (Gaming, Video Editing, Coding, Office), with heuristic fallback for reliability",
      "Architected a flexible PostgreSQL schema using JSONB specs for unified component storage with GIN indexes, enabling fast filtered queries across all part categories",
      "Built 120+ pre-built templates with budget-aware allocation percentages, platform filtering (AMD/Intel), and bottleneck detection for CPU-GPU imbalance",
      "Implemented shareable build links via slug-based URLs, side-by-side component comparison (up to 3), and a responsive UI with separate desktop sidebar and mobile bottom sheet layouts",
      "Designed the system with no-signup-required access using Supabase Row-Level Security for public reads, reducing friction for first-time users"
    ],
    technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Zustand", "DeepSeek AI", "Framer Motion", "Radix UI"]
  },
  {
    title: "Full Stack Developer",
    company: "IgniPC",
    period: "August 2024 — Present",
    location: "New Delhi",
    description: "Architected and deployed production-grade B2C e-commerce platform using Next.js 14, TypeScript, and PostgreSQL, serving 120+ pages with 1000+ products across 15+ categories.",
    achievements: [
      "Engineered universal product attribute system with dynamic form generation, improving admin productivity by 60% and product discoverability by 40%",
      "Built robust RESTful APIs using Fastify with 50+ database migrations and complex business logic for pricing, inventory, and order workflows",
      "Implemented enterprise-grade authentication using AWS Cognito with role-based access control, achieving 99.9% uptime",
      "Integrated PayU payment gateway with hash-based security and price-locking mechanism, processing payments with zero security incidents",
      "Developed comprehensive admin dashboard with full CRUD operations and bulk management capabilities",
      "Optimized database performance with strategic indexing, reducing response times by 50%"
    ],
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Fastify", "AWS Cognito", "Redux Toolkit", "Material-UI"]
  },
  {
    title: "Full Stack Developer",
    company: "Hexafort",
    period: "June 2024 — July 2024",
    location: "Remote (Freelance)",
    description: "Developed and deployed a 35-page responsive company website using React.js with mobile-first design principles, achieving 45% performance improvement.",
    achievements: [
      "Built responsive company website with code splitting and lazy loading for optimal performance",
      "Implemented SEO optimization and cross-browser compatibility standards",
      "Delivered production-ready application with optimized assets and hosting infrastructure",
      "Maintained high code quality standards while meeting tight project deadlines"
    ],
    technologies: ["React.js", "CSS3", "SEO Optimization", "Responsive Design"]
  }
];

function generateHash(seed: number): string {
  const hex = '0123456789abcdef';
  let hash = '';
  let s = seed * 2654435761;
  for (let i = 0; i < 7; i++) {
    s = ((s >> 4) ^ (s * 48271)) & 0xfffffff;
    hash += hex[Math.abs(s) % 16];
  }
  return hash;
}

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const commitHashes = useMemo(
    () => experiences.map((_, i) => generateHash(i + 42)),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev.filter(i => i !== index), index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-10 md:py-16 lg:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-14">
          <span className="text-xs md:text-sm tracking-wider text-[#00ff41]/40 uppercase font-mono block mb-3 md:mb-4">// git log --oneline</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-[#e0ffe0] tracking-tight matrix-text-subtle">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-[#00ff41]/10"></div>

          <div className="space-y-10 md:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                data-index={index}
                className={`relative pl-12 md:pl-20 transform transition-all duration-1000 ${
                  visibleItems.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#00ff41]/20 rounded-full border-2 border-[#00ff41]/40"></div>

                <div className="space-y-4 md:space-y-6">
                  {/* Git-log Header */}
                  <div className="space-y-1 font-mono">
                    <div className="text-[#00ff41] text-xs md:text-sm">
                      commit <span className="text-[#00ff41]/60">{commitHashes[index]}</span>
                    </div>
                    <div className="text-[#e0ffe0]/50 text-xs">
                      Author: {exp.title} &lt;{exp.company}&gt;
                    </div>
                    <div className="text-[#e0ffe0]/50 text-xs">
                      Date: {exp.period} | {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#e0ffe0]/60 font-light leading-relaxed pl-4 border-l border-[#00ff41]/10">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-1.5">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-2 md:gap-3">
                        <span className="text-[#00ff41]/40 mt-0.5 font-mono text-xs">+</span>
                        <span className="text-[#e0ffe0]/50 text-xs md:text-sm font-light leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] md:text-xs text-[#00ff41]/50 border border-[#00ff41]/15 rounded px-2 py-1 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-12 md:mt-16 lg:mt-20 pt-12 md:pt-16 border-t border-[#00ff41]/10">
          <div className="space-y-8 md:space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-base md:text-lg font-mono text-[#e0ffe0] mb-3 md:mb-4">
                <span className="text-[#00ff41]/30">// </span>education
              </h3>
              <div className="pl-4 md:pl-6 border-l border-[#00ff41]/10">
                <div className="text-sm md:text-base text-[#e0ffe0]/80 font-medium">Bachelor of Engineering, Mechanical</div>
                <div className="text-xs md:text-sm text-[#e0ffe0]/40 font-mono">Chandigarh University • Punjab, India</div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-base md:text-lg font-mono text-[#e0ffe0] mb-3 md:mb-4">
                <span className="text-[#00ff41]/30">// </span>certifications
              </h3>
              <div className="pl-4 md:pl-6 border-l border-[#00ff41]/10 space-y-2 md:space-y-3">
                <div className="text-[#e0ffe0]/50 text-xs md:text-sm font-mono">Node.js API Masterclass — Udemy</div>
                <div className="text-[#e0ffe0]/50 text-xs md:text-sm font-mono">Complete JavaScript Course — Professional Certificate</div>
                <div className="text-[#e0ffe0]/50 text-xs md:text-sm font-mono">React.js — Professional Certificate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
