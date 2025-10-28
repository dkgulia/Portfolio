'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    category: "Frontend",
    technologies: [
      "React", "Next.js", "TypeScript", "JavaScript", "Redux",
      "Tailwind CSS", "SASS", "Responsive Design"
    ]
  },
  {
    category: "Backend",
    technologies: [
      "Node.js", "Express.js", "Fastify", "PostgreSQL", "MongoDB",
      "RESTful APIs", "JWT", "Drizzle ORM"
    ]
  },
  {
    category: "Tools & Workflow",
    technologies: [
      "Git", "GitHub", "VSCode", "Postman", "Vercel",
      "Chrome DevTools", "npm", "Webpack"
    ]
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      "Python", "NumPy", "Pandas", "LLM", "LangChain",
      "LangGraph", "AI Engineering", "Machine Learning"
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
    <section id="skills" className="py-32 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm tracking-wider text-white/50 uppercase font-medium block mb-4">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        {/* Refined Skills Grid */}
        <div className="space-y-16">
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
              <div className="border-l border-white/10 pl-8">
                <h3 className="text-xl font-light text-white mb-6 tracking-wide">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group"
                    >
                      <div className="bg-white/5 border border-white/10 rounded px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                        <span className="text-sm text-white/80 font-light">
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

        {/* Philosophy Statement - Jony Ive style */}
        <div className={`mt-20 text-center max-w-2xl mx-auto transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white/60 font-light leading-relaxed">
            "Technology alone is not enough. It's technology married with the liberal arts,
            married with the humanities, that yields the results that make our hearts sing."
          </p>
          <span className="text-white/40 text-sm mt-4 block">— Philosophy I live by</span>
        </div>
      </div>
    </section>
  );
}