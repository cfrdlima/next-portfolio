"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSyncExternalStore } from "react";
import { useI18n } from "@/i18n/locale-provider";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const { t } = useI18n();
  // true só no cliente, evita diferença de hidratação com o tema salvo
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  // placeholder do mesmo tamanho, evita o header "pular" ao hidratar
  if (!mounted) return <div className="size-9" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer rounded-full"
      aria-label={theme === "dark" ? t.common.themeToLight : t.common.themeToDark}
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  );
}
