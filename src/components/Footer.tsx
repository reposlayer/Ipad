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
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-full min-h-screen bg-white text-black flex flex-col justify-between pt-32 pb-8 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-8 bg-black" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-16 w-full mt-12 z-10">
        <div className="max-w-2xl footer-reveal">
          <p className="text-2xl md:text-4xl font-light tracking-tight leading-snug">
            We collaborate with ambitious brands to create digital experiences that blend brutalist aesthetics with flawless engineering.
          </p>
        </div>

        <div className="flex flex-col gap-8 text-lg font-medium footer-reveal">
          <a href="mailto:hello@prostudio.co" className="hover:line-through transition-all duration-300 transform hover:scale-105 origin-left inline-block">
            hello@prostudio.co
          </a>
          <a href="#" className="hover:line-through transition-all duration-300 transform hover:scale-105 origin-left inline-block">
            Twitter / X
          </a>
          <a href="#" className="hover:line-through transition-all duration-300 transform hover:scale-105 origin-left inline-block">
            Instagram
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-1 mt-24 mb-12 footer-reveal mix-blend-difference overflow-hidden">
        <h2 className="text-[clamp(4rem,20vw,24rem)] font-black uppercase tracking-tighter leading-none m-0 text-white cursor-pointer hover:text-transparent transition-colors duration-500" style={{ WebkitTextStroke: "2px #fff" }}>
          LET'S TALK
        </h2>
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm font-mono uppercase tracking-widest border-t-4 border-black pt-6 footer-reveal z-10">
        <p className="font-bold">
          © {new Date().getFullYear()} PRO STUDIO
        </p>
        <p className="font-bold hidden md:block text-center flex-grow">
          DIGITAL EXCELLENCE
        </p>
        <p className="font-bold mt-4 md:mt-0">
          ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}