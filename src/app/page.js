import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Tenara Website",
      description: "A website for a SaaS platform",
      tech: ["Next.js", "Tailwind CSS", "React", "Shadcn"],
      image: "/tenara_website.png",
    },
    {
      id: 2,
      title: "Tenara Admin Platform",
      description: "Fullstack SaaS application for Tenara admin platform",
      tech: ["Node.js", "SQL", "Vite", "React", "Shadcn", "Tailwind CSS"],
      image: "/tenara_admin.png",
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a self-taught full-stack developer with 2 years of experience creating 
              SaaS apps and websites. My primary focus in backend development but am keen to doing frontend development as well.
            </p>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
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
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
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
                    <Link href={`/projects/${project.id}`}>View Project</Link>
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
