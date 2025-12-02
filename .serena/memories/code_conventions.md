# Code Conventions and Style Guidelines

## TypeScript Configuration

### Key Settings
- **Strict Mode**: Enabled with comprehensive type checking
- **Module Resolution**: Bundler mode for Next.js
- **Path Aliases**: `@/*` mapped to `./` (root directory)
- **JSX**: React JSX with automatic runtime
- **Target**: ES2017

### Import Conventions
```typescript
// Use path aliases with @ prefix
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Client components explicitly marked
"use client";

// Third-party imports first, then relative imports
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { type Recipe } from "@/hooks/use-recipes";
```

## Code Style and Formatting

### Biome Configuration
- **Formatter**: Enabled with 2-space indentation
- **Linting**: Recommended Next.js and React rules
- **Import Organization**: Automatic import sorting enabled
- **File Inclusion**: All TypeScript/TSX files, exclude node_modules/.next/dist/build

### Indentation and Spacing
- **Indentation**: 2 spaces (not tabs)
- **Line Length**: No strict limit, but keep lines readable
- **Blank Lines**: Use single blank lines between functions and logical sections
- **Semicolons**: TypeScript standard (always use semicolons)

### Naming Conventions
```typescript
// Interfaces: PascalCase with descriptive names
interface Recipe {
  id: string;
  name: string;
  // ...
}

// Functions: camelCase with descriptive verbs
function getRandomThumbnail(): string {
  return THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)];
}

// Constants: UPPER_SNAKE_CASE
const STORAGE_KEY = "baking-recipes";
const THUMBNAILS = ["/images/chocolate-chip-cookies.jpg", /* ... */];

// Components: PascalCase
function Button({ className, variant, size, ...props }) {
  // ...
}
```

## Component Patterns

### React Components
```typescript
// Use TypeScript interfaces for props
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

// Use class-variance-authority for variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        // ...
      },
    },
  }
);

// Component with proper typing
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

### Custom Hooks
```typescript
// Hooks use camelCase and start with "use"
export function useRecipes() {
  // Return object with descriptive properties
  return {
    recipes,
    isLoading,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipe,
  };
}
```

## Styling Guidelines

### Tailwind CSS v4
- **CSS Variables**: Use CSS custom properties for theming
- **Component Styling**: Use utility classes with shadcn/ui patterns
- **Conditional Classes**: Use `cn()` utility from `@/lib/utils`

### CSS Variables Pattern
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... */
}
```

### Class Merging
```typescript
// Always use cn() utility for merging Tailwind classes
import { cn } from "@/lib/utils";

function MyComponent({ className, variant }) {
  return (
    <div className={cn("base-classes", variant === "default" && "default-classes", className)}>
      {/* content */}
    </div>
  );
}
```

## File Organization

### Directory Structure
```
app/                    # Next.js App Router
├── page.tsx           # Homepage
├── layout.tsx         # Root layout
├── recipes/           # Recipe pages
├── posts/            # Blog pages
└── api/              # API routes

components/
├── ui/               # shadcn/ui components
├── blog/             # Blog-specific components
└── *.tsx             # Custom components

hooks/
└── use-*.ts          # Custom React hooks

lib/
├── utils.ts          # Utility functions
└── directus.ts       # Directus client
```

### File Naming
- **Components**: PascalCase with .tsx extension
- **Hooks**: camelCase starting with "use" with .ts extension
- **Utils**: camelCase with .ts extension
- **Pages**: lowercase with .tsx extension (Next.js convention)

## Error Handling

### Type Safety
- Use TypeScript strict mode for comprehensive type checking
- Define interfaces for all data structures
- Use union types for variants and options

### Error Boundaries
```typescript
// Try-catch for localStorage operations
try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    setRecipes(JSON.parse(stored));
  }
} catch (error) {
  console.error("Failed to load recipes from localStorage:", error);
}
```

## Documentation Standards

### Code Comments
- Use JSDoc for complex functions
- Add inline comments for business logic
- Comment on data structures and interfaces

### Type Documentation
```typescript
interface Ingredient {
  name: string;
  weight: number; // in grams
}

interface Recipe {
  id: string;
  name: string;
  description?: string;
  prepTime: number; // in minutes
  bakeTime: number; // in minutes
  temperature: number; // in Fahrenheit
  servings: number; // number of servings
}
```