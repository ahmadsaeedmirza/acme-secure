import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="pt-32 pb-12 px-4 bg-section-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quote. We're here to help secure your business.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Contact;
