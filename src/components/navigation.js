"use client";

import Link from "next/link";
// usePathname är en hook från Next.js som ger oss den aktuella sökvägen (t.ex. "/", "/projects")
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  // Hämta den aktuella sökvägen så man kan markera vilken sida som är aktiv
  const pathname = usePathname();

  // Array med alla menyalternativ. 
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // fixed gör att nav alltid ligger längst upp, z-50 gör att den ligger över annat innehåll med tanke på indexeringen 50
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* container centrerar innehållet och ger maxbredd, px-4/6/8 ger olika padding beroende på skärmstorlek */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* flex gör att innehållet lägger sig på rad, items-center centrerar vertikalt, justify-between sprider ut logga och länkar */}
        {/* h-16 ger navigationen en fast höjd */}
        <div className="flex items-center justify-between h-16">
          {/* Logotyp och namn, flex och space-x-2 ger mellanrum mellan logga och namn */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Kvadratisk logga med initialer, centrerad med flex och rundade hörn */}
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">WH</span>
            </div>
            {/* Namnet bredvid loggan */}
            <span className="font-semibold text-lg">Wilmer Hedström</span>
          </Link>

          {/* Navigation Links, dold på mobil (hidden md:flex), visas på större skärmar */}
          {/* flex gör att länkarna lägger sig på rad, space-x-8 ger mellanrum mellan varje länk */}
          <div className="hidden md:flex items-center space-x-8">
            {/* map() går igenom varje objekt i navItems-arrayen och skapar en länk för varje */}
            {navItems.map((item) => (
              <Link
                key={item.href} // Unik id för varje länk
                href={item.href} // Sökvägen länken går till
                // className sätter olika färg beroende på om länken är aktiv eller inte
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary" // Om vi är på denna sida, använd primary-färg
                    : "text-muted-foreground" // Annars använd en gråare färg
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Get In Touch knapp */}
          <div>
            {/* asChild gör att Button-komponenten stylar den inre <Link> taggen som en knapp, men fungerar som länk */}
            <Button asChild size="sm">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}