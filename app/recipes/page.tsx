"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RecipeForm, type RecipeFormData } from "@/components/recipe-form";
import { Button } from "@/components/ui/button";
import { useRecipes } from "@/hooks/use-recipes";

export default function RecipesPage() {
  const { addRecipe } = useRecipes();
  const router = useRouter();

  const handleSubmit = (data: RecipeFormData) => {
    addRecipe(data);
    router.push("/collection");
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
            Add New Recipe
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Fill in the details below to save your baking recipe
          </p>
        </div>
        <RecipeForm onSubmit={handleSubmit} />
      </div>
    </main>
  );
}
