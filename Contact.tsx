import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone"),
  email: z.string().trim().email("Invalid email").max(255).or(z.literal("")),
  projectType: z.string().min(1, "Select a project type"),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Hi 7 Star Interior, I'd like a consultation.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AProject: ${encodeURIComponent(form.projectType)}%0ADetails: ${encodeURIComponent(form.message)}`;
    toast.success("Thanks! Redirecting you to WhatsApp…");
    setTimeout(() => {
      window.open(`https://wa.me/919297766777?text=${text}`, "_blank");
    }, 600);
    setForm({ name: "", phone: "", email: "", projectType: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-medium">Get In Touch</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Let's design your dream space</h2>
          <p className="mt-4 text-muted-foreground text-lg">Book a free consultation. No obligations — just a friendly chat about your vision.</p>

          <div className="mt-10 space-y-5">
            <a href="tel:09297766777" className="flex items-start gap-4 group">
              <div className="size-11 rounded-full bg-accent/15 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <Phone className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                <div className="font-medium text-foreground">+91 92977 66777</div>
              </div>
            </a>
            <a href="https://wa.me/919297766777" target="_blank" rel="noopener" className="flex items-start gap-4 group">
              <div className="size-11 rounded-full bg-accent/15 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="font-medium text-foreground">Chat instantly</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="size-11 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <MapPin className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Studio</div>
                <div className="font-medium text-foreground">372, SMT Lalmuni Devi, Rajdeo Singh, Devi Asthan Rd,</div>
                <div className="text-sm text-muted-foreground">Jaganpura, R.K. Nagar, Patna, Bihar 800027</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden shadow-soft border border-border">
            <iframe
              title="7 Star Interior Patna location"
              src="https://maps.google.com/maps?q=Jaganpura,Patna,Bihar%20800027&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-card rounded-xl p-6 sm:p-8 shadow-luxury border border-border h-fit">
          <h3 className="font-serif text-2xl text-foreground">Book Free Consultation</h3>
          <p className="text-sm text-muted-foreground mt-1">We'll get back within 24 hours.</p>

          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" placeholder="Your name" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" placeholder="+91 …" />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" placeholder="you@email.com" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="project">Project Type *</Label>
              <Select value={form.projectType} onValueChange={(v) => setForm({ ...form, projectType: v })}>
                <SelectTrigger id="project" className="mt-1.5">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residential Interior">Residential Interior</SelectItem>
                  <SelectItem value="Modular Kitchen">Modular Kitchen</SelectItem>
                  <SelectItem value="Office Interior">Office Interior</SelectItem>
                  <SelectItem value="Renovation">Renovation</SelectItem>
                  <SelectItem value="Turnkey Project">Turnkey Project</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && <p className="text-xs text-destructive mt-1">{errors.projectType}</p>}
            </div>
            <div>
              <Label htmlFor="msg">Project Details *</Label>
              <Textarea id="msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 min-h-[120px]" placeholder="Tell us about your space, budget, timeline…" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-base">
              Send via WhatsApp
            </Button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted about your enquiry.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
