# pnpm Best Practices for BakingRecipes

## Why pnpm?

This project exclusively uses **pnpm** as the package manager because:

1. **Faster installation**: pnpm is significantly faster than npm and yarn
2. **Disk space efficiency**: Uses hard links and saves up to 40% disk space
3. **Better dependency management**: Strict dependency resolution prevents version conflicts
4. **Monorepo support**: Native workspace support for complex projects
5. **Security**: Built-in security features with `pnpm audit`

## pnpm Requirements

- **Version**: Use pnpm 8.0.0 or later (current: 10.15.1)
- **Installation**: `npm install -g pnpm` or use corepack
- **No mixing**: Never mix pnpm with npm or yarn in the same project

## Project Commands (pnpm only)

```bash
# Initial setup
pnpm install

# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Quality checks
pnpm lint         # Run Biome linter
pnpm format       # Format with Biome
pnpm type-check   # TypeScript type checking
```

## Best Practices

### 1. Always Use pnpm
```bash
# ❌ Don't use these
npm install
yarn dev
npm run build

# ✅ Always use pnpm
pnpm install
pnpm dev
pnpm build
```

### 2. Clean Installation
```bash
# When having issues, do a clean install
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### 3. Add Dependencies
```bash
# Production dependency
pnpm add package-name

# Development dependency
pnpm add -D package-name

# Specific version
pnpm add package-name@version
```

### 4. Update Dependencies
```bash
# Update all packages
pnpm update

# Update specific package
pnpm update package-name

# Check for outdated packages
pnpm outdated
```

### 5. Security Audits
```bash
# Check for vulnerabilities
pnpm audit

# Fix automatically
pnpm audit fix

# Fix with force (use carefully)
pnpm audit fix --force
```

## pnpm vs npm/yarn Comparison

| Feature | pnpm | npm | yarn |
|---------|------|-----|------|
| Installation Speed | ⚡⚡⚡ Fast | 🐌 Slow | 🐢 Medium |
| Disk Space Usage | 💾 Efficient | 💾💾💾 High | 💾💾 Medium |
| monorepo Support | ✅ Native | ⚠️ Limited | ⚠️ Workspaces |
| Lock File | pnpm-lock.yaml | package-lock.json | yarn.lock |
| Command | `pnpm` | `npm` | `yarn` |

## Common pnpm Commands Reference

### Installation
```bash
pnpm install              # Install all dependencies
pnpm add package          # Add production dependency
pnpm add -D package       # Add dev dependency
pnpm add -g package       # Add global package
pnpm remove package       # Remove dependency
```

### Scripts
```bash
pnpm run script-name      # Run script from package.json
pnpm dev                  # Short for pnpm run dev
pnpm build                # Short for pnpm run build
pnpm start                # Short for pnpm run start
```

### Maintenance
```bash
pnpm outdated             # Check outdated packages
pnpm update               # Update all packages
pnpm update package       # Update specific package
pnpm audit                # Security audit
pnpm audit fix            # Fix security issues
pnpm store prune          # Clean unused packages
```

### Information
```bash
pnpm list                 # List installed packages
pnpm list --depth=0       # List top-level packages
pnpm info package         # Show package information
pnpm why package          # Show why package is installed
```

## Troubleshooting

### Permission Issues
```bash
# Fix pnpm permissions
sudo chown -R $(whoami) ~/.pnpm-store
```

### Cache Issues
```bash
# Clear pnpm cache
pnpm store prune

# Verify store integrity
pnpm store status
```

### Node Version Issues
```bash
# Check Node version
node --version

# Use nvm to manage Node versions
nvm install 18
nvm use 18
```