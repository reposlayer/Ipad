"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-reveal", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-black text-white flex flex-col justify-between pt-32 pb-8 px-8 md:px-24 overflow-hidden border-t border-zinc-900"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 w-full max-w-5xl z-10">
        <div className="max-w-xl footer-reveal">
          <p className="text-xl md:text-3xl font-medium tracking-tight leading-snug">
            Let’s build something that performs.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm font-normal footer-reveal text-zinc-400">
          <a href="mailto:viktor@outlier.co" className="hover:text-white transition-colors">
            viktor@outlier.co
          </a>
          <a href="#" className="hover:text-white transition-colors">
            X (Twitter)
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-normal tracking-wide pt-24 footer-reveal max-w-5xl">
        <p>
          © {new Date().getFullYear()} OUTLIER by Viktor
        </p>
        <p className="mt-4 md:mt-0">
          All systems operational.
        </p>
      </div>
    </footer>
  );
}