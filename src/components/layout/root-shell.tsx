import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Header from "@/components/layout/header";
import { LocaleProvider } from "@/i18n/locale-provider";
import { getDictionary, localePath, type Locale } from "@/i18n/dictionaries";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: "%s | Claudinei de Lima",
    },
    description: meta.description,
    keywords: [
      "Claudinei de Lima",
      ...meta.keywords,
      "front-end",
      "mobile",
      "Java",
      "Flutter",
      "Next.js",
      "React",
      "Firebase",
    ],
    authors: [{ name: "Claudinei de Lima", url: "https://github.com/cfrdlima" }],
    creator: "Claudinei de Lima",
    alternates: {
      canonical: localePath[locale],
      languages: {
        "pt-BR": localePath.pt,
        en: localePath.en,
        "x-default": localePath.pt,
      },
    },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: localePath[locale],
      siteName: "Claudinei de Lima",
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={getDictionary(locale).meta.htmlLang}
      suppressHydrationWarning
      // variáveis das fontes no <html>: é nele que o Tailwind aplica font-sans
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider locale={locale}>
            <Header locale={locale} />
            {children}
          </LocaleProvider>
        </ThemeProvider>
        {/* Vercel Web Analytics: sem cookies; só coleta no deploy da Vercel */}
        <Analytics />
      </body>
    </html>
  );
}
