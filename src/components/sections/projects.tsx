"use client";

import Link from "next/link";
import { m } from "motion/react";
import {
  ArrowUpRight,
  Gamepad2,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useI18n } from "@/i18n/locale-provider";
import ProjectGallery from "./project-gallery";

// textos (descrição, status, notas) ficam em src/i18n/dictionaries.ts
type ProjectData = {
  id: string;
  name: string;
  category: "Web" | "Mobile" | "Game";
  tags: string[];
  site?: string;
  code?: string;
  // prints em public/projects; sem imagens, o card usa uma capa gerada
  images?: string[];
  // "phone": telas de celular em pé; padrão "desktop"
  screens?: "phone" | "desktop";
  inDevelopment?: boolean;
};

type Project = ProjectData & {
  description: string;
  siteLabel?: string;
  status?: string;
  note?: string;
};

// public/projects/<id>-1.webp, <id>-2.webp, ...
const shots = (id: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/projects/${id}-${i + 1}.webp`);

const projectData: ProjectData[] = [
  {
    id: "libras-go",
    name: "Libras Go",
    category: "Game",
    tags: ["Unity", "C#", "Supabase"],
    site: "https://librasgoweb.vercel.app",
    images: shots("libras-go", 2),
    screens: "phone",
  },
  {
    id: "joinme",
    name: "JoinMe",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Java"],
    inDevelopment: true,
  },
  {
    id: "formatta-aq",
    name: "Formatta.aq",
    category: "Web",
    tags: ["Next.js", "React", "Tailwind", "Firebase"],
    site: "https://formatta-aq.vercel.app",
    images: ["/projects/formatta-aq.webp"],
    inDevelopment: true,
  },
  {
    id: "steam-watcher",
    name: "Steam Watcher",
    category: "Mobile",
    tags: ["Flutter", "Spring Boot", "Steam API"],
    images: shots("steam-watcher", 2),
    screens: "phone",
  },
  {
    id: "roka-moka",
    name: "Roká Moká",
    category: "Mobile",
    tags: ["Flutter", "Firebase", "Clean Architecture"],
    code: "https://github.com/RokaMokaHub/rokaMokaApp",
    images: shots("roka-moka", 2),
    screens: "phone",
  },
  {
    id: "ja-vi-esse-filme",
    name: "Já vi esse filme?",
    category: "Web",
    tags: ["Next.js", "React", "SCSS", "TMDB API"],
    site: "https://ja-vi-este-filme.vercel.app",
    code: "https://github.com/cfrdlima/Ja-vi-esse-filme",
    images: shots("ja-vi-esse-filme", 3),
  },
  {
    id: "portfolio",
    name: "Portfólio",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    site: "https://claudinei-dev.vercel.app",
    images: ["/projects/portfolio.webp"],
    code: "https://github.com/cfrdlima/next-portfolio",
  },
  {
    id: "flappy-bird",
    name: "Flappy Bird",
    category: "Game",
    tags: ["Unity", "C#"],
    code: "https://github.com/cfrdlima/Flappy-Bird",
    images: shots("flappy-bird", 2),
    screens: "phone",
  },
];

const categoryIcons: Record<Project["category"], LucideIcon> = {
  Web: Globe,
  Mobile: Smartphone,
  Game: Gamepad2,
};

function ProjectCover({ project }: { project: Project }) {
  if (project.images?.length) {
    return (
      <ProjectGallery
        name={project.name}
        images={project.images}
        variant={project.screens ?? "desktop"}
      />
    );
  }
  const Icon = categoryIcons[project.category];
  return (
    // capa gerada: gradiente + ícone da categoria
    <div
      aria-hidden
      className="-mx-2 -mt-2 flex aspect-[16/10] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border bg-gradient-to-br from-brand/25 via-secondary to-card"
    >
      <Icon className="size-10 text-brand transition-transform duration-500 group-hover:scale-110" />
      <span className="font-mono text-sm font-semibold text-muted-foreground">
        {project.name}
      </span>
    </div>
  );
}

function ProjectLink({
  href,
  label,
  project,
  icon,
}: {
  href: string;
  label: string;
  project: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${project}`}
      className="inline-flex min-h-9 items-center gap-1.5 rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-brand"
    >
      {icon}
      {label}
    </Link>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const projects: Project[] = projectData.map((project) => {
    const text = t.projects.items[project.id];
    return {
      ...project,
      ...text,
      name: text.name ?? project.name,
      status: project.inDevelopment ? t.projects.inDevelopment : undefined,
    };
  });

  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center gap-12 py-24 md:py-32"
    >
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex max-w-3xl flex-col items-center gap-4 text-center"
      >
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
          {t.projects.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          {t.projects.title}
        </h2>
        <p className="text-lg text-muted-foreground md:text-xl">
          {t.projects.subtitle}
        </p>
      </m.div>

      <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <m.li
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group flex flex-col gap-4 rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10"
          >
            <ProjectCover project={project} />

            <div className="flex min-h-6 flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {project.category}
              </span>
              {project.status && (
                <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                  {project.status}
                </span>
              )}
              {project.note && (
                <span className="rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {project.note}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-muted-foreground">{project.description}</p>

            <ul className="flex flex-wrap gap-1.5" aria-label={t.projects.tagsLabel}>
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {(project.site || project.code) && (
              <div className="-ml-2 mt-auto flex gap-2 pt-2">
                {project.site && (
                  <ProjectLink
                    href={project.site}
                    label={project.siteLabel ?? t.projects.viewSite}
                    project={project.name}
                    icon={<ArrowUpRight className="size-4" />}
                  />
                )}
                {project.code && (
                  <ProjectLink
                    href={project.code}
                    label={t.projects.code}
                    project={project.name}
                    icon={<FaGithub className="size-4" />}
                  />
                )}
              </div>
            )}
          </m.li>
        ))}
      </ul>
    </section>
  );
}
