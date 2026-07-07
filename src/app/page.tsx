import { About } from "@/components/About";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Proof } from "@/components/Proof";
import { Skills } from "@/components/Skills";

/**
 * New section order for the editorial v2 design:
 *
 * Hero → Work (projects) → About → Experience → Stack (skills) →
 * Proof (metrics) → Certifications → Contact → Footer
 *
 * The sequence tells a story: here's who I am → here's what I've built →
 * here's my background → here's what I can do → here's the proof.
 */
export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <BackgroundFX />
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Proof />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
