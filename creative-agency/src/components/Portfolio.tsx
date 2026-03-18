"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  { id: 1, title: "Neon Dreams", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop", speed: 0.1 },
  { id: 2, title: "Urban Flow", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", speed: 0.25 },
  { id: 3, title: "Abstract Wave", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", speed: 0.15 },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const images = gsap.utils.toArray(".parallax-img") as HTMLElement[];
    
    images.forEach((img) => {
      const speed = parseFloat(img.dataset.speed || "0.2");
      
      gsap.to(img, {
        y: () => -100 * speed, // Move image up
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 w-full bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-24 uppercase tracking-tighter">
          Selected Works
        </h2>
        
        <div className="flex flex-col gap-32">
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              className={`relative w-full md:w-[70%] lg:w-[60%] aspect-[4/3] rounded-3xl overflow-hidden ${
                i % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              {/* Parallax Image container */}
              <div 
                className="parallax-img absolute w-[100%] h-[130%] top-[-15%] left-0"
                data-speed={project.speed}
              >
                <img 
                  src={project.url} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                <h3 className="text-4xl md:text-6xl font-black text-white mix-blend-overlay">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}