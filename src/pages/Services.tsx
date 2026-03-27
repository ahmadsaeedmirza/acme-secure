import { useEffect } from "react";
import ServicesGrid from "@/components/ServicesGrid";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import heroServices from "@/assets/hero-services.jpg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <section className="pt-32 pb-12 px-4 bg-section-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to protect your people, property, and assets across the UK.
          </p>
        </div>
      </section> */}
      <PageHero
        image={heroServices}
        title="Our Services"
        subtitle="Comprehensive security solutions tailored to protect your people, property, and assets across the UK."
      />
      <ServicesGrid showHeading={false} />
      <CTABanner />
    </>
  );
};

export default Services;
