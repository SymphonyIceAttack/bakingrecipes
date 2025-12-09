import type { Metadata } from "next";
import TutorialClient from "./tutorial-client";

export const metadata: Metadata = {
  title: "Tutorial | BakingRecipes",
  description:
    "Learn how to use BakingRecipes smart baking calculator. Step-by-step guide comparing traditional methods vs automated solutions.",
  keywords: [
    "baking tutorial",
    "recipe calculator guide",
    "baking calculator tutorial",
    "how to use baking recipes",
  ],
  openGraph: {
    title: "BakingRecipes Tutorial - Smart Baking Calculator Guide",
    description:
      "Learn how BakingRecipes saves 95% of your baking calculation time with smart ingredient scaling and recipe management.",
    url: "https://bakingrecipes.top/tutorial/",
    images: [
      {
        url: "https://bakingrecipes.top/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "BakingRecipes Tutorial - Smart Baking Calculator Guide",
      },
    ],
  },
};

export default function TutorialPage() {
  return <TutorialClient />;
}
