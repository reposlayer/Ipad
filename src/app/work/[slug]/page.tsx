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
  
  if (slug === "godel-terminal") {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pb-32">
        <Header />
        
        {/* Structural grid background */}
        <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Content wrapper */}
        <article className="relative z-10 pt-40 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
          
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
              Godel Terminal
            </h1>
            
            <p className="text-2xl md:text-4xl text-zinc-300 font-medium tracking-tight mb-16 max-w-4xl">
              Engineering a Real-Time Equities API for European and U.K. Markets
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Client</p>
                <p className="text-zinc-200 font-medium">DL Software</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Year</p>
                <p className="text-zinc-200 font-medium">2024</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Role</p>
                <p className="text-zinc-200 font-medium">Engineering / API Design</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Stack</p>
                <p className="text-zinc-200 font-medium">Python, REST, High-Frequency</p>
              </div>
            </div>
          </header>

          <div className="w-full aspect-[21/9] bg-zinc-900 rounded-sm overflow-hidden mb-24 border border-white/10 relative">
            <Image 
              src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`}
              alt="Godel Terminal"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Introduction
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="text-2xl leading-relaxed text-zinc-300 mb-8 font-medium">
                Modern financial terminals are built on one core expectation: speed and clarity.
              </p>
              <p className="mb-6 leading-relaxed">
                Users don’t just want access to data. They expect immediate, structured, and reliable responses that can support real decision-making in real time.
              </p>
              <p className="mb-6 leading-relaxed">
                Godel Terminal is designed around that idea. A browser-based financial terminal that provides access to market data, charts, news, and research workflows across global markets.
              </p>
              <p className="mb-6 leading-relaxed">
                Within that system, one of the key engineering challenges was handling European and U.K. equities.
              </p>
              <p className="leading-relaxed">
                This case study focuses on building the API layer that made that possible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
              <Image 
                src={`https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2564&auto=format&fit=crop`}
                alt="Terminal UI Detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
              <Image 
                src={`https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2564&auto=format&fit=crop`}
                alt="Data Visualization"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                The Problem
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="mb-6 leading-relaxed">
                At a glance, “stocks data” sounds simple. In reality, European and U.K. markets introduce significant complexity:
              </p>
              <ul className="mb-6 space-y-2 text-zinc-300">
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Multiple exchanges with overlapping ticker symbols</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Inconsistent naming conventions</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Different currency contexts</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Fragmented data sources</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Lack of standardized structures</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                Raw data from upstream providers is not ready for product usage. Without a proper system, tickers break, responses become inconsistent, frontend logic becomes messy, and performance suffers.
              </p>
              <p className="text-xl leading-relaxed text-zinc-300 font-medium">
                For a financial terminal, this is unacceptable.
              </p>
            </div>
          </div>

          <div className="w-full bg-zinc-900 rounded-sm overflow-hidden mb-32 border border-white/10 p-12 md:p-24 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl font-medium mb-8 text-white">Objective</h3>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                The goal was to design a system that could reliably resolve tickers across European and U.K. exchanges, normalize fragmented market data into a consistent format, and provide real-time access through clean, predictable endpoints.
              </p>
              <p className="text-2xl text-white font-medium italic">
                "Build an API that behaves like a product layer, not just a data pipe."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Approach & Core Engineering
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="mb-8 leading-relaxed">
                The system was built using a Python-based backend with a REST API architecture focused on real-time performance. The core approach revolved around three principles: resolve complexity at the backend, normalize everything before exposure, and keep responses clean and predictable.
              </p>
              
              <h3 className="text-xl text-zinc-100 font-semibold mb-4 mt-12">Ticker Indexing & Mapping</h3>
              <p className="mb-8 leading-relaxed">
                European and U.K. equities required building a reliable indexing system. This involved mapping tickers across multiple exchanges, handling symbol ambiguity, and ensuring consistent identification for each instrument. The result was a stable resolution layer.
              </p>

              <h3 className="text-xl text-zinc-100 font-semibold mb-4">Data Normalization & API Design</h3>
              <p className="mb-8 leading-relaxed">
                Raw market data varies in structure depending on the source. We designed a normalized data model ensuring consistent field naming and predictable response formats. The API was designed for real-time usage inside a terminal environment, prioritizing low-latency responses, clean minimal payloads, and direct usability in UI components.
              </p>

              <h3 className="text-xl text-zinc-100 font-semibold mb-4">Performance Optimization</h3>
              <p className="leading-relaxed">
                Speed was a core requirement. The system was optimized to deliver sub-100ms response times for core endpoints, efficient ticker lookup across indexed datasets, and scalable handling of repeated requests, ensuring the API supports high-frequency terminal usage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 pt-24 border-t border-white/10">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Impact & Conclusion
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="text-2xl leading-relaxed text-zinc-300 mb-8 font-medium">
                The result was a stable and scalable API layer that resolved ticker ambiguity across European and U.K. markets.
              </p>
              <p className="mb-8 leading-relaxed">
                It delivered consistent, product-ready data, reduced frontend complexity, and improved overall system performance. This allowed Godel Terminal to handle regional equities in a way that felt seamless to the end user.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-12">
                <h4 className="text-white text-lg font-semibold mb-4">Key Takeaways</h4>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Financial products are not built on raw data. They are built on how that data is structured, normalized, and delivered. The difference between a working system and a reliable product lies in the layer between the data source and the user interface.
                </p>
              </div>

              <p className="leading-relaxed text-zinc-300 font-medium">
                Building an API for European and U.K. equities was not just a data task. It was a systems problem. By focusing on normalization, mapping, and real-time performance, we created a foundation that allowed complex market data to behave like a coherent system. And in a financial terminal, that difference is everything.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-semibold">Next Project</p>
              <Link href="/work/lili-cli" className="text-3xl text-white font-semibold hover:text-zinc-300 transition-colors group flex items-center gap-4">
                Lili CLI
                <span className="text-zinc-600 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
            <div className="md:text-right">
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-semibold">All Works</p>
              <Link href="/#portfolio" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white">
                Back to Portfolio
              </Link>
            </div>
          </div>

        </article>
      </main>
    );
  }

  if (slug === "lili-cli") {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pb-32">
        <Header />
        
        <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

        <article className="relative z-10 pt-40 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide mb-16 uppercase"
          >
            <span>←</span>
            <span>Return</span>
          </Link>

          <header className="mb-24 md:mb-40">
            <h1 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-12">
              Lili CLI
            </h1>
            
            <p className="text-2xl md:text-4xl text-zinc-300 font-medium tracking-tight mb-16 max-w-4xl">
              Solana development system built for execution, not configuration.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Project</p>
                <p className="text-zinc-200 font-medium">Lili System</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Year</p>
                <p className="text-zinc-200 font-medium">2025</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Role</p>
                <p className="text-zinc-200 font-medium">System / Infrastructure</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Stack</p>
                <p className="text-zinc-200 font-medium">Node.js, Rust, Solana</p>
              </div>
            </div>
          </header>

          <div className="w-full aspect-[21/9] bg-zinc-900 rounded-sm overflow-hidden mb-24 border border-white/10 relative">
            <Image 
              src={`https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2564&auto=format&fit=crop`}
              alt="Lili CLI System Concept"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Overview
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="text-2xl leading-relaxed text-zinc-300 mb-8 font-medium">
                Built an interactive CLI system designed to simplify and accelerate Solana development.
              </p>
              <p className="leading-relaxed">
                The system removes setup complexity, standardizes workflows, and enables developers to build, deploy, and manage programs through a structured interface.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
              <Image 
                src={`https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2564&auto=format&fit=crop`}
                alt="Web3 Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
              <Image 
                src={`https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2564&auto=format&fit=crop`}
                alt="Code Terminal Data"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                The Problem
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="mb-6 leading-relaxed">
                Solana development workflows are fragmented. They suffer from:
              </p>
              <ul className="mb-6 space-y-2 text-zinc-300">
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Complex environment setup</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Multiple disconnected tools</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Manual configuration steps</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Inconsistent project structures</li>
              </ul>
              <p className="text-xl leading-relaxed text-zinc-300 font-medium">
                This creates undeniable friction and slows down iteration significantly.
              </p>
            </div>
          </div>

          <div className="w-full bg-zinc-900 rounded-sm overflow-hidden mb-32 border border-white/10 p-12 md:p-24 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl font-medium mb-8 text-white">The Solution</h3>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Engineered a Node.js-based CLI system that automates environment setup and unifies development workflows.
              </p>
              <p className="text-2xl text-white font-medium italic">
                "The goal was simple: reduce the steps between a developer's idea and its execution."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Core Work & Architecture
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <h3 className="text-xl text-zinc-100 font-semibold mb-4 mt-12">Core Capabilities</h3>
              <p className="mb-4 leading-relaxed">
                The setup focused on zero-setup installation to cover the Solana CLI, Rust, and arbitrary dependencies alongside an interactive, menu-driven command system. Key developments:
              </p>
              <ul className="mb-8 space-y-2 text-zinc-300 list-none pl-0">
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Built CLI architecture with interactive navigation</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Implemented project generation for frontend, backend, programs, and fullstack</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Integrated Anchor, React, Next.js, and Express templates</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Developed NFT, token, and DAO tooling</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Designed wallet and program management commands</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Created a template catalog system directly bridging into GitHub</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Built automated environment diagnostics ("lili doctor")</li>
              </ul>

              <h3 className="text-xl text-zinc-100 font-semibold mb-4">Architecture</h3>
              <p className="mb-8 leading-relaxed">
                A streamlined Node.js CLI runtime combined with direct native Rust parsing and Solana integration. At its heart, it acts as an automated dependency installer tightly coupled to an internal GitHub-based template ingestion system.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 pt-24 border-t border-white/10">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Outcome & Result
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="text-2xl leading-relaxed text-zinc-300 mb-8 font-medium">
                Eliminated setup complexity for Solana development entirely, achieving one-command environment builds.
              </p>
              <p className="mb-8 leading-relaxed">
                This newly enforced standard of programmatic workflow across multi-project landscapes massively reduced friction in on-chain interaction yielding drastically faster project initialization and iteration cycles.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-12">
                <h4 className="text-white text-lg font-semibold mb-4">The Result</h4>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  A unified system that turns fragmented Solana tooling into a structured, high-speed development workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-semibold">Previous Project</p>
              <Link href="/work/godel-terminal" className="text-3xl text-white font-semibold hover:text-zinc-300 transition-colors group flex items-center gap-4">
                <span className="text-zinc-600 group-hover:-translate-x-2 transition-transform">←</span>
                Godel Terminal
              </Link>
            </div>
            <div className="md:text-right">
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-semibold">Next Project</p>
              <Link href="/work/outlier" className="text-3xl text-white font-semibold hover:text-zinc-300 transition-colors group flex items-center gap-4">
                Outlier
                <span className="text-zinc-600 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
            <div className="md:text-right">
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-semibold">All Works</p>
              <Link href="/#portfolio" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white">
                Back to Portfolio
              </Link>
            </div>
          </div>

        </article>
      </main>
    );
  }

  if (slug === "outlier") {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pb-32">
        <Header />
        
        <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

        <article className="relative z-10 pt-40 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide mb-16 uppercase"
          >
            <span>←</span>
            <span>Return</span>
          </Link>

          <header className="mb-24 md:mb-40">
            <h1 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-12">
              Outlier
            </h1>
            
            <p className="text-2xl md:text-4xl text-zinc-300 font-medium tracking-tight mb-16 max-w-4xl">
              Agency-grade website built to position a high-end engineering studio and convert premium clients.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Client</p>
                <p className="text-zinc-200 font-medium">Internal Setup</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Year</p>
                <p className="text-zinc-200 font-medium">2026</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Role</p>
                <p className="text-zinc-200 font-medium">Design / Development</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Stack</p>
                <p className="text-zinc-200 font-medium">Next.js 14, Tailwind, GSAP</p>
              </div>
            </div>
          </header>

          <div className="w-full aspect-[21/9] bg-zinc-900 rounded-sm overflow-hidden mb-24 border border-white/10 relative">
            <Image 
              src={`https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2564&auto=format&fit=crop`}
              alt="Outlier High Performance Interface"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Overview
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="text-2xl leading-relaxed text-zinc-300 mb-8 font-medium">
                Designed and built a performance-first digital interface that communicates technical capability instantly.
              </p>
              <p className="leading-relaxed">
                The system prioritizes clarity, speed, and perception, ensuring users understand the value within seconds. Every element was designed to feel immediate and controlled.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
              <Image 
                src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop`}
                alt="Typography and Layout"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
              <Image 
                src={`https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2564&auto=format&fit=crop`}
                alt="Minimalist Code Engineering"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                The Problem
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="mb-6 leading-relaxed">
                Most developer portfolios fail at positioning. They suffer from:
              </p>
              <ul className="mb-6 space-y-2 text-zinc-300">
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Too much information</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Weak visual hierarchy</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Lack of clear signal</li>
                <li className="flex gap-3"><span className="text-zinc-600">—</span> Slow or unpolished interactions</li>
              </ul>
              <p className="text-xl leading-relaxed text-zinc-300 font-medium">
                They show work, but don’t create confidence.
              </p>
            </div>
          </div>

          <div className="w-full bg-zinc-900 rounded-sm overflow-hidden mb-32 border border-white/10 p-12 md:p-24 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl font-medium mb-8 text-white">Philosophy</h3>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                For us. By us. Built from the inside: no outsourced thinking, no templated execution. Every decision reflects how we build, how we think, and how we operate.
              </p>
              <p className="text-2xl text-white font-medium italic">
                "Make the interface feel like the product."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Approach & Architecture
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              
              <h3 className="text-xl text-zinc-100 font-semibold mb-4 mt-12">Engineering</h3>
              <p className="mb-4 leading-relaxed">
                The visual framework is married to bleeding-edge Next.js architecture heavily relying on React Server Components, customized Tailwind utilities and highly orchestrirane GSAP ScrollTrigger timeline animacije.
              </p>
              <ul className="mb-8 space-y-2 text-zinc-300 list-none pl-0">
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Optimized rendering and animation flow</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Minimal layout shift and dynamic font scaling</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Fast initial load (sub 100ms LCP)</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Smooth scroll and magnetic interaction system</li>
              </ul>

              <h3 className="text-xl text-zinc-100 font-semibold mb-4">Design System</h3>
              <p className="mb-4 leading-relaxed">
                Built to be raw, aggressive but beautiful. We went with a monochrome palette enhanced with controlled, sparse highlights. No decoration. Only intent.
              </p>
              <ul className="mb-8 space-y-2 text-zinc-300 list-none pl-0">
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Grid-based layout with subtle structural backgrounding</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Strict spacing and hierarchy rules</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> Large-scale typography as the primary visual driver</li>
                <li className="flex gap-3"><span className="text-zinc-600">→</span> High-FPS micro-interactions</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 pt-24 border-t border-white/10">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight sticky top-32">
                Outcome & Result
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400">
              <p className="text-2xl leading-relaxed text-zinc-300 mb-8 font-medium">
                A strong first-impression clarity coupled with reduced cognitive load and immediate understanding of services.
              </p>
              <p className="mb-8 leading-relaxed">
                The interface successfully positions the brand as high-end from the first interaction and directly bridges the gap between digital visit and direct contact. It performs under heavy conditions and scales flawlessly.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-12">
                <h4 className="text-white text-lg font-semibold mb-4">The Result</h4>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  A high-performance interface that acts as a positioning system, not just a typical website. Built to communicate, convert, and scale.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-semibold">Previous Project</p>
              <Link href="/work/lili-cli" className="text-3xl text-white font-semibold hover:text-zinc-300 transition-colors group flex items-center gap-4">
                <span className="text-zinc-600 group-hover:-translate-x-2 transition-transform">←</span>
                Lili CLI
              </Link>
            </div>
            <div className="md:text-right">
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-semibold">All Works</p>
              <Link href="/#portfolio" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white">
                Back to Portfolio
              </Link>
            </div>
          </div>

        </article>
      </main>
    );
  }

  // Default layout for other dummy project pages
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
            sizes="100vw"
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
              Design and engineering moved in parallel. Every pixel is intentional, driven by an underlying grid system that adapts dynamically. The result is an experience that feels instantaneous. A true outlier in its category.
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
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10 relative">
            <Image 
              src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop`}
              alt="Detail view 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
