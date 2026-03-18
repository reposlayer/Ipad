"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  { id: 1, title: "Web Design", color: "bg-blue-600" },
  { id: 2, title: "Branding", color: "bg-purple-600" },
  { id: 3, title: "3D Motion", color: "bg-orange-600" },
  { id: 4, title: "Copywriting", color: "bg-green-600" },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel-item");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (wrapperRef.current?.offsetWidth || 0),
        },
      });

      tl.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
      });
    },
    { scope: container }
  );

  return (
    <section 
      ref={container} 
      className="h-screen w-full flex items-center bg-gray-900 overflow-hidden relative"
    >
      <div 
        ref={wrapperRef} 
        className="w-[400vw] h-full flex flex-nowrap"
      >
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`panel-item w-screen h-full flex items-center justify-center ${service.color}`}
          >
            <div className="text-center">
              <span className="text-sm font-mono tracking-widest text-white/50 mb-4 block">
                0{index + 1} //
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-white px-4">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}