import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
