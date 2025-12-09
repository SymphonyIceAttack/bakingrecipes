import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Baking Calculator & Recipe Manager",
    template: "%s | BakingRecipes",
  },
  description:
    "Professional baking calculator that automatically scales ingredient weights. Perfect measurements for any serving size.",
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
  metadataBase: new URL("https://bakingrecipes.top/"),
  alternates: {
    canonical: "https://bakingrecipes.top/",
    languages: {
      "en-US": "https://bakingrecipes.top/",
      en: "https://bakingrecipes.top/",
    },
  },
  openGraph: {
    title: "Baking Calculator & Recipe Manager",
    description:
      "Professional baking calculator that automatically scales ingredient weights. Perfect measurements for any serving size.",
    type: "website",
    locale: "en_US",
    url: "https://bakingrecipes.top/",
    siteName: "BakingRecipes",
    images: [
      {
        url: "https://bakingrecipes.top/opengraph-image.jpg",
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
    images: ["https://bakingrecipes.top/twitter-image.jpg"],
    creator: "@bakingrecipes",
    site: "@bakingrecipes",
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
        "@id": "https://bakingrecipes.top/#website",
        url: "https://bakingrecipes.top/",
        name: "BakingRecipes",
        description:
          "Professional baking calculator that automatically scales ingredient weights based on serving sizes",
        publisher: {
          "@type": "Organization",
          "@id": "https://bakingrecipes.top/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://bakingrecipes.top/#organization",
        name: "BakingRecipes",
        url: "https://bakingrecipes.top/",
      },
      {
        "@type": "WebApplication",
        "@id": "https://bakingrecipes.top/#webapp",
        url: "https://bakingrecipes.top/",
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
          <Footer />
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
