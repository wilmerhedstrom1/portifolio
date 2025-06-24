import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with Next.js and Stripe. Features include user authentication, product management, shopping cart, and secure payment processing.",
      tech: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
      category: "Full Stack",
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and project tracking features.",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      category: "Frontend",
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design and animations.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      category: "Frontend",
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Blog CMS",
      description: "Content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      category: "Full Stack",
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and scheduling features.",
      tech: ["React", "Node.js", "Express", "D3.js"],
      category: "Full Stack",
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = ["All", "Frontend", "Full Stack", "Backend", "Mobile"];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Here&apos;s a collection of my work, showcasing various technologies and solutions I&apos;ve built.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex-1">
              <Input 
                placeholder="Search projects..." 
                className="max-w-md"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Project Image</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={project.liveUrl}>Live Demo</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={project.githubUrl}>GitHub</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 