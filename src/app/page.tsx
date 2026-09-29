import Footer from "@/components/layout/footer";
import SocialMediaAside from "@/components/layout/social-media_aside";
import About from "@/components/pages/about-2";
import Skills from "@/components/pages/skills-3";
import Start from "@/components/pages/start-1";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <Start />
        <About />
        <Skills />
      </main>
      <Footer />
      <SocialMediaAside />
    </>
  );
}
