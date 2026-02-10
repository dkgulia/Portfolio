'use client';

import { useEffect, useState } from 'react';
import MatrixRain from './MatrixRain';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "SaaS Builder",
    "React & Node.js Specialist",
    "System Architect",
  ];

  const currentFullRole = roles[roleIndex];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedRole.length < currentFullRole.length) {
      timeout = setTimeout(() => setDisplayedRole(currentFullRole.slice(0, displayedRole.length + 1)), 80);
    } else if (!isDeleting && displayedRole.length === currentFullRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(() => setDisplayedRole(displayedRole.slice(0, -1)), 40);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, currentFullRole, roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-12 md:py-0 relative overflow-hidden scanline-overlay">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden">
        <MatrixRain opacity={0.12} speed={50} />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6 md:mb-10 mt-8 lg:mt-16">
              <span className="text-xs md:text-sm tracking-[0.3em] text-[#00ff41]/50 uppercase font-mono block mb-6 md:mb-8 text-center">
                ~/developer/fullstack
              </span>

              <div className="relative">
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.08em] matrix-text animate-text-glow">
                  DEEPAK GULIA
                </h1>
                <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#00ff41]/30 to-transparent mx-auto mt-4 md:mt-6"></div>
              </div>
            </div>

            <div className="h-10 md:h-12 flex items-center justify-center mb-6 md:mb-8">
              <h2 className="text-sm md:text-lg lg:text-xl font-mono text-[#00ff41]/80 tracking-wider">
                <span className="text-[#00ff41]/40">$ </span>
                {displayedRole}
                <span className="animate-cursor-blink text-[#00ff41]">|</span>
              </h2>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-2xl mx-auto mb-8 md:mb-10 px-2">
              <p className="text-sm md:text-base lg:text-lg text-[#e0ffe0]/50 leading-relaxed font-light">
                Full-stack developer who ships SaaS products end-to-end — from system design to deployment.
                Built and launched <span className="text-[#00ff41]/70">Align</span> (AI-powered SEO platform) and <span className="text-[#00ff41]/70">BuildStack</span> (AI PC builder),
                plus production e-commerce serving 1000+ products.
              </p>
            </div>
          </div>

          {/* SaaS Products + Stats Terminal */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="font-mono bg-black/50 border border-[#00ff41]/10 rounded p-4 md:p-6 max-w-lg mx-auto text-left mb-8 md:mb-12">
              <div className="text-[#00ff41]/40 text-xs mb-3">$ cat profile.json</div>
              <div className="space-y-1 text-xs md:text-sm">
                <div>{'{'}</div>
                <div className="pl-4"><span className="text-[#00ff41]/60">&quot;stack&quot;</span>: <span className="text-[#e0ffe0]/60">&quot;Next.js, TypeScript, Node.js, PostgreSQL&quot;</span>,</div>
                <div className="pl-4"><span className="text-[#00ff41]/60">&quot;saas_products&quot;</span>: [</div>
                <div className="pl-8"><span className="text-[#00ff41]">&quot;Align — AI SEO Platform&quot;</span>,</div>
                <div className="pl-8"><span className="text-[#00ff41]">&quot;BuildStack — AI PC Builder&quot;</span></div>
                <div className="pl-4">],</div>
                <div className="pl-4"><span className="text-[#00ff41]/60">&quot;production_apps&quot;</span>: <span className="text-[#00ff41]">&quot;3&quot;</span>,</div>
                <div className="pl-4"><span className="text-[#00ff41]/60">&quot;pages_shipped&quot;</span>: <span className="text-[#00ff41]">&quot;120+&quot;</span>,</div>
                <div className="pl-4"><span className="text-[#00ff41]/60">&quot;products_managed&quot;</span>: <span className="text-[#00ff41]">&quot;1000+&quot;</span></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border border-[#00ff41]/20 text-[#00ff41]/80 text-sm md:text-base font-mono tracking-wide hover:text-[#00ff41] hover:border-[#00ff41]/40 hover:bg-[#00ff41]/5 transition-all duration-300 rounded-sm"
            >
              <span>view_work</span>
              <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-200 text-[#00ff41]/50">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 text-[#e0ffe0]/40 text-sm md:text-base font-mono tracking-wide hover:text-[#00ff41]/80 transition-all duration-300"
            >
              get_in_touch
            </a>
          </div>

          <div className={`mt-12 md:mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center">
              <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-[#00ff41]/20 to-transparent"></div>
              <div className="w-1 h-2 bg-[#00ff41]/30 rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
