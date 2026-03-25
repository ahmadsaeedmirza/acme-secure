export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    slug: "cctv",
    title: "CCTV",
    shortDescription: "Advanced surveillance systems to monitor and protect your premises 24/7.",
    description: "Our state-of-the-art CCTV solutions provide comprehensive surveillance coverage for commercial and residential properties. We design, install, and maintain systems tailored to your specific security requirements.",
    image: "service-cctv",
  },
  {
    slug: "dog-security",
    title: "Dog Security",
    shortDescription: "Highly trained security dogs and handlers for maximum deterrence.",
    description: "Our SIA-licensed dog handlers and trained security dogs provide an unmatched level of deterrence and detection. Ideal for large sites, events, and high-risk environments.",
    image: "service-dog",
  },
  {
    slug: "retail-security",
    title: "Retail Security",
    shortDescription: "Protecting your retail business from theft and antisocial behaviour.",
    description: "Our retail security officers are trained in loss prevention, conflict resolution, and customer service. We help reduce shrinkage while maintaining a welcoming shopping environment.",
    image: "service-retail",
  },
  {
    slug: "manned-guarding",
    title: "Manned Guarding",
    shortDescription: "Professional SIA-licensed security officers for any environment.",
    description: "Our manned guarding service provides trained, SIA-licensed security officers to protect your premises. From access control to patrol duties, our guards ensure your site remains secure.",
    image: "service-manned",
  },
  {
    slug: "concierge-security",
    title: "Concierge Security",
    shortDescription: "Combining security expertise with exceptional front-of-house service.",
    description: "Our concierge security officers provide a professional front-of-house presence while maintaining the highest security standards. Perfect for corporate buildings, luxury residences, and hotels.",
    image: "service-concierge",
  },
  {
    slug: "event-security",
    title: "Event Security",
    shortDescription: "Comprehensive security planning and management for events of all sizes.",
    description: "From intimate corporate gatherings to large-scale festivals, our event security team provides crowd management, access control, and emergency response planning to ensure your event runs safely.",
    image: "service-event",
  },
  {
    slug: "construction-site-security",
    title: "Construction Site Security",
    shortDescription: "Protecting your construction site from theft, vandalism, and trespass.",
    description: "Construction sites are high-value targets for thieves. Our security solutions include manned guarding, CCTV monitoring, and access control to protect your materials, equipment, and personnel.",
    image: "service-construction",
  },
  {
    slug: "warehouse-security",
    title: "Warehouse Security",
    shortDescription: "Safeguarding your warehouse operations and valuable stock.",
    description: "Our warehouse security services protect your goods and premises with a combination of manned guarding, CCTV surveillance, and access control systems tailored to logistics environments.",
    image: "service-warehouse",
  },
];
