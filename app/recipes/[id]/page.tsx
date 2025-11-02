"use client";

import { toPng } from "html-to-image";
import {
  ArrowLeft,
  Calculator,
  Clock,
  Download,
  Thermometer,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRecipes } from "@/hooks/use-recipes";

export default function RecipeDetailPage() {
  const params = useParams();
  const recipeId = params.id as string;
  const { getRecipe, isLoading } = useRecipes();
  const recipe = getRecipe(recipeId);

  const [targetServings, setTargetServings] = useState<number>(
    recipe?.servings || 1,
  );
  const exportCardRef = useRef<HTMLDivElement>(null);

  const originalServings = recipe?.servings || 1;

  const handleExportToImage = async () => {
    if (!exportCardRef.current || !recipe) return;

    try {
      const dataUrl = await toPng(exportCardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `${recipe.name.replace(/\s+/g, "-").toLowerCase()}-recipe.png`;
      link.href = dataUrl;
      link.click();

      toast.success("Export Successful!", {
        description: "Your recipe has been exported as an image.",
      });
    } catch (error) {
      console.error("Failed to export image:", error);
      toast.error("Export Failed", {
        description: "Failed to export image. Please try again.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Recipe not found
          </h1>
          <Link href="/collection">
            <Button>Back to Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const scalingRatio = targetServings / originalServings;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
            <Link href="/collection">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 md:h-10 md:w-10"
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground break-words">
                {recipe.name}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-1 line-clamp-2">
                {recipe.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                onClick={handleExportToImage}
                variant="default"
                className="w-full sm:w-auto h-10 gap-2"
              >
                <Download className="h-4 w-4" />
                Export as Image
              </Button>
              <Link
                href={`/recipes/${recipe.id}/edit`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-10 bg-transparent"
                >
                  编辑食谱
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Image and Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="p-0">
                <div className="relative h-48 sm:h-56 md:h-64 bg-muted overflow-hidden rounded-t-lg">
                  <Image
                    src={recipe.thumbnail || "/placeholder.svg"}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      准备时间
                    </p>
                    <p className="text-sm">{recipe.prepTime} 分钟</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      烘焙时间
                    </p>
                    <p className="text-sm">{recipe.bakeTime} 分钟</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Thermometer className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      烘焙温度
                    </p>
                    <p className="text-sm">{recipe.temperature}°F</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      原始份数
                    </p>
                    <p className="text-sm">{recipe.servings} 份</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Serving Calculator */}
            <Card className="mt-4 md:mt-6 border-2 border-primary/20 shadow-lg">
              <CardHeader className="bg-primary/5 p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg md:text-xl">
                    Baking Calculator
                  </CardTitle>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Automatically scale ingredient weights
                </p>
              </CardHeader>
              <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="target-servings"
                    className="text-sm md:text-base font-semibold"
                  >
                    Target Servings
                  </Label>
                  <Input
                    id="target-servings"
                    type="number"
                    min="1"
                    value={targetServings}
                    onChange={(e) => setTargetServings(Number(e.target.value))}
                    className="text-base md:text-lg font-semibold h-11 md:h-12"
                  />
                  <div className="pt-2 px-3 py-2 bg-muted rounded-md">
                    <p className="text-sm text-muted-foreground">
                      Scaling ratio:
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {scalingRatio.toFixed(2)}x
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Ingredients and Instructions */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">
                  Ingredients (Calculated for {targetServings} servings)
                </CardTitle>
                <p className="text-xs md:text-sm text-muted-foreground">
                  All weights automatically adjusted in grams
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <ul className="space-y-2 md:space-y-3">
                  {recipe.ingredients.map((ingredient, index) => {
                    const scaledWeight = (
                      ingredient.weight * scalingRatio
                    ).toFixed(1);
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0 gap-2"
                      >
                        <span className="text-sm md:text-base text-foreground break-words">
                          {ingredient.name}
                        </span>
                        <span className="font-semibold text-primary text-sm md:text-base whitespace-nowrap">
                          {scaledWeight} g
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">制作步骤</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <ol className="space-y-3 md:space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3 md:gap-4">
                      <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs md:text-sm">
                        {index + 1}
                      </span>
                      <p className="text-sm md:text-base text-foreground pt-0.5 md:pt-1">
                        {instruction}
                      </p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <div className="fixed -left-[9999px] -top-[9999px]">
        <div ref={exportCardRef} className="w-[800px] bg-white p-8">
          <div className="border-4 border-primary rounded-lg p-8">
            {/* Header */}
            <div className="text-center mb-6 pb-6 border-b-2 border-primary/20">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {recipe.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {recipe.description}
              </p>
              <div className="mt-4 inline-block bg-primary/10 px-4 py-2 rounded-full">
                <p className="text-sm font-semibold text-primary">
                  Baking Calculator Recipe
                </p>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b-2 border-primary/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Prep Time</p>
                <p className="text-xl font-bold text-foreground">
                  {recipe.prepTime} min
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Bake Time</p>
                <p className="text-xl font-bold text-foreground">
                  {recipe.bakeTime} min
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Temperature
                </p>
                <p className="text-xl font-bold text-foreground">
                  {recipe.temperature}°F
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Servings</p>
                <p className="text-xl font-bold text-primary">
                  {targetServings}
                </p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded"></span>
                Ingredients ({targetServings} servings)
              </h2>
              <div className="bg-primary/5 rounded-lg p-4">
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => {
                    const scaledWeight = (
                      ingredient.weight * scalingRatio
                    ).toFixed(1);
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-primary/10 last:border-0"
                      >
                        <span className="text-foreground font-medium">
                          {ingredient.name}
                        </span>
                        <span className="font-bold text-primary">
                          {scaledWeight} g
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded"></span>
                Instructions
              </h2>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-foreground pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t-2 border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                Created with Baking Calculator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
