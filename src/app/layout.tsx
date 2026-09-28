import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://next-portfolio-woad-sigma.vercel.app";
const description =
  "Portfólio de Claudinei de Lima, desenvolvedor de software com foco em aplicações web e mobile: Java, Flutter, Next.js e Firebase.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Claudinei de Lima | Desenvolvedor de Software",
    template: "%s | Claudinei de Lima",
  },
  description,
  keywords: [
    "Claudinei de Lima",
    "desenvolvedor de software",
    "portfólio",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Claudinei de Lima",
    title: "Claudinei de Lima | Desenvolvedor de Software",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudinei de Lima | Desenvolvedor de Software",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
