import { Card } from "@/components/ui/card";
import { Building2, ChefHat, Hammer, Home, Sparkles } from "lucide-react";
import residentialImg from "@/assets/service-residential.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import officeImg from "@/assets/service-office.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import turnkeyImg from "@/assets/service-turnkey.jpg";

const services = [
  { icon: Home, t: "Residential Interior", d: "Full-home design across living, dining, and bedrooms with bespoke detailing.", img: residentialImg },
  { icon: ChefHat, t: "Modular Kitchen", d: "Smart layouts, premium hardware, and durable finishes for everyday joy.", img: kitchenImg },
  { icon: Building2, t: "Office Interior", d: "Productive, branded workspaces — from startups to corporate floors.", img: officeImg },
  { icon: Hammer, t: "Renovation", d: "Transform existing spaces with structural upgrades and fresh aesthetics.", img: renovationImg },
  { icon: Sparkles, t: "Turnkey Projects", d: "End-to-end execution — design, build, furnish. You just walk in.", img: turnkeyImg },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">What We Do</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Services tailored to your space</h2>
          <p className="mt-4 text-muted-foreground">From a single room refresh to complete turnkey homes — we cover every interior need.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card
              key={s.t}
              className="group overflow-hidden border-border bg-card hover:border-accent hover:shadow-luxury transition-smooth cursor-pointer"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute top-4 left-4 size-12 rounded-lg bg-accent/90 backdrop-blur flex items-center justify-center">
                  <s.icon className="size-6 text-accent-foreground" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-foreground">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="mt-6 text-sm text-accent font-medium">0{i + 1} —</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
