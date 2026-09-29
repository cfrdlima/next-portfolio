"use client";

import { m } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad2, Globe, Smartphone } from "lucide-react";
import SkillsTicker from "../layout/skills-ticker";
import { useI18n } from "@/i18n/locale-provider";

const skillsData = [
  {
    id: "web",
    icon: Globe,
    tools: ["Next.js", "React", "TypeScript", "Tailwind", "Firebase"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    tools: ["Flutter", "Dart", "Firebase", "Java", "Spring Boot"],
  },
  {
    id: "games",
    icon: Gamepad2,
    tools: ["Unity", "C#", "Supabase"],
  },
] as const;

export default function Skills() {
  const { t } = useI18n();
  return (
    // animação no filho: transform na própria <section> desloca o alvo da
    // âncora #skills e o título acaba escondido sob o header fixo
    <section
      id="skills"
      className="w-full overflow-hidden py-24 md:min-h-svh md:py-32"
    >
      <m.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full flex-col items-center gap-12"
      >
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
            {t.skills.eyebrow}
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {skillsData.map(({ id, icon: Icon, tools }, i) => {
            const { title, description } = t.skills.areas[id];
            return (
              <m.div
                key={id}
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
                    <ul
                      className="flex flex-wrap gap-1.5"
                      aria-label={t.skills.toolsLabel}
                    >
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
            );
          })}
        </div>

        <SkillsTicker />
      </m.div>
    </section>
  );
}
