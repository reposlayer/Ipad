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
    description: "Diagnosing and removing bottlenecks. Moving metrics from yellow to green without sacrificing design.",
    points: ["Core Web Vitals", "React Optimization", "Asset Delivery", "Runtime Profiling"]
  },
  {
    id: 2,
    title: "Digital Design",
    description: "Crafting interfaces that demand attention. Relentlessly subtracting the unnecessary.",
    points: ["Design Systems", "UI/UX Architecture", "Micro-interactions", "Typography"]
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
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
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
    <section ref={containerRef} className="py-32 px-8 md:px-24 bg-black w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-zinc-600 font-mono text-sm tracking-widest uppercase mb-24">
          // Expertise
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {services.map((service) => (
            <div key={service.id} className="service-panel flex flex-col border-t border-zinc-900 pt-12">
              <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-white tracking-tight">
                {service.title}
              </h3>
              <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.points.map((point, index) => (
                  <li key={index} className="flex items-center text-zinc-300 font-light">
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mr-4"></span>
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