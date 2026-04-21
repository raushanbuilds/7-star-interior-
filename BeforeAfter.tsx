import { useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Transformations</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Before & After</h2>
          <p className="mt-4 text-muted-foreground">Drag the slider to see how we transform spaces.</p>
        </div>

        <div
          ref={ref}
          className="mt-12 relative aspect-[16/10] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-luxury select-none cursor-ew-resize"
          onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onClick={(e) => handleMove(e.clientX)}
        >
          <img src={afterImg} alt="After interior renovation" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={beforeImg} alt="Before renovation" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} loading="lazy" />
          </div>

          <div className="absolute top-4 left-4 bg-charcoal/80 text-ivory text-xs uppercase tracking-wider px-3 py-1.5 rounded">Before</div>
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs uppercase tracking-wider px-3 py-1.5 rounded">After</div>

          <div className="absolute top-0 bottom-0 w-1 bg-accent shadow-gold" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-accent flex items-center justify-center shadow-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent-foreground">
                <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
