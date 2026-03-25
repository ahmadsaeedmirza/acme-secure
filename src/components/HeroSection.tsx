import { Link } from "react-router-dom";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HIGHLIGHTS = [
  "SIA Licensed Officers",
  "24/7 Operations Centre",
  "Nationwide Coverage",
  "Rapid Response Teams",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="container mx-auto relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Trust. Protect. Secure.
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-900 text-primary-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Security <br />
            <span className="text-gradient">Solutions</span> Across the UK
          </h1>

          <p
            className="text-lg text-primary-foreground/70 mb-8 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            AcmeSecure delivers reliable, professional security services
            tailored to your needs. From manned guarding to advanced CCTV, we
            keep your people and assets safe.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-base px-8"
              >
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
              >
                Our Services
              </Button>
            </Link>
          </div>

          <div
            className="grid grid-cols-2 gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
