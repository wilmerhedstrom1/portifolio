import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Array of objects med projektinformation
  const featuredProjects = [
    {
      id: 1,
      title: "Tenara Website",
      description: "A website for a SaaS platform",
      tech: ["Next.js", "Tailwind CSS", "React", "Shadcn"],
      image: "/tenara_website.png",
      link: "https://tenara.se",
    },
    {
      id: 2,
      title: "Tenara Admin Platform",
      description: "Fullstack SaaS application for Tenara admin platform",
      tech: ["Node.js", "SQL", "Vite", "React", "Shadcn", "Tailwind CSS"],
      image: "/tenara_admin.png",
      link: "https://app.tenara.se",
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation bar */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-card/50">

        {/* container centrerar innehållet, mx-auto = margin auto på sidorna */}
        {/* px-4 sm:px-6 lg:px-8 = olika padding beroende på skärmstorlek */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* max-w-4xl begränsar bredden, text-center centrerar texten */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I am a self-taught full-stack developer with 2 years of experience creating 
              SaaS apps and websites. My primary focus in backend development but am keen to doing frontend development as well.
            </p>
            {/* Grid med statistik - 1 kolumn på mobil, 3 på större skärmar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Drive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {/* Har samma klasser som about sectionen med container, mx-auto och storlekar samt padding beroende på skärmstorlek */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects.
            </p>
          </div>

          {/* 1 kolumn på mobil, 2 på större skärmar, 3 på dator */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* map() går skapar ett kort för varje index i arrayen featuredProjects */}
            {featuredProjects.map((project) => (
              <Card key={project.id}>
                {/* aspect-video = 16:9 proportioner, overflow-hidden = gömmer överflödig storlek på bilden */}
                {/* rounded-t-lg = runda hörn på toppen och relative för children till diven ska positionera sig relativt denna div */}
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  {/* Next.js Image-komponent för att ge optimera bilder */}
                  <Image
                    src={project.image}
                    alt={project.title} // Alt-text för tillgänglighet
                    fill // Fyller hela containern
                    style={{ objectFit: "cover" }} // Behåller proportionerna
                    className="w-full h-full"
                    sizes="(max-width: 768px) 100vw, 33vw" // Hjälper Next.js välja rätt bildstorlek
                    priority={project.id === 1} // Första bilden laddas först
                  />
                </div>
                {/* px-0 tar bort standard padding för shadcn komponenten */}
                <CardHeader className="px-0">
                  <CardTitle>
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  {/* flex gör att badges (span i detta fall) lägger sig på rad, flex-wrap gör att de bryts till ny rad om det inte får plats */}
                  {/* gap-2 ger mellanrum mellan varje badge, mb-4 ger margin under badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* project.tech är en array som finns i varje projekt-objekt */}
                    {/* map() går igenom varje tech i tech-arrayen och skapar en badge (span) för varje teknik */}
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        // Design för varje badge, med padding och ljusare bakgrund och rundade hörn
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      >
                        {/* Namnet på teknink */}
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* asChild gör att knappen inte blir en <button>, utan stylar den inre <Link>-taggen som om den såg ut som en knapp */}
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.link} target="_blank">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        {/* container centrerar innehållet, mx-auto = margin auto på sidorna */}
        {/* sm:px-6 lg:px-8 samt för sm:text-4xl etc ger olika padding/storlek på font beroende på skärmstorlek */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and bring your ideas to life. I&apos;m always excited to work on new challenges.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
