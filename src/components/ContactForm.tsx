import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/services";
import {
  CheckCircle,
  AlertCircle,
  X,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// EmailJS Configuration - Load from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
const EMAILJS_TEMPLATE_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get("service") || "";
  const contactFormRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preSelectedService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Scroll to contact form when service is pre-selected or on page load
  useEffect(() => {
    const scrollToForm = () => {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      const elementToScroll = isMobile
        ? document.querySelector(".contact-form")
        : contactFormRef.current;

      if (elementToScroll) {
        setTimeout(() => {
          // Get navbar height to account for fixed positioning
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const elementPosition =
            elementToScroll.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    // Scroll if service is pre-selected
    if (preSelectedService) {
      scrollToForm();
    }
  }, [preSelectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service
    ) {
      setToast({
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    // Check if EmailJS is configured
    if (
      !EMAILJS_PUBLIC_KEY ||
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ADMIN ||
      !EMAILJS_TEMPLATE_USER
    ) {
      setToast({
        message:
          "EmailJS is not properly configured. Check your .env.local file.",
        type: "error",
      });
      console.error("Missing EmailJS config:", {
        EMAILJS_PUBLIC_KEY: !!EMAILJS_PUBLIC_KEY,
        EMAILJS_SERVICE_ID: !!EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ADMIN: !!EMAILJS_TEMPLATE_ADMIN,
        EMAILJS_TEMPLATE_USER: !!EMAILJS_TEMPLATE_USER,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Template variables for both emails
      const templateParams = {
        to_email_admin: "ahmadsaeedcodes@gmail.com",
        to_email_user: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_company: formData.company,
        user_service: formData.service,
        user_message: formData.message,
      };

      // Send email to admin
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ADMIN,
        templateParams,
      );

      // Send auto-response to user
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_USER,
        templateParams,
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: preSelectedService,
        message: "",
      });

      setToast({
        message:
          "Thank you! Your enquiry has been sent. We'll get back to you shortly.",
        type: "success",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setToast({
        message:
          "Failed to send enquiry. Please try again or contact us directly.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={contactFormRef} className="section-padding bg-background">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div
            className={`
              flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg 
              backdrop-blur-sm border font-heading font-semibold text-base
              ${
                toast.type === "success"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                  : "bg-red-50 border-red-200 text-red-900"
              }
            `}
          >
            {toast.type === "success" ? (
              <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
            )}
            <p className="max-w-sm">{toast.message}</p>
            <button
              onClick={() => setToast(null)}
              className="ml-2 flex-shrink-0 hover:opacity-70 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you need a tailored security solution or want to learn
              more about our services, our team is ready to help. Fill out the
              form and we'll get back to you promptly.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Email
                  </h4>
                  <a
                    href="mailto:enquiries@acmesecure.co.uk"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    enquiries@acmesecure.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Location
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    London, United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Phone
                  </h4>
                  <a
                    href="tel:+447919572959"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    07919572959
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-lg p-8 shadow-lg border border-border contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Full Name *
                </label>
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  maxLength={255}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  maxLength={20}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Company
                </label>
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  maxLength={100}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Service Required *
              </label>
              <Select
                value={formData.service}
                onValueChange={(val) =>
                  setFormData({ ...formData, service: val })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Message
              </label>
              <Textarea
                placeholder="Tell us about your security requirements..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                maxLength={1000}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
              disabled={isSubmitting}
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
