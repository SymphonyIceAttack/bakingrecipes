# BakingRecipes Project Overview

## Project Purpose

**BakingRecipes** is a Next.js 16 application that serves as a comprehensive baking calculator and recipe manager. It's designed to help users:

- Create, edit, and manage baking recipes with automatic ingredient scaling
- Display blog posts from a Directus headless CMS
- Calculate ingredient weights based on serving sizes
- Export recipes as images for sharing and printing
- Switch between dark/light themes

## Tech Stack

### Core Technologies
- **Framework**: Next.js 16.0.1 with App Router
- **Language**: TypeScript (strict mode enabled)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Package Manager**: pnpm

### UI and Styling
- **Component Library**: Radix UI primitives with shadcn/ui
- **Theme System**: next-themes for dark/light mode
- **CSS Framework**: Tailwind CSS v4
- **Component Variants**: class-variance-authority (CVA)

### State Management and Forms
- **Forms**: TanStack React Form with Zod validation
- **Recipe Storage**: Client-side localStorage
- **Data Validation**: Zod schemas

### Content Management
- **CMS**: Directus for blog posts
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel platform

### Development Tools
- **Linting/Formatting**: Biome (not ESLint/Prettier)
- **Code Quality**: TypeScript strict mode
- **Image Handling**: Next.js Image (unoptimized for static deployment)

## Key Features

### Recipe Management
- Create, read, update, delete recipes
- Automatic ingredient scaling based on serving sizes
- Recipe thumbnail assignment from predefined images
- Client-side persistence using localStorage

### Blog System
- Server-side fetching from Directus CMS
- Markdown content support
- SEO metadata and social sharing
- Recent posts display

### Export Functionality
- Generate recipe images for sharing
- Print-friendly formatting
- Social media optimization

## Architecture Highlights

### Data Flow
- **Recipes**: Client-side management with localStorage persistence
- **Blog Posts**: Server-side fetching from Directus API
- **Theme**: Global theme context with CSS variables

### Component Structure
- **UI Components**: shadcn/ui with Radix primitives
- **Custom Components**: Recipe forms, navigation, blog components
- **Hooks**: Custom React hooks for state management

### File Organization
- `app/` - Next.js App Router pages and layouts
- `components/` - React components (UI, blog, custom)
- `hooks/` - Custom React hooks
- `lib/` - Utility libraries and configurations
- `public/images/` - Static recipe images