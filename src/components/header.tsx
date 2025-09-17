import Link from "next/link";
import { ThemeToggle } from "./toggle-theme";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-8 fixed z-50 w-screen">
      <h1 className="text-2xl font-bold">Claudinei de Lima</h1>
      <nav>
        <ul className="flex space-x-12 text-xl">
          <li className="hover:text-2xl font-semibold transition-all">
            <Link href="/">Início</Link>
          </li>
          <li className="hover:text-2xl font-semibold transition-all">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:text-2xl font-semibold transition-all">
            <Link href="/projects">Projetos</Link>
          </li>
          <li className="hover:text-2xl font-semibold transition-all">
            <Link href="/about">Sobre</Link>
          </li>
          <li className="hover:text-2xl font-semibold transition-all">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
