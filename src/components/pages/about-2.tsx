"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin size={36} />,
    href: "https://www.linkedin.com/in/claudinei-de-lima-690b4021a/",
    label: "LinkedIn de Claudinei",
  },
  {
    icon: <FaGithub size={36} />,
    href: "https://github.com/cfrdlima",
    label: "GitHub de Claudinei",
  },
  {
    icon: <FaInstagram size={36} />,
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
      className="relative flex flex-row justify-center items-center min-h-screen py-24 overflow-hidden w-full"
    >
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-16">
        {/* Coluna esquerda */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 lg:gap-12 border-b-4 pb-12 lg:border-b-0 lg:pb-0 lg:border-r-4 border-gray-400 lg:pr-20 w-full lg:w-1/2 justify-around items-start"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Desenvolvedor de Software | Front-end | Mobile | Java | Flutter |
            Next.js | Firebase
          </h2>
          <p className="font-medium text-lg md:text-2xl lg:text-justify">
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
          className="flex flex-col gap-6 w-full lg:w-1/2 justify-around items-start"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl lg:mb-24">
            Além dos commits e branches: A jornada e identidade por trás do
            código.
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            id="contact"
            className="flex flex-col space-y-6 scroll-mt-32"
          >
            <p className="font-medium text-lg md:text-2xl lg:text-justify">
              Que tal se conectar comigo nas redes sociais abaixo e saber mais
              sobre meu trabalho? Vamos conversar!
            </p>

            <div className="flex flex-wrap gap-8">
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
