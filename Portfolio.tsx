import { useState } from "react";
import { cn } from "@/lib/utils";
import livingImg from "@/assets/portfolio-living.jpg";
import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import officeImg from "@/assets/portfolio-office.jpg";

const projects = [
  { cat: "Living", img: livingImg, title: "Modern Family Living", loc: "Boring Road, Patna" },
  { cat: "Bedroom", img: bedroomImg, title: "Master Suite Retreat", loc: "Kankarbagh, Patna" },
  { cat: "Kitchen", img: kitchenImg, title: "L-Shape Modular Kitchen", loc: "Rajendra Nagar" },
  { cat: "Office", img: officeImg, title: "Executive Boardroom", loc: "Patliputra Colony" },
  { cat: "Living", img: livingImg, title: "Contemporary Lounge", loc: "Bailey Road" },
  { cat: "Kitchen", img: kitchenImg, title: "Open-Concept Kitchen", loc: "Anisabad" },
];

const filters = ["All", "Living", "Bedroom", "Kitchen", "Office"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Our Work</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Recent Projects</h2>
          <p className="mt-4 text-muted-foreground">A glimpse into the homes and offices we've shaped across Patna.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-smooth border",
                active === f
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-accent hover:text-accent",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-lg overflow-hidden shadow-soft hover:shadow-luxury transition-smooth">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-95 transition-smooth" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory translate-y-2 group-hover:translate-y-0 transition-smooth">
                <span className="text-xs uppercase tracking-widest text-accent">{p.cat}</span>
                <h3 className="font-serif text-2xl mt-1">{p.title}</h3>
                <p className="text-sm text-ivory/70 mt-1">{p.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
