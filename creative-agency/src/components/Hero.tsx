"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headlineRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(
      subheadRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      btnRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7, 0.3)" },
      "-=0.6"
    );
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white relative"
    >
      <div className="relative overflow-hidden mb-4">
        <h1 
          ref={headlineRef} 
          className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-difference"
        >
          NOTHING.
        </h1>
      </div>
      <div className="relative overflow-hidden mb-16">
        <p 
          ref={subheadRef} 
          className="text-xl md:text-3xl font-light text-gray-400"
        >
          We create exactly what you need.
        </p>
      </div>

      <div ref={btnRef}>
        <Magnetic>
          <div className="w-32 h-32 rounded-full border border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
            <span className="text-sm uppercase tracking-widest font-bold">Explore</span>
          </div>
        </Magnetic>
      </div>
    </section>
  );
}