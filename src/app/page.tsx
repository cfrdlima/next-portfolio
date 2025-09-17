import About from "@/components/pages/about-2";
import Start from "@/components/pages/start-1";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col p-8">
      <Start />
      <About />
    </main>
  );
}
