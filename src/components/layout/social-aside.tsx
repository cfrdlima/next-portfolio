"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { socialLinks } from "./social-links";

export default function SocialMediaAside() {
  return (
    <m.aside
      className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-2 xl:flex"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {socialLinks.map(({ name, href, icon: Icon }, i) => (
        <m.div
          key={name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} de Claudinei`}
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-brand"
          >
            <Icon size={20} />
          </Link>
        </m.div>
      ))}

      {/* Linha vertical até o rodapé da tela */}
      <m.div
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
        className="w-px bg-border"
      />
    </m.aside>
  );
}
