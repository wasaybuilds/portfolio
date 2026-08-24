import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Sora, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* Editorial serif — used for the intro sequence's statement typography. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/**
 * Runs before paint so the first frame uses the saved theme instead of flashing
 * the CSS default then swapping.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t!=="ink"&&t!=="classic")t="ink";document.documentElement.setAttribute("data-theme",t);document.documentElement.classList.add("dark");localStorage.setItem("portfolio-theme",t);}catch(e){}})();`;

/**
 * Without JavaScript the intro curtain never lifts and every framer-motion
 * element keeps its `initial` inline style (opacity: 0), leaving a blank page.
 * These rules remove the curtain and force content visible so crawlers and
 * JS-disabled browsers still get the full, readable page.
 */
const noScriptFallbackCss = `
  .intro-curtain { display: none !important; }
  main, main * {
    opacity: 1 !important;
    transform: none !important;
    clip-path: none !important;
  }
`;

export const metadata: Metadata = {
  /*
   * metadataBase tells Next.js the root URL of the deployment so that
   * relative paths (like the generated /opengraph-image) are resolved to
   * absolute URLs — which is required by WhatsApp, Telegram, Twitter, etc.
   *
   * On Vercel this is auto-set via VERCEL_URL; locally it falls back to
   * localhost:3000 which is fine for development.
   */
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: `${profile.name} — ${profile.role}`,
  description: profile.metaDescription,
  keywords: [
    "Abdul Wasay",
    "Full Stack Engineer",
    "TypeScript Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "PostgreSQL",
    "AWS",
    "Remote Contractor",
    "Lahore Pakistan",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="ink"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${sora.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <noscript>
          <style>{noScriptFallbackCss}</style>
        </noscript>
      </head>
      <body className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
