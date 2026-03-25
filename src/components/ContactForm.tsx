import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES } from "@/lib/services";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preSelectedService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.service) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Enquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:enquiries@acmesecure.co.uk?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your email client should have opened. Please send the email to complete your enquiry.");
    }, 1000);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you need a tailored security solution or want to learn more about our services, our team is ready to help. Fill out the form and we'll get back to you promptly.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Email</h4>
                  <a href="mailto:enquiries@acmesecure.co.uk" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    enquiries@acmesecure.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                <Input
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
                <Input
                  type="email"
                  placeholder="john@company.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                <Input
                  type="tel"
                  placeholder="07xxx xxx xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  maxLength={20}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  maxLength={100}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-1.5 block">Service Required *</label>
              <Select value={formData.service} onValueChange={(val) => setFormData({ ...formData, service: val })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea
                placeholder="Tell us about your security requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                maxLength={1000}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold" disabled={isSubmitting}>
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Opening Email Client..." : "Send Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
