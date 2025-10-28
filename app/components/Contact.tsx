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
   <section id="contact" className="py-16 md:py-24 lg:py-32 relative">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Clean Header */}
       <div className={`text-center mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <span className="text-xs md:text-sm tracking-wider text-white/50 uppercase font-medium block mb-3 md:mb-4">Connect</span>
         <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4 md:mb-6">
           Get in Touch
         </h2>
         <p className="text-sm md:text-base text-white/60 font-light max-w-xl mx-auto px-4">
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
               <div className="text-xs md:text-sm text-white/50 font-light tracking-wide mb-2">Email</div>
               <a
                 href="mailto:deepakgulia0809@gmail.com"
                 className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-light break-all"
               >
                 deepakgulia0809@gmail.com
               </a>
             </div>

             {/* Phone */}
             <div className="group">
               <div className="text-xs md:text-sm text-white/50 font-light tracking-wide mb-2">Phone</div>
               <a
                 href="tel:+918368474028"
                 className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-light"
               >
                 +91 8368 474 028
               </a>
             </div>

             {/* Location */}
             <div className="group">
               <div className="text-xs md:text-sm text-white/50 font-light tracking-wide mb-2">Location</div>
               <span className="text-white/80 text-base md:text-lg font-light">India</span>
             </div>

             {/* Social Links */}
             <div>
               <div className="text-xs md:text-sm text-white/50 font-light tracking-wide mb-3 md:mb-4">Connect</div>
               <div className="flex gap-4 md:gap-6">
                 <a
                   href="https://github.com/deepakgulia0809"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm md:text-base text-white/60 hover:text-white transition-colors"
                 >
                   GitHub
                 </a>
                 <a
                   href="https://linkedin.com/in/deepak-gulia"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm md:text-base text-white/60 hover:text-white transition-colors"
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
               <label htmlFor="name" className="block text-xs md:text-sm text-white/50 font-light tracking-wide mb-2 md:mb-3">
                 Name
               </label>
               <input
                 type="text"
                 id="name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-sm md:text-base text-white placeholder-white/40 font-light transition-colors duration-300"
                 placeholder="Your name"
               />
             </div>

             <div>
               <label htmlFor="email" className="block text-xs md:text-sm text-white/50 font-light tracking-wide mb-2 md:mb-3">
                 Email
               </label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-sm md:text-base text-white placeholder-white/40 font-light transition-colors duration-300"
                 placeholder="your@email.com"
               />
             </div>

             <div>
               <label htmlFor="message" className="block text-xs md:text-sm text-white/50 font-light tracking-wide mb-2 md:mb-3">
                 Message
               </label>
               <textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 rows={4}
                 required
                 className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-sm md:text-base text-white placeholder-white/40 resize-none font-light transition-colors duration-300"
                 placeholder="Tell me about your project..."
               ></textarea>
             </div>

             <div className="pt-4 md:pt-6">
               <button
                 type="submit"
                 className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border border-white/20 text-sm md:text-base text-white font-light tracking-wide hover:bg-white/5 transition-all duration-300 rounded-sm group"
               >
                 Send Message
                 <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
               </button>
             </div>
           </form>
         </div>
       </div>

       {/* Footer */}
       <div className={`text-center mt-12 md:mt-16 lg:mt-20 pt-12 md:pt-16 border-t border-white/10 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <p className="text-white/40 font-light text-xs md:text-sm">
           © 2025 Deepak Gulia. Crafted with attention to detail.
         </p>
       </div>
     </div>
   </section>
 );
}