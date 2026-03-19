import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden text-white">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}
