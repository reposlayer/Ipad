"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-contact", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out"
      });
      
      const inputs = document.querySelectorAll('.brutal-input');
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          gsap.to(input, { borderBottomColor: '#ffffff', duration: 0.3 });
        });
        input.addEventListener('blur', () => {
          gsap.to(input, { borderBottomColor: '#27272a', duration: 0.3 }); // zinc-800
        });
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-24 md:pt-32 font-sans overflow-x-hidden flex flex-col justify-between">
      <Header />
      
      <div className="flex-grow flex flex-col md:flex-row px-4 md:px-24 py-24 gap-16 md:gap-32">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="reveal-contact text-6xl md:text-[8rem] font-black uppercase tracking-tighter mix-blend-difference mb-8 leading-[0.85]">
            Initiate <br/> Protocol
          </h1>
          <p className="reveal-contact text-xl md:text-3xl font-light text-zinc-400 max-w-xl mb-16">
            Ready to engineer your next unfair advantage? Partner with us to build complex, zero-to-one architecture that scales.
          </p>
          
          <div className="reveal-contact font-mono uppercase tracking-widest text-sm text-zinc-500">
            <h3 className="text-white mb-4">// Direct Line</h3>
            <a href="mailto:systems@outlier.co" className="hover:text-white transition-colors text-2xl group flex items-center gap-4">
              <span>systems@outlier.co</span>
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Side / Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="reveal-contact flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">01. What's your name?</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="brutal-input bg-transparent border-0 border-b border-zinc-800 p-4 text-2xl font-light focus:outline-none focus:ring-0 rounded-none w-full placeholder:text-zinc-700"
              />
            </div>
            <div className="reveal-contact flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">02. Project Scope</label>
              <input 
                type="text" 
                placeholder="Web Platform / App / Edge Logic..." 
                className="brutal-input bg-transparent border-0 border-b border-zinc-800 p-4 text-2xl font-light focus:outline-none focus:ring-0 rounded-none w-full placeholder:text-zinc-700"
              />
            </div>
            <div className="reveal-contact flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">03. Estimated Budget</label>
              <select className="brutal-input bg-transparent border-0 border-b border-zinc-800 p-4 text-2xl font-light focus:outline-none focus:ring-0 rounded-none w-full text-zinc-400 appearance-none">
                <option>$50k - $100k</option>
                <option>$100k - $250k</option>
                <option>$250k+</option>
              </select>
            </div>
            <div className="reveal-contact flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">04. The Details</label>
              <textarea 
                placeholder="Give us the hard truth..." 
                rows={4}
                className="brutal-input bg-transparent border-0 border-b border-zinc-800 p-4 text-xl font-light focus:outline-none focus:ring-0 rounded-none w-full placeholder:text-zinc-700 resize-none"
              ></textarea>
            </div>
            
            <button className="reveal-contact mt-8 self-start text-left text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-zinc-500 transition-colors flex items-center gap-6 group">
              <span>Transmit</span>
              <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                &rarr;
              </span>
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}