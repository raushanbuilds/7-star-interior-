import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const reviews = [
  { name: "Rahul Kumar", project: "3BHK · Boring Road", rating: 5, text: "7 Star transformed our flat into a dream home. The team understood every detail and delivered ahead of schedule." },
  { name: "Priya Singh", project: "Modular Kitchen · Kankarbagh", rating: 5, text: "Stunning kitchen design with top-quality fittings. Worth every rupee. Highly recommended in Patna." },
  { name: "Anand Verma", project: "Office · Patliputra", rating: 5, text: "Professional, on-time, and creative. Our office now reflects our brand perfectly. Great experience throughout." },
  { name: "Neha Sharma", project: "Villa Turnkey · Anisabad", rating: 5, text: "From 3D renders to handover — flawless execution. The gold touches are simply gorgeous." },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Testimonials</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Loved by Patna families</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <Card key={r.name} className="p-6 bg-card border-border hover:shadow-luxury transition-smooth flex flex-col">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-serif text-lg text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.project}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
