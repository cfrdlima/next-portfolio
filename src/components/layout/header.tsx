import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./toggle-theme";
import NavLinks from "./nav-links";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight"
          aria-label="Claudinei de Lima, página inicial"
        >
          <span className="text-brand">&lt;</span>
          claudinei
          <span className="text-brand"> /&gt;</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Menu desktop */}
          <nav className="hidden md:block">
            <NavLinks links={navLinks} />
          </nav>

          <ThemeToggle />

          {/* Menu mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu"
                className="cursor-pointer"
              >
                <Menu className="size-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-48">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="text-base font-medium">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
