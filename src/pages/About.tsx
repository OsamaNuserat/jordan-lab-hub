import Layout from "@/components/layout/Layout";
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Building,
  Clock
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      titleKey: "about.accuracy",
      descKey: "about.accuracyDesc",
    },
    {
      icon: Heart,
      titleKey: "about.patientCare",
      descKey: "about.patientCareDesc",
    },
    {
      icon: Clock,
      titleKey: "about.timeliness",
      descKey: "about.timelinessDesc",
    },
    {
      icon: Award,
      titleKey: "about.excellence",
      descKey: "about.excellenceDesc",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("about.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t("about.storyBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t("about.storyTitle")}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("about.storyP1")}</p>
                <p>{t("about.storyP2")}</p>
                <p>{t("about.storyP3")}</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{t("about.modernFacility")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.modernFacilityDesc")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{t("about.expertTeam")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.expertTeamDesc")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{t("about.isoCertified")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.isoCertifiedDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-hero-gradient">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">{t("about.missionTitle")}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">{t("about.visionTitle")}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t("about.visionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("about.valuesBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t("about.valuesTitle")}
            </h2>
            <p className="text-muted-foreground">
              {t("about.valuesDesc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.titleKey}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {t(value.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(value.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
