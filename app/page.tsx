import { BookOpen, ChefHat, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <ChefHat className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-foreground">
              Your Personal Baking Recipe Collection
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Organize, save, and perfect your favorite baking recipes all in
              one beautiful place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/collection">View Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/recipes">Add Recipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">
            Everything you need for your baking journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <ChefHat className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Your Craft</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build your personal collection and refine your recipes as you
                grow as a baker
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to start your recipe collection?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Begin organizing your baking recipes today and never lose track of
            your favorites again
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/collection">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
