'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   message: ''
 });
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
   setIsVisible(true);
 }, []);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   });
 };

 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log('Form submitted:', formData);
   alert('Thank you for reaching out. I\'ll get back to you soon.');
   setFormData({ name: '', email: '', message: '' });
 };

 return (
   <section id="contact" className="py-10 md:py-16 lg:py-20 relative">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Header */}
       <div className={`text-center mb-8 md:mb-12 lg:mb-14 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <span className="text-xs md:text-sm tracking-wider text-[#00ff41]/40 uppercase font-mono block mb-3 md:mb-4">{"// ssh connect"}</span>
         <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-[#e0ffe0] tracking-tight matrix-text-subtle mb-4 md:mb-6">
           Get in Touch
         </h2>
         <p className="text-sm md:text-base text-[#e0ffe0]/40 font-light max-w-xl mx-auto px-4">
           Have a project in mind or want to discuss opportunities?
           I&apos;d love to hear from you.
         </p>
       </div>

       <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
         {/* Contact Information */}
         <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <div className="space-y-8 md:space-y-10 lg:space-y-12">
             {/* Email */}
             <div className="group">
               <div className="text-xs md:text-sm text-[#00ff41]/40 font-mono tracking-wide mb-2">email</div>
               <a
                 href="mailto:deepakgulia0809@gmail.com"
                 className="text-[#e0ffe0]/80 hover:text-[#00ff41] transition-colors text-base md:text-lg font-light break-all"
               >
                 deepakgulia0809@gmail.com
               </a>
             </div>

             {/* Phone */}
             <div className="group">
               <div className="text-xs md:text-sm text-[#00ff41]/40 font-mono tracking-wide mb-2">phone</div>
               <a
                 href="tel:+918368474028"
                 className="text-[#e0ffe0]/80 hover:text-[#00ff41] transition-colors text-base md:text-lg font-light"
               >
                 +91 8368 474 028
               </a>
             </div>

             {/* Location */}
             <div className="group">
               <div className="text-xs md:text-sm text-[#00ff41]/40 font-mono tracking-wide mb-2">location</div>
               <span className="text-[#e0ffe0]/80 text-base md:text-lg font-light">India</span>
             </div>

             {/* Social Links */}
             <div>
               <div className="text-xs md:text-sm text-[#00ff41]/40 font-mono tracking-wide mb-3 md:mb-4">links</div>
               <div className="flex gap-4 md:gap-6">
                 <a
                   href="https://github.com/dkgulia"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm md:text-base text-[#e0ffe0]/50 hover:text-[#00ff41] font-mono transition-colors"
                 >
                   GitHub
                 </a>
                 <a
                   href="https://www.linkedin.com/in/deepak0809/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm md:text-base text-[#e0ffe0]/50 hover:text-[#00ff41] font-mono transition-colors"
                 >
                   LinkedIn
                 </a>
               </div>
             </div>
           </div>
         </div>

         {/* Contact Form */}
         <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
             <div>
               <label htmlFor="name" className="block text-xs md:text-sm text-[#00ff41]/40 font-mono tracking-wide mb-2 md:mb-3">
                 <span className="text-[#00ff41]/30">$</span> name
               </label>
               <input
                 type="text"
                 id="name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-[#00ff41]/15 focus:border-[#00ff41]/50 focus:outline-none text-sm md:text-base text-[#e0ffe0] placeholder-[#e0ffe0]/20 font-mono transition-colors duration-300"
                 placeholder="> enter your name"
               />
             </div>

             <div>
               <label htmlFor="email" className="block text-xs md:text-sm text-[#00ff41]/40 font-mono tracking-wide mb-2 md:mb-3">
                 <span className="text-[#00ff41]/30">$</span> email
               </label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-[#00ff41]/15 focus:border-[#00ff41]/50 focus:outline-none text-sm md:text-base text-[#e0ffe0] placeholder-[#e0ffe0]/20 font-mono transition-colors duration-300"
                 placeholder="> your@email.com"
               />
             </div>

             <div>
               <label htmlFor="message" className="block text-xs md:text-sm text-[#00ff41]/40 font-mono tracking-wide mb-2 md:mb-3">
                 <span className="text-[#00ff41]/30">$</span> message
               </label>
               <textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 rows={4}
                 required
                 className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-[#00ff41]/15 focus:border-[#00ff41]/50 focus:outline-none text-sm md:text-base text-[#e0ffe0] placeholder-[#e0ffe0]/20 resize-none font-mono transition-colors duration-300"
                 placeholder="> tell me about your project..."
               ></textarea>
             </div>

             <div className="pt-4 md:pt-6">
               <button
                 type="submit"
                 className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border border-[#00ff41]/20 text-sm md:text-base text-[#00ff41] font-mono tracking-wide hover:bg-[#00ff41]/5 hover:border-[#00ff41]/40 transition-all duration-300 rounded-sm group"
               >
                 <span className="text-[#00ff41]/40 mr-2">$</span>
                 send_message
                 <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">_</span>
               </button>
             </div>
           </form>
         </div>
       </div>

       {/* Footer */}
       <div className={`text-center mt-12 md:mt-16 lg:mt-20 pt-12 md:pt-16 border-t border-[#00ff41]/10 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <p className="text-[#e0ffe0]/30 font-mono text-xs md:text-sm">
           <span className="text-[#00ff41]/20">{"// "}</span>
           &copy; 2025 Deepak Gulia. Crafted with attention to detail.
         </p>
       </div>
     </div>
   </section>
 );
}
