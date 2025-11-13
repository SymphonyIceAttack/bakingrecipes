import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    template: "%s | Baking Calculator",
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
  openGraph: {
    title: "Baking Calculator & Recipe Manager - Scale Your Recipes Perfectly",
    description:
      "Professional baking calculator that automatically scales ingredient weights. Adjust servings and get instant gram measurements for perfect baking results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baking Calculator & Recipe Manager",
    description:
      "Automatically scale ingredient weights based on serving sizes. Perfect measurements every time.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
