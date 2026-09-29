"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import {
  ArrowUpRight,
  Gamepad2,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  name: string;
  category: "Web" | "Mobile" | "Game";
  description: string;
  tags: string[];
  site?: string;
  siteLabel?: string;
  code?: string;
  // print em public/projects (1280x800); sem imagem, o card usa uma capa gerada
  image?: string;
  status?: string;
  note?: string;
};

const projects: Project[] = [
  {
    name: "Libras Go",
    category: "Game",
    description:
      "Jogo mobile no estilo endless runner 3D que ensina LIBRAS durante a jogabilidade, com fases organizadas por tema de vocabulário.",
    tags: ["Unity", "C#", "Supabase"],
    site: "https://librasgoweb.vercel.app",
    siteLabel: "Painel do professor",
    image: "/projects/libras-go.webp",
  },
  {
    name: "JoinMe",
    category: "Mobile",
    description:
      "App para esportes amadores: conecta jogadores, organiza partidas e gerencia quadras. Android e iOS.",
    tags: ["Flutter", "Dart", "Java"],
    status: "em desenvolvimento",
  },
  {
    name: "Formatta.aq",
    category: "Web",
    description:
      "Plataforma que formata documentos automaticamente segundo normas acadêmicas como ABNT e APA, pensada para quem não domina as regras.",
    tags: ["Next.js", "React", "Tailwind", "Firebase"],
    site: "https://formatta-aq.vercel.app",
    image: "/projects/formatta-aq.webp",
    status: "em desenvolvimento",
  },
  {
    name: "Steam Watcher",
    category: "Mobile",
    description:
      "App que acompanha seus jogos da Steam e avisa sobre atualizações com notificações em tempo real.",
    tags: ["Flutter", "Spring Boot", "Steam API"],
  },
  {
    name: "Roká Moká",
    category: "Mobile",
    description:
      "Gamificação para museus de Pelotas: o visitante escaneia QR codes das obras, junta estrelas e desbloqueia emblemas.",
    tags: ["Flutter", "Firebase", "Clean Architecture"],
    code: "https://github.com/RokaMokaHub/rokaMokaApp",
    note: "Projeto da faculdade",
  },
  {
    name: "Já vi esse filme?",
    category: "Web",
    description:
      "Agenda de filmes com favoritos, listas personalizadas e detalhes como sinopse, elenco e trailers, usando a API do TMDB.",
    tags: ["Next.js", "React", "SCSS", "TMDB API"],
    site: "https://ja-vi-este-filme.vercel.app",
    code: "https://github.com/cfrdlima/Ja-vi-esse-filme",
  },
  {
    name: "Portfólio",
    category: "Web",
    description:
      "Este site: portfólio pessoal com tema claro/escuro, animações e SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    site: "https://claudinei-dev.vercel.app",
    image: "/projects/portfolio.webp",
    code: "https://github.com/cfrdlima/next-portfolio",
  },
  {
    name: "Flappy Bird",
    category: "Game",
    description:
      "Recriação do Flappy Bird feita para praticar Unity e desenvolvimento de games.",
    tags: ["Unity", "C#"],
    code: "https://github.com/cfrdlima/Flappy-Bird",
  },
];

const categoryIcons: Record<Project["category"], LucideIcon> = {
  Web: Globe,
  Mobile: Smartphone,
  Game: Gamepad2,
};

function ProjectCover({ project }: { project: Project }) {
  const Icon = categoryIcons[project.category];
  return (
    <div className="relative -mx-2 -mt-2 aspect-[16/10] overflow-hidden rounded-xl border bg-secondary">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Tela do projeto ${project.name}`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        // capa gerada: gradiente + ícone da categoria
        <div
          aria-hidden
          className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand/25 via-secondary to-card"
        >
          <Icon className="size-10 text-brand transition-transform duration-500 group-hover:scale-110" />
          <span className="font-mono text-sm font-semibold text-muted-foreground">
            {project.name}
          </span>
        </div>
      )}
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
          03 · Projetos
        </span>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          O que eu venho construindo
        </h2>
        <p className="text-lg text-muted-foreground md:text-xl">
          Uma seleção de projetos web, mobile e de games, dos profissionais aos
          acadêmicos.
        </p>
      </m.div>

      <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <m.li
            key={project.name}
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

            <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
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
                    label={project.siteLabel ?? "Ver site"}
                    project={project.name}
                    icon={<ArrowUpRight className="size-4" />}
                  />
                )}
                {project.code && (
                  <ProjectLink
                    href={project.code}
                    label="Código"
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
