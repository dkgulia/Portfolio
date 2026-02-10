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

 const navLinks = [
   { href: '#home', label: 'home' },
   { href: '#skills', label: 'skills' },
   { href: '#experience', label: 'experience' },
   { href: '#projects', label: 'work' },
   { href: '#contact', label: 'contact' },
 ];

 return (
   <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
     isScrolled
       ? 'bg-black/90 backdrop-blur-md border-b border-[#00ff41]/10'
       : 'bg-transparent'
   }`}>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between items-center py-6">
         {/* Logo/Brand */}
         <div className="font-mono text-sm tracking-wider">
           <span className="text-[#00ff41]">DG</span>
           <span className="animate-cursor-blink text-[#00ff41]">_</span>
         </div>

         {/* Desktop Navigation */}
         <nav className="hidden md:flex items-center space-x-10">
           {navLinks.map((link) => (
             <a
               key={link.href}
               href={link.href}
               className="text-[#e0ffe0]/40 hover:text-[#00ff41] transition-colors duration-300 text-sm font-mono tracking-wide"
             >
               <span className="text-[#00ff41]/30 mr-1">&gt;_</span>{link.label}
             </a>
           ))}
         </nav>

         {/* Mobile Menu Button */}
         <button
           className="md:hidden text-[#00ff41]/60 hover:text-[#00ff41] transition-colors p-2"
           onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
           <div className="w-6 h-0.5 bg-[#00ff41] mb-1 transition-all duration-300 origin-center"
                style={{
                  transform: isMenuOpen ? 'rotate(45deg) translateY(3px)' : 'rotate(0deg) translateY(0px)'
                }}></div>
           <div className="w-6 h-0.5 bg-[#00ff41] mb-1 transition-all duration-300"
                style={{
                  opacity: isMenuOpen ? 0 : 1
                }}></div>
           <div className="w-6 h-0.5 bg-[#00ff41] transition-all duration-300 origin-center"
                style={{
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-3px)' : 'rotate(0deg) translateY(0px)'
                }}></div>
         </button>
       </div>

       {/* Mobile Menu */}
       <div className={`md:hidden transition-all duration-500 overflow-hidden ${
         isMenuOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
       }`}>
         <nav className="space-y-4 pt-4 border-t border-[#00ff41]/10">
           {navLinks.map((link) => (
             <a
               key={link.href}
               href={link.href}
               onClick={() => setIsMenuOpen(false)}
               className="block text-[#e0ffe0]/40 hover:text-[#00ff41] transition-colors text-sm font-mono tracking-wide py-2"
             >
               <span className="text-[#00ff41]/30 mr-1">&gt;_</span>{link.label}
             </a>
           ))}
         </nav>
       </div>
     </div>
   </header>
 );
}
