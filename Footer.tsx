import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-8">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-2xl font-bold">
            7<span className="text-accent">★</span>Star Interior
          </div>
          <p className="mt-4 text-ivory/65 text-sm leading-relaxed">
            Patna's trusted interior design studio. Crafting timeless homes, kitchens, and offices since 2012.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="size-9 rounded-full bg-ivory/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-ivory">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Services", "Projects", "Process", "Packages", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-ivory/65 hover:text-accent transition-smooth">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-ivory">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-ivory/65">
            <li>Residential Interior</li>
            <li>Modular Kitchen</li>
            <li>Office Interior</li>
            <li>Renovation</li>
            <li>Turnkey Projects</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-ivory">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-ivory/65">
            <li className="flex gap-2"><MapPin className="size-4 text-accent shrink-0 mt-0.5" /> 372, Devi Asthan Rd, Jaganpura, R.K. Nagar, Patna, Bihar 800027</li>
            <li className="flex gap-2"><Phone className="size-4 text-accent shrink-0 mt-0.5" /> <a href="tel:09297766777" className="hover:text-accent">+91 92977 66777</a></li>
            <li className="flex gap-2"><Mail className="size-4 text-accent shrink-0 mt-0.5" /> info@7starinteriorpatna.com</li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/50">
        <p>© {new Date().getFullYear()} 7 Star Interior Patna. All rights reserved.</p>
        <p>Designed with care in Patna, Bihar.</p>
      </div>
    </footer>
  );
};

export default Footer;
