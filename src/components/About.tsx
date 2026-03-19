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
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 px-8 md:px-24 bg-black flex flex-col justify-center min-h-[50vh]">
      <div className="max-w-4xl">
        <h2 className="text-zinc-500 font-medium text-sm tracking-tight mb-8">
          About
        </h2>
        <p 
          ref={textRef}
          className="text-2xl md:text-5xl font-medium leading-tight text-white"
        >
          I am Viktor. I build high-performance digital products where speed, structure, and design work as one.
        </p>
      </div>
    </section>
  );
}