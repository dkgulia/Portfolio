'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    category: "Frontend Development",
    path: "frontend",
    technologies: [
      "React.js", "Next.js 14", "TypeScript", "JavaScript", "Redux Toolkit",
      "Material-UI", "HTML5", "CSS3", "Responsive Design"
    ]
  },
  {
    category: "Backend Development",
    path: "backend",
    technologies: [
      "Node.js", "Express.js", "Fastify", "RESTful APIs", "GraphQL",
      "JWT Authentication", "API Design", "Microservices"
    ]
  },
  {
    category: "Databases & Cloud",
    path: "databases/cloud",
    technologies: [
      "PostgreSQL", "MongoDB", "Database Design", "Query Optimization",
      "AWS Cognito", "Docker", "Kubernetes", "Linux"
    ]
  },
  {
    category: "Tools & Best Practices",
    path: "tools",
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
    <section id="skills" className="py-10 md:py-16 lg:py-20 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-12 lg:mb-14 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-xs md:text-sm tracking-wider text-[#00ff41]/40 uppercase font-mono block mb-3 md:mb-4">// expertise</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-[#e0ffe0] tracking-tight matrix-text-subtle">
            Skills & Technologies
          </h2>
        </div>

        {/* Terminal Window Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
              <div className="terminal-window hover-glow transition-all duration-300 h-full">
                {/* Terminal Title Bar */}
                <div className="terminal-header">
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot active"></div>
                  <span className="font-mono text-[#00ff41]/60 text-xs ml-2">
                    ~/{skillGroup.path}
                  </span>
                </div>
                {/* Terminal Body */}
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="font-mono text-xs md:text-sm text-[#e0ffe0]/60 flex items-center gap-2 py-1"
                      >
                        <span className="text-[#00ff41]/40">$</span>
                        <span className="hover:text-[#00ff41] transition-colors duration-200">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className={`mt-12 md:mt-16 lg:mt-20 text-center max-w-2xl mx-auto transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-[#e0ffe0]/35 font-mono leading-relaxed text-xs md:text-sm px-4">
            <span className="text-[#00ff41]/25">// </span>
            &quot;Technology alone is not enough. It&apos;s technology married with the liberal arts,
            married with the humanities, that yields the results that make our hearts sing.&quot;
          </p>
          <span className="text-[#e0ffe0]/25 text-xs md:text-sm mt-3 md:mt-4 block font-mono">
            <span className="text-[#00ff41]/20">// </span>— Philosophy I live by
          </span>
        </div>
      </div>
    </section>
  );
}
