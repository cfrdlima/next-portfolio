import Footer from "@/components/layout/footer";
import SocialMediaAside from "@/components/layout/social-aside";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <SocialMediaAside />
    </>
  );
}
