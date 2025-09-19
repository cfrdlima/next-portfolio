import SocialMediaAside from "@/components/layout/social-media_aside";
import About from "@/components/pages/about-2";
import Start from "@/components/pages/start-1";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col px-24">
      <Start />
      <About />
      <SocialMediaAside />
    </main>
  );
}
