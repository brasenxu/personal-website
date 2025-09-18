import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Meteors } from "@/components/ui/meteors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brasen Xu - Oh Hi!",
  description: "Brasen Xu is a software engineer and computer science student at University of Waterloo. This is his website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-icons-font@v13/font/simple-icons.min.css" type="text/css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-0 overflow-hidden">
            <Meteors number={20} />
          </div>
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
