'use client';

import { useEffect, useRef, useState } from 'react';

const experiences = [
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

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section id="experience" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="text-xs md:text-sm tracking-wider text-white/50 uppercase font-medium block mb-3 md:mb-4">Journey</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Experience
          </h2>
        </div>

        {/* Refined Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10"></div>

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
                <div className="absolute left-2.5 md:left-6 top-2 w-3 h-3 md:w-4 md:h-4 bg-white/20 rounded-full border-2 border-white/40"></div>

                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-medium text-white">{exp.title}</h3>
                      <span className="hidden md:inline text-sm text-white/40">•</span>
                      <span className="text-base md:text-lg text-white/80">{exp.company}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-xs md:text-sm text-white/50">
                      <span>{exp.period}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-2 md:gap-3">
                        <span className="text-white/30 mt-1 md:mt-2">—</span>
                        <span className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
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
                        className="text-[10px] md:text-xs text-white/50 border border-white/10 rounded px-2 py-1 font-light"
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
        <div className="mt-12 md:mt-16 lg:mt-20 pt-12 md:pt-16 border-t border-white/10">
          <div className="space-y-8 md:space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-base md:text-lg font-light text-white mb-3 md:mb-4">Education</h3>
              <div className="pl-4 md:pl-6 border-l border-white/10">
                <div className="text-sm md:text-base text-white/80 font-medium">Bachelor of Engineering, Mechanical</div>
                <div className="text-xs md:text-sm text-white/50">Chandigarh University • Punjab, India</div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-base md:text-lg font-light text-white mb-3 md:mb-4">Certifications</h3>
              <div className="pl-4 md:pl-6 border-l border-white/10 space-y-2 md:space-y-3">
                <div className="text-white/60 text-xs md:text-sm font-light">Node.js API Masterclass — Udemy</div>
                <div className="text-white/60 text-xs md:text-sm font-light">Complete JavaScript Course — Professional Certificate</div>
                <div className="text-white/60 text-xs md:text-sm font-light">React.js — Professional Certificate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}