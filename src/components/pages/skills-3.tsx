"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Gamepad2, Globe, Smartphone } from "lucide-react";
import Link from "next/link";
import SkillsTicker from "../layout/skills-ticker";

const skillsData = [
  {
    title: "Desenvolvimento Web",
    icon: Globe,
    description: "Sites e aplicações web modernas, rápidas e responsivas.",
    projects: [
      { name: "Portfólio", href: "https://github.com/cfrdlima/next-portfolio" },
      {
        name: "Formatta.aq",
        href: "https://formatta-aq.vercel.app",
        status: "em desenvolvimento",
      },
      {
        name: "Já vi esse filme?",
        href: "https://github.com/cfrdlima/Ja-vi-esse-filme",
      },
    ],
  },
  {
    title: "Desenvolvimento Mobile",
    icon: Smartphone,
    description:
      "Apps multiplataforma para Android e iOS com Flutter e Firebase.",
    projects: [
      {
        name: "JoinMe",
        href: "https://github.com/JoinMeApp",
        status: "em desenvolvimento",
      },
      { name: "Steam Watcher", href: "https://github.com/Steam-Watcher" },
      {
        name: "Roká Moká (Faculdade)",
        href: "https://github.com/RokaMokaHub/rokaMokaApp",
      },
    ],
  },
  {
    title: "Desenvolvimento de Games",
    icon: Gamepad2,
    description: "Jogos em Unity, incluindo um jogo mobile para ensinar LIBRAS.",
    projects: [
      { name: "Libras Go", href: "https://librasgoweb.vercel.app" },
      { name: "Flappy Bird", href: "https://github.com/cfrdlima/Flappy-Bird" },
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex w-full scroll-mt-20 flex-col items-center gap-12 overflow-hidden py-24 md:min-h-svh md:py-32"
    >
      <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
          02 · Skills &amp; Projetos
        </span>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Minha caixinha de ferramentas
        </h2>
        <p className="text-lg text-muted-foreground md:text-xl">
          As habilidades e ferramentas que domino e que me permitem criar
          soluções criativas e funcionais para meus clientes.
        </p>
      </div>

      <div
        id="projects"
        className="grid w-full scroll-mt-32 grid-cols-1 gap-6 md:grid-cols-3"
      >
        {skillsData.map(({ title, icon: Icon, description, projects }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="group h-full rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10">
              <CardHeader className="gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
                <CardDescription className="text-base">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-3">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Projetos
                </h3>
                <ul className="flex flex-col divide-y">
                  {projects.map((project) => (
                    <li key={project.name}>
                      {project.href ? (
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.href}
                          className="group/link flex items-center justify-between py-2.5 font-medium transition-colors hover:text-brand"
                        >
                          <span className="flex items-center gap-2">
                            {project.name}
                            {"status" in project && project.status && (
                              <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                                {project.status}
                              </span>
                            )}
                          </span>
                          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-brand" />
                        </Link>
                      ) : (
                        <span className="block py-2.5 font-medium text-muted-foreground">
                          {project.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <SkillsTicker />
    </motion.section>
  );
}
