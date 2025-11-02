"use client";

import { useForm } from "@tanstack/react-form";
import { Plus, X } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const recipeSchema = z.object({
  name: z
    .string()
    .min(3, "Recipe name must be at least 3 characters")
    .max(100, "Recipe name is too long"),
  description: z.string().max(500, "Description is too long").optional(),
  prepTime: z
    .number()
    .min(0, "Prep time must be positive")
    .max(1440, "Prep time seems unreasonably long"),
  bakeTime: z
    .number()
    .min(0, "Bake time must be positive")
    .max(1440, "Bake time seems unreasonably long"),
  temperature: z
    .number()
    .min(200, "Temperature must be at least 200°F")
    .max(500, "Temperature must not exceed 500°F"),
  servings: z
    .number()
    .min(1, "Servings must be at least 1")
    .int("Servings must be a whole number"),
  ingredients: z
    .array(
      z.object({
        name: z.string().min(1, "Ingredient name is required"),
        weight: z.number().min(0.1, "Weight must be at least 0.1g"),
      }),
    )
    .min(1, "At least one ingredient is required"),
  instructions: z
    .array(z.string().min(1, "Instruction cannot be empty"))
    .min(1, "At least one instruction step is required"),
});

export type RecipeFormData = z.infer<typeof recipeSchema>;

interface RecipeFormProps {
  initialValues?: Partial<RecipeFormData>;
  mode?: "create" | "edit";
  onSubmit?: (data: RecipeFormData) => void;
}

export function RecipeForm({
  initialValues,
  mode = "create",
  onSubmit,
}: RecipeFormProps) {
  const form = useForm({
    defaultValues: {
      name: initialValues?.name || "",
      description: initialValues?.description || "",
      prepTime: initialValues?.prepTime || 0,
      bakeTime: initialValues?.bakeTime || 0,
      temperature: initialValues?.temperature || 350,
      servings: initialValues?.servings || 1,
      ingredients: initialValues?.ingredients || [{ name: "", weight: 0 }],
      instructions: initialValues?.instructions || [""],
    },
    onSubmit: async ({ value }) => {
      const recipe = {
        ...value,
        ingredients: value.ingredients.filter(
          (i) => i.name.trim() !== "" && i.weight > 0,
        ),
        instructions: value.instructions.filter((i) => i.trim() !== ""),
      };
      if (onSubmit) {
        onSubmit(recipe);
      } else {
        console.log("[v0] Recipe submitted:", recipe);
        alert("Recipe saved! Check the console for details.");
      }
    },
  });

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">
          {mode === "edit" ? "Edit Recipe" : "Add New Recipe"}
        </CardTitle>
        <CardDescription>
          {mode === "edit"
            ? "Update your recipe details"
            : "Fill in the details of your baking recipe"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6 md:space-y-8"
        >
          {/* Basic Information */}
          <div className="space-y-4">
            <form.Field
              name="name"
              validators={{
                onChange: ({ value }) => {
                  const result = recipeSchema.shape.name.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.errors[0]?.message;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Recipe Name</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="e.g., Chocolate Chip Cookies"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field
              name="description"
              validators={{
                onChange: ({ value }) => {
                  const result =
                    recipeSchema.shape.description.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.errors[0]?.message;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Description</Label>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="A brief description of your recipe..."
                    rows={3}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
          </div>

          {/* Time and Temperature */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <form.Field
              name="prepTime"
              validators={{
                onChange: ({ value }) => {
                  const result = recipeSchema.shape.prepTime.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.errors[0]?.message;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Prep Time (minutes)</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="number"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    placeholder="15"
                    min="0"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field
              name="bakeTime"
              validators={{
                onChange: ({ value }) => {
                  const result = recipeSchema.shape.bakeTime.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.errors[0]?.message;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Bake Time (minutes)</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="number"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    placeholder="30"
                    min="0"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field
              name="temperature"
              validators={{
                onChange: ({ value }) => {
                  const result =
                    recipeSchema.shape.temperature.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.errors[0]?.message;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Temperature (°F)</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="number"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    placeholder="350"
                    min="200"
                    max="500"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field
              name="servings"
              validators={{
                onChange: ({ value }) => {
                  const result = recipeSchema.shape.servings.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.errors[0]?.message;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Servings/Yield</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="number"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    placeholder="12"
                    min="1"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
          </div>

          <form.Field name="ingredients" mode="array">
            {(field) => (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base md:text-lg font-semibold">
                    Ingredients
                  </Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => field.pushValue({ name: "", weight: 0 })}
                    className="gap-1 md:gap-2 bg-transparent h-9"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="hidden xs:inline">Add Ingredient</span>
                  </Button>
                </div>
                <div className="space-y-3">
                  {field.state.value.map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col xs:flex-row gap-2"
                    >
                      <form.Field name={`ingredients[${index}].name`}>
                        {(subField) => (
                          <div className="flex-1 min-w-0">
                            <Input
                              value={subField.state.value}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                              placeholder="Ingredient name"
                              className="h-10"
                            />
                          </div>
                        )}
                      </form.Field>
                      <div className="flex gap-2">
                        <form.Field name={`ingredients[${index}].weight`}>
                          {(subField) => (
                            <div className="flex items-center gap-2 flex-1 xs:flex-initial">
                              <Input
                                type="number"
                                step="0.1"
                                min="0"
                                value={subField.state.value}
                                onChange={(e) =>
                                  subField.handleChange(Number(e.target.value))
                                }
                                placeholder="Weight"
                                className="w-full xs:w-28 h-10"
                              />
                              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                                g
                              </span>
                            </div>
                          )}
                        </form.Field>
                        {field.state.value.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => field.removeValue(index)}
                            className="shrink-0 h-10 w-10"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove ingredient</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </form.Field>

          {/* Instructions */}
          <form.Field name="instructions" mode="array">
            {(field) => (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base md:text-lg font-semibold">
                    Instructions
                  </Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => field.pushValue("")}
                    className="gap-1 md:gap-2 bg-transparent h-9"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="hidden xs:inline">Add Step</span>
                  </Button>
                </div>
                <div className="space-y-3">
                  {field.state.value.map((_, index) => (
                    <form.Field key={index} name={`instructions[${index}]`}>
                      {(subField) => (
                        <div className="flex gap-2">
                          <div className="flex items-start gap-3 flex-1">
                            <span className="text-sm font-medium text-muted-foreground mt-3 shrink-0">
                              {index + 1}.
                            </span>
                            <Textarea
                              value={subField.state.value}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                              placeholder={`Step ${index + 1}`}
                              rows={2}
                              className="flex-1"
                            />
                          </div>
                          {field.state.value.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => field.removeValue(index)}
                              className="shrink-0 h-10 w-10"
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Remove step</span>
                            </Button>
                          )}
                        </div>
                      )}
                    </form.Field>
                  ))}
                </div>
              </div>
            )}
          </form.Field>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto h-11 md:h-12"
            >
              {mode === "edit" ? "Update Recipe" : "Save Recipe"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
