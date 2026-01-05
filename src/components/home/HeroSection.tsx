import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern medical laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6 animate-fade-up">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Medical Diagnostics</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Precision Lab Results You Can{" "}
            <span className="text-primary">Trust</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            State-of-the-art medical laboratory services in Amman, Jordan. 
            We combine advanced technology with expert care to deliver accurate 
            diagnostic results for your health needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-primary-foreground">Fast Results</p>
              <p className="text-xs text-primary-foreground/60">24-48 Hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-primary-foreground">Certified Lab</p>
              <p className="text-xs text-primary-foreground/60">ISO Accredited</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-primary-foreground">Expert Team</p>
              <p className="text-xs text-primary-foreground/60">15+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
