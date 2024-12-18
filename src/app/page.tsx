import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto relative">
      <Navbar />
      <Hero />
      <Section />
      <Showcase />
      <Footer />
    </div>
  );
}
