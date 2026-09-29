import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiCss,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJunit5,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

const stacks: { name: string; icon: IconType; color: string }[] = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "JUnit", icon: SiJunit5, color: "text-green-400" },
  { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-400" },
];

function StackList({ hidden = false }: { hidden?: boolean }) {
  return stacks.map(({ name, icon: Icon, color }) => (
    <div
      key={name}
      aria-hidden={hidden || undefined}
      className="mx-6 flex items-center text-lg font-medium text-muted-foreground md:mx-8 md:text-xl"
    >
      <Icon className={`mr-2 text-2xl ${color}`} aria-hidden />
      {name}
    </div>
  ));
}

export default function SkillsTicker() {
  return (
    <div className="group relative w-full overflow-hidden border-y py-5">
      {/* Fade lateral esquerdo */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent md:w-40" />
      {/* Fade lateral direito */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent md:w-40" />

      <div className="animate-marquee flex w-max whitespace-nowrap">
        <StackList />
        {/* cópia para o loop contínuo, oculta de leitores de tela */}
        <StackList hidden />
      </div>
    </div>
  );
}
