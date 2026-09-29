# Portfólio — Claudinei de Lima

Portfólio pessoal de Claudinei de Lima, desenvolvedor de software com foco em aplicações web e mobile.

**Site:** https://claudinei-dev.vercel.app

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com) + componentes [shadcn/ui](https://ui.shadcn.com)
- [Motion](https://motion.dev) (antigo Framer Motion) para animações (via `LazyMotion`, respeitando "reduzir movimento")
- [next-themes](https://github.com/pacocoursey/next-themes) para modo claro/escuro
- Dois idiomas: português em `/` e inglês em `/en`, com dicionários próprios (sem API de tradução); na primeira visita, `src/proxy.ts` leva para `/en` quem tem o navegador em inglês (a escolha no botão PT/EN fica salva em cookie e tem prioridade)
- [Vercel Web Analytics](https://vercel.com/docs/analytics) para estatísticas de acesso, sem cookies
- Ícones: [lucide-react](https://lucide.dev) para a interface e [react-icons](https://react-icons.github.io/react-icons) para logos de marcas

## Rodando localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

### Scripts

| Comando         | Descrição                              |
| --------------- | -------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento            |
| `npm run build` | Build de produção                      |
| `npm start`     | Sobe o build de produção               |
| `npm run lint`  | Verifica o código com ESLint           |
| `npm run resume` | Gera os PDFs do currículo (PT e EN) a partir de `resume/*.html` com o Chrome headless |

### Com Docker

```bash
# desenvolvimento (hot reload)
docker compose up --build development

# produção
docker compose up --build production
```

## Estrutura

```
src/
├── app/
│   ├── (pt)/           # layout raiz e página em português (/)
│   ├── en/             # layout raiz e página em inglês (/en)
│   └── ...             # 404 global, robots, sitemap
├── components/
│   ├── layout/         # header, rodapé, menu, tema, redes sociais, faixa de skills
│   ├── sections/       # seções da página: hero, sobre, skills, projetos, contato
│   └── ui/             # componentes base (shadcn/ui)
├── i18n/               # dicionários PT/EN e contexto do idioma
└── lib/                # utilitários, URL do site e imagem de compartilhamento
```

- **Textos:** todos os textos do site ficam em `src/i18n/dictionaries.ts`, em PT e EN. O TypeScript acusa se faltar uma tradução.
- **Projetos:** links, tecnologias e imagens ficam em `src/components/sections/projects.tsx`; as descrições, no dicionário.
- **Domínio:** a URL pública fica em `src/lib/site.ts` e é usada no SEO, no `robots` e no `sitemap`.

## Deploy

O deploy é feito na [Vercel](https://vercel.com): cada push na branch `main` publica uma nova versão automaticamente.
