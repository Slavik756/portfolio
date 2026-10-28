import type { ReactNode } from "react";
import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";

import { isLocale } from "@/i18n/config";
import { LanguageProvider } from "@/i18n/LanguageProvider";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const seoContent = {
  en: {
    title: "Viacheslav Pokora | Frontend & Fullstack Developer",
    description:
      "Explore the portfolio of Viacheslav Pokora, a Junior Frontend and Fullstack Developer based in France. Discover my projects, technical skills, experience and education.",
    openGraphTitle: "Viacheslav Pokora | Developer Portfolio",
    openGraphDescription:
      "Frontend & Fullstack Developer. React, Next.js, TypeScript, Node.js and modern web development.",
    openGraphLocale: "en_US",
  },

  fr: {
    title: "Viacheslav Pokora | Développeur Frontend & Fullstack",
    description:
      "Découvrez le portfolio de Viacheslav Pokora, développeur junior Frontend et Fullstack basé en France. Explorez mes projets, compétences techniques, expériences et formations.",
    openGraphTitle: "Viacheslav Pokora | Portfolio Développeur",
    openGraphDescription:
      "Développeur Frontend et Fullstack en France. React, Next.js, TypeScript, Node.js et développement web moderne.",
    openGraphLocale: "fr_FR",
  },

  uk: {
    title: "Viacheslav Pokora | Frontend & Fullstack-розробник",
    description:
      "Портфоліо В'ячеслава Покори — Junior Frontend та Fullstack-розробника у Франції. Перегляньте мої проєкти, технічні навички, досвід роботи та освіту.",
    openGraphTitle: "Viacheslav Pokora | Портфоліо розробника",
    openGraphDescription:
      "Frontend та Fullstack-розробник у Франції. React, Next.js, TypeScript, Node.js і сучасна веброзробка.",
    openGraphLocale: "uk_UA",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = seoContent[locale];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const canonicalUrl = siteUrl ? new URL(`/${locale}`, siteUrl).toString() : undefined;

  const languages = siteUrl
    ? {
        en: new URL("/en", siteUrl).toString(),
        fr: new URL("/fr", siteUrl).toString(),
        uk: new URL("/uk", siteUrl).toString(),
        "x-default": new URL("/", siteUrl).toString(),
      }
    : undefined;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),

    title: content.title,
    description: content.description,

    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
          languages,
        }
      : undefined,

    openGraph: {
      type: "website",
      siteName: "Viacheslav Pokora Portfolio",
      title: content.openGraphTitle,
      description: content.openGraphDescription,
      locale: content.openGraphLocale,
      alternateLocale: ["en_US", "fr_FR", "uk_UA"].filter(
        (item) => item !== content.openGraphLocale,
      ),

      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Viacheslav Pokora — Frontend & Fullstack Developer",
        },
      ],

      ...(canonicalUrl ? { url: canonicalUrl } : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: content.openGraphTitle,
      description: content.openGraphDescription,

      images: ["/opengraph-image"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider locale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
