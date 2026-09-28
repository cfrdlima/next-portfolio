# Portfólio — Claudinei de Lima

Portfólio pessoal de Claudinei de Lima, desenvolvedor de software com foco em aplicações web e mobile.

**Site:** https://next-portfolio-woad-sigma.vercel.app

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com) + componentes [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev) para animações
- [next-themes](https://github.com/pacocoursey/next-themes) para modo claro/escuro
- Ícones: [react-icons](https://react-icons.github.io/react-icons), [lucide-react](https://lucide.dev) e [Iconify](https://iconify.design)

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
│   ├── layout/         # header, alternador de tema, redes sociais, faixa de skills
│   ├── pages/          # seções da página: início, sobre, skills
│   └── ui/             # componentes base (shadcn/ui)
└── lib/                # utilitários
```

## Deploy

O deploy é feito na [Vercel](https://vercel.com): cada push na branch `main` publica uma nova versão automaticamente.
