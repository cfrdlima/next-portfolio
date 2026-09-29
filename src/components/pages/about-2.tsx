"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "../layout/social-links";

const focusAreas = ["Front-end", "Mobile", "Java", "Flutter", "Next.js", "Firebase"];

export default function About() {
  return (
    <section
      id="about"
      className="flex w-full scroll-mt-20 items-center py-24 md:min-h-svh md:py-32"
    >
      <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Coluna esquerda */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
            01 · Sobre mim
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Além dos commits e branches: a jornada por trás do código.
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
        </motion.div>

        {/* Coluna direita */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          <p>
            Sou o Claudinei, desenvolvedor de software com foco em aplicações
            web e mobile. Iniciei minha trajetória em tecnologia em 2019,
            cursando Ciência da Computação na{" "}
            <strong className="font-semibold text-foreground">UFPEL</strong>,
            e desde então venho me especializando em criar soluções robustas e
            escaláveis. Atualmente atuo na{" "}
            <strong className="font-semibold text-foreground">
              Mertins Tecnologias
            </strong>
            , trabalhando com Java, Flutter e Next.js.
          </p>

          <div
            id="contact"
            className="flex scroll-mt-32 flex-col gap-5 rounded-2xl border bg-card p-6 md:p-8"
          >
            <p className="text-foreground">
              Que tal se conectar comigo nas redes sociais e saber mais sobre
              meu trabalho? Vamos conversar!
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} de Claudinei`}
                  className="flex size-12 items-center justify-center rounded-xl border text-muted-foreground transition-all hover:-translate-y-1 hover:border-brand hover:text-brand"
                >
                  <Icon size={22} />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
