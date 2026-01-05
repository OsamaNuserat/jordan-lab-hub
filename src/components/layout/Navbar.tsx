import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.whyChoose"), path: "/why-choose-us" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 nav-blur border-b border-border">
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-semibold text-foreground">{t("nav.labName")}</p>
              <p className="text-xs text-muted-foreground">{t("nav.tagline")}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>
            <a href="tel:+962-6-000-0000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+962 6 000 0000</span>
            </a>
            <Button asChild>
              <Link to="/contact">{t("nav.getInTouch")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex items-center justify-between">
                <a href="tel:+962-6-000-0000" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+962 6 000 0000</span>
                </a>
                <button
                  onClick={() => setLang(lang === "en" ? "ar" : "en")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{lang === "en" ? "العربية" : "English"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
