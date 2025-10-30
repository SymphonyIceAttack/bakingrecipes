"use client";

import { ArrowLeft, Calculator, Clock, Thermometer, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
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

  const originalServings = recipe?.servings || 1;

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
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/collection">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">
                {recipe.name}
              </h1>
              <p className="text-muted-foreground mt-1">{recipe.description}</p>
            </div>
            <Link href={`/recipes/${recipe.id}/edit`}>
              <Button variant="outline">编辑食谱</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="p-0">
                <div className="relative h-64 bg-muted overflow-hidden rounded-t-lg">
                  <Image
                    src={recipe.thumbnail || "/placeholder.svg"}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
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
            <Card className="mt-6 border-2 border-primary/20 shadow-lg">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Baking Calculator</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically scale ingredient weights
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="target-servings"
                    className="text-base font-semibold"
                  >
                    Target Servings
                  </Label>
                  <Input
                    id="target-servings"
                    type="number"
                    min="1"
                    value={targetServings}
                    onChange={(e) => setTargetServings(Number(e.target.value))}
                    className="text-lg font-semibold h-12"
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
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Ingredients (Calculated for {targetServings} servings)
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  All weights automatically adjusted in grams
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => {
                    const scaledWeight = (
                      ingredient.weight * scalingRatio
                    ).toFixed(1);
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="text-foreground">
                          {ingredient.name}
                        </span>
                        <span className="font-semibold text-primary">
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
              <CardHeader>
                <CardTitle>制作步骤</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-foreground pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
