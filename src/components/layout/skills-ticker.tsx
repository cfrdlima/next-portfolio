"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { FaJava } from "react-icons/fa";

const stacks = [
  {
    name: "React",
    icon: <Icon icon="simple-icons:react" className="text-cyan-400" />,
  },
  {
    name: "Next.js",
    icon: <Icon icon="simple-icons:nextdotjs" className="text-white" />,
  },
  {
    name: "Flutter",
    icon: <Icon icon="simple-icons:flutter" className="text-blue-400" />,
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-500" />,
  },
  {
    name: "Spring Boot",
    icon: <Icon icon="simple-icons:springboot" className="text-green-600" />,
  },
  {
    name: "PostgreSQL",
    icon: <Icon icon="simple-icons:postgresql" className="text-sky-500" />,
  },
  {
    name: "Docker",
    icon: <Icon icon="simple-icons:docker" className="text-blue-400" />,
  },
  {
    name: "Firebase",
    icon: <Icon icon="simple-icons:firebase" className="text-yellow-400" />,
  },
  {
    name: "HTML",
    icon: <Icon icon="simple-icons:html5" className="text-orange-500" />,
  },
  {
    name: "JavaScript",
    icon: <Icon icon="simple-icons:javascript" className="text-yellow-300" />,
  },
  {
    name: "JUNIT",
    icon: <Icon icon="simple-icons:junit5" className="text-green-400" />,
  },
  {
    name: "JQuery",
    icon: <Icon icon="simple-icons:jquery" className="text-blue-400" />,
  },
  {
    name: "CSS",
    icon: <Icon icon="simple-icons:css3" className="text-blue-500" />,
  },
  {
    name: "GIT",
    icon: <Icon icon="simple-icons:git" className="text-red-500" />,
  },
  {
    name: "MongoDB",
    icon: <Icon icon="simple-icons:mongodb" className="text-green-700" />,
  },
  {
    name: "RabbitMQ",
    icon: <Icon icon="simple-icons:rabbitmq" className="text-orange-400" />,
  },
];

export default function SkillsTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-primary/30 py-4">
      {/* Fade lateral esquerdo */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-background to-transparent z-10" />
      {/* Fade lateral direito */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
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
