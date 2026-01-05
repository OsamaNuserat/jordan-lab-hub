import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Users, 
  Timer, 
  ShieldCheck,
  Stethoscope,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChoosePreview = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: ShieldCheck,
      titleKey: "whyChoose.accredited",
      descKey: "whyChoose.accreditedDesc",
    },
    {
      icon: Timer,
      titleKey: "whyChoose.quickTurnaround",
      descKey: "whyChoose.quickTurnaroundDesc",
    },
    {
      icon: Stethoscope,
      titleKey: "whyChoose.expertPathologists",
      descKey: "whyChoose.expertPathologistsDesc",
    },
    {
      icon: Users,
      titleKey: "whyChoose.patientCentered",
      descKey: "whyChoose.patientCenteredDesc",
    },
  ];

  const stats = [
    { value: "15+", labelKey: "whyChoose.yearsExperience" },
    { value: "50,000+", labelKey: "whyChoose.testsPerYear" },
    { value: "100+", labelKey: "whyChoose.testTypes" },
    { value: "99%", labelKey: "whyChoose.accuracyRate" },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("whyChoose.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {t("whyChoose.title")}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("whyChoose.description")}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.titleKey} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{t(feature.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/why-choose-us">
                {t("whyChoose.learnMore")}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          {/* Stats Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 card-shadow">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.labelKey} 
                  className={`text-center ${index < 2 ? "pb-8 border-b border-border" : ""}`}
                >
                  <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{t(stat.labelKey)}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <p className="text-foreground font-medium">
                  {t("whyChoose.commitment")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePreview;
