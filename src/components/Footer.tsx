import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import logo from "/AcmeSecure.png";

const Footer = () => {
  return (
    <footer className="bg-section-dark border-t border-primary/10">
      <div className="container mx-auto section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="AcmeSecure" className="h-24 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Professional security solutions across the United Kingdom. Trust.
              Protect. Secure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/60 text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "CCTV",
                "Manned Guarding",
                "Event Security",
                "Dog Security",
              ].map((s) => (
                <Link
                  key={s}
                  to={`/contact?service=${encodeURIComponent(s)}`}
                  className="text-primary-foreground/60 text-sm hover:text-primary transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:enquiries@acmesecure.co.uk"
                className="flex items-center gap-2 text-primary-foreground/60 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />{" "}
                enquiries@acmesecure.co.uk
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" /> London, United
                Kingdom
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://www.facebook.com/share/1QXrzbhibz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="text-white hover:text-[#1877F2] transition-colors duration-300 cursor-pointer h-8 w-8"
                />
              </a>
              <a
                href="https://www.instagram.com/acmesecure?igsh=djZmcXZ4MXp1bG1m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white hover:text-[#E4405F] transition-colors duration-300 cursor-pointer h-8 w-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/acmesecure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white hover:text-[#0A66C2] transition-colors duration-300 cursor-pointer h-8 w-8"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} AcmeSecure. All rights reserved.
            Powered by{" "}
            <a
              href="https://www.devitytechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Devity Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
