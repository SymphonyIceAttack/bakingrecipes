import { Github, Heart, Mail, MessageCircle } from "lucide-react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contact Us | BakingRecipes",
  description:
    "Get in touch with the BakingRecipes team. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbNav />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We love hearing from our community of bakers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Contact Form Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Have a question, suggestion, or just want to share your latest
                  baking creation? We'd love to hear from you!
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Email us at:
                    </p>
                    <a
                      href="mailto:contact@bakingrecipes.app"
                      className="text-primary hover:underline break-all"
                    >
                      contact@bakingrecipes.app
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Response time:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Technical Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Experiencing technical issues or need help using the
                  calculator?
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Support email:
                    </p>
                    <a
                      href="mailto:support@bakingrecipes.app"
                      className="text-primary hover:underline break-all"
                    >
                      support@bakingrecipes.app
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Common issues:
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Recipe not saving</li>
                      <li>Calculator errors</li>
                      <li>Image export problems</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Link */}
          <Card className="mb-12">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Looking for Quick Answers?
              </h2>
              <p className="text-muted-foreground mb-4">
                Before reaching out, you might find your answer in our
                Frequently Asked Questions section. We've compiled answers to
                the most common questions about using BakingRecipes.
              </p>
              <a
                href="/faq"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Visit FAQ Page
              </a>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* Business Hours & Location */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Business Hours
                  </p>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM (PST)
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Response Times
                  </p>
                  <p className="text-muted-foreground">
                    • General inquiries: 24-48 hours
                    <br />• Technical support: 24 hours
                    <br />• Bug reports: 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* Contributing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                Contribute to BakingRecipes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                BakingRecipes is an open-source project, and we welcome
                contributions from the community!
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Ways to contribute:
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Report bugs and issues</li>
                    <li>Suggest new features</li>
                    <li>Improve documentation</li>
                    <li>Help with translations</li>
                    <li>Share your baking recipes</li>
                  </ul>
                </div>
                <a
                  href="https://github.com/bakingrecipes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:underline"
                >
                  Visit our GitHub →
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Thank you message */}
          <div className="text-center mt-12 py-8">
            <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-lg text-foreground font-medium mb-2">
              Thank you for using BakingRecipes!
            </p>
            <p className="text-muted-foreground">Happy baking! 🍰🧁🍪</p>
          </div>
        </div>
      </div>
    </>
  );
}
