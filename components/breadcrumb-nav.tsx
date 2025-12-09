"use client";

import { ChefHat, ChevronRight, Github, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

export function BreadcrumbNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "Home", isHome: true },
    { href: "/posts", label: "Blog" },
    { href: "/tutorial", label: "Tutorial" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-all duration-300 group"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-rotate-3">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-accent to-primary rounded-full opacity-60 animate-pulse"></div>
            </div>
            <div className="hidden xs:block">
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                BakingRecipes
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Perfect measurements every time
              </p>
            </div>
          </Link>

          {/* Theme Toggle, Language Switcher & GitHub */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl hover:bg-primary/10 transition-all duration-300 h-9 w-9 sm:h-10 sm:w-10"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              )}
            </Button>
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-xl hover:bg-primary/10 transition-all duration-300 h-9 w-9 sm:h-10 sm:w-10"
            >
              <a
                href="https://github.com/SymphonyIceAttack/bakingrecipes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </a>
            </Button>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-card/80 backdrop-blur-sm px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              <ChefHat className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden xs:inline">Home</span>
            </Link>
          </div>

          {navItems.slice(1).map((item) => (
            <div
              key={item.href}
              className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
              <Link
                href={item.href}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/80 transition-all duration-200 hover:scale-105 whitespace-nowrap border border-transparent hover:border-border/50"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
