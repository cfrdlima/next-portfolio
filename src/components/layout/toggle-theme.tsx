"use client";

import { useTheme } from "next-themes";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
