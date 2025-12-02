# Essential pnpm Commands for bakingrecipes

## Package Management

### Installation and Setup
```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install all dependencies
pnpm install

# Install specific package
pnpm add package-name

# Install as dev dependency
pnpm add -D package-name

# Remove package
pnpm remove package-name
```

### Development Workflow
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests (if configured)
pnpm test
```

### Code Quality
```bash
# Run Biome linter
pnpm lint

# Format code with Biome
pnpm format

# Check types
pnpm type-check
```

### Advanced pnpm Features
```bash
# List installed packages
pnpm list

# List outdated packages
pnpm outdated

# Update all packages
pnpm update

# Clean install (remove node_modules and reinstall)
pnpm clean-install

# Check for security vulnerabilities
pnpm audit

# Fix security issues
pnpm audit fix

# Cache management
pnpm store prune

# Check disk usage
pnpm store status
```

### Project-Specific Commands

```bash
# Full development setup
pnpm install && pnpm dev

# Quality check before commit
pnpm lint && pnpm format && pnpm build

# Complete development workflow
pnpm install
pnpm lint
pnpm format
pnpm dev

# Production deployment preparation
pnpm lint
pnpm build
pnpm start
```

### Useful pnpm Flags
```bash
# Silent mode
pnpm install --silent

# Force reinstall
pnpm install --force

# Production only (exclude devDependencies)
pnpm install --prod

# Workspace commands (if monorepo)
pnpm -w run command-name

# Filter packages
pnpm --filter package-name run command
```