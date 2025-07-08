"use client";

import Navigation from "@/components/navigation";


export default function ContactFeedback() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Header med samma css och html struktur som project och contact sidan*/}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tack för Ditt Meddelande!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jag har tagit emot ditt meddelande och kommer att återkomma så snart som möjligt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 