'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    category: "Frontend Development",
    technologies: [
      "React.js", "Next.js 14", "TypeScript", "JavaScript", "Redux Toolkit",
      "Material-UI", "HTML5", "CSS3", "Responsive Design"
    ]
  },
  {
    category: "Backend Development",
    technologies: [
      "Node.js", "Express.js", "Fastify", "RESTful APIs", "GraphQL",
      "JWT Authentication", "API Design", "Microservices"
    ]
  },
  {
    category: "Databases & Cloud",
    technologies: [
      "PostgreSQL", "MongoDB", "Database Design", "Query Optimization",
      "AWS Cognito", "Docker", "Kubernetes", "Linux"
    ]
  },
  {
    category: "Tools & Best Practices",
    technologies: [
      "Git", "GitHub", "VS Code", "ESLint", "Prettier",
      "Husky", "Bash Scripting", "System Design", "OOP"
    ]
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className={`text-center mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-xs md:text-sm tracking-wider text-white/50 uppercase font-medium block mb-3 md:mb-4">Expertise</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        {/* Refined Skills Grid */}
        <div className="space-y-10 md:space-y-12 lg:space-y-16">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="border-l border-white/10 pl-4 md:pl-6 lg:pl-8">
                <h3 className="text-lg md:text-xl font-light text-white mb-4 md:mb-6 tracking-wide">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group"
                    >
                      <div className="bg-white/5 border border-white/10 rounded px-3 py-2.5 md:px-4 md:py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                        <span className="text-xs md:text-sm text-white/80 font-light">
                          {tech}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className={`mt-12 md:mt-16 lg:mt-20 text-center max-w-2xl mx-auto transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white/60 font-light leading-relaxed text-sm md:text-base px-4">
            &quot;Technology alone is not enough. It&apos;s technology married with the liberal arts,
            married with the humanities, that yields the results that make our hearts sing.&quot;
          </p>
          <span className="text-white/40 text-xs md:text-sm mt-3 md:mt-4 block">— Philosophy I live by</span>
        </div>
      </div>
    </section>
  );
}