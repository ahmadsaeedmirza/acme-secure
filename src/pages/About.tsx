import { Shield, Target, Eye, Users } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import heroAbout from "@/assets/hero-about.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency and honesty in every interaction.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in every service we deliver.",
  },
  {
    icon: Eye,
    title: "Vigilance",
    description:
      "Proactive security measures to prevent incidents before they occur.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work closely with clients to understand and meet their unique needs.",
  },
];

const About = () => {
  return (
    <>
      <PageHero
        image={heroAbout}
        title="About AcmeSecure"
        subtitle="A trusted name in UK security, dedicated to protecting what matters most."
      />
      {/* <section className="pt-32 pb-12 px-4 bg-section-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            About AcmeSecure
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            A trusted name in UK security, dedicated to protecting what matters
            most.
          </p>
        </div>
      </section> */}

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Your Trusted Security Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AcmeSecure is a leading provider of professional security
                services across the United Kingdom. With a team of highly
                trained, SIA-licensed officers, we deliver tailored security
                solutions that protect businesses, events, and properties of all
                sizes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded on the principles of trust, protection, and security, we
                have built a reputation for reliability, professionalism, and
                excellence. Our clients range from small businesses to large
                corporations, all benefiting from our bespoke approach to
                security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We invest in our people, providing ongoing training and
                development to ensure our team remains at the forefront of the
                security industry. Every officer is vetted, licensed, and
                committed to delivering the highest standard of service.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutTeam}
                alt="AcmeSecure team"
                className="w-full h-auto"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default About;
