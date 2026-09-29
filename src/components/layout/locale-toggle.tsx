"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { localePath } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/locale-provider";

export function LocaleToggle() {
  const { locale, t } = useI18n();
  const target = locale === "pt" ? "en" : "pt";
  const href = localePath[target];

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className="h-9 gap-1.5 rounded-full px-3 font-mono text-xs font-semibold"
    >
      <a
        href={href}
        hrefLang={target === "pt" ? "pt-BR" : "en"}
        aria-label={t.common.switchLocale}
        title={t.common.switchLocale}
        // mantém a seção atual (#projects etc.) ao trocar de idioma
        onClick={(e) => {
          e.preventDefault();
          window.location.assign(href + window.location.hash);
        }}
      >
        <Languages className="size-4" />
        {t.common.otherLocaleShort}
      </a>
    </Button>
  );
}
