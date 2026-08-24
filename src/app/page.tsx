import { About } from "@/components/About";
import { BackgroundFX } from "@/components/BackgroundFX";
import { ClientWork } from "@/components/ClientWork";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Hero } from "@/components/Hero";
import { IntroProvider } from "@/components/IntroLoader";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SideProjects } from "@/components/SideProjects";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

/**
 * Reading order, most-checkable first: what I shipped and how it works, then
 * what I own outright, then who I am, then the record a recruiter can verify
 * (employment, stack, client sites, public GitHub), then how to reach me.
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
          <Work />
          <SideProjects />
          <About />
          <Experience />
          <Skills />
          <ClientWork />
          <GitHubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </IntroProvider>
  );
}
