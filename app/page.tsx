import { BookOpen, Calculator, ChefHat, Clock } from "lucide-react";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BreadcrumbNav />

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

      {/* How It Works Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-balance">
            How Our Baking Calculator Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Enter Your Recipe</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start with any baking recipe. Input your ingredients with their
                weights in grams, along with the original serving size.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">
                Set New Serving Size
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us how many servings you need. Our calculator automatically
                scales all ingredient weights proportionally.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">
                Get Perfect Measurements
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive precise gram measurements for each ingredient. No more
                guesswork or failed recipes due to incorrect scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-balance">
            Why Choose Our Baking Calculator?
          </h2>
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">
                Precision in Every Measurement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Baking is both art and science. Unlike cooking, baking requires
                exact measurements for chemical reactions to work properly. Our
                calculator ensures every gram is precisely calculated, giving
                you consistent results every time you bake.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">
                Save Time and Ingredients
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Stop guessing serving sizes or wasting ingredients on test
                batches. Whether you need to double a recipe for a party or
                halve it for a small gathering, our calculator does the math
                instantly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">
                Professional Results at Home
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Use the same precise measurements that professional bakers rely
                on. Our gram-based calculations ensure you're following recipes
                exactly as intended, producing bakery-quality results in your
                home kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-balance">
            Everything you need for perfect baking
          </h3>
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Ready to bake with perfect measurements?
          </h3>
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
