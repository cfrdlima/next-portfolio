"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGlobe, FaMobile, FaGamepad } from "react-icons/fa";
import Link from "next/link";
import SkillsTicker from "../layout/skills-ticker";

const skillsData = [
  {
    title: "Desenvolvimento Web",
    icon: <FaGlobe size={24} />,
    description: "Aqui estão alguns projetos web.",
    subtitle: "Alguns Projetos Web:",
    projects: [
      { name: "Portfólio", href: "/" },
      { name: "Formatta.aq", href: "#skills" },
      { name: "Já vi esse filme?", href: "/projects" },
    ],
  },
  {
    title: "Desenvolvimento Mobile",
    icon: <FaMobile size={28} />,
    description: "Aqui estão alguns projetos mobile.",
    subtitle: "Alguns Projetos Mobile:",
    projects: [
      { name: "Steam Watcher", href: "/" },
      { name: "Roká Moká (Faculdade)", href: "#about" },
    ],
  },
  {
    title: "Desenvolvimento de Games",
    icon: <FaGamepad size={28} />,
    description: "Aqui estão alguns projetos de games.",
    subtitle: "Alguns Projetos de Games:",
    projects: [{ name: "Flappy Bird", href: "/" }],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col justify-center items-center h-screen gap-12 overflow-hidden text-justify w-full"
    >
      <h1 className="font-bold text-5xl">Minha caixinha de ferramentas</h1>
      <h2 className="font-medium text-2xl text-center max-w-4xl">
        Aqui é onde ficam as habilidades e ferramentas que domino e que me
        permitem criar soluções criativas e funcionais para meus clientes.
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {skillsData.map((skill) => (
          <Card
            key={skill.title}
            className="group relative flex flex-col justify-between w-full px-4 py-8 max-w-lg h-full border-2 border-gray-300 dark:border-gray-700 rounded-2xl hover:scale-[1.06] transition-transform duration-300 ease-in-out overflow-hidden"
          >
            <CardHeader className="space-y-8">
              <CardTitle className="flex flex-row items-center gap-4 justify-center">
                <span className="text-2xl font-bold">{skill.title}</span>
                {skill.icon}
              </CardTitle>
              <CardDescription className="text-lg">
                {skill.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <h4 className="font-semibold text-xl">{skill.subtitle}</h4>
              <ul className="flex flex-col gap-2 text-lg list-disc list-inside items-start">
                {skill.projects.map((project) => (
                  <li
                    key={project.name}
                    className="hover:underline font-medium transition-all"
                  >
                    <Link href={project.href}>{project.name}</Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <SkillsTicker />
    </motion.section>
  );
}
