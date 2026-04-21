import livingImg from "@/assets/portfolio-living.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import { ArrowRight } from "lucide-react";

const posts = [
  { img: livingImg, cat: "Trends", title: "5 Living Room Trends Patna Homes Are Loving in 2025", read: "4 min read" },
  { img: kitchenImg, cat: "Kitchen", title: "Modular Kitchen Buying Guide: Materials, Layout & Cost", read: "6 min read" },
  { img: bedroomImg, cat: "Tips", title: "Small Bedroom? 7 Smart Space-Saving Design Ideas", read: "3 min read" },
];

const Blog = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Design Ideas</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-foreground">From our journal</h2>
          </div>
          <p className="text-muted-foreground max-w-md">Tips, trends, and inspiration from our studio to your home.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-accent uppercase tracking-widest font-medium">{p.cat}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="font-serif text-xl mt-3 text-foreground group-hover:text-accent transition-smooth">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-smooth">
                  Read more <ArrowRight className="size-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
