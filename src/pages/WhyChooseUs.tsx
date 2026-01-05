import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Timer, 
  Stethoscope,
  Users,
  Microscope,
  Award,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: ShieldCheck,
      titleKey: "whyPage.isoAccredited",
      descKey: "whyPage.isoAccreditedDesc",
    },
    {
      icon: Timer,
      titleKey: "whyPage.fastTurnaround",
      descKey: "whyPage.fastTurnaroundDesc",
    },
    {
      icon: Stethoscope,
      titleKey: "whyPage.expertTeam",
      descKey: "whyPage.expertTeamDesc",
    },
    {
      icon: Microscope,
      titleKey: "whyPage.advancedTech",
      descKey: "whyPage.advancedTechDesc",
    },
    {
      icon: Users,
      titleKey: "whyPage.patientCentered",
      descKey: "whyPage.patientCenteredDesc",
    },
    {
      icon: Award,
      titleKey: "whyPage.experience",
      descKey: "whyPage.experienceDesc",
    },
  ];

  const commitments = [
    "whyPage.commitment1",
    "whyPage.commitment2",
    "whyPage.commitment3",
    "whyPage.commitment4",
    "whyPage.commitment5",
    "whyPage.commitment6",
  ];

  const stats = [
    { value: "15+", labelKey: "whyPage.yearsExp" },
    { value: "50,000+", labelKey: "whyPage.testsYear" },
    { value: "100+", labelKey: "whyPage.testTypes" },
    { value: "99%", labelKey: "whyPage.satisfaction" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("whyPage.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              {t("whyPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("whyPage.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.titleKey}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-hero-gradient">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <p className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t("whyPage.commitmentBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t("whyPage.commitmentTitle")}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t("whyPage.commitmentDesc")}
              </p>
              <ul className="space-y-3">
                {commitments.map((commitmentKey) => (
                  <li key={commitmentKey} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{t(commitmentKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/50 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                {t("whyPage.visitTitle")}
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{t("whyPage.location")}</p>
                    <p className="text-sm text-muted-foreground">{t("cta.address")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{t("whyPage.workingHours")}</p>
                    <p className="text-sm text-muted-foreground">{t("whyPage.workingHoursVal")}</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full" asChild>
                <Link to="/contact">
                  {t("cta.contactUs")}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
