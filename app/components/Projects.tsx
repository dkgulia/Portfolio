'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "IgniPC+ E-commerce Platform",
    subtitle: "B2C Technology Platform",
    description: "Scalable e-commerce solution built with Next.js and TypeScript. Features secure payment processing, real-time inventory management, and optimized user experience.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Fastify", "MUI"],
    githubUrl: null,
    liveUrl: "https://ignipc.com",
    impact: "Serving thousands of users with 40% improved performance"
  },
  {
    title: "POS & Invoice System",
    subtitle: "Point of Sale Solution",
    description: "Complete MERN stack application for retail management with integrated invoice printing, inventory tracking, and secure transaction processing.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "PDFKit"],
    githubUrl: "https://github.com/deepakgulia0809/pos-system",
    liveUrl: null,
    impact: "Streamlined business operations for retail management"
  },
  {
    title: "Hexafort Company Website",
    subtitle: "Corporate Website",
    description: "Modern, responsive company website with performance optimizations, interactive components, and mobile-first design principles.",
    technologies: ["React.js", "CSS3", "Performance Optimization"],
    githubUrl: null,
    liveUrl: "https://hexafort.io",
    impact: "Enhanced company digital presence and user engagement"
  },
  {
    title: "Open Source Contributions",
    subtitle: "Web Development Portfolio",
    description: "Collection of full-stack applications showcasing modern web development practices, RESTful APIs, and responsive design patterns.",
    technologies: ["React", "Node.js", "PostgreSQL", "MongoDB"],
    githubUrl: "https://github.com/deepakgulia0809",
    liveUrl: null,
    impact: "Demonstrating expertise across full development stack"
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
