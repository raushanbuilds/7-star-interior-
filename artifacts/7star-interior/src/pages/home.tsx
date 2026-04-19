import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Menu, X, ArrowRight, Star, CheckCircle2, ChevronRight, MessageSquare, Clock } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Import generated images
import heroImg from "@/assets/images/hero.png";
import serviceResImg from "@/assets/images/service-residential.png";
import serviceKitImg from "@/assets/images/service-kitchen.png";
import serviceOffImg from "@/assets/images/service-office.png";
import serviceRenImg from "@/assets/images/service-renovation.png";
import serviceTurnImg from "@/assets/images/service-turnkey.png";
import service3dImg from "@/assets/images/service-3d.png";
import port1 from "@/assets/images/portfolio-1.png";
import port2 from "@/assets/images/portfolio-2.png";
import port3 from "@/assets/images/portfolio-3.png";
import port4 from "@/assets/images/portfolio-4.jpg";
import port5 from "@/assets/images/portfolio-5.jpg";
import port6 from "@/assets/images/portfolio-6.jpg";
import before1 from "@/assets/images/before-1.jpg";
import after1 from "@/assets/images/after-1.jpg";
import before2 from "@/assets/images/before-2.jpg";
import after2 from "@/assets/images/after-2.jpg";
import blog1 from "@/assets/images/blog-1.jpg";
import blog2 from "@/assets/images/blog-2.jpg";
import blog3 from "@/assets/images/blog-3.jpg";

