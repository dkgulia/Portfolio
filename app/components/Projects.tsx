'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "IgniPC E-commerce Platform",
    subtitle: "Production B2C Platform",
    description: "Enterprise-grade e-commerce platform serving 120+ pages with 1000+ products across 15+ categories. Features dynamic product attribute system, AWS Cognito authentication, PayU payment integration, and comprehensive admin dashboard with Redux Toolkit state management.",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Fastify", "AWS Cognito", "Redux Toolkit", "Material-UI"],
    githubUrl: null,
    liveUrl: "https://ignipc.com",
    impact: "99.9% uptime, 50% faster response times, zero security incidents"
  },
  {
    title: "Align — AI-Powered SEO Platform",
    subtitle: "Freemium SaaS Product",
    description: "AI-native SEO platform that helps developers optimize websites for AI search engines like ChatGPT, Perplexity, and Claude. Features a smart site scanner (Cheerio + Puppeteer) that crawls pages to extract metadata, OpenGraph tags, JSON-LD structured data, and heading hierarchy. Automatically generates GitHub PRs with AI-powered SEO fixes by detecting project type (Next.js, React, HTML) and producing targeted code diffs. Includes a 4-tab dashboard (X-Ray, Schema, AI Readiness, Authority), issue-to-PR tracking with verification scans, and free public SEO tools.",
    technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Zustand", "Clerk", "OpenAI", "GitHub App", "Puppeteer"],
    githubUrl: null,
    liveUrl: "https://alignagent.online/",
    impact: "End-to-end automated SEO remediation with AI-generated PRs and scan verification"
  },
  {
    title: "Hexafort Company Website",
    subtitle: "35-Page Corporate Website",
    description: "Responsive company website built with React.js and CSS, featuring mobile-first design principles, code splitting, lazy loading, SEO optimization, and cross-browser compatibility.",
    technologies: ["React.js", "CSS3", "Code Splitting", "SEO Optimization", "Responsive Design"],
    githubUrl: null,
    liveUrl: "https://hexafort.io",
    impact: "45% performance improvement through optimization techniques"
  },
  {
    title: "BuildStack — AI-Powered PC Builder",
    subtitle: "SaaS Product",
    description: "AI-powered PC builder platform that helps users design custom PC builds with real-time compatibility checking and intelligent component recommendations. Features a database of 5000+ components across 9 categories, DeepSeek AI-driven suggestions with heuristic fallback, guided wizards for Gaming/Editing/Coding/Office use cases, 120+ pre-built templates, side-by-side comparison, shareable build links, and bottleneck detection. No signup required — built for zero-friction access.",
    technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Zustand", "DeepSeek AI", "Framer Motion", "Radix UI"],
    githubUrl: null,
    liveUrl: "https://build-stack-lilac.vercel.app/",
    impact: "5000+ components with real-time compatibility validation and AI-powered build generation"
  }
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...prev.filter(i => i !== index), index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-10 md:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-14">
          <span className="text-xs md:text-sm tracking-wider text-[#00ff41]/40 uppercase font-mono block mb-3 md:mb-4">
            {"// ls -la ~/projects"}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-[#e0ffe0] tracking-tight matrix-text-subtle">
            Selected Work
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { projectRefs.current[index] = el; }}
              data-index={index}
              className={`group transform transition-all duration-1000 ${
                visibleProjects.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="terminal-window hover-glow transition-all duration-500 h-full">
                {/* Terminal Header */}
                <div className="terminal-header justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="terminal-dot"></div>
                    <div className="terminal-dot"></div>
                    <div className="terminal-dot active"></div>
                    <span className="font-mono text-[#00ff41]/50 text-xs ml-2">
                      {project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                    </span>
                  </div>
                  <span className="font-mono text-[#00ff41]/30 text-xs hidden sm:inline">{project.subtitle}</span>
                </div>

                {/* Card Body */}
                <div className="p-5 md:p-6 lg:p-8">
                  {/* Header */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-medium text-[#e0ffe0] mb-2 md:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#e0ffe0]/50 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="mb-4 md:mb-6">
                    <div className="text-xs md:text-sm text-[#e0ffe0]/40 italic border-l-2 border-[#00ff41]/20 pl-3 md:pl-4 font-mono">
                      {project.impact}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] md:text-xs text-[#00ff41]/50 border border-[#00ff41]/15 rounded px-2 py-1 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs md:text-sm text-[#00ff41]/70 hover:text-[#00ff41] font-mono transition-colors duration-200"
                      >
                        <span className="text-[#00ff41]/40 mr-1">$</span> open
                        <span className="ml-2">↗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs md:text-sm text-[#e0ffe0]/40 hover:text-[#00ff41]/70 font-mono transition-colors duration-200"
                      >
                        <span className="text-[#00ff41]/40 mr-1">$</span> source
                        <span className="ml-2">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <p className="text-sm md:text-base text-[#e0ffe0]/40 font-mono mb-4 md:mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border border-[#00ff41]/20 text-sm md:text-base text-[#00ff41]/80 font-mono tracking-wide hover:bg-[#00ff41]/5 hover:border-[#00ff41]/40 transition-all duration-300 rounded-sm group"
          >
            lets_talk
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
