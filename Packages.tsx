import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Essential",
    tag: "Starter",
    price: "₹1.5L+",
    features: ["Layout & space planning", "2 room design", "Basic 3D views", "Material guidance", "30-day support"],
  },
  {
    name: "Premium",
    tag: "Most Popular",
    price: "₹3.5L+",
    popular: true,
    features: ["Full home design", "Detailed 3D renders", "Modular kitchen included", "Premium finishes", "On-site supervision", "90-day support"],
  },
  {
    name: "Turnkey",
    tag: "Luxury",
    price: "₹7L+",
    features: ["Complete execution", "Custom furniture", "Imported materials", "Smart home integration", "Styling & decor", "1-year warranty"],
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Packages</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Designed for every budget</h2>
          <p className="mt-4 text-muted-foreground">Indicative starting prices. Final quote depends on size, scope & finishes.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative rounded-xl p-8 border-2 transition-smooth",
                p.popular
                  ? "bg-charcoal text-ivory border-accent shadow-luxury md:scale-105"
                  : "bg-card border-border hover:border-accent",
              )}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="size-3 fill-current" /> {p.tag}
                </div>
              )}
              {!p.popular && <span className="text-xs uppercase tracking-widest text-accent">{p.tag}</span>}
              <h3 className={cn("font-serif text-3xl mt-2", p.popular ? "text-ivory" : "text-foreground")}>{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={cn("font-serif text-4xl", p.popular ? "text-accent" : "text-foreground")}>{p.price}</span>
                <span className={cn("text-sm", p.popular ? "text-ivory/60" : "text-muted-foreground")}>onwards</span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={cn("size-5 mt-0.5 shrink-0", p.popular ? "text-accent" : "text-accent")} />
                    <span className={cn("text-sm", p.popular ? "text-ivory/85" : "text-muted-foreground")}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "mt-8 w-full h-11",
                  p.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-foreground text-background hover:bg-foreground/90",
                )}
              >
                <a href="#contact">Get Quote</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
