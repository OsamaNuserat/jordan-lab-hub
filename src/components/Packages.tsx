
import { packages } from "@/data/packages";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Tag, Activity, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


const Packages = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-primary/5 blur-3xl opacity-60"></div>
            <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-secondary/30 blur-3xl opacity-60"></div>
        </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("packages.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {t("packages.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("packages.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="flex flex-col bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover:border-primary/20"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-border/50 bg-secondary/30">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pkg.title[lang]}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {pkg.price.discounted} {t("packages.currency")}
                  </span>
                  {pkg.price.original > 0 && (
                    <span className="text-sm text-muted-foreground line-through decoration-destructive/60">
                      {pkg.price.original} {t("packages.currency")}
                    </span>
                  )}
                </div>
                {pkg.price.original > 0 && (
                   <div className="mt-2 text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 inline-block px-2 py-1 rounded-full">
                     {Math.round(((pkg.price.original - pkg.price.discounted) / pkg.price.original) * 100)}% OFF
                   </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-primary" />
                        {t("packages.testsIncluded")}
                    </h4>
                    <ul className="space-y-3">
                    {pkg.tests.map((test, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-tight">{test[lang]}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                
                <div className="mt-auto pt-6">
                    <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                        <a href="tel:+962786511175">
                            <Tag className="w-4 h-4" />
                            {t("packages.bookNow")}
                        </a>
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
