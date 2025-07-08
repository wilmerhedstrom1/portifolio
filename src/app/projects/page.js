import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  // Array med projektdata som ska visas på sidan, samma på landingssidan
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
    // main = huvudinnehållet på sidan, min-h-screen gör att den tar upp hela skärmhöjden
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20">
        {/* container centrerar innehållet och ger maxbredd, px-4/6/8 ger olika padding beroende på skärmstorlek */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* mx-auto gör att diven blir centrerad */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Here&apos;s a collection of my work, showcasing various technologies and solutions I&apos;ve built.
            </p>
          </div>
        </div>
      </section>
      {/* Projekt sektionen har exakt samma struktur som landingssidan featured projects */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id}>
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={project.id === 1}
                  />
                </div>
                <CardHeader className="px-0">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.link} target="_blank">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 