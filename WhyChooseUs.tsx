import { Award, Clock, Gem, PencilRuler } from "lucide-react";

const items = [
  { icon: Award, t: "12+ Years Experience", d: "A decade-plus of design expertise across Bihar." },
  { icon: Gem, t: "Premium Materials", d: "We source only branded, durable, certified materials." },
  { icon: Clock, t: "On-Time Delivery", d: "98% of projects handed over on or before schedule." },
  { icon: PencilRuler, t: "Custom Designs", d: "Every project is unique — no templates, ever." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Why Us</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Why Patna chooses 7 Star</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.t} className="text-center p-8 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
              <div className="mx-auto size-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <i.icon className="size-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl mt-5 text-foreground">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
