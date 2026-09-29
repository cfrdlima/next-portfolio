"use client";

import { m } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad2, Globe, Smartphone } from "lucide-react";
import SkillsTicker from "../layout/skills-ticker";

const skillsData = [
  {
    title: "Desenvolvimento Web",
    icon: Globe,
    description: "Sites e aplicações web modernas, rápidas e responsivas.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind", "Firebase"],
  },
  {
    title: "Desenvolvimento Mobile",
    icon: Smartphone,
    description:
      "Apps multiplataforma para Android e iOS, com back-end em Java quando preciso.",
    tools: ["Flutter", "Dart", "Firebase", "Java", "Spring Boot"],
  },
  {
    title: "Desenvolvimento de Games",
    icon: Gamepad2,
    description: "Jogos em Unity, incluindo um jogo mobile para ensinar LIBRAS.",
    tools: ["Unity", "C#", "Supabase"],
  },
];

export default function Skills() {
  return (
    <m.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex w-full scroll-mt-20 flex-col items-center gap-12 overflow-hidden py-24 md:min-h-svh md:py-32"
    >
      <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
          02 · Skills
        </span>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Minha caixinha de ferramentas
        </h2>
        <p className="text-lg text-muted-foreground md:text-xl">
          As habilidades e ferramentas que domino e que me permitem criar
          soluções criativas e funcionais para meus clientes.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {skillsData.map(({ title, icon: Icon, description, tools }, i) => (
          <m.div
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
              <CardContent className="mt-auto">
                <ul className="flex flex-wrap gap-1.5" aria-label="Ferramentas">
                  {tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </div>

      <SkillsTicker />
    </m.section>
  );
}
