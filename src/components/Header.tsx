"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <header 
      ref={headerRef} 
      className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center mix-blend-difference z-50 text-white"
    >
      <div className="font-semibold text-sm tracking-tight">
        <Link href="/">OUTLIER<span className="text-zinc-500"> by Viktor</span></Link>
      </div>
      <nav className="flex gap-6 text-sm flex-row items-center font-medium">
        <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">Services</Link>
        <Link href="/work" className="text-zinc-400 hover:text-white transition-colors">Work</Link>
        <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
