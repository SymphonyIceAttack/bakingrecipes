"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Calculator,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Lightbulb,
  Scale,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";

const tutorialSteps = [
  {
    id: 1,
    title: "Manual vs Smart Calculation",
    icon: Calculator,
    before: {
      title: "Traditional Method",
      problems: [
        "Calculate each ingredient manually with calculator",
        "Easy to make mistakes or forget ingredients",
        "Time-consuming ratio conversions",
        "Difficult to handle fractions and decimals",
      ],
      time: "15-20 minutes",
    },
    after: {
      title: "BakingRecipes",
      benefits: [
        "One-click automatic calculation for all ingredients",
        "Precise weight conversion to grams",
        "Instant ratio adjustment",
        "Zero calculation errors",
      ],
      time: "30 seconds",
    },
  },
  {
    id: 2,
    title: "Recipe Storage & Management",
    icon: BookOpen,
    before: {
      title: "Traditional Method",
      problems: [
        "Paper notes get lost easily",
        "Can't search historical recipes",
        "Hard to share with friends",
        "Version updates are difficult",
      ],
      time: "Manual management",
    },
    after: {
      title: "BakingRecipes",
      benefits: [
        "Cloud auto-save",
        "Quick search and filtering",
        "One-click generate beautiful cards",
        "Permanent storage, accessible anytime",
      ],
      time: "Automatic management",
    },
  },
  {
    id: 3,
    title: "Unit Conversion",
    icon: Scale,
    before: {
      title: "Traditional Method",
      problems: [
        "Manual table lookup for unit conversion",
        "Confusion between ounces, cups, and grams",
        "Different countries' measurement standards",
        "Conversion errors affect results",
      ],
      time: "5-10 minutes table lookup",
    },
    after: {
      title: "BakingRecipes",
      benefits: [
        "Automatic conversion to grams (most accurate)",
        "Support for global measurement standards",
        "Zero-error conversion",
        "Professional baking precision",
      ],
      time: "Automatic conversion",
    },
  },
];

const features = [
  {
    icon: Heart,
    title: "Precise Measurement",
    description: "Convert to grams for guaranteed baking success",
    highlight: "Professional baking precision",
  },
  {
    icon: TrendingUp,
    title: "Time Saving",
    description: "From 20 minutes of calculation to 30 seconds",
    highlight: "Save 95% time",
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Generate beautiful recipe cards",
    highlight: "Perfect for printing and sharing",
  },
];

export default function TutorialClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % tutorialSteps.length);
  };

  const prevStep = () => {
    setCurrentStep(
      (prev) => (prev - 1 + tutorialSteps.length) % tutorialSteps.length,
    );
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % tutorialSteps.length);
      }, 5000); // Auto advance every 5 seconds
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbNav />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Title Section */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4 md:mb-6">
            <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            BakingRecipes Tutorial
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto px-4">
            Learn how to use the smart baking calculator to make baking simple
            and efficient
          </p>
        </div>

        {/* Welcome Introduction */}
        <Card className="border-primary/20 bg-primary/5 mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Why Choose BakingRecipes?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background"
                >
                  <feature.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="font-semibold text-sm md:text-base">
                        {feature.title}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="text-xs whitespace-nowrap"
                      >
                        {feature.highlight}
                      </Badge>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Carousel Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Feature Comparison ({currentStep + 1}/{tutorialSteps.length})
            </h2>
            <div className="flex gap-2">
              {tutorialSteps.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "bg-primary scale-110"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Container */}
          <section
            aria-label="Tutorial carousel"
            className="relative overflow-hidden rounded-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleUserInteraction}
          >
            {/* Carousel Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.id} className="w-full flex-shrink-0">
                  <Card
                    className={`mx-2 transition-all duration-300 ${
                      index === currentStep
                        ? "ring-2 ring-primary shadow-lg"
                        : "opacity-60"
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                        <step.icon className="h-5 w-5 text-primary" />
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Traditional Method */}
                        <div className="space-y-3">
                          <h4 className="font-medium text-red-600 flex items-center gap-2 text-sm md:text-base">
                            ❌ Traditional Method
                          </h4>
                          <div className="space-y-2">
                            {step.before.problems.map((problem, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs md:text-sm"
                              >
                                <span className="text-red-500 mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span className="text-muted-foreground leading-relaxed">
                                  {problem}
                                </span>
                              </div>
                            ))}
                          </div>
                          <Badge variant="destructive" className="mt-2 text-xs">
                            ⏱️ {step.before.time}
                          </Badge>
                        </div>

                        {/* BakingRecipes Method */}
                        <div className="space-y-3">
                          <h4 className="font-medium text-green-600 flex items-center gap-2 text-sm md:text-base">
                            ✅ BakingRecipes
                          </h4>
                          <div className="space-y-2">
                            {step.after.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs md:text-sm"
                              >
                                <span className="text-green-500 mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span className="text-muted-foreground leading-relaxed">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                          <Badge
                            variant="default"
                            className="mt-2 bg-green-600 text-xs"
                          >
                            ⚡ {step.after.time}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevStep}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background border border-border rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextStep}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background border border-border rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <div className="flex flex-col sm:flex-row gap-2">
            {currentStep === tutorialSteps.length - 1 ? (
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild className="gap-2 w-full sm:w-auto">
                  <Link href="/recipes">
                    <ChefHat className="h-4 w-4" />
                    <span className="hidden sm:inline">Create Recipe</span>
                    <span className="sm:hidden">Create</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 w-full sm:w-auto"
                >
                  <Link href="/collection">
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden sm:inline">Browse Recipes</span>
                    <span className="sm:hidden">Browse</span>
                  </Link>
                </Button>
              </div>
            ) : (
              <Button onClick={nextStep} className="gap-2 w-full sm:w-auto">
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Continue</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Quick Start Section */}
        {currentStep === tutorialSteps.length - 1 && (
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mt-8">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
                  Create your first recipe and experience the power of smart
                  baking calculations
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                    <Link href="/recipes">
                      <ChefHat className="h-4 w-4" />
                      <span className="hidden sm:inline">Create Recipe</span>
                      <span className="sm:hidden">Start Creating</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gap-2 w-full sm:w-auto"
                  >
                    <Link href="/collection">
                      <BookOpen className="h-4 w-4" />
                      <span className="hidden sm:inline">Browse Recipes</span>
                      <span className="sm:hidden">View Collection</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Benefits Summary */}
        <Card className="mt-8 md:mt-12">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-lg md:text-xl">
              Key Benefits Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  95%
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Time Saved
                </div>
                <div className="text-xs text-muted-foreground">
                  From 20 minutes to 30 seconds
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  100%
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Accuracy
                </div>
                <div className="text-xs text-muted-foreground">
                  Zero calculation errors
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  ∞
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Storage
                </div>
                <div className="text-xs text-muted-foreground">
                  Unlimited recipe collection
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
