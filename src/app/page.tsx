import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden text-white">
      <CustomCursor />
      <Hero />
      <div className="h-[50vh] flex items-center justify-center bg-zinc-950">
        <p className="max-w-3xl text-center text-4xl md:text-5xl leading-tight font-light text-gray-500 px-6">
          We don't just build websites.{" "}
          <span className="text-white">We craft digital experiences</span> that
          leave a lasting impression.
        </p>
      </div>
      <Portfolio />
      <Services />
      <div className="h-[20vh] bg-black border-none"></div>
      <Footer />
    </main>
  );
}
