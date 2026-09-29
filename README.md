# Portfólio — Claudinei de Lima

Portfólio pessoal de Claudinei de Lima, desenvolvedor de software com foco em aplicações web e mobile.

**Site:** https://claudinei-dev.vercel.app

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com) + componentes [shadcn/ui](https://ui.shadcn.com)
- [Motion](https://motion.dev) (antigo Framer Motion) para animações (via `LazyMotion`, respeitando "reduzir movimento")
- [next-themes](https://github.com/pacocoursey/next-themes) para modo claro/escuro
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
├── app/                # layout, página inicial, SEO (metadata, OG image, robots, sitemap)
├── components/
│   ├── layout/         # header, rodapé, menu, tema, redes sociais, faixa de skills
│   ├── sections/       # seções da página: hero, sobre, skills, projetos, contato
│   └── ui/             # componentes base (shadcn/ui)
└── lib/                # utilitários e URL do site (site.ts)
```

- **Projetos:** a lista fica em `src/components/sections/projects.tsx` (nome, descrição, tecnologias, links e status).
- **Domínio:** a URL pública fica em `src/lib/site.ts` e é usada no SEO, no `robots` e no `sitemap`.

## Deploy

O deploy é feito na [Vercel](https://vercel.com): cada push na branch `main` publica uma nova versão automaticamente.
