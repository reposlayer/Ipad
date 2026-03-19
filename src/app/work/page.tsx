"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".work-item", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%",
        }
      });
      
      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 1
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  const projects = [
    { title: "Quantum Dynamics", type: "Fintech Platform", year: "2024" },
    { title: "Neurolink Interface", type: "WebGL Experience", year: "2023" },
    { title: "HyperScale CMS", type: "Infrastructure", year: "2023" },
    { title: "Vortex Labs", type: "Brand Identity & Web", year: "2022" },
    { title: "Project Zenith", type: "React Native App", year: "2022" },
  ];

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-24 md:pt-32 font-sans overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-end px-4 md:px-24 pb-24">
        <h1 className="hero-text text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mix-blend-difference mb-8">
          The Archive.
        </h1>
        <p className="hero-text text-xl md:text-2xl font-light text-zinc-400 max-w-2xl">
          A selection of our most complex digital systems and architectural achievements built to dominate.
        </p>
      </section>

      {/* Work Grid */}
      <section className="work-grid pb-48">
        <div className="flex border-t border-zinc-800 text-sm font-mono tracking-widest text-zinc-500 uppercase px-4 md:px-24 py-4">
          <div className="w-1/2 md:w-2/3">Project</div>
          <div className="hidden md:block w-1/4">Discipline</div>
          <div className="w-1/2 md:w-1/12 text-right">Year</div>
        </div>

        {projects.map((proj, i) => (
          <div key={i} className="work-item group cursor-none flex border-t border-zinc-800 px-4 md:px-24 py-12 md:py-24 hover:bg-white hover:text-black transition-colors duration-500">
            <div className="w-1/2 md:w-2/3 flex items-center">
              <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {proj.title}
              </h2>
            </div>
            <div className="hidden md:flex w-1/4 items-center font-mono uppercase text-sm group-hover:text-black text-zinc-400">
              {proj.type}
            </div>
            <div className="w-1/2 md:w-1/12 flex items-center justify-end font-mono">
              {proj.year}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}