# Alexandre Sauquet — Personal Website

[![License: NON-AI-APACHE2](https://img.shields.io/badge/License-NON--AI--APACHE2-blue.svg)](https://github.com/non-ai-licenses/non-ai-licenses)

Personal portfolio site built with [Astro](https://astro.build/), [Tailwind CSS v4](https://tailwindcss.com/), and [DaisyUI](https://daisyui.com/), based on the [Bloomfolio](https://github.com/lauroguedes/bloomfolio) theme. Deployed to Cloudflare Workers.

## Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Content | MDX with KaTeX math support |
| Deployment | Cloudflare Workers (via Wrangler) |

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output → ./dist
npm run preview    # preview the production build locally
```

## Customization

All site-wide settings live in [`src/config.ts`](src/config.ts):

- **Personal info** — name, title, description, avatar, location
- **Social links** — GitHub, LinkedIn, email, and more
- **Section visibility** — toggle projects, blog, work, education, hackathons, and contact on/off

Content is managed through Astro [content collections](https://docs.astro.build/en/guides/content-collections/) under `src/content/`:

| Directory | Purpose |
|---|---|
| `work/` | Work experience entries |
| `projects/` | Project write-ups |
| `hackathons/` | Hackathon entries |
| `education/` | Education history |
| `_blog/` | Blog posts (MDX, supports LaTeX) |

## Deployment

The site deploys as a static asset bundle to Cloudflare Workers. After building, deploy with:

```bash
npx wrangler deploy
```

Configuration is in [`wrangler.jsonc`](wrangler.jsonc).
