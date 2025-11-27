# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bloomfolio is an Astro-based portfolio template using Tailwind CSS 4.x and DaisyUI for styling. The project follows Astro's standard project structure with file-based routing.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- <command>

# Type checking
npm run astro check
```

## Architecture

### Framework & Build Setup

- **Astro 5.x**: Static site generator with component islands architecture
- **Tailwind CSS 4.x**: Integrated via Vite plugin (`@tailwindcss/vite`)
- **DaisyUI**: Loaded as Tailwind plugin in `src/styles/global.css`
- **TypeScript**: Strict mode enabled via `astro/tsconfigs/strict`

### Styling System

The styling architecture uses Tailwind CSS 4.x with the new CSS-first configuration:

1. Global styles are defined in `src/styles/global.css` using `@import "tailwindcss"` and `@plugin "daisyui"`
2. The Tailwind Vite plugin is configured in `astro.config.mjs`
3. DaisyUI components are available project-wide through the plugin system
4. Component-scoped styles can be added in `<style>` tags within `.astro` files

### Project Structure

```
src/
├── assets/          # Static assets (images, SVGs)
├── components/      # Reusable Astro components
├── layouts/         # Layout templates (wraps page content)
├── pages/           # File-based routing (each file = route)
└── styles/          # Global CSS (Tailwind + DaisyUI imports)
```

### Component Architecture

- **Layouts** (`src/layouts/`): Base HTML structure, imports global CSS, defines `<slot />` for page content
- **Pages** (`src/pages/`): Map directly to routes, import layouts and components
- **Components** (`src/components/`): Reusable UI elements with isolated scopes

### Key Patterns

1. **Layout Usage**: Pages should import and wrap content in `Layout.astro`:
   ```astro
   ---
   import Layout from "../layouts/Layout.astro";
   ---
   <Layout>
     <!-- Page content -->
   </Layout>
   ```

2. **Global CSS Import**: Only import `global.css` in the main layout to avoid duplicate Tailwind imports

3. **Styling Priority**: Use Tailwind utility classes first, then DaisyUI components, and component-scoped `<style>` tags for custom styling only when necessary

4. **TypeScript**: Astro's strict TypeScript config is enabled - expect type checking on component props and imports

## Template Structure

Bloomfolio is designed as a portfolio website template with the following sections and components:

### Hero Section (Component)
- Title
- Description
- Avatar

### About Section (Component)
- Title
- Description

### Work Section (Component + Content Loaded)
- Company Name
- Position
- Position Description
- Period (e.g., May 2012 - Feb 2020)

### Education Section (Component + Content Loaded)
- University Name
- Course Name
- Description
- Period (e.g., May 2012 - Feb 2020)
- Link to college website

### Projects Section (Component + Content Loaded)
- Image
- Title
- Period (e.g., May 2012 - Feb 2020)
- Description
- Skills
- Link Demo
- Link Source

### Hackathon Section (Component + Content Loaded)
- Period (e.g., Nov 23rd - 25th, 2018)
- Title
- Location
- Description
- Link Source

### Contact Section (Component)
Contact information

### Blog Page (Page + Content Loaded)
- Image
- Title
- Publish Date
- Content

## Development Workflow

### MCP Tools for Documentation

When building components or implementing features, **always use the available MCP tools** to search documentation:

1. **Astro Documentation**: Use `mcp__astro-docs__search_astro_docs` to search official Astro framework documentation
   - Use for: routing, components, content collections, layouts, data fetching, SSR/SSG patterns

2. **DaisyUI Documentation**: Use `mcp__context7__resolve-library-id` and `mcp__context7__get-library-docs` to search DaisyUI component documentation
   - Use for: UI components, theming, component props, styling patterns
   - First resolve the library ID, then fetch the documentation with specific topics

**Important**: Always consult these documentation sources before implementing features to ensure best practices and correct API usage.
