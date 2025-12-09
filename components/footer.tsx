"use client";

import {
  BookOpen,
  Calculator,
  ChefHat,
  Github,
  Heart,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { href: "/", label: "Home" },
    { href: "/recipes", label: "Create Recipe" },
    { href: "/collection", label: "Recipe Collection" },
    { href: "/tutorial", label: "Tutorial" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
  resources: [
    { href: "/posts", label: "Blog" },
    { href: "/posts/bakingrecipes-welcome", label: "Getting Started" },
  ],
};

const features = [
  {
    icon: Calculator,
    title: "Smart Calculation",
    description: "Automatic ingredient scaling",
  },
  {
    icon: BookOpen,
    title: "Recipe Management",
    description: "Organize your recipes",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "For bakers, by bakers",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-rotate-3">
                  <ChefHat className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-gradient-to-br from-accent to-primary rounded-full opacity-60"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                BakingRecipes
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional baking calculator that automatically scales
              ingredient weights for perfect measurements every time.
            </p>
            <div className="flex gap-2">
              <Button asChild variant="ghost" size="icon" className="h-9 w-9">
                <a
                  href="https://github.com/SymphonyIceAttack/bakingrecipes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="h-9 w-9">
                <a
                  href="mailto:contact@bakingrecipes.top"
                  aria-label="Send email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <nav className="space-y-2">
              {footerLinks.product.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <nav className="space-y-2">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <nav className="space-y-2">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} BakingRecipes. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500 fill-current" />
                <span>by SymphonyIceAttack</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Free to use</span>
              <span>•</span>
              <span>No registration required</span>
              <span>•</span>
              <span>Works offline</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
