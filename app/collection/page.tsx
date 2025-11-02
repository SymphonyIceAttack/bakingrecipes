"use client";

import {
  ArrowLeft,
  ChefHat,
  Clock,
  Eye,
  Pencil,
  Thermometer,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useRecipes } from "@/hooks/use-recipes";

export default function CollectionPage() {
  const { recipes, isLoading, deleteRecipe } = useRecipes();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const handleDeleteClick = (id: string, name: string) => {
    setRecipeToDelete({ id, name });
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (recipeToDelete) {
      deleteRecipe(recipeToDelete.id);
      setDeleteDialogOpen(false);
      setRecipeToDelete(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading recipes...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 md:h-10 md:w-10"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  My Recipe Collection
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-0.5 md:mt-1">
                  {recipes.length} delicious recipes
                </p>
              </div>
            </div>
            <Link href="/recipes" className="w-full sm:w-auto">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto h-11">
                <ChefHat className="mr-2 h-4 w-4" />
                Add New Recipe
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Recipe Grid */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <Image
                    src={recipe.thumbnail || "/placeholder.svg"}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 text-balance">
                  {recipe.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Prep: {recipe.prepTime}m</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Bake: {recipe.bakeTime}m</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Thermometer className="h-4 w-4 text-destructive" />
                    <span>{recipe.temperature}°F</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 md:p-6 pt-0 flex flex-col gap-2 md:gap-3">
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm text-muted-foreground">
                    Serves {recipe.servings}
                  </span>
                  <div className="flex gap-2">
                    <Link href={`/recipes/${recipe.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent h-9 flex items-center justify-center"
                      >
                        <Eye className="h-4 w-4 md:mr-1.5" />
                        <span className="hidden md:inline">查看</span>
                      </Button>
                    </Link>
                    <Link href={`/recipes/${recipe.id}/edit`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent h-9 flex items-center justify-center"
                      >
                        <Pencil className="h-4 w-4 md:mr-1.5" />
                        <span className="hidden md:inline">更新</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteClick(recipe.id, recipe.name)}
                    className="text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors h-9 flex items-center justify-center gap-1.5 px-4"
                  >
                    <Trash2 className="h-4 w-4" />
                    删除食谱
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State (shown when no recipes) */}
        {recipes.length === 0 && (
          <div className="text-center py-16">
            <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No recipes yet
            </h2>
            <p className="text-muted-foreground mb-6">
              Start building your collection by adding your first recipe
            </p>
            <Link href="/recipes">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Add Your First Recipe
              </Button>
            </Link>
          </div>
        )}
      </main>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确定要删除这个食谱吗？</AlertDialogTitle>
            <AlertDialogDescription>
              你即将删除食谱 "{recipeToDelete?.name}
              "。此操作无法撤销，食谱将永久从你的收藏中移除。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
