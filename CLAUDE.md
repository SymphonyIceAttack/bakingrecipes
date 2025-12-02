# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BakingRecipes** is a Next.js 16 application that serves as a baking calculator and recipe manager. It features:

- **Recipe Management**: Create, edit, and view baking recipes with ingredient scaling
- **Blog System**: Display blog posts from a Directus headless CMS
- **Ingredient Calculator**: Automatically scales ingredient weights based on serving sizes
- **Local Storage**: Recipes are stored client-side in browser localStorage
- **Theme Support**: Dark/light mode with next-themes
- **Export Feature**: Generate recipe images for sharing/printing

## Tech Stack

- **Framework**: Next.js 16.0.1 with App Router
- **Language**: TypeScript
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Components**: Radix UI primitives with shadcn/ui
- **Linting/Formatting**: Biome (not ESLint/Prettier)
- **Package Manager**: pnpm (required - do not use npm or yarn)
- **CMS**: Directus for blog posts (configured in lib/directus.ts)
- **Deployment**: Vercel (Vercel Analytics enabled)

## Development Commands

**Important**: This project uses **pnpm** as the package manager. Do not use npm or yarn.

```bash
# Install dependencies (run first)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run Biome linter
pnpm lint

# Format code with Biome
pnpm format
```

**Note**: This project uses **Biome** instead of ESLint/Prettier. All linting and formatting is handled by Biome, configured in `biome.json`.

## Environment Variables

Required for Directus blog integration:
- `NEXT_PUBLIC_DIRECTUS_URL`: Directus instance URL
- `DIRECTUS_ACCESS_TOKEN`: Access token for reading posts

## Code Architecture

### Directory Structure

- **`app/`**: Next.js App Router pages and layouts
  - `page.tsx`: Homepage with hero, features, and FAQ
  - `layout.tsx`: Root layout with metadata and theme provider
  - `recipes/`: Recipe collection and detail pages
  - `posts/`: Blog posts from Directus CMS
  - `collection/`: Recipe collection view
  - `api/`: API routes (currently has draft endpoint)
  - `sitemap.ts`: Dynamic sitemap generation

- **`components/`**: React components
  - `ui/`: shadcn/ui Radix-based UI components
  - `blog/`: Blog-specific components (navigation, theme toggle, TOC)
  - `recipe-form.tsx`: Recipe creation/editing form
  - `theme-provider.tsx` & `theme-toggle.tsx`: Dark/light theme support

- **`hooks/`**: Custom React hooks
  - `use-recipes.ts`: Client-side recipe management with localStorage

- **`lib/`**: Utility libraries
  - `directus.ts`: Directus SDK client for fetching blog posts
  - `utils.ts`: `cn()` utility for merging Tailwind classes

- **`public/images/`**: Static recipe images (6 default thumbnails)

### Data Flow

**Recipes**:
- Client-side only, managed by `useRecipes` hook
- Stored in browser localStorage under `baking-recipes` key
- Each recipe includes: id, name, description, prep/bake times, temperature, servings, ingredients (with weights), instructions, thumbnail
- Automatic thumbnail assignment from 6 predefined images

**Blog Posts**:
- Server-side fetching from Directus CMS
- Posts stored at `/api/draft/route.ts`
- Each post has: title, slug, content (Markdown), metadata (author, tags, SEO)

### Key Files

- **`app/layout.tsx`**: Root layout with SEO metadata, theme provider, and Analytics
- **`app/page.tsx`**: Marketing homepage with navigation, hero, features, and FAQ
- **`hooks/use-recipes.ts`**: Central recipe state management with CRUD operations
- **`lib/directus.ts`**: Directus client configuration for blog posts
- **`biome.json`**: Linting and formatting rules (recommended Next.js/React rules enabled)
- **`next.config.ts`**: Image optimization settings (unoptimized, allows HTTPS domains)
- **`tailwind.config.ts`**: Tailwind v4 configuration (via PostCSS plugin)

## Styling Guidelines

