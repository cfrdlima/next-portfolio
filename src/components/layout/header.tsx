import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./toggle-theme";
import { LocaleToggle } from "./locale-toggle";
import NavLinks from "./nav-links";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDictionary, localePath, type Locale } from "@/i18n/dictionaries";

export default function Header({ locale }: { locale: Locale }) {
  const { nav } = getDictionary(locale);
  const home = localePath[locale];
  const navLinks = [
    { label: nav.home, href: home },
    // âncoras com o caminho da home: funcionam também fora dela (ex.: 404)
    { label: nav.about, href: `${home}#about` },
    { label: nav.skills, href: `${home}#skills` },
    { label: nav.projects, href: `${home}#projects` },
    { label: nav.contact, href: `${home}#contact` },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <Link
          href={home}
          className="font-mono text-lg font-bold tracking-tight"
          aria-label={nav.homeLabel}
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

          <LocaleToggle />
          <ThemeToggle />

          {/* Menu mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label={nav.openMenu}
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
