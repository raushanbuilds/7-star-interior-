import { Award, HeartHandshake, Ruler } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">About Us</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground leading-tight">
            A Patna studio crafting <em className="text-accent">timeless interiors</em> since 2012.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            7 Star Interior is a full-service design studio based in Jaganpura, Patna. We blend Bihar's cultural warmth with modern aesthetics to design spaces that feel personal, functional, and effortlessly luxurious.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our in-house team handles everything — concept, 3D visualization, materials, and execution — so you get a single point of trust from sketch to handover.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { icon: Award, t: "12+ Years", s: "Industry Experience" },
              { icon: Ruler, t: "200+", s: "Projects Delivered" },
              { icon: HeartHandshake, t: "98%", s: "Happy Clients" },
            ].map((i) => (
              <div key={i.t} className="text-center sm:text-left">
                <i.icon className="size-7 text-accent mb-2 mx-auto sm:mx-0" />
                <div className="font-serif text-2xl text-foreground">{i.t}</div>
                <div className="text-sm text-muted-foreground">{i.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-luxury">
            <img
              src={new URL("../../assets/portfolio-bedroom.jpg", import.meta.url).href}
              alt="Luxury bedroom designed by 7 Star Interior"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block bg-accent text-accent-foreground p-6 rounded-lg shadow-gold max-w-[220px]">
            <div className="font-serif text-2xl">Design Philosophy</div>
            <p className="text-sm mt-2 opacity-90">"Every space should feel like home — refined, restful, real."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
