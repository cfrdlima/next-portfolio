import Header from "@/components/header";
import Start from "@/components/pages/start-1";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col p-8">
      <Header />
      <Start />
    </main>
  );
}
