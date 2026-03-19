import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Format slug to title (e.g. "aurora-digital" -> "Aurora Digital")
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pb-32">
      <Header />
      
      {/* Structural grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Content wrapper */}
      <article className="relative z-10 pt-40 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide mb-16 uppercase"
        >
          <span>←</span>
          <span>Return</span>
        </Link>

        {/* Hero Section */}
        <header className="mb-24 md:mb-40">
          <h1 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-12">
            {title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Client</p>
              <p className="text-zinc-200 font-medium">{title} Inc.</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Year</p>
              <p className="text-zinc-200 font-medium">2024</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Role</p>
              <p className="text-zinc-200 font-medium">Lead Engineering / Design</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Stack</p>
              <p className="text-zinc-200 font-medium">Next.js, Three.js, Tailwind</p>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <div className="w-full aspect-[16/9] bg-zinc-900 rounded-sm overflow-hidden mb-24 border border-white/10 relative">
          <Image 
            src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2564&auto=format&fit=crop`}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
              Architectural Overview
            </h2>
          </div>
          <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400 prose-headings:text-zinc-100">
            <p className="text-2xl leading-relaxed text-zinc-300 mb-8 font-medium">
              We engineered a high-performance rendering pipeline that radically reduces latency while maximizing visual fidelity across all viewports.
            </p>
            <p className="mb-6 leading-relaxed">
              The core challenge was orchestrating massive datasets without degrading client-side performance. By combining Server Components with a custom localized state layer, we essentially removed the traditional waterfall bottlenecks.
            </p>
            <p className="leading-relaxed">
              Design and engineering moved in parallel. Every pixel is intentional, driven by an underlying grid system that adapts dynamically. The result is an experience that feels instantaneous—an outlier in its category.
            </p>
          </div>
        </div>

        {/* Secondary Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
            <Image 
              src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`}
              alt="Detail view 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
            <Image 
              src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop`}
              alt="Detail view 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
