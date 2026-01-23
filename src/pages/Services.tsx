import Layout from "@/components/layout/Layout";
import { 
  Droplets, 
  Activity, 
  Heart, 
  Microscope, 
  TestTube,
  Dna,
  Shield,
  Beaker,
  Utensils,
  Timer,
  Users
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Packages from "@/components/Packages";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      titleKey: "servicesPage.premarital",
      descKey: "servicesPage.premaritalDesc",
      tests: [],
    },
    {
      icon: Droplets,
      titleKey: "servicesPage.blood",
      descKey: "servicesPage.bloodDesc",
      tests: [],
    },
    {
      icon: Beaker,
      titleKey: "servicesPage.chemistry",
      descKey: "servicesPage.chemistryDesc",
      tests: [],
    },
    {
      icon: TestTube,
      titleKey: "servicesPage.semen",
      descKey: "servicesPage.semenDesc",
      tests: [],
    },
    {
      icon: Activity,
      titleKey: "servicesPage.cancer",
      descKey: "servicesPage.cancerDesc",
      tests: [],
    },
    {
      icon: Microscope,
      titleKey: "servicesPage.histopathology",
      descKey: "servicesPage.histopathologyDesc",
      tests: [],
    },
    {
      icon: Shield,
      titleKey: "servicesPage.virology",
      descKey: "servicesPage.virologyDesc",
      tests: [],
    },
    {
      icon: Timer,
      titleKey: "servicesPage.coagulation",
      descKey: "servicesPage.coagulationDesc",
      tests: [],
    },
    {
      icon: Activity, // Reusing Activity as it fits hormones too 
      titleKey: "servicesPage.hormones",
      descKey: "servicesPage.hormonesDesc",
      tests: [],
    },
    {
      icon: Dna,
      titleKey: "servicesPage.genetics",
      descKey: "servicesPage.geneticsDesc",
      tests: [],
    },
    {
      icon: Utensils,
      titleKey: "servicesPage.foodSafety",
      descKey: "servicesPage.foodSafetyDesc",
      tests: [],
    },
  ];

  const steps = [
    { step: "01", titleKey: "servicesPage.step1", descKey: "servicesPage.step1Desc" },
    { step: "02", titleKey: "servicesPage.step2", descKey: "servicesPage.step2Desc" },
    { step: "03", titleKey: "servicesPage.step3", descKey: "servicesPage.step3Desc" },
    { step: "04", titleKey: "servicesPage.step4", descKey: "servicesPage.step4Desc" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("servicesPage.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              {t("servicesPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("servicesPage.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {t(service.descKey)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tests.length > 0 && service.tests.map((test) => (
                        <span
                          key={test}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <Packages />

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("servicesPage.processBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t("servicesPage.processTitle")}
            </h2>
            <p className="text-muted-foreground">
              {t("servicesPage.processDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
