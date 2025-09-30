"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaBehance } from "react-icons/fa";

const socialLinks = [
  {
    icon: <Linkedin size={36} />,
    href: "https://www.linkedin.com/in/claudinei-de-lima-690b4021a/",
    label: "LinkedIn de Claudinei",
  },
  {
    icon: <Github size={36} />,
    href: "https://github.com/cfrdlima",
    label: "GitHub de Claudinei",
  },
  {
    icon: <Instagram size={36} />,
    href: "https://www.instagram.com/claudineidelima2/",
    label: "Instagram de Claudinei",
  },
  {
    icon: <FaBehance size={40} />,
    href: "https://www.behance.net/cfrdlxava50c0",
    label: "Behance de Claudinei",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-row justify-center items-center h-screen gap-12 overflow-hidden text-justify w-full"
    >
      <div className="flex flex-row justify-center items-center h-1/2 gap-16 max-lg:px-12 max-lg:gap-12 max-lg:flex-col">
        {/* Coluna esquerda */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 border-r-4 border-gray-400 pr-20 h-full w-1/2 justify-around items-start"
        >
          <h2 className="font-bold text-5xl">
            Desenvolvedor de Software | Front-end | Mobile | Java | Flutter |
            Next.js | Firebase
          </h2>
          <p className="font-medium text-2xl">
            Sou o Claudinei, desenvolvedor de software com foco em aplicações
            web e mobile. Iniciei minha trajetória em tecnologia em 2019,
            cursando Ciência da Computação na UFPEL, e desde então venho me
            especializando em criar soluções robustas e escaláveis. Atualmente
            atuo na Mertins Tecnologias, trabalhando com Java, Flutter e
            Next.js.
          </p>
        </motion.div>

        {/* Coluna direita */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 w-1/2 h-full justify-around items-start"
        >
          <h2 className="font-bold text-5xl mb-24">
            Além dos commits e branches: A jornada e identidade por trás do
            código.
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <p className="font-medium text-2xl">
              Que tal se conectar comigo nas redes sociais abaixo e saber mais
              sobre meu trabalho? Vamos conversar!
            </p>

            <div className="flex space-x-8">
              {socialLinks.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
