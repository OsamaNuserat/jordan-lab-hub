import { useLanguage } from "@/contexts/LanguageContext";
import homeSampling1 from "@/assets/home-sampling-1.jpg";
import homeSampling2 from "@/assets/home-sampling-2.jpg";
import { CheckCircle2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const HomeSampling = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 skew-x-12 transform -translate-x-1/2" />
        
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
              {t("homeSampling.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("homeSampling.description")}
            </p>

            <div className="space-y-4 mb-8">
              {[
                "homeSampling.comfort",
                "homeSampling.accuracy",
                "homeSampling.safety"
              ].map((key, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{t(key)}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              {t("homeSampling.bookNow")}
            </Link>
          </div>

          {/* Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
                {/* Main Image */}
               <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-card transform rotate-2 hover:rotate-0 transition-transform duration-500 z-20 relative">
                  <img 
                    src={homeSampling1} 
                    alt="Home Sampling Service" 
                    className="w-full h-auto object-cover" 
                  />
               </div>
               
               {/* Secondary Image - Floating */}
               <div className="absolute -bottom-12 -left-12 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-card transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-30 hidden md:block">
                  <img 
                    src={homeSampling2} 
                    alt="Home Sampling Kit" 
                    className="w-full h-auto object-cover" 
                  />
               </div>

                {/* Decorative circles */}
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSampling;
