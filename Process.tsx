import { ClipboardList, Eye, Hammer, KeyRound, MessageSquare } from "lucide-react";

const steps = [
  { icon: MessageSquare, t: "Consultation", d: "Free 1-on-1 discussion to understand your vision and budget." },
  { icon: ClipboardList, t: "Design", d: "Layouts, mood boards, and material palettes tailored to you." },
  { icon: Eye, t: "3D Visualization", d: "Photorealistic renders so you see the result before we build." },
  { icon: Hammer, t: "Execution", d: "On-site project management with quality checks at every stage." },
  { icon: KeyRound, t: "Handover", d: "Spotless walkthrough, styling, and your keys — ready to live in." },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-charcoal text-ivory">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Our Process</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ivory">From idea to handover</h2>
          <p className="mt-4 text-ivory/70">A transparent 5-step process designed for clarity and zero surprises.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-5 gap-6 relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          {steps.map((s, i) => (
            <div key={s.t} className="text-center relative">
              <div className="relative mx-auto size-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold text-lg shadow-gold">
                {i + 1}
              </div>
              <s.icon className="mx-auto mt-4 size-6 text-accent" />
              <h3 className="font-serif text-xl mt-2 text-ivory">{s.t}</h3>
              <p className="text-sm text-ivory/65 mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
