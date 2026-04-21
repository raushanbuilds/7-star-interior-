import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowDown, Star } from "lucide-react";
import heroImg from "@/assets/hero-living.jpg";

const WHATSAPP =
  "https://wa.me/919297766777?text=Hi%20Seven%20Star%20Interior,%20I%27d%20like%20a%20free%20consultation.";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden isolate"
    >
      {/* Background image with Ken Burns zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury living room interior designed by 7 Star Interior Patna"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns will-change-transform"
        />
      </div>

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />

      {/* Floating decorative orbs */}
      <div
        className="pointer-events-none absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24 text-ivory">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-xs sm:text-sm text-accent backdrop-blur-md animate-slide-down"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="size-3.5 sm:size-4 animate-pulse" />
            Premium Interior Studio · Patna
          </span>

          <h1
            className="mt-5 sm:mt-6 font-serif text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Designing Homes That{" "}
            <span className="text-gradient-gold italic inline-block">
              Tell Your Story
            </span>
          </h1>

          <p
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-ivory/85 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            From modular kitchens to turnkey apartments — we craft warm, timeless
            interiors tailored to your lifestyle. Trusted by 200+ Patna families.
          </p>

          {/* Rating row */}
          <div
            className="mt-5 flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-sm text-ivory/75">
              4.9/5 · 180+ happy clients
            </span>
          </div>

          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 active:scale-95 transition-smooth shadow-gold animate-pulse-glow h-12 sm:h-14 px-7 sm:px-8 text-base w-full sm:w-auto"
            >
              <a href="#contact">Book Free Consultation</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal hover:scale-105 active:scale-95 transition-smooth h-12 sm:h-14 px-7 sm:px-8 text-base w-full sm:w-auto group"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener">
                <MessageCircle className="group-hover:rotate-12 transition-transform" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-12 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            {[
              { n: "12+", l: "Years" },
              { n: "200+", l: "Projects" },
              { n: "100%", l: "On-Time" },
            ].map((s) => (
              <div
                key={s.l}
                className="hover:scale-110 transition-smooth cursor-default"
              >
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-accent">
                  {s.n}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-ivory/70 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to next section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-ivory/70 hover:text-accent transition-smooth animate-bounce-subtle"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
};

export default Hero;
