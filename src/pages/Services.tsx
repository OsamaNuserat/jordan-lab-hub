import Layout from "@/components/layout/Layout";
import { 
  Droplets, 
  Activity, 
  Heart, 
  Microscope, 
  TestTube,
  Dna,
  Baby,
  Pill,
  Shield,
  Beaker
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      titleKey: "servicesPage.cbc",
      descKey: "servicesPage.cbcDesc",
      tests: ["Hemoglobin", "Hematocrit", "WBC Count", "Platelet Count", "RBC Indices"],
    },
    {
      icon: Activity,
      titleKey: "servicesPage.hormones",
      descKey: "servicesPage.hormonesDesc",
      tests: ["Thyroid Panel (T3, T4, TSH)", "Testosterone", "Estrogen", "Cortisol", "Prolactin"],
    },
    {
      icon: Heart,
      titleKey: "servicesPage.diabetes",
      descKey: "servicesPage.diabetesDesc",
      tests: ["Fasting Blood Glucose", "HbA1c", "Glucose Tolerance Test", "Insulin Levels", "Lipid Profile"],
    },
    {
      icon: Dna,
      titleKey: "servicesPage.pcr",
      descKey: "servicesPage.pcrDesc",
      tests: ["COVID-19 PCR", "Hepatitis Panel", "HIV Testing", "STD Screening", "Genetic Testing"],
    },
    {
      icon: Microscope,
      titleKey: "servicesPage.pathology",
      descKey: "servicesPage.pathologyDesc",
      tests: ["Tissue Biopsy", "Cytology", "Pap Smear", "Fine Needle Aspiration", "Histopathology"],
    },
    {
      icon: TestTube,
      titleKey: "servicesPage.urinalysis",
      descKey: "servicesPage.urinalysisDesc",
      tests: ["Complete Urinalysis", "Urine Culture", "Stool Analysis", "Occult Blood Test", "Parasitology"],
    },
    {
      icon: Shield,
      titleKey: "servicesPage.immunology",
      descKey: "servicesPage.immunologyDesc",
      tests: ["Allergy Panel", "Autoimmune Markers", "Immunoglobulins", "Rheumatoid Factor", "ANA Test"],
    },
    {
      icon: Baby,
      titleKey: "servicesPage.prenatal",
      descKey: "servicesPage.prenatalDesc",
      tests: ["Blood Type & Rh", "Prenatal Panel", "TORCH Screening", "Glucose Screening", "Genetic Screening"],
    },
    {
      icon: Pill,
      titleKey: "servicesPage.drugMonitoring",
      descKey: "servicesPage.drugMonitoringDesc",
      tests: ["Drug Levels", "Toxicology Screen", "Therapeutic Monitoring", "Medication Compliance"],
    },
    {
      icon: Beaker,
      titleKey: "servicesPage.chemistry",
      descKey: "servicesPage.chemistryDesc",
      tests: ["Liver Function", "Kidney Function", "Electrolytes", "Cholesterol Panel", "Cardiac Markers"],
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
                      {service.tests.map((test) => (
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
