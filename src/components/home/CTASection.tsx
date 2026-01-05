import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            {t("cta.title")}<br />{t("cta.titleLine2")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="heroOutline" size="xl" asChild className="bg-primary-foreground/10">
              <a href="tel:+962-6-000-0000">
                <Phone className="w-5 h-5" />
                {t("cta.callUs")}
              </a>
            </Button>
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/contact">
                {t("cta.contactUs")}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="w-5 h-5" />
            <span>{t("cta.address")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
