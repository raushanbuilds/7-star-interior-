import About from "@/components/site/About";
import BeforeAfter from "@/components/site/BeforeAfter";
import Blog from "@/components/site/Blog";
import Contact from "@/components/site/Contact";
import FloatingCTA from "@/components/site/FloatingCTA";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";

import Portfolio from "@/components/site/Portfolio";
import Process from "@/components/site/Process";
import Services from "@/components/site/Services";
import Testimonials from "@/components/site/Testimonials";

const Index = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "7 Star Interior Patna",
    image: "/og-image.jpg",
    telephone: "+91-9297766777",
    address: {
      "@type": "PostalAddress",
      streetAddress: "372, SMT Lalmuni Devi, Rajdeo Singh, Devi Asthan Rd, Jaganpura, R.K. Nagar",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800027",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    description: "Premium interior designers in Patna for residential, modular kitchen, office and turnkey projects.",
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Process />
        
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
