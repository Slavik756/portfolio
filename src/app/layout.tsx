import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viacheslav Pokora | Frontend & Fullstack Developer",

  description:
    "Frontend and Fullstack Developer based in France. Building modern web applications with React, Next.js, TypeScript, and Node.js.",

  keywords: [
    "Viacheslav Pokora",
    "Frontend Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Perpignan",
    "France",
  ],

  authors: [{ name: "Viacheslav Pokora" }],

  openGraph: {
    title: "Viacheslav Pokora | Developer Portfolio",
    description:
      "Explore my projects, technical skills, and experience in modern web development.",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
