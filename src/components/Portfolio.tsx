"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "AURORA",
    role: "Direction / WebGL",
    context: "E-Commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "NEBULA",
    role: "Brand / Interactive",
    context: "Tech Startup",
    year: "2023",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "QUANTUM",
    role: "UX / Development",
    context: "Fintech App",
    year: "2023",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop",
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".portfolio-item");

      items.forEach((item) => {
        const imageBlock = item.querySelector(".parallax-img");
        const title = item.querySelector(".portfolio-title");
        const meta = item.querySelectorAll(".portfolio-meta");

        if (imageBlock) {
          gsap.to(imageBlock, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        gsap.fromTo(
          [title, ...meta],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 w-full bg-[#0a0a0a] text-white overflow-hidden">
      <div className="px-6 md:px-12 border-t border-zinc-800 pt-16 mb-24">
        <h2 className="text-[clamp(3rem,8vw,10rem)] font-bold uppercase leading-none tracking-tighter mix-blend-difference">
          Selected <br/>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
            Works
          </span>
        </h2>
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item relative w-full mb-32 last:mb-0 group">
            <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 z-10 relative pointer-events-none">
              <h3 className="portfolio-title col-span-1 md:col-span-8 text-[clamp(2.5rem,6vw,8rem)] font-black uppercase tracking-tighter leading-none m-0 group-hover:pl-8 transition-all duration-700 ease-out">
                {project.title}
              </h3>
              
              <div className="col-span-1 md:col-span-4 flex flex-col justify-end pb-2 gap-4">
                <div className="grid grid-cols-2 gap-4 font-mono text-xs uppercase tracking-widest text-zinc-400 portfolio-meta">
                  <div>
                    <span className="block text-zinc-600 mb-1">Role</span>
                    {project.role}
                  </div>
                  <div>
                    <span className="block text-zinc-600 mb-1">Context</span>
                    {project.context}
                  </div>
                  <div className="col-span-2 mt-2 pt-4 border-t border-zinc-800">
                    <span className="block text-zinc-600 mb-1">Year</span>
                    {project.year}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-zinc-900 border-y border-zinc-800">
              <div 
                className="parallax-img absolute inset-[-15%] w-[130%] h-[130%] bg-cover bg-center origin-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}