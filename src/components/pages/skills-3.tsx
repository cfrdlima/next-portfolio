"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
      <Card
        className="group relative flex flex-col justify-around w-full p-6 max-w-lg h-1/2 
                 hover:scale-[1.06] transition-transform duration-300 ease-in-out overflow-hidden"
      >
        <Image
          src="/web-development.webp"
          alt="Fundo desenvolvimento web"
          fill
          className="object-cover rounded-2xl -z-10 filter opacity-10 
               transition-opacity duration-300 ease-in-out 
               group-hover:opacity-30"
        />
        <CardHeader className="space-y-4">
          <CardTitle className="flex text-3xl items-center justify-center gap-4">
            <h3>Desenvolvimento Web</h3>
            <FaGlobe size={28} />
          </CardTitle>
          <CardDescription className="text-xl text-center">
            Aqui estão algumas das tecnologias que utilizo para desenvolver
            aplicações web.
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
              <Link href="#about">Instagram Login Page</Link>
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
    </section>
  );
}
