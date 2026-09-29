import Link from "next/link";
import { socialLinks } from "./social-links";
import { getDictionary, type Locale } from "@/i18n/dictionaries";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} Claudinei de Lima. {t.footer.madeWith}
        </p>
        <ul className="flex gap-1">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.socialLabel(name)}
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
