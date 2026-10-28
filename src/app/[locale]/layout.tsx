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
    title: "Viacheslav Pokora | Fullstack Developer",
    description:
      "Explore the portfolio of Viacheslav Pokora, a Junior Frontend and Fullstack Developer based in France. Discover my projects, technical skills, experience and education.",
    openGraphTitle: "Viacheslav Pokora | Developer Portfolio",
    openGraphDescription:
      "Explore the portfolio of Viacheslav Pokora, a Junior Fullstack Developer based in France. Discover real-world projects built with React, Next.js, TypeScript, Node.js, Java and Spring Boot.",
    openGraphLocale: "en_US",
  },

  fr: {
    title: "Viacheslav Pokora | Développeur Fullstack",
    description:
      "Découvrez le portfolio de Viacheslav Pokora, développeur junior Frontend et Fullstack basé en France. Explorez mes projets, compétences techniques, expériences et formations.",
    openGraphTitle: "Viacheslav Pokora | Portfolio Développeur",
    openGraphDescription:
      "Découvrez le portfolio de Viacheslav Pokora, développeur Fullstack junior basé en France. Explorez ses projets réalisés avec React, Next.js, TypeScript, Node.js, Java et Spring Boot.",
    openGraphLocale: "fr_FR",
  },

  uk: {
    title: "Viacheslav Pokora | Fullstack-розробник",
    description:
      "Портфоліо В'ячеслава Покори — Junior Frontend та Fullstack-розробника у Франції. Перегляньте мої проєкти, технічні навички, досвід роботи та освіту.",
    openGraphTitle: "Viacheslav Pokora | Портфоліо розробника",
    openGraphDescription:
      "Перегляньте портфоліо В'ячеслава Покори, Junior Fullstack-розробника у Франції. Дізнайтеся більше про його проєкти, досвід роботи та технології React, Next.js, TypeScript, Node.js, Java і Spring Boot.",
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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-kappa-six-y0ppp8ss1t.vercel.app";

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
    metadataBase: new URL(siteUrl),

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
