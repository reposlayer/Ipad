"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "Lili CLI",
    slug: "lili-cli",
    role: "System Engineering / Tooling",
    context: "Solana Dev System",
    year: "2025",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "Outlier",
    slug: "outlier",
    role: "Design / Frontend",
    context: "Digital Interface",
    year: "2026",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2564&auto=format&fit=crop",
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
            yPercent: 10,
            force3D: true,
            rotationZ: 0.01,
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
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            force3D: true,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={containerRef} className="py-24 px-8 md:px-24 w-full bg-black text-white overflow-hidden relative border-t border-white/5">
      <div className="max-w-5xl relative z-10">
        <h2 className="text-zinc-500 font-medium text-sm tracking-widest uppercase mb-16">
          Selected Work
        </h2>
      </div>

      <div className="flex flex-col w-full max-w-5xl relative z-10">
        {projects.map((project, index) => (
          <Link href={`/work/${project.slug}`} key={index} className="portfolio-item relative w-full mb-24 last:mb-0 group block p-4 -ml-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6 z-10 relative">
              <h3 className="portfolio-title col-span-1 md:col-span-8 text-3xl md:text-5xl font-semibold tracking-tight leading-none m-0 transition-all duration-300 group-hover:text-white text-zinc-300">
                {project.title}
              </h3>
              
              <div className="col-span-1 md:col-span-4 flex flex-col justify-end gap-2">
                <div className="grid grid-cols-3 gap-4 text-sm font-normal text-zinc-500 portfolio-meta">
                  <div>
                    <span className="block text-zinc-600 text-xs mb-1">Role</span>
                    {project.role}
                  </div>
                  <div>
                    <span className="block text-zinc-600 text-xs mb-1">Context</span>
                    {project.context}
                  </div>
                  <div>
                    <span className="block text-zinc-600 text-xs mb-1">Year</span>
                    {project.year}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-zinc-900 border border-white/5 rounded-sm">
              <div 
                className="parallax-img absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center origin-center opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 delay-100" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}