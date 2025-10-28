'use client';

import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "IgniPC+",
    period: "August 2024 — Present",
    location: "Remote",
    description: "Building scalable B2C platforms with modern web technologies. Leading frontend architecture decisions and optimizing database performance.",
    achievements: [
      "Architected responsive e-commerce platform serving thousands of users",
      "Implemented secure payment systems and user authentication flows",
      "Optimized application performance, achieving 40% faster load times",
      "Collaborated with cross-functional teams on feature development"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Fastify"]
  },
  {
    title: "Frontend Developer",
    company: "Hexafort",
    period: "February 2024 — May 2024",
    location: "Contract",
    description: "Developed company website with focus on performance and user experience. Delivered pixel-perfect responsive design across all devices.",
    achievements: [
      "Created modern, responsive company website from ground up",
      "Implemented performance optimizations including lazy loading",
      "Ensured cross-browser compatibility and accessibility standards",
      "Delivered project ahead of schedule with exceptional client feedback"
    ],
    technologies: ["React.js", "CSS3", "Performance Optimization"]
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
                ref={(el) => itemRefs.current[index] = el}
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