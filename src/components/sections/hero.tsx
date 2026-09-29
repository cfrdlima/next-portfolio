"use client";
import Link from "next/link";
import { m } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/locale-provider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center gap-8 overflow-hidden pt-20 text-center">
      {/* Fundo: grade com máscara radial + brilho da cor de destaque */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[28rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />

      <m.span
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur"
      >
        <span className="size-2 rounded-full bg-emerald-500" aria-hidden />
        {t.hero.badge}
      </m.span>

      {/* Título com efeito de digitação */}
      <m.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-label={t.hero.greeting}
        className="max-w-5xl text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-8xl"
      >
        {/* texto animado é lido letra a letra; leitor de tela usa o aria-label */}
        <TypeAnimation
          aria-hidden
          sequence={[t.hero.greeting, 1000]}
          speed={50}
          wrapper="span"
          repeat={0}
          cursor={true}
        />
      </m.h1>

      {/* sem fade: é o maior elemento da primeira tela (LCP) e precisa
          aparecer já na primeira pintura */}
      <m.p
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-lg text-muted-foreground md:text-2xl"
      >
        {t.hero.lead}{" "}
        <span className="font-semibold text-brand">{t.hero.role}</span>
        {t.hero.rest}
      </m.p>

      <m.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
      >
        <Button
          asChild
          size="lg"
          className="bg-brand text-brand-foreground hover:bg-brand/90"
        >
          <Link href="#projects">
            {t.hero.ctaProjects} <ArrowRight />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#contact">{t.hero.ctaContact}</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <a href={t.common.resumeFile} download={t.common.resumeDownloadName}>
            <Download /> {t.hero.ctaResume}
          </a>
        </Button>
      </m.div>

      <m.a
        href="#about"
        aria-label={t.hero.scrollLabel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-6" />
      </m.a>
    </section>
  );
}
