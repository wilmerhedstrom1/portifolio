import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = ["React", "Next.js", "Vite", "Tailwind CSS", "Node.js", "JavaScript", "SQL"];


export default function Hero() {
  return (
    // min-h-screen gör att sektionen tar upp hela skärmen, flex gör att innehållet lägger sig på rad,
    // relative gör att element i denna sektion är kan sättas i förhållande till denna sektion
    // overflow-hidden gömmer överflödigt innehåll
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Bakgrundsgradient, absolute gör att den täcker hela sektionen i förhållande till sektionen */}
      {/* Gradienten börjar med ljusare färg from-primary/10, i mitten blir den till bakgrundsfärgen via-backgrounde */}
      {/* Och slutar med to-secondary/10. Inset-0 står för top, left, right, bottom: 0, sträcker sig hela skärmen*/}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* container centrerar innehållet och ger maxbredd, px-4/6/8 ger olika padding beroende på skärmstorlek */}
      {/* relative z-10 gör att barn med lägre z-index hamnar under detta element*/}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Fullstack Web Developer
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I build websites and apps with Node.js, SQL and React.
          </p>
          
          {/* flex gör att knapparna lägger sig på rad på större skärmar, gap-4 ger mellanrum mellan knapparna */}
          {/* flex-col på mobil, flex-row på större skärmar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* asChild gör att Button-komponenten stylar den inre <Link> taggen som en knapp */}
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Skills badges */}
          {/* flex-wrap gör att badges bryts till ny rad om det inte får plats, gap-3 ger mellanrum mellan badges */}
          {/* Använder <ul> och <li> för att rendera en lista av färdigheter*/}
          <ul className="mt-16 flex flex-wrap justify-center gap-3">
            {/* Array med skills, map() skapar en badge (li) för varje skill */}
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                // border ger en kant runt badge, border-border ger kantfärg, rounded-full för helt rundade hörn
                // transition-colors, fördefinerad animering klass
              >
                {/* Namnet på skillen */}
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 