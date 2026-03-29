import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import { updatePageMeta } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    updatePageMeta({
      title: "AcmeSecure | Professional Security Services UK",
      description:
        "Award-winning security services across the UK. CCTV, manned guarding, event security, dog security and more. Free consultation.",
      keywords:
        "security services UK, CCTV installation, manned guarding, event security, dog security, London security, professional security",
      url: "https://acmesecure.co.uk/",
      ogImage: "https://acmesecure.co.uk/AcmeSecure.png",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesGrid limit={4} />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
};

export default Index;
