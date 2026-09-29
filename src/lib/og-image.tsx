import { ImageResponse } from "next/og";
import type { Locale } from "@/i18n/dictionaries";

// usado por app/opengraph-image.tsx (PT) e app/en/opengraph-image.tsx (EN)
export const ogSize = { width: 1200, height: 630 };

export const ogAlt: Record<Locale, string> = {
  pt: "Claudinei de Lima | Desenvolvedor de Software",
  en: "Claudinei de Lima | Software Developer",
};

// mesmas cores do tema escuro do site (globals.css)
const colors = {
  background: "#020618",
  foreground: "#f8fafc",
  muted: "#90a1b9",
  border: "#1d293d",
  brand: "#51a2ff",
};

const tags = ["Web", "Mobile", "Java", "Flutter", "Next.js", "Firebase"];

// Space Grotesk (fonte dos títulos do site) via Google Fonts; se o download
// falhar no build, a imagem sai com a fonte padrão em vez de quebrar
async function loadFont(weight: 500 | 700) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@${weight}`
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    const data = await fetch(url).then((res) => res.arrayBuffer());
    return { name: "Space Grotesk", data, weight, style: "normal" } as const;
  } catch {
    return null;
  }
}

export async function renderOgImage(locale: Locale) {
  const fonts = (await Promise.all([loadFont(500), loadFont(700)])).filter(
    (font) => font !== null
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: colors.background,
          // grade sutil + brilho, como no hero
          backgroundImage: `radial-gradient(circle at 75% 30%, rgba(81,162,255,0.22), transparent 45%), linear-gradient(to right, ${colors.border} 1px, transparent 1px), linear-gradient(to bottom, ${colors.border} 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 56px 56px, 56px 56px",
          color: colors.foreground,
          fontFamily: fonts.length ? "Space Grotesk" : undefined,
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
          <span style={{ color: colors.brand }}>&lt;</span>
          <span>claudinei</span>
          <span style={{ color: colors.brand }}>&nbsp;/&gt;</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            Claudinei de Lima
          </div>
          <div style={{ display: "flex", fontSize: 40, marginTop: 12 }}>
            {locale === "pt" ? (
              <>
                <span style={{ color: colors.muted, marginRight: 12 }}>
                  Desenvolvedor de
                </span>
                <span style={{ color: colors.brand, fontWeight: 700 }}>
                  Software
                </span>
              </>
            ) : (
              <>
                <span
                  style={{ color: colors.brand, fontWeight: 700, marginRight: 12 }}
                >
                  Software
                </span>
                <span style={{ color: colors.muted }}>Developer</span>
              </>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  fontSize: 24,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: `1px solid ${colors.border}`,
                  background: "rgba(15,23,43,0.8)",
                  color: colors.foreground,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, color: colors.muted }}>
            {locale === "pt" ? "claudinei-dev.vercel.app" : "claudinei-dev.vercel.app/en"}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  );
}
