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
 * Page story (passion → proof → craft → close):
 * intro curtain → who I am → what I shipped → the numbers that prove it →
 * breadth beyond products → the obsession behind the work → where it was
 * forged → tools → still in the arena → always learning → invitation.
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
          <MarqueeDivider text="Built with obsession (and snacks)" />
          <Projects />
          <Proof />
          <ClientWork />
          <About />
          <Experience />
          <Skills />
          <GitHubActivity />
          <Certifications />
          <MarqueeDivider text="Inbox open. Ego optional." />
          <Contact />
        </main>
        <Footer />
      </div>
    </IntroProvider>
  );
}
