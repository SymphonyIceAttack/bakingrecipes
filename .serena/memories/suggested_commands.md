# Suggested Commands for bakingrecipes Project

## Development Commands

### Core Development
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Code Quality
```bash
# Run Biome linter
pnpm lint

# Format code with Biome
pnpm format

# Install dependencies
pnpm install
```

### System Commands (macOS/Darwin)
```bash
# Check project structure
ls -la

# View files in directory
find . -type f -name "*.ts" -o -name "*.tsx" | head -20

# Search for text in files
grep -r "function" --include="*.ts" --include="*.tsx" .

# Check git status
git status

# View git log
git log --oneline -10
```

### Vercel Deployment
```bash
# Build for Vercel deployment
pnpm build

# Deploy to Vercel (requires Vercel CLI)
vercel --prod
```

## Project-Specific Commands

### Environment Setup
```bash
# Set up environment variables for Directus
export NEXT_PUBLIC_DIRECTUS_URL="your_directus_url"
export DIRECTUS_ACCESS_TOKEN="your_access_token"
```

### File Operations
```bash
# Find TypeScript files
find . -name "*.ts" -o -name "*.tsx"

# Count lines of code
find . -name "*.ts" -o -name "*.tsx" | xargs wc -l

# Check for TODO comments
grep -r "TODO" --include="*.ts" --include="*.tsx" .
```

### Component Development
```bash
# Generate component (manual process)
# 1. Create file in components/ui/
# 2. Follow shadcn/ui patterns
# 3. Update imports
```