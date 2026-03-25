import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Ready to Secure Your Business?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Get in touch today for a free, no-obligation security consultation and
          quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8"
            >
              Request a Quote
            </Button>
          </Link>
          <a href="tel:+44">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            >
              <Phone className="h-4 w-4 mr-2" /> Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
