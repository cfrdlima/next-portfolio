import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./toggle-theme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between border-b border-gray-300 bg-background/80 px-6 py-4 backdrop-blur-md md:px-12 md:py-6 lg:px-24 lg:py-8 dark:border-gray-700">
      {/* Menu desktop */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-xl lg:space-x-12">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="font-semibold transition-all hover:text-2xl"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menu"
            className="cursor-pointer"
          >
            <Menu className="size-7" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-48">
          {navLinks.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href} className="text-lg font-semibold">
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <ThemeToggle />
    </header>
  );
}
