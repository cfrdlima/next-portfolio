"use client";
import { m } from "motion/react";
import { useI18n } from "@/i18n/locale-provider";

const focusAreas = ["Front-end", "Mobile", "Java", "Flutter", "Next.js", "Firebase"];

export default function About() {
  const { t } = useI18n();
  return (
    <section
      id="about"
      className="flex w-full items-center py-24 md:min-h-svh md:py-32"
    >
      <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Coluna esquerda */}
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
            {t.about.eyebrow}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-5xl">
            {t.about.title}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </m.div>

        {/* Coluna direita */}
        <m.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-8 text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          <p>
            {t.about.p1}{" "}
            <strong className="font-semibold text-foreground">UFPEL</strong>
            {t.about.p2}{" "}
            <strong className="font-semibold text-foreground">
              Mertins Tecnologias
            </strong>
            {t.about.p3}
          </p>
        </m.div>
      </div>
    </section>
  );
}
