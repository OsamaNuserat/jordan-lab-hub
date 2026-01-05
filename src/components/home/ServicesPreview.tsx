import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Activity, 
  Heart, 
  Microscope, 
  TestTube,
  Dna,
  ArrowRight 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      titleKey: "services.bloodTests",
      descKey: "services.bloodTestsDesc",
    },
    {
      icon: Activity,
      titleKey: "services.hormoneAnalysis",
      descKey: "services.hormoneAnalysisDesc",
    },
    {
      icon: Heart,
      titleKey: "services.diabetesScreening",
      descKey: "services.diabetesScreeningDesc",
    },
    {
      icon: Dna,
      titleKey: "services.pcrTesting",
      descKey: "services.pcrTestingDesc",
    },
    {
      icon: Microscope,
      titleKey: "services.pathology",
      descKey: "services.pathologyDesc",
    },
    {
      icon: TestTube,
      titleKey: "services.generalDiagnostics",
      descKey: "services.generalDiagnosticsDesc",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">
              {t("services.viewAll")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
