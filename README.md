<div align="center">

# 🍰 BakingRecipes

**Smart Baking Recipe Manager & Calculator**

[Live Demo](https://bakingrecipes.top/) · [GitHub Repository](https://github.com/SymphonyIceAttack/bakingrecipes)

</div>

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)
![pnpm](https://img.shields.io/badge/pnpm-8.x-F69220?style=flat&logo=pnpm)

</div>

## ✨ Project Overview

BakingRecipes is a modern baking recipe management and calculator application designed for baking enthusiasts. It provides intelligent ingredient proportion calculations, complete recipe management systems, and an elegant user interface that makes baking simpler and more enjoyable.

## 🚀 Key Features

### 📚 Recipe Management
- **Create & Edit Recipes**: Complete recipe creation and editing functionality
- **Ingredient Management**: Precise ingredient weight calculations (grams)
- **Step-by-Step Instructions**: Detailed cooking and baking instructions
- **Image Showcase**: Beautiful recipe thumbnails

### 🧮 Smart Calculator
- **Auto Proportion Scaling**: Automatically adjusts ingredient amounts based on desired servings
- **Real-time Calculation**: Instant display of adjusted ingredient weights
- **Precise Measurement**: Supports gram-based precise calculations

### 💾 Local Storage
- **Browser Storage**: Recipes saved in local localStorage
- **Offline Available**: Works without internet connection
- **Data Persistence**: Data remains after browser closure

### 🎨 User Experience
- **Theme Toggle**: Support for dark/light mode switching
- **Responsive Design**: Perfect adaptation for desktop and mobile devices
- **Modern UI**: Beautiful interface based on Radix UI and Tailwind CSS

### 📝 Blog System
- **Content Management**: Integrated with Directus CMS
- **Article Display**: Beautiful blog article reading experience
- **SEO Optimized**: Complete search engine optimization

### 🖼️ Export Features
- **Image Generation**: Generate recipes as images
- **Share & Print**: Support for social sharing and printing functions

## 🛠️ Tech Stack

| Technology | Description | Version |
|------------|-------------|---------|
| [Next.js](https://nextjs.org) | React Full-stack Framework | 16.0+ |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript Type Safety | 5.x |
| [React](https://reactjs.org) | User Interface Library | 19.2+ |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS Framework | v4 |
| [Radix UI](https://www.radix-ui.com) | Unstyled UI Component Library | Latest |
| [shadcn/ui](https://ui.shadcn.com) | Beautiful UI Components | Latest |
| [pnpm](https://pnpm.io) | Fast Package Manager | 8.x |
| [Biome](https://biomejs.dev) | Code Formatting & Linting | Latest |
| [Directus](https://directus.io) | Headless CMS | Latest |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm 8+ (recommended)

### Installation

```bash
# Clone the project
git clone https://github.com/SymphonyIceAttack/bakingrecipes.git
cd bakingrecipes

# Install dependencies (using pnpm)
pnpm install
```

### Environment Variables

Create a `.env.local` file and add the following environment variables:

```env
NEXT_PUBLIC_DIRECTUS_URL=your_directus_instance_url
DIRECTUS_ACCESS_TOKEN=your_directus_access_token
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 📋 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run Biome linter
pnpm format       # Format code with Biome
```

## 🎯 Project Structure

```
bakingrecipes/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── recipes/           # Recipe-related pages
│   └── posts/             # Blog article pages
├── components/            # React Components
│   ├── ui/                # shadcn/ui components
│   ├── blog/              # Blog-specific components
│   └── recipe-form.tsx    # Recipe form component
├── hooks/                 # Custom React hooks
│   └── use-recipes.ts     # Recipe management hook
├── lib/                   # Utility libraries
│   ├── directus.ts        # Directus client
│   └── utils.ts           # Common utility functions
└── public/                # Static assets
    └── images/            # Recipe thumbnails
```

## 🌐 Live Demo

- **Website**: [https://bakingrecipes.top/](https://bakingrecipes.top/)
- **GitHub Repository**: [https://github.com/SymphonyIceAttack/bakingrecipes](https://github.com/SymphonyIceAttack/bakingrecipes)

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thanks to all developers who contribute to this project, and the following open source projects:

- [Next.js](https://nextjs.org) - React Full-stack Framework
- [Tailwind CSS](https://tailwindcss.com) - CSS Framework
- [Radix UI](https://www.radix-ui.com) - Unstyled Component Library
- [shadcn/ui](https://ui.shadcn.com) - Beautiful Components
- [Directus](https://directus.io) - Headless CMS

## 📞 Contact

For questions or suggestions, please contact via:

- GitHub Issues: [https://github.com/SymphonyIceAttack/bakingrecipes/issues](https://github.com/SymphonyIceAttack/bakingrecipes/issues)
- Project Website: [https://bakingrecipes.top/](https://bakingrecipes.top/)

---

<div align="center">

**If this project helps you, please give us a ⭐️!**

Made with ❤️ by [SymphonyIceAttack](https://github.com/SymphonyIceAttack)

</div>
