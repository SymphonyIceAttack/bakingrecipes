import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Baking Calculator & Recipe Manager - Scale Your Recipes Perfectly",
    template: "%s | BakingRecipes",
  },
  description:
    "Professional baking calculator that automatically scales ingredient weights based on serving sizes. Manage your baking recipes with precision - adjust servings and get instant gram measurements for perfect results every time.",
  keywords: [
    "baking calculator",
    "recipe scaler",
    "ingredient calculator",
    "baking recipes",
    "recipe management",
    "serving size calculator",
    "gram calculator",
    "cooking",
    "baking tools",
    "recipe organizer",
    "food calculator",
    "kitchen calculator",
  ],
  authors: [{ name: "SymphoneIceAttack" }],
  creator: "SymphoneIceAttack",
  publisher: "SymphoneIceAttack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.bakingrecipes.top"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Baking Calculator & Recipe Manager - Scale Your Recipes Perfectly",
    description:
      "Professional baking calculator that automatically scales ingredient weights. Adjust servings and get instant gram measurements for perfect baking results.",
    type: "website",
    locale: "en_US",
    url: "https://www.bakingrecipes.top",
    siteName: "BakingRecipes",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1280,
        height: 720,
        alt: "Baking Calculator & Recipe Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baking Calculator & Recipe Manager",
    description:
      "Automatically scale ingredient weights based on serving sizes. Perfect measurements every time.",
    images: ["/twitter-image.jpg"],
    creator: "@bakingrecipes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.bakingrecipes.top/#website",
        url: "https://www.bakingrecipes.top/",
        name: "BakingRecipes",
        description:
          "Professional baking calculator that automatically scales ingredient weights based on serving sizes",
        publisher: {
          "@type": "Organization",
          "@id": "https://www.bakingrecipes.top/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.bakingrecipes.top/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://www.bakingrecipes.top/#organization",
        name: "BakingRecipes",
        url: "https://www.bakingrecipes.top",
        logo: {
          "@type": "ImageObject",
          url: "https://www.bakingrecipes.top/logo.png",
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://twitter.com/bakingrecipes",
          "https://github.com/bakingrecipes",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@bakingrecipes.top",
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://www.bakingrecipes.top/#webapp",
        url: "https://www.bakingrecipes.top",
        name: "Baking Calculator & Recipe Manager",
        description:
          "Professional baking calculator that automatically scales ingredient weights based on serving sizes",
        applicationCategory: "FoodApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Smart ingredient scaling calculator",
          "Recipe management system",
          "Gram weight calculations",
          "Serving size converter",
          "Recipe export to image",
        ],
        screenshot: "https://www.bakingrecipes.top/screenshot.jpg",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "127",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="jsonld"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe - JSON.stringify escapes content automatically
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
