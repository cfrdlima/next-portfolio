"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {/* respeita "reduzir movimento" do sistema em todas as animações */}
      <MotionConfig reducedMotion="user">
        {/* carrega só os recursos de animação usados; strict barra "motion." */}
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </NextThemesProvider>
  );
}
