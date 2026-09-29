import type { Metadata } from "next";
import Link from "next/link";
import RootShell, { buildMetadata } from "@/components/layout/root-shell";
import { Button } from "@/components/ui/button";

// com um layout raiz por idioma, o 404 precisa do próprio <html>
export const metadata: Metadata = {
  ...buildMetadata("pt"),
  title: "Página não encontrada",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootShell locale="pt">
      <main className="mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
          404
        </span>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Página não encontrada
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          O endereço que você procurou não existe. / This page doesn&apos;t
          exist.
        </p>
        <div className="flex gap-3">
          <Button
            asChild
            size="lg"
            className="bg-brand text-brand-foreground hover:bg-brand/90"
          >
            <Link href="/">Voltar ao início</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/en" hrefLang="en">
              English version
            </Link>
          </Button>
        </div>
      </main>
    </RootShell>
  );
}
