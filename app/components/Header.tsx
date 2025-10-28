'use client';

import { useState, useEffect } from 'react';

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 50);
   };
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
   <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
     isScrolled
       ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
       : 'bg-transparent'
   }`}>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between items-center py-6">
         {/* Logo/Brand */}
         <div className="text-white font-light tracking-wider">
           <span className="text-lg">DG</span>
         </div>

         {/* Desktop Navigation */}
         <nav className="hidden md:flex items-center space-x-12">
           <a href="#home" className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide">
             Home
           </a>
           <a href="#skills" className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide">
             Skills
           </a>
           <a href="#experience" className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide">
             Experience
           </a>
           <a href="#projects" className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide">
             Work
           </a>
           <a href="#contact" className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide">
             Contact
           </a>
         </nav>

         {/* Mobile Menu Button */}
         <button
           className="md:hidden text-white/60 hover:text-white transition-colors p-2"
           onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
           <div className="w-6 h-0.5 bg-current mb-1 transition-all duration-300 origin-center"
                style={{
                  transform: isMenuOpen ? 'rotate(45deg) translateY(3px)' : 'rotate(0deg) translateY(0px)'
                }}></div>
           <div className="w-6 h-0.5 bg-current mb-1 transition-all duration-300"
                style={{
                  opacity: isMenuOpen ? 0 : 1
                }}></div>
           <div className="w-6 h-0.5 bg-current transition-all duration-300 origin-center"
                style={{
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-3px)' : 'rotate(0deg) translateY(0px)'
                }}></div>
         </button>
       </div>

       {/* Mobile Menu */}
       <div className={`md:hidden transition-all duration-500 overflow-hidden ${
         isMenuOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
       }`}>
         <nav className="space-y-4 pt-4 border-t border-white/10">
           <a href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide py-2">
             Home
           </a>
           <a href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide py-2">
             Skills
           </a>
           <a href="#experience"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide py-2">
             Experience
           </a>
           <a href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide py-2">
             Work
           </a>
           <a href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide py-2">
             Contact
           </a>
         </nav>
       </div>
     </div>
   </header>
 );
}