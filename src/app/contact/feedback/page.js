"use client";

import Link from "next/link";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ContactFeedback() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tack för Ditt Meddelande!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jag har tagit emot ditt meddelande och kommer att återkomma så snart som möjligt.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Vad Händer Nu?</CardTitle>
                <CardDescription>
                  Här är vad du kan förvänta dig efter att ha skickat ditt meddelande
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Bekräftelse</h3>
                    <p className="text-sm text-muted-foreground">
                      Du får en bekräftelse på att ditt meddelande har tagits emot
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Granskning</h3>
                    <p className="text-sm text-muted-foreground">
                      Jag läser igenom ditt meddelande och förbereder ett svar
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Svar</h3>
                    <p className="text-sm text-muted-foreground">
                      Du får ett personligt svar inom 24-48 timmar
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3">Under Tiden</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Kolla in mina <Link href="/projects" className="text-primary hover:underline">projekt</Link> för att se vad jag har arbetat med</li>
                    <li>• Besök min <Link href="/" className="text-primary hover:underline">hemsida</Link> för att lära känna mig bättre</li>
                    <li>• Följ mig på sociala medier för uppdateringar</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button asChild className="flex-1">
                    <Link href="/">Tillbaka till Hemsidan</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/projects">Se Mina Projekt</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
} 