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
    title: "POS System with Invoice Printing",
    subtitle: "Point of Sale Solution",
    description: "Robust point-of-sale system with integrated invoice printing using MERN stack and Redux Toolkit. Features local storage optimization, PDFKit library for instant invoice generation, JWT authentication, and seamless offline functionality.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "PDFKit", "JWT"],
    githubUrl: "https://github.com/deepakgulia0809/pos-system",
    liveUrl: null,
    impact: "100% transaction security with seamless offline functionality"
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
    title: "Open Source Portfolio",
    subtitle: "Full-Stack Development Projects",
    description: "Collection of full-stack applications demonstrating expertise in modern web technologies, RESTful API design, database architecture, and responsive UI/UX patterns.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/dkgulia",
    liveUrl: null,
    impact: "Showcasing production-ready code and system design capabilities"
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
    <section id="projects" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="text-xs md:text-sm tracking-wider text-white/50 uppercase font-medium block mb-3 md:mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
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
              <div className="border border-white/10 rounded bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden h-full">
                <div className="p-5 md:p-6 lg:p-8">
                  {/* Header */}
                  <div className="mb-4 md:mb-6">
                    <div className="text-xs md:text-sm text-white/50 font-light tracking-wide mb-2">
                      {project.subtitle}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 md:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="mb-4 md:mb-6">
                    <div className="text-xs md:text-sm text-white/50 italic border-l-2 border-white/20 pl-3 md:pl-4">
                      {project.impact}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] md:text-xs text-white/60 border border-white/20 rounded px-2 py-1 font-light"
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
                        className="inline-flex items-center text-xs md:text-sm text-white/80 hover:text-white transition-colors group-hover:translate-x-1 transform transition-transform duration-200"
                      >
                        View Live
                        <span className="ml-2">↗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs md:text-sm text-white/60 hover:text-white/80 transition-colors"
                      >
                        Source Code
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
          <p className="text-sm md:text-base text-white/60 font-light mb-4 md:mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border border-white/20 text-sm md:text-base text-white font-light tracking-wide hover:bg-white/5 transition-all duration-300 rounded-sm group"
          >
            Let&apos;s Talk
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
