import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Need a Lab Test?<br />We're Here to Help
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Visit our laboratory in Amman or contact us to learn more about our services. 
            Our friendly staff is ready to assist you with your diagnostic needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="heroOutline" size="xl" asChild className="bg-primary-foreground/10">
              <a href="tel:+962-6-000-0000">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="w-5 h-5" />
            <span>123 Medical District, Amman, Jordan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
