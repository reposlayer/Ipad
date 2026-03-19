"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: "Performance Optimization",
    description: "Building systems from the ground up. Architecting full-stack applications with an emphasis on speed, reliability, and modern tooling.",
    points: ["Next.js / React", "System Architecture", "Performance Profiling", "Full-stack Engineering"]
  },
  {
    id: 2,
    title: "Digital Design",
    description: "Crafting interfaces that prioritize clarity and function. Removing the unnecessary to achieve a precise, high-performance user experience.",
    points: ["Design Systems", "UI/UX Architecture", "Micro-interactions", "Typography & Layout"]
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".service-panel");

      panels.forEach((panel) => {
        gsap.fromTo(
          panel,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-8 md:px-24 bg-black w-full text-white">
      <div className="max-w-5xl">
        <h2 className="text-zinc-500 font-medium text-sm tracking-tight mb-16">
          Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service) => (
            <div key={service.id} className="service-panel flex flex-col border-t border-zinc-900 pt-8">
              <h3 className="text-2xl font-medium mb-4 text-white tracking-tight">
                {service.title}
              </h3>
              <p className="text-base text-zinc-400 font-normal mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mt-auto">
                {service.points.map((point, index) => (
                  <li key={index} className="flex items-center text-sm text-zinc-300 font-normal">
                    <span className="w-1 h-1 bg-zinc-600 mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}