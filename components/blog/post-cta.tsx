import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function PostCTA() {
  return (
    <Card className="mt-8 border-2 border-primary bg-primary/5">
      <CardContent className="py-12 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Baking Calculator & Recipe Manager
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Scale your recipes perfectly with our precision baking tools. Easily
          adjust ingredients, manage your favorite recipes, and bake with
          confidence.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Start Baking Now →
        </Link>
      </CardContent>
    </Card>
  );
}
