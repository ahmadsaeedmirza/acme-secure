import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

import serviceCctv from "@/assets/service-cctv.jpg";
import serviceDog from "@/assets/service-dog.jpg";
import serviceRetail from "@/assets/service-retail.jpg";
import serviceManned from "@/assets/service-manned.jpg";
import serviceConcierge from "@/assets/service-concierge.jpg";
import serviceEvent from "@/assets/service-event.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceWarehouse from "@/assets/service-warehouse.jpg";

const IMAGE_MAP: Record<string, string> = {
  "service-cctv": serviceCctv,
  "service-dog": serviceDog,
  "service-retail": serviceRetail,
  "service-manned": serviceManned,
  "service-concierge": serviceConcierge,
  "service-event": serviceEvent,
  "service-construction": serviceConstruction,
  "service-warehouse": serviceWarehouse,
};

interface ServicesGridProps {
  limit?: number;
  showHeading?: boolean;
}

const ServicesGrid = ({ limit, showHeading = true }: ServicesGridProps) => {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto">
        {showHeading && (
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Our Security Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We provide comprehensive security solutions to protect your
              business, property, and people across the United Kingdom.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group relative rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGE_MAP[service.image]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View All Services <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
