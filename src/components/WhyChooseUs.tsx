import { Shield, Clock, Users, Award, Headphones, MapPin } from "lucide-react";

const REASONS = [
  { icon: Shield, title: "SIA Licensed", description: "All our officers are fully SIA licensed and vetted to the highest standards." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock operations centre providing constant monitoring and rapid response." },
  { icon: Users, title: "Expert Team", description: "Highly trained, experienced professionals dedicated to your safety." },
  { icon: Award, title: "Industry Accredited", description: "Fully accredited and compliant with all UK security industry standards." },
  { icon: Headphones, title: "Dedicated Manager", description: "A dedicated account manager for seamless communication and service." },
  { icon: MapPin, title: "UK Wide Coverage", description: "Operating across England, Scotland, and Wales with local expertise." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-section-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why AcmeSecure</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-3">
            Why Choose Us
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto">
            With years of experience in the UK security industry, we deliver dependable, professional services you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex gap-4 p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors bg-primary/5">
              <reason.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">{reason.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
