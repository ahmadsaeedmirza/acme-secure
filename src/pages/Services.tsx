import { useEffect } from "react";
import ServicesGrid from "@/components/ServicesGrid";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import heroServices from "@/assets/hero-services.jpg";
import { updatePageMeta } from "@/lib/seo";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updatePageMeta({
      title: "Security Services | CCTV, Manned Guarding, Event Security UK",
      description:
        "Comprehensive security solutions tailored to your needs. CCTV installation, manned guarding, event security, and dog security across the UK.",
      keywords:
        "security services, CCTV, manned guarding, event security, dog security, UK, London, professional guards",
      url: "https://www.acmesecure.co.uk/services",
      ogImage: "https://www.acmesecure.co.uk/AcmeSecure.png",
    });
  }, []);

  return (
    <>
      <PageHero
        image={heroServices}
        title="Our Services"
        subtitle="Comprehensive security solutions tailored to protect your people, property, and assets across the UK."
        altText="Professional security services including CCTV, manned guarding, event security and dog security"
      />
      <ServicesGrid showHeading={false} />
      <CTABanner />
    </>
  );
};

export default Services;
