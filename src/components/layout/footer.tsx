import Link from "next/link";
import { socialLinks } from "./social-links";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} Claudinei de Lima. Feito com Next.js.
        </p>
        <ul className="flex gap-1">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} de Claudinei`}
                className="flex size-9 items-center justify-center rounded-md transition-colors hover:text-brand"
              >
                <Icon size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
