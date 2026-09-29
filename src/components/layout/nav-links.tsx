"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// seções acompanhadas no scroll
const trackedIds = ["about", "skills", "projects", "contact"];

export default function NavLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      // seção ativa: a última cujo topo já passou de 40% da tela
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const id of trackedIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ul className="flex items-center gap-1">
      {links.map((link) => {
        const isActive =
          link.href === "/" ? active === null : link.href === `#${active}`;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground",
                isActive ? "text-brand" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
