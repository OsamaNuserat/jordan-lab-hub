import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">M</span>
              </div>
              <div>
                <p className="font-heading font-semibold">Medical Lab</p>
                <p className="text-xs text-primary-foreground/60">Precision Diagnostics</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Your trusted partner for accurate medical diagnostics and laboratory services in Jordan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Why Choose Us", path: "/why-choose-us" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Blood Tests", "Hormone Analysis", "Diabetes Screening", "PCR Testing", "General Diagnostics"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-sm text-primary-foreground/70">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm text-primary-foreground/70">
                  123 Medical District, Amman, Jordan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+962-6-000-0000" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +962 6 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@medicallab.jo" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  info@medicallab.jo
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary" />
                <div className="text-sm text-primary-foreground/70">
                  <p>Sat - Thu: 7:00 AM - 9:00 PM</p>
                  <p>Friday: 8:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Medical Lab Name. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
