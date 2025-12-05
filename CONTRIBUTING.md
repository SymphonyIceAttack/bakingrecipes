# Contributing to BakingRecipes

Thank you for your interest in contributing to BakingRecipes! We welcome contributions from the community and are excited to see what you'll build.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm 8+
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/SymphonyIceAttack/bakingrecipes.git
   cd bakingrecipes
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

## 🎯 How to Contribute

### Reporting Bugs
If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS information

### Suggesting Features
We love hearing new ideas! Please create an issue with:
- Clear description of the proposed feature
- Use case and benefits
- Any alternative solutions you've considered

### Code Contributions

1. **Find or create an issue** to work on
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Commit with a clear message**
   ```bash
   git commit -m "feat: add ingredient weight validation"
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Coding Standards

### Code Style
- We use **Biome** for linting and formatting
- Run `pnpm lint` and `pnpm format` before committing
- Follow TypeScript best practices
- Use meaningful variable and function names

### Commit Messages
We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### File Structure
```
bakingrecipes/
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── [feature]/        # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
└── types/               # TypeScript type definitions
```

## 🧪 Testing

### Running Tests
```bash
pnpm test          # Run unit tests
pnpm test:e2e      # Run end-to-end tests
pnpm lint          # Run linting
pnpm type-check    # TypeScript type checking
```

### Writing Tests
- Write tests for new features
- Update existing tests when modifying functionality
- Aim for good test coverage
- Use descriptive test names

## 🎨 UI/UX Guidelines

### Design Principles
- **Accessibility First**: Follow WCAG guidelines
- **Mobile Responsive**: Ensure works on all screen sizes
- **Dark Mode**: Support both light and dark themes
- **Performance**: Optimize for fast loading

### Styling
- Use **Tailwind CSS** for all styling
- Follow the existing design system
- Use CSS variables for theming
- Maintain consistency with existing components

## 📋 Pull Request Process

1. **Ensure all checks pass**
   - Linting and formatting
   - Type checking
   - Tests (if applicable)

2. **Update documentation**
   - Update README if needed
   - Add JSDoc comments for new functions
   - Update types if data structures change

3. **Create a descriptive PR**
   - Clear title and description
   - Link to related issues
   - Include screenshots for UI changes
   - Mark as draft until ready for review

## 🏷️ Release Process

Releases are managed by the maintainers:
1. Version bumping follows [Semantic Versioning](https://semver.org/)
2. Changelog is automatically generated
3. GitHub releases are created with release notes

## 💬 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Help others learn and grow
- Focus on constructive feedback
- Report inappropriate behavior to maintainers

### Communication
- Use GitHub Issues for bugs and feature requests
- Be patient with responses
- Provide clear and complete information
- Help review others' contributions

## 🎯 Areas Where We Need Help

### High Priority
- **Recipe Management**: Enhanced CRUD operations
- **Export Features**: JSON/CSV export functionality
- **Performance**: Optimization for large recipe collections
- **Accessibility**: WCAG compliance improvements

### Medium Priority
- **Recipe Sharing**: Social sharing features
- **Advanced Calculator**: Unit conversions, scaling options
- **Search & Filter**: Recipe discovery features
- **Mobile App**: Progressive Web App enhancements

### Nice to Have
- **Recipe Collections**: Categorization and folders
- **Collaborative Features**: Recipe sharing and comments
- **Recipe History**: Tracking and versioning
- **Integration**: External recipe imports

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For general questions and ideas
- **Documentation**: Check the README and inline docs

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributors page
- Release notes for significant contributions

Thank you for making BakingRecipes better! 🎉