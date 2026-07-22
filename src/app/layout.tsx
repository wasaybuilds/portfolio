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
  description: profile.about[0],
  keywords: [
    "Abdul Wasay",
    "Wasay",
    "Senior Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "SaaS Developer",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
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
      <body className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