- **Tailwind CSS v4**: Uses latest Tailwind with PostCSS plugin
- **shadcn/ui Components**: Built on Radix UI primitives, styled with Tailwind
- **Theme System**: CSS variables for colors, supports dark/light mode
- **cn() Utility**: Use `lib/utils.ts` to merge Tailwind classes (clsx + tailwind-merge)

## Component Patterns

### Form Handling
- Uses TanStack React Form with Zod validation
- Recipe form at `components/recipe-form.tsx`
- Ingredient weights measured in grams
- Client-side validation with Zod schemas

### State Management
- **Recipes**: Custom `useRecipes` hook (localStorage-based)
- **Blog Posts**: Directus fetch (server-side)
- **Theme**: next-themes for dark/light mode

### Image Handling
- Next.js Image component with `unoptimized: true` (for static deployment)
- Remote image patterns allowed (any HTTPS domain + symcloud.top)
- Static thumbnails stored in `public/images/`

## Development Notes

- **Dev Environment**: devenv.nix provides Nix-based development environment
- **TypeScript**: Strict mode enabled with Next.js plugin
- **Image Optimization**: Disabled for static export compatibility
- **No Tests**: No test suite configured (Jest, Vitest, or Cypress)
- **No Database**: Directus used only for blog posts, not recipes

## Common Development Tasks

### Adding a new UI component
1. Create component in appropriate directory (e.g., `components/ui/`)
2. Use shadcn/ui primitives (Radix-based) for accessibility
3. Style with Tailwind classes using CSS variables
4. Import `cn()` from `lib/utils.ts` for conditional classes

### Modifying recipe data structure
- Edit `Recipe` interface in `hooks/use-recipes.ts`
- Update `addRecipe` and `updateRecipe` functions as needed
- Consider localStorage migration if changing existing data

### Working with Directus blog posts
- Configure in `lib/directus.ts`
- Environment variables required: `NEXT_PUBLIC_DIRECTUS_URL`, `DIRECTUS_ACCESS_TOKEN`
- Posts fetched server-side in API routes
- View blog at `/posts`

### Styling changes
- Edit `app/globals.css` for global styles
- Tailwind v4 uses CSS variables defined in globals.css
- Component-specific styles use Tailwind utility classes

### Viewing and Editing Files
Always use the **`Read`** tool to view file contents instead of shell commands like `cat`, `head`, or `tail`. The Read tool provides numbered lines and better formatting:

```bash
# View entire file (shows all lines with numbers)
Read file_path="/path/to/file"
```

When you need to make changes, use the **`Edit`** tool instead of `sed`, `awk`, or shell redirection:

```bash
# Edit specific section
Edit file_path="/path/to/file" old_string="old text" new_string="new text"
```

**Note**: Always read a file with `Read` before editing it with `Edit`.

## Configuration Files

- **`package.json`**: Dependencies and npm scripts
- **`biome.json`**: Linting and formatting rules (recommended Next.js/React enabled)
- **`next.config.ts`**: Next.js configuration (images, etc.)
- **`tsconfig.json`**: TypeScript configuration with path aliases (`@/*`)
- **`components.json`**: shadcn/ui configuration
- **`postcss.config.mjs`**: Tailwind v4 PostCSS plugin
- **`.mcp.json`**: MCP servers configuration (Chrome DevTools, Context7, MiniMax)

## Deployment

- **Platform**: Vercel (officially supported)
- **Build Command**: `pnpm build`
- **Output**: Static export compatible (images unoptimized)
- **Analytics**: Vercel Analytics enabled in root layout

## Key URLs

- **Homepage**: `/` (app/page.tsx)
- **Recipe Collection**: `/collection` (app/collection/page.tsx)
- **Add Recipe**: `/recipes` (app/recipes/page.tsx)
- **Recipe Detail**: `/recipes/[id]` (app/recipes/[id]/page.tsx)
- **Blog**: `/posts` (app/posts/page.tsx)
- **Blog Post**: `/posts/[slug]` (app/posts/[slug]/page.tsx)
