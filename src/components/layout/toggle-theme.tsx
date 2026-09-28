"use client";

import { useTheme } from "next-themes";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { setTheme, resolvedTheme: theme } = useTheme();
  // true só no cliente, evita diferença de hidratação com o tema salvo
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!mounted) return null;

  return (
    <>
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer rounded-full"
        aria-label={
          theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"
        }
      >
        {theme === "dark" ? (
          <FaCloudSun size={32} />
        ) : (
          <FaCloudMoon size={32} />
        )}
      </Button>
    </>
  );
}
