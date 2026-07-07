import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

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
      className={`${spaceGrotesk.variable} ${sora.variable} antialiased dark`}
    >
      <body className="bg-background text-foreground selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
