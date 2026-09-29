import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE } from "@/i18n/dictionaries";

// Idioma preferido do navegador entre "pt" e "en", respeitando os pesos q=
// ("en-US,en;q=0.9,pt;q=0.8" -> "en"). null se nenhum dos dois aparecer.
function preferredLocale(header: string | null): "pt" | "en" | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.split("-")[0], q: q ? Number(q.split("=")[1]) : 1 };
    })
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q);
  const match = ranked.find(({ lang }) => lang === "pt" || lang === "en");
  return (match?.lang as "pt" | "en" | undefined) ?? null;
}

// Só na home em português: quem prefere inglês vai para /en na primeira
// visita. Escolha feita no botão PT/EN (cookie) sempre vence. Robôs de busca
// não mandam Accept-Language e continuam vendo as duas versões.
export function proxy(request: NextRequest) {
  if (request.cookies.has(LOCALE_COOKIE)) return NextResponse.next();

  if (preferredLocale(request.headers.get("accept-language")) === "en") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url, 307);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
