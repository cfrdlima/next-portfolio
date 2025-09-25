"use client";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpringboot,
  SiPostgresql,
  SiFirebase,
  SiJavascript,
  SiJunit5,
  SiJquery,
  SiGit,
  SiCss3,
  SiMongodb,
  SiRabbitmq,
  SiHtml5,
  SiDocker,
  SiFlutter,
  SiReact,
} from "react-icons/si";

const stacks = [
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-red-500" /> },
  { name: "HTML", icon: <SiHtml5 className="text-yellow-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-cyan-400" /> },
  { name: "JUNIT", icon: <SiJunit5 className="text-green-400" /> },
  { name: "JQuery", icon: <SiJquery className="text-blue-400" /> },
  { name: "Css", icon: <SiCss3 className="text-blue-400" /> },
  { name: "GIT", icon: <SiGit className="text-red-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-400" /> },
];

export default function SkillsTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-4">
      {/* Fade lateral esquerdo */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      {/* Fade lateral direito */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // controla a velocidade
          ease: "linear",
        }}
      >
        {/* bloco 1 */}
        {stacks.map((stack, i) => (
          <div
            key={`a-${i}`}
            className="flex items-center mx-8 text-xl font-semibold text-foreground"
          >
            <span className="mr-2 text-2xl">{stack.icon}</span>
            {stack.name}
          </div>
        ))}
        {/* bloco 2 duplicado */}
        {stacks.map((stack, i) => (
          <div
            key={`b-${i}`}
            className="flex items-center mx-8 text-xl font-semibold text-foreground"
          >
            <span className="mr-2 text-2xl">{stack.icon}</span>
            {stack.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
