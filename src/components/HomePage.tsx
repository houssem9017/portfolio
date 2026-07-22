import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Websites from "@/components/Websites";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Websites />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
