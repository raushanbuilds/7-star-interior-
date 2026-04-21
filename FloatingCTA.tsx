import { MessageCircle, Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <>
      <a
        href="https://wa.me/919297766777?text=Hi%207%20Star%20Interior,%20I%27m%20interested%20in%20a%20consultation."
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxury hover:scale-110 transition-smooth animate-fade-in"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href="tel:09297766777"
        aria-label="Call us"
        className="fixed bottom-5 left-5 z-50 size-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-gold hover:scale-110 transition-smooth animate-fade-in lg:hidden"
      >
        <Phone className="size-6" />
      </a>
    </>
  );
};

export default FloatingCTA;
