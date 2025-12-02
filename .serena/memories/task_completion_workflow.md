# Task Completion Workflow

## Pre-Completion Checklist

### Code Quality Verification
Before marking a task as complete, ensure:

1. **Linting Passes**: Run `pnpm lint` to check for any Biome linting issues
2. **Formatting Applied**: Run `pnpm format` to ensure consistent code formatting
3. **TypeScript Compilation**: Ensure no TypeScript compilation errors
4. **Build Success**: Test `pnpm build` to verify production build works

### Testing Requirements
Since this project doesn't have a formal test suite:

1. **Manual Testing**: Test the specific functionality you implemented
2. **Build Testing**: Ensure `pnpm build` completes successfully
3. **Development Server**: Test with `pnpm dev` to verify development functionality
4. **Browser Compatibility**: Test key functionality in browser

### Code Review Standards

#### Before Submitting Changes
- [ ] All functions have proper TypeScript typing
- [ ] Components follow established patterns (shadcn/ui style)
- [ ] Custom hooks follow naming conventions (use-prefix)
- [ ] Utility functions are properly documented
- [ ] No console.log statements in production code
- [ ] Error handling is implemented where needed

#### Accessibility Considerations
- [ ] All interactive elements have proper ARIA attributes
- [ ] Components use Radix primitives for accessibility
- [ ] Color contrast meets WCAG guidelines
- [ ] Keyboard navigation works properly
- [ ] Screen reader compatibility verified

## Development Workflow

### Step-by-Step Process

1. **Understand Requirements**
   - Read the task carefully
   - Identify which files need modification
   - Check existing patterns in similar code

2. **Plan Implementation**
   - Identify affected components and hooks
   - Check data flow and state management
   - Consider backward compatibility

3. **Implementation**
   - Follow code conventions and styling guidelines
   - Use TypeScript strict typing
   - Implement proper error handling
   - Add necessary documentation

4. **Quality Assurance**
   - Run `pnpm lint` to check code quality
   - Run `pnpm format` to ensure formatting
   - Test functionality manually
   - Verify build process

5. **Final Verification**
   - Check all affected functionality works
   - Verify no regressions in existing features
   - Ensure responsive design works on mobile
   - Test theme switching (dark/light mode)

### Specific Task Types

#### Adding New UI Components
1. Create component in `components/ui/`
2. Follow shadcn/ui patterns and conventions
3. Use Radix primitives for accessibility
4. Style with Tailwind CSS v4
5. Export component with proper typing
6. Update any necessary imports

#### Modifying Recipe Functionality
1. Update `Recipe` interface in `hooks/use-recipes.ts` if needed
2. Modify CRUD functions accordingly
3. Consider localStorage migration for existing data
4. Update recipe form components if structure changes
5. Test recipe creation, editing, and deletion

#### Styling Changes
1. Edit `app/globals.css` for global styles
2. Use CSS variables for theme consistency
3. Follow Tailwind CSS v4 patterns
4. Test dark/light theme compatibility
5. Verify responsive design

#### Blog/Directus Integration
1. Update `lib/directus.ts` configuration
2. Set required environment variables
3. Test API endpoints in development
4. Verify content fetching and display
5. Check SEO metadata handling

## Common Issues and Solutions

### Build Failures
```bash
# Clear Next.js cache
rm -rf .next
pnpm build

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### TypeScript Errors
- Check interface definitions match usage
- Ensure all required properties are provided
- Verify import paths use @ alias correctly
- Check for missing type annotations

### Styling Issues
- Verify Tailwind CSS v4 classes are correct
- Check CSS variables are properly defined
- Ensure `cn()` utility is used for class merging
- Test both light and dark themes

## Performance Considerations

### Optimization Checklist
- [ ] Images are properly optimized
- [ ] Components use React.memo where appropriate
- [ ] State updates are optimized
- [ ] Bundle size impact assessed
- [ ] Loading states implemented for async operations

### Bundle Analysis
```bash
# Analyze bundle size
pnpm build
npx @next/bundle-analyzer
```

## Documentation Updates

### Required Documentation
When making significant changes:

1. **Update CLAUDE.md** if architectural changes are made
2. **Comment complex logic** in the code itself
3. **Update README.md** if new setup steps required
4. **Document new environment variables** if added

### Commit Messages
Follow conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for test-related changes

## Deployment Verification

### Pre-Deployment Checklist
- [ ] Production build succeeds
- [ ] Environment variables configured
- [ ] Directus integration working (if applicable)
- [ ] All routes accessible
- [ ] Theme switching functional
- [ ] Recipe CRUD operations working
- [ ] Blog posts displaying correctly

### Post-Deployment Verification
1. Check Vercel deployment logs
2. Test production URL functionality
3. Verify analytics are tracking
4. Check for any console errors
5. Test performance on production