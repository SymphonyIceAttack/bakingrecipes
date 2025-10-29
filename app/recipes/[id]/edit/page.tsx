"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RecipeForm, type RecipeFormData } from "@/components/recipe-form";
import { Button } from "@/components/ui/button";
import { useRecipes } from "@/hooks/use-recipes";

export default function EditRecipePage({ params }: { params: { id: string } }) {
  const { getRecipe, updateRecipe, isLoading } = useRecipes();
  const router = useRouter();
  const recipe = getRecipe(params.id);

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

  const handleSubmit = (data: RecipeFormData) => {
    updateRecipe(params.id, data);
    router.push("/collection");
  };

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
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Edit Recipe
              </h1>
              <p className="text-muted-foreground mt-1">
                Update your recipe details
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <RecipeForm
          mode="edit"
          initialValues={{
            name: recipe.name,
            description: recipe.description,
            prepTime: recipe.prepTime,
            bakeTime: recipe.bakeTime,
            temperature: recipe.temperature,
            servings: recipe.servings,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
          }}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
