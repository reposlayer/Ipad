"use client";

export default function Footer() {
  return (
    <footer className="h-[50vh] bg-black text-white flex flex-col justify-center items-center border-t border-white/10">
      <h2 className="text-4xl font-bold mb-4">Let's talk.</h2>
      <a 
        href="#" 
        className="text-xl underline decoration-1 underline-offset-4 hover:text-gray-400 transition-colors"
      >
        hello@creative.agency
      </a>
      <p className="mt-12 text-sm text-gray-500 font-mono">
        © {new Date().getFullYear()} Creative Agency. All rights reserved.
      </p>
    </footer>
  );
}