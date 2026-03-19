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
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
      )
        .fromTo(
          subheadRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=1.2"
        )
        .fromTo(
          copyRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=0.8"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="min-h-screen w-full flex flex-col justify-center items-start px-8 md:px-24 bg-black text-white"
    >
      <div className="overflow-hidden mb-2">
        <h1 
          ref={headlineRef} 
          className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none"
        >
          OUTLIER.
        </h1>
      </div>
      <div className="overflow-hidden mb-12">
        <p 
          ref={subheadRef} 
          className="text-xl md:text-3xl font-light text-zinc-500 tracking-wide uppercase"
        >
          by Viktor
        </p>
      </div>

      <p 
        ref={copyRef} 
        className="max-w-2xl text-2xl md:text-4xl font-light text-zinc-400 leading-tight"
      >
        I engineer <span className="text-white font-normal">unfair digital advantages</span>.
      </p>
    </section>
  );
}