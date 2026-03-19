"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 px-8 md:px-24 bg-black flex flex-col justify-center min-h-[70vh]">
      <h2 className="text-zinc-600 font-mono text-sm tracking-widest uppercase mb-12">
        // About
      </h2>
      <p 
        ref={textRef}
        className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-zinc-400 max-w-5xl"
      >
        I am Viktor. I specialize in <span className="text-white font-normal">high-end digital architecture</span>, performance optimization, and building systems that <span className="text-white font-normal">outperform expectations</span>.
      </p>
    </section>
  );
}