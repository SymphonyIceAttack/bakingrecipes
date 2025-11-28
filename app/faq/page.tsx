import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "FAQ | BakingRecipes",
  description:
    "Frequently Asked Questions about BakingRecipes calculator and features",
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbNav />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about BakingRecipes
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>General Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is BakingRecipes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    BakingRecipes is a free online baking calculator and recipe
                    manager. It helps you automatically scale ingredient weights
                    based on serving sizes, ensuring perfect results every time
                    you bake. You can create, edit, and organize your favorite
                    recipes, and export them as beautiful images.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Is BakingRecipes free to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! BakingRecipes is completely free to use. There are no
                    hidden fees, premium subscriptions, or usage limits. Simply
                    visit our website and start baking!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Do I need to create an account?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No account required! Your recipes are stored locally in your
                    browser's storage. This means your data stays private and
                    you can start using the app immediately.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Where is my data stored?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your recipes are stored securely in your browser's local
                    storage. This means your data never leaves your device and
                    remains completely private. However, it also means that if
                    you clear your browser data or switch devices, you'll lose
                    your recipes unless you've exported them.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Calculator & Measurements</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    How does the ingredient calculator work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The calculator uses a simple formula: new weight = (original
                    weight ÷ original servings) × new servings. It automatically
                    scales each ingredient proportionally, and all weights are
                    converted to grams for maximum accuracy in baking.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Why does the calculator use grams?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Grams are the most accurate unit for baking because they're
                    based on weight, not volume. Volume measurements (like cups)
                    can vary significantly depending on how ingredients are
                    packed. Weight measurements ensure consistent, professional
                    results every time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Can I use the calculator for any recipe?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! The calculator works for any recipe where you know the
                    original number of servings and the weight of each
                    ingredient. Simply enter the ingredients with their weights
                    in grams, set your desired servings, and the calculator will
                    do the rest.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    What if I don't know the weight of an ingredient?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You'll need to know the weight of each ingredient in grams
                    to use the calculator effectively. You can weigh ingredients
                    with a kitchen scale, or look up standard weights online.
                    Most baking ingredients have well-documented weights per cup
                    or per piece.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recipe Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    How do I create a new recipe?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Navigate to the "Recipes" page, click "Add New Recipe," and
                    fill in the details including name, description, prep time,
                    bake time, temperature, servings, ingredients (with
                    weights), and instructions. Click "Save Recipe" to store it
                    locally.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    Can I edit my recipes after creating them?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Click the "Edit" button on any recipe to modify its
                    details. You can update ingredients, instructions, times, or
                    any other information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left">
                    Can I delete recipes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Currently, recipes can be created and edited, but not
                    deleted through the UI. This ensures you don't accidentally
                    lose your recipes. If you need to remove a recipe, you can
                    clear your browser storage, but we recommend being cautious
                    with this.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left">
                    How do I back up my recipes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    While we don't have a dedicated export feature yet, you can
                    export your recipes as images using the "Export as Image"
                    button. This creates a visual backup of your recipe that you
                    can save to your device or share with others. We're working
                    on adding JSON export functionality in a future update.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Export & Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left">
                    How do I export a recipe as an image?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Open any recipe and click the "Export as Image" button. This
                    will generate a high-quality PNG image of your recipe that
                    you can save to your device or share on social media.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left">
                    What format are exported images in?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Recipes are exported as PNG files at 2x resolution for
                    crisp, print-quality images. The images are 800px wide and
                    include all recipe details in a beautiful, shareable format.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-left">
                    Can I share recipes with other people?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! You can export recipes as images and share them via
                    email, social media, or messaging apps. While there's no
                    direct sharing feature within the app yet, images can be
                    easily shared across any platform.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Technical Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-16">
                  <AccordionTrigger className="text-left">
                    My recipes disappeared. What happened?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Recipes are stored in your browser's local storage. If you
                    cleared your browser data, switched browsers, or are using
                    private/incognito mode, your recipes won't be visible. To
                    prevent this, avoid clearing site data and consider backing
                    up important recipes by exporting them as images.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17">
                  <AccordionTrigger className="text-left">
                    The calculator shows incorrect results. Is there a bug?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Double-check that you've entered the correct original
                    servings and ingredient weights. If you believe there's a
                    bug, please email us at support@bakingrecipes.app with
                    details about the issue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-18">
                  <AccordionTrigger className="text-left">
                    Can I use BakingRecipes on mobile devices?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! BakingRecipes is fully responsive and works great on
                    phones, tablets, and desktops. The interface adapts to your
                    screen size for an optimal experience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-19">
                  <AccordionTrigger className="text-left">
                    Which browsers are supported?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    BakingRecipes works on all modern browsers including Chrome,
                    Firefox, Safari, and Edge. Make sure your browser is up to
                    date for the best experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-20">
                  <AccordionTrigger className="text-left">
                    Do you collect my personal data?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, we don't collect or store any personal information. All
                    your recipes and data stay on your device. We only collect
                    anonymous usage analytics to improve the app, and you can
                    opt out of this.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-21">
                  <AccordionTrigger className="text-left">
                    Is my recipe data safe?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your recipe data is stored locally in your browser, which
                    means you have complete control over it. However, it also
                    means you're responsible for backing up important recipes.
                    We recommend exporting recipes as images for safekeeping.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Future Features</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-22">
                  <AccordionTrigger className="text-left">
                    Will you add user accounts and cloud storage?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We're considering adding optional user accounts with cloud
                    storage in the future. This would allow you to sync recipes
                    across devices. For now, we're focusing on keeping the app
                    simple and private.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-23">
                  <AccordionTrigger className="text-left">
                    Can I request new features?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely! We love hearing from our users. Send us your
                    feature requests at contact@bakingrecipes.app or reach out
                    on our social media. Your feedback helps us prioritize what
                    to build next.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-24">
                  <AccordionTrigger className="text-left">
                    Will there be a mobile app?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We're evaluating the possibility of native mobile apps. For
                    now, the web app is fully responsive and works excellently
                    on mobile browsers. Sign up for updates to be notified if we
                    launch native apps!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? We're here to help!
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
