import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="flex justify-center items-center h-screen gap-12 overflow-hidden text-justify w-full">
      <div className="flex flex-col gap-12 border-r-6 border-gray-500 pr-16 w-1/2">
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
      <div className="flex flex-col gap-12 w-1/2">
        <h2 className="text-bold text-5xl">
          Além dos commits e branches: A jornada e identidade por trás do
          código.
        </h2>
        <p className="text-medium text-2xl">
          Que tal se conectar comigo nas redes sociais abaixo e saber mais sobre
          meu trabalho ?
        </p>
        <div>
          <Link
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={36} />
          </Link>
        </div>
      </div>
    </section>
  );
}
