import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";
import { updatePageMeta } from "@/lib/seo";

const Contact = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Scroll to top when navigating to contact page
    window.scrollTo(0, 0);
    updatePageMeta({
      title: "Contact AcmeSecure | Free Security Consultation Quote",
      description:
        "Get in touch with AcmeSecure for a free security consultation and competitive quote. Call 07919572959 or fill our contact form.",
      keywords:
        "contact security, free quote, security consultation, AcmeSecure contact, London security",
      url: "https://www.acmesecure.co.uk/contact",
      ogImage: "https://www.acmesecure.co.uk/AcmeSecure.png",
    });
  }, []);

  return (
    <>
      {/* <section className="pt-32 pb-12 px-4 bg-section-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quote. We're here to help secure your business.
          </p>
        </div>
      </section> */}
      <PageHero
        image={heroContact}
        title="Contact Us"
        subtitle="Get in touch for a free, no-obligation quote. We're here to help secure your business."
        altText="Contact AcmeSecure - professional security services consultation and free quote"
      />
      <ContactForm />
    </>
  );
};

export default Contact;
