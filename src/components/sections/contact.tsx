"use client";

import Link from "next/link";
import { useState } from "react";
import { m } from "motion/react";
import { Check, Copy, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "../layout/social-links";

const email = "claudinei.rdlima@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // sem permissão de clipboard: o link mailto continua disponível
    }
  };

  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center py-24 md:py-32"
    >
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex w-full flex-col items-center gap-8 overflow-hidden rounded-3xl border bg-card px-6 py-16 text-center md:px-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
        />

        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
          04 · Contato
        </span>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance md:text-5xl">
          Vamos conversar?
        </h2>
        <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
          Tem um projeto, uma vaga ou só quer trocar uma ideia? Me mande um
          e-mail ou me encontre nas redes.
        </p>

        <div className="flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-brand text-brand-foreground hover:bg-brand/90"
          >
            <a href={`mailto:${email}`}>
              <Mail /> {email}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={copyEmail}
            className="cursor-pointer"
            aria-label="Copiar e-mail"
          >
            {copied ? <Check /> : <Copy />}
            {copied ? "Copiado!" : "Copiar"}
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/curriculo.pdf" download="Curriculo-Claudinei-de-Lima.pdf">
              <Download /> Baixar currículo
            </a>
          </Button>
          {/* anuncia a cópia para leitores de tela */}
          <span className="sr-only" aria-live="polite">
            {copied ? "E-mail copiado" : ""}
          </span>
        </div>

        <ul className="flex gap-2">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} de Claudinei`}
                className="flex size-12 items-center justify-center rounded-xl border text-muted-foreground transition-all hover:-translate-y-1 hover:border-brand hover:text-brand"
              >
                <Icon size={22} />
              </Link>
            </li>
          ))}
        </ul>
      </m.div>
    </section>
  );
}
