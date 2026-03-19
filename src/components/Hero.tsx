"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      )
        .fromTo(
          subheadRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.9"
        )
        .fromTo(
          copyRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.6"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="min-h-screen w-full flex flex-col justify-center items-start px-8 md:px-24 bg-transparent text-white relative border-b border-white/5"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 overflow-hidden mb-4">
        <h1 
          ref={headlineRef} 
          className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
        >
          OUTLIER.
        </h1>
      </div>
      <div className="relative z-10 overflow-hidden mb-12 flex items-center gap-4">
        <div className="w-8 h-[1px] bg-white/20"></div>
        <p 
          ref={subheadRef} 
          className="text-lg md:text-xl font-medium tracking-widest uppercase text-zinc-500"
        >
          By Viktor
        </p>
      </div>

     
    </section>
  );
}