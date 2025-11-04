import { BookOpen, Calculator, ChefHat, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <ChefHat className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg hidden sm:inline">
                Baking Calculator
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" className="text-base">
                <Link href="/blog">Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 px-4 md:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <ChefHat className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-4 md:mb-6 text-foreground">
              Baking Calculator & Recipe Manager
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty mb-6 md:mb-8 leading-relaxed">
              Automatically scale ingredient weights for any serving size.
              Perfect measurements, perfect results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3"
              >
                <Link href="/collection">View Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-transparent"
              >
                <Link href="/recipes">Add Recipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-balance">
            Everything you need for perfect baking
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Calculator className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Smart Baking Calculator
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically calculate ingredient weights in grams for any
                serving size. Scale recipes up or down with precision.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Organize Recipes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep all your baking recipes organized with detailed
                ingredients, instructions, and notes
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Track Times & Temps
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Never forget prep time, bake time, or temperature settings for
                perfect results every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Ready to bake with perfect measurements?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 md:mb-8 text-pretty">
            Start using the baking calculator today and never worry about
            scaling recipes again
          </p>
          <Button
            asChild
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 py-3"
          >
            <Link href="/collection">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
