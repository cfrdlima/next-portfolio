import Footer from "@/components/layout/footer";
import SocialMediaAside from "@/components/layout/social-aside";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import type { Locale } from "@/i18n/dictionaries";

export default function Home({ locale }: { locale: Locale }) {
  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer locale={locale} />
      <SocialMediaAside />
    </>
  );
}
