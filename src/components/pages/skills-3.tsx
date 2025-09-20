"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-row justify-center items-center h-screen gap-12 overflow-hidden text-justify w-full"
    >
      <div className="flex flex-col gap-12 border-r-4 border-gray-400 pr-16 w-1/2 justify-start items-start">
        <h2 className="font-bold text-5xl">Minhas Skills</h2>
        <p className="font-medium text-2xl">
          Tenho experiência com diversas tecnologias e ferramentas que me
          permitem desenvolver soluções completas e eficientes. Aqui estão
          algumas das minhas principais skills:
        </p>
        <ul className="list-disc list-inside font-medium text-2xl space-y-2">
          <li>Java: Desenvolvimento de aplicações robustas e escaláveis.</li>
          <li>
            Flutter: Criação de aplicativos móveis nativos para Android e iOS.
          </li>
          <li>
            Next.js: Desenvolvimento de aplicações web modernas e performáticas.
          </li>
          <li>
            React: Construção de interfaces de usuário interativas e
            responsivas.
          </li>
          <li>
            Firebase: Integração de serviços backend como autenticação, banco de
            dados e armazenamento.
          </li>
          <li>
            Git: Controle de versão e colaboração em projetos de software.
          </li>
          <li>HTML, CSS e JavaScript: Fundamentos do desenvolvimento web.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 w-1/2 justify-start items-start">
        <h2 className="font-bold text-5xl mb-24">Ferramentas e Tecnologias</h2>
        <div className="flex flex-col space-y-6">
          <h3 className="font-bold text-3xl">Ferramentas de Desenvolvimento</h3>
          <ul className="list-disc list-inside font-medium text-2xl space-y-2">
            <li>IntelliJ IDEA</li>
            <li>Android Studio</li>
            <li>Visual Studio Code</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
