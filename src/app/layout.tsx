import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"
import { BackgroundBeams } from "@/components/ui/background-beams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Add font-display: swap for better performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Add font-display: swap for better performance
});

export const metadata: Metadata = {
  title: "Brasen Xu - Software Engineer & CS Student",
  description: "Brasen Xu is a software engineer and computer science student at University of Waterloo. Explore my projects and work experience in software development.",
  keywords: ["Brasen Xu", "Software Engineer", "Computer Science", "University of Waterloo", "Developer", "Portfolio"],
  authors: [{ name: "Brasen Xu", url: "https://www.brasen.dev" }],
  creator: "Brasen Xu",
  publisher: "Brasen Xu",
  metadataBase: new URL("https://www.brasen.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.brasen.dev",
    title: "Brasen Xu - Software Engineer & CS Student",
    description: "Brasen Xu is a software engineer and computer science student at University of Waterloo. Explore my projects and work experience in software development.",
    siteName: "Brasen Xu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brasen Xu - Software Engineer & CS Student",
    description: "Software engineer and computer science student at University of Waterloo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <BackgroundBeams />
        </div>
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <main className="container mx-auto">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
