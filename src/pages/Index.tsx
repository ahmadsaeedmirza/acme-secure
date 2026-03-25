import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";

const Index = () => {
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
