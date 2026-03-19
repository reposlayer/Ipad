"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".step-row", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".methodology",
          start: "top 70%",
        }
      });
      
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: "01", title: "Discovery & Architecture", desc: "Rigorous system design mapping. We lay out the data flow, scale boundaries, and interface paradigms before writing a single line of code." },
    { num: "02", title: "Zero-to-One Engineering", desc: "Rapid prototyping turned production-grade. We stand up core infrastructure that breathes life into abstract concepts instantly." },
    { num: "03", title: "Full-Stack Implementation", desc: "Brutal execution. Hand-crafted frontends backed by serverless edge runtimes or low-latency container orchestration." },
    { num: "04", title: "Scale & Optimization", desc: "Stress testing beyond human limits. Caching layers, load balancers, and GSAP micro-optimizations that run at 120fps." },
  ];

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-24 md:pt-32 font-sans overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-end px-4 md:px-24 pb-24">
        <h1 className="hero-title text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] mix-blend-difference mb-8">
          Surgical <br/> Precision.
        </h1>
        <p className="hero-title text-xl md:text-3xl font-light text-zinc-400 max-w-3xl">
          Commanding unlimited technical capabilities across absolutely any tech stack imaginable.
        </p>
      </section>

      {/* Methodology Section */}
      <section className="methodology py-24 md:py-48 px-4 md:px-24 border-t border-zinc-800">
        <h2 className="text-sm font-mono tracking-widest uppercase text-white mb-20">
          // The Methodology
        </h2>
        
        <div className="flex flex-col">
          {steps.map((step) => (
            <div key={step.num} className="step-row flex flex-col md:flex-row py-12 md:py-24 border-b border-zinc-800 hover:bg-zinc-900 transition-colors duration-500 px-4 group">
              <div className="w-full md:w-1/4 mb-8 md:mb-0 text-7xl md:text-9xl font-black text-zinc-800 group-hover:text-white transition-colors duration-500 font-mono">
                {step.num}.
              </div>
              <div className="w-full md:w-3/4 flex flex-col justify-center">
                <h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tight mb-6">
                  {step.title}
                </h3>
                <p className="text-xl text-zinc-400 font-light max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}