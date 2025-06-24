"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Redirect to feedback page
    router.push("/contact/feedback");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      title: "E-post",
      value: "hej@exempel.se",
      description: "Skicka mig ett mail när som helst",
      icon: "📧",
    },
    {
      title: "Plats",
      value: "Stockholm, Sverige",
      description: "Baserad i Stockholm",
      icon: "📍",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/dinprofil",
      description: "Kontakta mig professionellt",
      icon: "💼",
    },
    {
      title: "GitHub",
      value: "github.com/dittanvandarnamn",
      description: "Kolla in min kod",
      icon: "💻",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Kontakta Mig</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jag är alltid intresserad av att höra om nya projekt och möjligheter. 
              Låt oss arbeta tillsammans för att förverkliga dina idéer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Skicka ett Meddelande</CardTitle>
                  <CardDescription>
                    Fyll i formuläret nedan så återkommer jag så snart som möjligt.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Namn</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ditt namn"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-post</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="din.epost@exempel.se"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Ämne</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Vad handlar detta om?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Meddelande</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Berätta om ditt projekt..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Skicka Meddelande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Låt Oss Koppla</h2>
                <p className="text-muted-foreground mb-8">
                  Jag är alltid öppen för att diskutera nya projekt, kreativa idéer, 
                  eller möjligheter att vara del av dina visioner.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {info.description}
                          </p>
                          <p className="text-sm font-medium">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Vad Jag Letar Efter</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Fullstack-utvecklingsmöjligheter</li>
                    <li>• Frontend-utvecklingsprojekt</li>
                    <li>• UI/UX-designsamarbeten</li>
                    <li>• Open source-bidrag</li>
                    <li>• Mentorskap och lärandemöjligheter</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 