"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Godel Terminal",
    slug: "godel-terminal",
    role: "Engineering / API Design",
    context: "Real-Time Equities API",
    year: "2024",
  },
  {
    title: "Lili CLI",
    slug: "lili-cli",
    role: "System Engineering / Tooling",
    context: "Solana Dev System",
    year: "2025",
  },
  {
    title: "Outlier",
    slug: "outlier",
    role: "Design / Frontend",
    context: "Digital Interface",
    year: "2026",
  },
  {
    title: "Project Zenith",
    slug: "project-zenith",
    role: "Mobile App",
    context: "React Native",
    year: "2022",
  },
  {
    title: "Quantum Dynamics",
    slug: "quantum-dynamics",
    role: "Fintech Platform",
    context: "System Design",
    year: "2022",
  }
];

export default function WorkPage() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".work-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%",
        }
      });
      
      gsap.from(".hero-text", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-black text-white pt-24 md:pt-32 font-sans overflow-x-hidden selection:bg-white/30">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 md:px-24 pt-32 pb-16 max-w-5xl">
        <h1 className="hero-text text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Selected Works
        </h1>
        <p className="hero-text text-lg md:text-xl font-normal text-zinc-400 max-w-2xl leading-relaxed">
          A collection of our most complex digital systems and architectural achievements, built with precision and scale in mind.
        </p>
      </section>

      {/* Work Grid */}
      <section className="work-grid px-6 md:px-24 pb-48 max-w-7xl">
        <div className="flex border-b border-white/5 text-xs font-medium tracking-widest text-zinc-500 uppercase pb-4 mb-4 md:px-4">
          <div className="w-full md:w-5/12">Project</div>
          <div className="hidden md:flex w-3/12">Role</div>
          <div className="hidden md:flex w-3/12">Context</div>
          <div className="w-auto md:w-1/12 text-right ml-auto">Year</div>
        </div>

        <div className="flex flex-col">
          {projects.map((proj, i) => (
            <Link 
              key={i} 
              href={`/work/${proj.slug}`}
              className="work-item group flex items-center py-6 md:py-8 sm:px-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] border-b-white/5 transition-colors duration-300"
            >
              <div className="w-full md:w-5/12 flex items-center">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {proj.title}
                </h2>
              </div>
              <div className="hidden md:flex w-3/12 items-center text-sm font-normal text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                {proj.role}
              </div>
              <div className="hidden md:flex w-3/12 items-center text-sm font-normal text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                {proj.context}
              </div>
              <div className="w-auto md:w-1/12 flex items-center justify-end text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 ml-auto">
                {proj.year}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}