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

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center h-screen gap-12 overflow-hidden text-justify w-full"
    >
      <h1 className="font-bold text-5xl">Minha caixinha de ferramentas</h1>
      <h2 className="font-medium text-2xl text-center">
        Aqui é onde ficam as habilidades e ferramentas que domino e que me
        permitem criar soluções criativas e funcionais para meus clientes.
      </h2>
      <div className="w-full grid grid-cols-3 grid-rows-1 px-4">
        <Card
          className="group relative flex flex-col justify-between w-full px-12 py-6 max-w-lg h-full border-2 border-gray-300 dark:border-gray-700 rounded-2xl 
                 hover:scale-[1.06] transition-transform duration-300 ease-in-out overflow-hidden"
        >
          <CardHeader className="space-y-8">
            <CardTitle className="flex text-3xl items-center justify-center gap-4">
              <h3 className="text-center text-2xl">Desenvolvimento Web</h3>
              <FaGlobe size={28} />
            </CardTitle>
            <CardDescription className="text-xl text-center">
              Aqui estão alguns projetos web.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <h4 className="font-semibold text-2xl text-center">
              Alguns Projetos web:
            </h4>
            <ul className="flex flex-col gap-2 text-xl justify-center items-start list-disc list-inside">
              <li className="hover:underline font-medium transition-all">
                <Link href="/">Portfólio</Link>
              </li>
              <li className="hover:underline font-medium transition-all">
                <Link href="#skills">Formatta.aq</Link>
              </li>
              <li className="hover:underline font-medium transition-all">
                <Link href="/projects">Já vi esse filme?</Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card
          className="group relative flex flex-col justify-between w-full px-12 py-6 max-w-lg h-full border-2 border-gray-300 dark:border-gray-700 rounded-2xl 
                 hover:scale-[1.06] transition-transform duration-300 ease-in-out overflow-hidden"
        >
          <CardHeader className="space-y-8">
            <CardTitle className="flex text-3xl items-center justify-center gap-4">
              <h3 className="text-center text-2xl">Desenvolvimento Mobile</h3>
              <FaMobile size={28} />
            </CardTitle>
            <CardDescription className="text-xl text-center">
              Aqui estão alguns projetos mobile.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <h4 className="font-semibold text-2xl text-center">
              Alguns Projetos mobile:
            </h4>
            <ul className="flex flex-col gap-2 text-xl justify-center items-start list-disc list-inside">
              <li className="hover:underline font-medium transition-all">
                <Link href="/">Steam Watcher</Link>
              </li>
              <li className="hover:underline font-medium transition-all">
                <Link href="#about">Roká Moká (Faculdade)</Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card
          className="group relative flex flex-col justify-between w-full px-12 py-6 max-w-lg h-full border-2 border-gray-300 dark:border-gray-700 rounded-2xl 
                 hover:scale-[1.06] transition-transform duration-300 ease-in-out overflow-hidden"
        >
          <CardHeader className="space-y-8">
            <CardTitle className="flex text-3xl items-center justify-center gap-4">
              <h3 className="text-center text-2xl">Desenvolvimento de Games</h3>
              <FaGamepad size={28} />
            </CardTitle>
            <CardDescription className="text-xl text-center">
              Aqui estão alguns projetos de games.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <h4 className="font-semibold text-2xl text-center">
              Alguns Projetos de Games:
            </h4>
            <ul className="flex flex-col gap-2 text-xl justify-center items-start list-disc list-inside">
              <li className="hover:underline font-medium transition-all">
                <Link href="/">Flappy Bird</Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <SkillsTicker />
    </section>
  );
}
