// "use client" krävs för att använda hooks och states
"use client";

// Importera useState för att hantera formulärdata (state)
import { useState } from "react";
// Importera useRouter för att kunna navigera programatiskt (t.ex. efter formulärskick)
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Code2, Building2 } from "lucide-react";

export default function Contact() {
  // useRouter hook för att kunna navigera till feedback-sidan efter formulärskick
  const router = useRouter();
  // useState för att spara formulärdata i ett objekt
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Funktion som körs när formuläret skickas in
  const handleSubmit = (e) => {
    e.preventDefault(); // Hindra att sidan laddas om
    // Här bör det egentligen finnas kod som hanterar själva mejlet
    console.log("Form submitted:", formData);
    // Navigera till feedback-sidan
    router.push("/contact/feedback");
  };

  // Funktion som körs när ett formulärfält ändras
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Uppdatera rätt fält i formData-objektet
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    // main, huvudinnehållet på sidan, min-h-screen gör att den tar upp hela skärmhöjden
    <main className="min-h-screen">
      <Navigation />
      
      {/* Header, med samma css och html struktur som projects-sidan*/}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Me</h1>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Let&apos;s work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content - badges och formulär */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* flex-col gör att badges och formuläret staplas på höjden, items-center centrerar dem horisontellt */}
          <div className="flex flex-col items-center w-full">
            {/* Contact Badges, länkar till email, github och linkedin. Använder <ul> för semantisk korrekthet. */}
            <ul className="flex flex-wrap gap-3 mb-10 justify-center">
              {/* Varje badge är en länk med ikon och text, flex och gap-2 gör att ikon och text hamnar bredvid varandra med mellanrum */}
              {/* Designen för varje badge är samma som på landingssidan med skills men tillägget är logga + text med: item-center, flex och gap som gör att de ligger på rad med mellanrum*/}
              <li>
                <a href="mailto:wilmer.hedstrom@gmail.com" className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/wilmerhedstrom1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/wilmer-hedstr%C3%B6m-07429b244/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
            
            {/* Contact Form */}
            <div className="w-full max-w-xl">
              <Card>
                {/* px-0 tar bort standard padding för shadcn CardHeader */}
                <CardHeader className="px-0">
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  {/* Formulär med space-y-6 för mellanrum mellan fälten */}
                  {/* onSubmit={handleSubmit} gör att handleSubmit funktionen körs när formuläret skickas in */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* grid och grid-cols-1 gör att namn och email ligger bredvid varandra på större skärmar, gap-4 ger mellanrum */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                      />
                    </div>
                    {/* Knapp för att skicka formuläret, w-full gör att den fyller hela bredden av form  */}
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 