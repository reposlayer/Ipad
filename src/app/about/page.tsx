"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Brutalist GSAP Revealer
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 80%",
        }
      });
      
      gsap.from(".grid-item", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 75%",
        }
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-24 md:pt-32 font-sans overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero min-h-[80vh] flex flex-col justify-end px-4 md:px-24 pb-24">
        <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mix-blend-difference mb-12">
          <div className="overflow-hidden"><span className="reveal-text inline-block">Outlier</span></div>
          <div className="overflow-hidden"><span className="reveal-text inline-block">By Viktor</span></div>
        </h1>
        <p className="reveal-text text-xl md:text-3xl font-light text-zinc-400 max-w-4xl">
          We are a brutally effecient engineering collective. We build systems that command market share and crush latency. No fluff. Just hard math and severe architectures.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 md:px-24 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <h2 className="text-sm font-mono tracking-widest uppercase text-zinc-500 w-full md:w-1/4">
            [01] Our Philosophy
          </h2>
          <div className="w-full md:w-3/4">
            <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tight leading-none mb-12">
              Ship It Before They Can Dream It.
            </h3>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
              Software is leverage. You either wield it, or you get crushed by it. We focus on zero-tolerance implementations: scale infinitely, tolerate zero defects, and deliver pixel-perfect brute-force aesthetics. We believe in performance as a feature.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Core */}
      <section className="py-32 px-4 md:px-24 border-t border-zinc-800 bg-zinc-950">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 mb-20">
          <h2 className="text-sm font-mono tracking-widest uppercase text-zinc-500 w-full md:w-1/4">
            [02] The Engineering Core
          </h2>
          <div className="w-full md:w-3/4">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              A Stack Built For War.
            </h3>
          </div>
        </div>
        
        <div className="tech-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Next.js", "Kubernetes", "Rust", "Go", "WebGL", "Three.js", "PostgreSQL", "Kafka"].map((tech) => (
            <div key={tech} className="grid-item aspect-square border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-500 cursor-none group">
              <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter group-hover:scale-110 transition-transform duration-500">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 px-4 md:px-24 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <h2 className="text-sm font-mono tracking-widest uppercase text-zinc-500 w-full md:w-1/4">
            [03] Our Approach
          </h2>
          <div className="w-full md:w-3/4">
            <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tight leading-none mb-12">
              Uncompromising Execution.
            </h3>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mb-8">
              We operate exclusively at the bleeding edge. From bespoke micro-interactions to global distributed backends, everything is hand-written, hyper-optimized, and built to survive traffic spikes that break ordinary infrastructure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}