const WHATSAPP_NUMBER = "919297766777";
const PHONE_NUMBER = "+919297766777";
const ADDRESS = "372, SMT LALMUNI DEVI, RAJDEO SINGH, Devi Asthan Rd, Jaganpura, EAST R, K NAGAR, Patna, Bihar 800027";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted Successfully",
      description: "Our team will contact you shortly to discuss your project.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm text-primary-foreground font-serif font-bold text-xl">
              7*
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? "text-foreground" : "text-white drop-shadow-md md:text-foreground"}`}>
              7 Star Interior
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6 font-medium text-sm">
              {['About', 'Services', 'Portfolio', 'Process', 'Pricing'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-primary transition-colors ${isScrolled ? "text-foreground/80" : "text-white/90 drop-shadow-sm md:text-foreground/80"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection("contact")} className="rounded-full px-6 shadow-md hover-elevate">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="lg:hidden text-foreground p-2 bg-background/50 rounded-md backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
            {['About', 'Services', 'Portfolio', 'Process', 'Pricing', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left py-2 text-foreground font-medium border-b border-border/50 last:border-0"
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")} className="w-full mt-2">
              Book Free Consultation
            </Button>
          </div>
        )}
      </nav>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%207%20Star%20Interior,%20I%20would%20like%20to%20discuss%20a%20project.`} 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover-elevate"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover-elevate"
        >
          <Phone size={24} fill="currentColor" />
        </a>
      </div>

      {/* 1. Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Luxurious Living Room Interior" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/80 md:to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-sm font-medium">
              <Star size={14} className="text-primary fill-primary" />
              <span>Patna's Premium Interior Studio</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Design That <br/><span className="text-primary">Elevates</span> Your Lifestyle.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Transforming residential and commercial spaces into stunning, functional masterpieces. Experience luxury living with 7 Star Interior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-14 px-8" onClick={() => scrollToSection("contact")}>
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-transparent border-white text-white hover:bg-white/10 hover:text-white" asChild>
                <a href={`tel:${PHONE_NUMBER}`}>Call Now</a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-white/20 pt-6">
              <div>
                <p className="text-3xl font-bold font-serif text-primary">10+</p>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-serif text-primary">500+</p>
                <p className="text-sm text-white/70">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Us */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10 shadow-xl">
                <img src={port1} alt="About 7 Star Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-primary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute top-12 -left-6 w-32 h-32 bg-secondary rounded-lg z-20 flex flex-col items-center justify-center text-white shadow-lg p-4 text-center">
                <Star size={32} className="text-primary fill-primary mb-2" />
                <span className="font-bold text-lg leading-tight">Premium Quality</span>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">About 7 Star Interior</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Crafting Spaces With Soul & Purpose</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Based in the heart of Patna, 7 Star Interior is a premier design studio dedicated to transforming ordinary spaces into extraordinary environments. With over a decade of excellence, we bring your vision to life with uncompromising quality.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our philosophy is simple: exceptional design should be both breathtakingly beautiful and perfectly functional. From conceptualization to the final reveal, our expert team manages every detail, ensuring a seamless journey to your dream space.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unmatched attention to detail and craftsmanship",
                  "Transparent pricing with no hidden costs",
                  "Dedicated project manager for every client",
                  "Use of premium, durable materials"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button onClick={() => scrollToSection("portfolio")} variant="outline" className="rounded-full group">
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="py-24 bg-secondary text-secondary-foreground relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Comprehensive Design Services</h3>
            <p className="text-white/70">From a single room refresh to complete turnkey solutions, we offer a full spectrum of interior design services tailored to your needs.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Residential Interior", desc: "Complete home interiors that reflect your personal style and enhance comfort.", img: serviceResImg },
              { title: "Modular Kitchen", desc: "Smart, ergonomic, and stylish kitchen designs that make cooking a joy.", img: serviceKitImg },
              { title: "Office Interior", desc: "Inspiring workspaces designed to boost productivity and reflect your brand.", img: serviceOffImg },
              { title: "Home Renovation", desc: "Breathe new life into your existing spaces with our expert remodeling.", img: serviceRenImg },
              { title: "Turnkey Projects", desc: "End-to-end execution. You hand us the keys, we hand you a finished home.", img: serviceTurnImg },
              { title: "3D Visualization", desc: "See your space before it's built with our highly realistic 3D renderings.", img: service3dImg },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-pointer">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-white/70">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Portfolio */}
      <section id="portfolio" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Featured Projects</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Our Masterpieces</h3>
            </div>
            <Button variant="link" className="text-primary hover:text-primary/80 group">
              View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
            <div className="lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden group relative">
              <img src={port1} alt="Living Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                <div>
                  <p className="text-primary font-medium mb-1">Residential</p>
                  <h4 className="text-white text-2xl font-serif font-bold">Luxury Villa, Kankarbagh</h4>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden group relative">
              <img src={port2} alt="Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white text-xl font-serif font-bold">Master Bedroom</h4>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden group relative">
              <img src={port3} alt="Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white text-xl font-serif font-bold">Premium Modular Kitchen</h4>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden group relative">
              <img src={port4} alt="Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white text-xl font-serif font-bold">Corporate Workspace</h4>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden group relative lg:col-span-2">
              <img src={port5} alt="Dining Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white text-xl font-serif font-bold">Elegant Dining Area</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Before & After */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Transformations</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Before & After</h3>
            <p className="text-muted-foreground">Witness the dramatic difference our design expertise brings to an empty or outdated space.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { b: before1, a: after1, title: "Living Room Transformation" },
              { b: before2, a: after2, title: "Kitchen Remodel" }
            ].map((pair, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-2xl font-serif font-bold text-foreground text-center">{pair.title}</h4>
                <div className="grid grid-cols-2 gap-2 relative">
                  <div className="relative group">
                    <img src={pair.b} alt="Before" className="w-full aspect-square md:aspect-[4/3] object-cover rounded-l-lg" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-sm text-sm font-medium">Before</div>
                  </div>
                  <div className="relative group">
                    <img src={pair.a} alt="After" className="w-full aspect-square md:aspect-[4/3] object-cover rounded-r-lg" />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-sm text-sm font-medium">After</div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center z-10 border border-border text-primary font-bold">
                    VS
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Client Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Rajesh Kumar", loc: "Boring Road", text: "7 Star Interior completely transformed our 3BHK. Their attention to detail and adherence to timeline was impressive. The modular kitchen is the highlight of our home." },
              { name: "Anjali Singh", loc: "Patliputra Colony", text: "Very professional team. They understood my vision for a modern minimalist living room and executed it perfectly. Highly recommend their services in Patna." },
              { name: "Vikash Sharma", loc: "Bailey Road", text: "We hired them for our office interior. The space utilization and aesthetic appeal they achieved within our budget was beyond our expectations." },
              { name: "Neha Gupta", loc: "Danapur", text: "The 3D visualization helped us understand the design before execution. The final result looks exactly like the render! Excellent craftsmanship." },
              { name: "Saurabh Mishra", loc: "Kankarbagh", text: "Turnkey service at its best. Being out of town, I handed over my flat to them and they managed everything from civil work to final decor beautifully." }
            ].map((review, i) => (
              <Card key={i} className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                  <div className="flex gap-1 mb-3 text-primary">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <CardDescription className="text-white/80 text-base italic">"{review.text}"</CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-serif text-xl text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-white/60">{review.loc}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Process & 8. Why Choose Us */}
      <section id="process" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Process */}
            <div>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">How We Work</h2>
              <h3 className="text-4xl font-serif font-bold text-foreground mb-10">Our 6-Step Process</h3>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Consultation", desc: "We discuss your vision, budget, and timeline." },
                  { step: "02", title: "Design Planning", desc: "Creating layouts and mood boards for your space." },
                  { step: "03", title: "3D Visualization", desc: "Realistic 3D renders to finalize the look." },
                  { step: "04", title: "Material Selection", desc: "Choosing premium finishes, fabrics, and furniture." },
                  { step: "05", title: "Execution", desc: "Our expert craftsmen bring the design to life." },
                  { step: "06", title: "Handover", desc: "Final walkthrough and handing over your dream space." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                        {item.step}
                      </div>
                      {i !== 5 && <div className="w-px h-full bg-border mt-2"></div>}
                    </div>
                    <div className="pb-6 pt-2">
                      <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-muted p-8 md:p-12 rounded-2xl h-fit sticky top-24">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Why Choose 7 Star Interior?</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "10+ Years Experience", icon: <Star className="text-primary" /> },
                  { title: "500+ Happy Clients", icon: <MessageSquare className="text-primary" /> },
                  { title: "On-Time Delivery", icon: <Clock className="text-primary" /> },
                  { title: "Premium Materials", icon: <CheckCircle2 className="text-primary" /> },
                  { title: "Custom Designs", icon: <Star className="text-primary" /> },
                  { title: "Post-Project Support", icon: <Phone className="text-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="bg-background p-4 rounded-lg flex items-center gap-4 shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-bold text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-primary text-primary-foreground rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-bold mb-1">Ready to start?</p>
                  <p className="text-sm text-primary-foreground/80">Let's discuss your project today.</p>
                </div>
                <Button variant="secondary" className="rounded-full" onClick={() => scrollToSection("contact")}>
                  Contact Us
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Pricing */}
      <section id="pricing" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Packages</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Transparent Pricing</h3>
            <p className="text-white/70">Clear, competitive pricing tailored to different project scopes and requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic Package", price: "₹500", popular: false,
                features: ["Space Planning & Layout", "2D Furniture Layout", "Basic False Ceiling Design", "Standard Lighting Plan", "Color Consultation"]
              },
              {
                name: "Premium Package", price: "₹800", popular: true,
                features: ["Everything in Basic", "3D Visualization (2 Views/Room)", "Custom Furniture Design", "Premium Material Selection", "Detailed Working Drawings", "Dedicated Site Supervisor"]
              },
              {
                name: "Turnkey Package", price: "₹1200", popular: false,
                features: ["Everything in Premium", "Complete Execution", "Civil Work & Plumbing", "End-to-end Procurement", "Smart Home Integration", "Post-Handover Warranty"]
              }
            ].map((pkg, i) => (
              <Card key={i} className={`bg-background text-foreground border-0 shadow-xl relative overflow-hidden flex flex-col ${pkg.popular ? 'scale-105 md:-translate-y-4 z-10' : ''}`}>
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 text-center w-full absolute top-0 left-0">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${pkg.popular ? 'pt-8' : ''}`}>
                  <CardTitle className="font-serif text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">/sq.ft</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} onClick={() => scrollToSection("contact")}>
                    Choose Package
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Blog */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Design Ideas</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Latest Insights</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: blog1, title: "5 Space-Saving Ideas for Small Homes", date: "Oct 12, 2023" },
              { img: blog2, title: "Modular Kitchen Trends 2025", date: "Oct 28, 2023" },
              { img: blog3, title: "How to Choose the Right Interior Style", date: "Nov 05, 2023" }
            ].map((blog, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 aspect-[16/10]">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-primary text-sm font-medium mb-2">{blog.date}</p>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{blog.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Let's Build Your Dream Space</h3>
              <p className="text-muted-foreground mb-8">Fill out the form and our design experts will get back to you within 24 hours to schedule your free consultation.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Our Studio</h4>
                    <p className="text-muted-foreground">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">{PHONE_NUMBER}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-[#25D366] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+{WHATSAPP_NUMBER}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Book Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input required placeholder="Enter your name" className="bg-background" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input required type="tel" placeholder="Your phone number" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">City/Location</label>
                      <Input required placeholder="E.g., Kankarbagh" className="bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Interior</SelectItem>
                        <SelectItem value="kitchen">Modular Kitchen</SelectItem>
                        <SelectItem value="office">Office Interior</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="turnkey">Turnkey Project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Details</label>
                    <Textarea placeholder="Tell us a bit about your space and requirements..." className="min-h-[120px] bg-background" />
                  </div>
                  <Button type="submit" className="w-full text-base h-12 mt-2">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-secondary text-white/80 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm text-primary-foreground font-serif font-bold text-sm">
                  7*
                </div>
                <span className="font-serif font-bold text-xl text-white">
                  7 Star Interior
                </span>
              </div>
              <p className="mb-6 text-sm">Premium interior design studio in Patna delivering luxury, comfort, and functionality to residential and commercial spaces.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><FaYoutube /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><FaPinterestP /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-primary transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">Pricing</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">Residential Interior</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Modular Kitchen</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Office Interior</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Turnkey Projects</li>
                <li className="hover:text-primary transition-colors cursor-pointer">3D Visualization</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span>info@7starinterior.com</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} 7 Star Interior. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
