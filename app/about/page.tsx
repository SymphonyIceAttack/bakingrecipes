import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us | BakingRecipes",
  description:
    "Learn about BakingRecipes - your trusted baking calculator and recipe manager",
  keywords: [
    "about bakingrecipes",
    "baking calculator history",
    "recipe manager about",
    "baking tools story",
  ],
  openGraph: {
    title: "About BakingRecipes - Professional Baking Calculator",
    description:
      "Learn about our mission to make baking easier with intelligent ingredient scaling and recipe management.",
    url: "https://bakingrecipes.top/about/",
    images: [
      {
        url: "https://bakingrecipes.top/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "About BakingRecipes - Professional Baking Calculator",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbNav />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About BakingRecipes
            </h1>
            <p className="text-xl text-muted-foreground">
              Making baking easier, one recipe at a time
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
            <Image
              src="/images/cinnamon-rolls.jpg"
              alt="Freshly baked goods"
              fill
              className="object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p className="mb-4">
                    BakingRecipes was born out of a simple frustration: the
                    constant struggle of scaling recipes up or down while
                    baking. Whether you're a beginner baker trying to adjust a
                    recipe for two people or a seasoned pro preparing for a
                    large event, the math can get overwhelming.
                  </p>
                  <p className="mb-4">
                    We created BakingRecipes to solve this problem once and for
                    all. Our intelligent calculator automatically scales
                    ingredient weights based on your desired serving size,
                    ensuring perfect results every time.
                  </p>
                  <p>
                    Today, BakingRecipes is more than just a calculator—it's a
                    complete recipe manager that helps bakers of all skill
                    levels organize, scale, and perfect their favorite recipes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <title>Accuracy</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Accuracy
                    </h3>
                    <p className="text-muted-foreground">
                      Precise ingredient scaling with automatic weight
                      conversion to grams
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <title>Simplicity</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Simplicity
                    </h3>
                    <p className="text-muted-foreground">
                      Clean, intuitive interface that anyone can use instantly
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <title>Passion</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Passion
                    </h3>
                    <p className="text-muted-foreground">
                      Built by bakers, for bakers—because we understand your
                      needs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Features
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-semibold text-foreground">
                        Smart Calculator:
                      </span>{" "}
                      Automatically scales ingredient weights based on serving
                      size
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-semibold text-foreground">
                        Recipe Management:
                      </span>{" "}
                      Create, edit, and organize your baking recipes
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-semibold text-foreground">
                        Export to Image:
                      </span>{" "}
                      Generate beautiful recipe cards for sharing and printing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-semibold text-foreground">
                        Local Storage:
                      </span>{" "}
                      Your recipes are stored securely in your browser
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-semibold text-foreground">
                        Dark Mode:
                      </span>{" "}
                      Comfortable baking any time of day
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Choose BakingRecipes?
                </h2>
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p className="mb-4">
                    In a world full of complicated baking tools, we believe in
                    keeping things simple. No unnecessary features, no steep
                    learning curve—just the tools you need to bake better.
                  </p>
                  <p className="mb-4">
                    Our calculator uses precise mathematical formulas to ensure
                    accurate scaling every time. We convert all measurements to
                    grams (the most accurate unit for baking) and calculate
                    everything down to the decimal point.
                  </p>
                  <p>
                    Whether you're baking a simple cake or complex pastries,
                    BakingRecipes gives you the confidence to tackle any recipe.
                    Join thousands of home bakers who trust BakingRecipes for
                    their baking needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
