'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "React & Node.js Specialist",
    "System Architecture Engineer",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-12 md:py-0 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-violet-500/5 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6 md:mb-12 mt-8 lg:mt-16">
              <span className="text-xs md:text-sm tracking-[0.3em] text-white/60 uppercase font-light block mb-8 md:mb-10 lg:mb-12 text-center">
                Full-Stack Developer
              </span>

              <div className="relative">
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-100 hover:from-purple-100 hover:via-white hover:to-violet-100 transition-all duration-700">
                  DEEPAK GULIA
                </h1>
                <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-4 md:mt-6"></div>
              </div>
            </div>

            <div className="h-10 md:h-12 flex items-center justify-center mb-6 md:mb-8">
              <h2 className="text-sm md:text-lg lg:text-xl font-light text-white/70 tracking-wider transition-all duration-700">
                {roles[currentRole]}
              </h2>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-2xl mx-auto mb-8 md:mb-10 px-2">
              <p className="text-sm md:text-base lg:text-lg text-white/60 leading-relaxed font-light">
                Building production-grade web applications with expertise in e-commerce platforms,
                payment integrations, and scalable system architecture. Specialized in React.js, Next.js,
                Node.js, and PostgreSQL with proven ability to deliver measurable business impact.
              </p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-8 md:gap-16 mb-8 md:mb-12 text-sm">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-extralight text-white/80 mb-1">1+</div>
                <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Years Exp</div>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/10"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-extralight text-white/80 mb-1">120+</div>
                <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Pages Built</div>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/10"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-extralight text-white/80 mb-1">1000+</div>
                <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Products</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border border-white/20 text-white/80 text-sm md:text-base font-light tracking-wide hover:text-white hover:border-white/40 transition-all duration-300 rounded-sm"
            >
              <span>View Work</span>
              <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-200 text-white/60">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 text-white/50 text-sm md:text-base font-light tracking-wide hover:text-white/80 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <div className={`mt-12 md:mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center">
              <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="w-1 h-2 bg-white/30 rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
