"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export interface Ingredient {
  name: string;
  weight: number; // in grams
}

export interface Recipe {
  id: string;
  name: string;
  description?: string;
  prepTime: number;
  bakeTime: number;
  temperature: number;
  servings: number; // Changed from string to number
  ingredients: Ingredient[]; // Changed from string[] to Ingredient[]
  instructions: string[];
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "baking-recipes";

// Available thumbnail images
const THUMBNAILS = [
  "/images/chocolate-chip-cookies.jpg",
  "/images/sourdough-bread.jpg",
  "/images/vanilla-cupcakes.jpg",
  "/images/apple-pie.jpg",
  "/images/cinnamon-rolls.jpg",
  "/images/blueberry-muffins.jpg",
];

function getRandomThumbnail(): string {
  return THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)];
}

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecipes(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load recipes from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
      } catch (error) {
        console.error("Failed to save recipes to localStorage:", error);
      }
    }
  }, [recipes, isLoading]);

  const addRecipe = (
    recipeData: Omit<Recipe, "id" | "thumbnail" | "createdAt" | "updatedAt">,
  ) => {
    const newRecipe: Recipe = {
      ...recipeData,
      id: nanoid(),
      thumbnail: getRandomThumbnail(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setRecipes((prev) => [newRecipe, ...prev]);
    return newRecipe;
  };

  const updateRecipe = (
    id: string,
    recipeData: Omit<Recipe, "id" | "thumbnail" | "createdAt" | "updatedAt">,
  ) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id
          ? {
              ...recipe,
              ...recipeData,
              updatedAt: new Date().toISOString(),
            }
          : recipe,
      ),
    );
  };

  const deleteRecipe = (id: string) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  const getRecipe = (id: string) => {
    return recipes.find((recipe) => recipe.id === id);
  };

  return {
    recipes,
    isLoading,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipe,
  };
}
