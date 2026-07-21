import { About } from "@/components/About";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroProvider } from "@/components/IntroLoader";
import { MarqueeDivider } from "@/components/MarqueeDivider";
import { Navbar } from "@/components/Navbar";
import { ClientWork } from "@/components/ClientWork";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Projects } from "@/components/Projects";
import { Proof } from "@/components/Proof";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";

/**
 * Page story: intro curtain → who → what shipped → client breadth →
 * how I think → where I built → what I use → proof → still active →
 * credentials → contact. Marquee dividers mark the two biggest chapter
 * breaks: into the work, and into the close.
 */
export default function Home() {
  return (
    <IntroProvider>
      <div className="relative flex flex-col">
        <ScrollProgress />
        <BackgroundFX />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <MarqueeDivider text="Selected work" />
          <Projects />
          <ClientWork />
          <About />
          <Experience />
          <Skills />
          <Proof />
          <GitHubActivity />
          <Certifications />
          <MarqueeDivider text="Let's build something" />
          <Contact />
        </main>
        <Footer />
      </div>
    </IntroProvider>
  );
}
