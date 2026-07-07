import { About } from "@/components/About";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ClientWork } from "@/components/ClientWork";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Projects } from "@/components/Projects";
import { Proof } from "@/components/Proof";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";

/**
 * Page story: who → what shipped → client breadth → how I think →
 * where I built → what I use → proof → still active → credentials → contact.
 */
export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <ScrollProgress />
      <BackgroundFX />
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <ClientWork />
        <About />
        <Experience />
        <Skills />
        <Proof />
        <GitHubActivity />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
