import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center h-screen gap-12 overflow-hidden text-justify w-full"
    >
      <div className="flex flex-col gap-20 border-r-6 border-gray-500 pr-16 w-1/2 justify-start items-start h-1/2">
        <h2 className="text-bold text-5xl">
          Desenvolvedor de Software | Front-end | Mobile | Java | Flutter |
          Next.js | Firebase
        </h2>
        <p className="text-medium text-2xl">
          Sou o Claudinei, desenvolvedor de software com foco em aplicações web
          e mobile. Iniciei minha trajetória em tecnologia em 2019, cursando
          Ciência da Computação na UFPEL, e desde então venho me especializando
          em criar soluções robustas, escaláveis e orientadas à experiência do
          usuário. Atualmente, atuo na Mertins Tecnologias, onde participo de
          todo o ciclo de desenvolvimento de sistemas, com experiência sólida em
          Java (Jakarta EE), JSF, PostgreSQL, MongoDB e RabbitMQ. No front-end e
          mobile, trabalho com Flutter e estou me aprofundando em Next.js,
          aplicando práticas modernas de desenvolvimento com foco em performance
          e qualidade.
        </p>
      </div>
      <div className="flex flex-col gap-6 w-1/2 justify-start items-start h-1/2">
        <h2 className="text-bold text-5xl mb-14">
          Além dos commits e branches: A jornada e identidade por trás do
          código.
        </h2>
        <div className="flex flex-col space-y-8">
          <p className="text-medium text-2xl">
            Que tal se conectar comigo nas redes sociais abaixo e saber mais
            sobre meu trabalho ? Vamos conversar !
          </p>
          <div className="flex space-x-8">
            <Link
              href="https://www.linkedin.com/in/claudinei-de-lima-690b4021a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={36} />
            </Link>
            <Link
              href="https://github.com/cfrdlima"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaGithub size={36} />
            </Link>
            <Link
              href="https://www.instagram.com/claudineidelima2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaInstagram size={36} />
            </Link>
            <Link
              href="https://www.behance.net/cfrdlxava50c0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaBehance size={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
