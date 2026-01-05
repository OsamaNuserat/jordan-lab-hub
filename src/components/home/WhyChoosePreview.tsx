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

const features = [
  {
    icon: ShieldCheck,
    title: "Accredited Laboratory",
    description: "ISO certified with international quality standards",
  },
  {
    icon: Timer,
    title: "Quick Turnaround",
    description: "Most results available within 24-48 hours",
  },
  {
    icon: Stethoscope,
    title: "Expert Pathologists",
    description: "Board-certified specialists with years of experience",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description: "Comfortable environment with compassionate staff",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50,000+", label: "Tests Per Year" },
  { value: "100+", label: "Test Types" },
  { value: "99%", label: "Accuracy Rate" },
];

const WhyChoosePreview = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Trusted by Thousands of Patients Across Jordan
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence, accuracy, and patient care has made us 
              one of the most trusted medical laboratories in Amman. We combine 
              state-of-the-art technology with experienced professionals.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/why-choose-us">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Stats Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 card-shadow">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`text-center ${index < 2 ? "pb-8 border-b border-border" : ""}`}
                >
                  <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <p className="text-foreground font-medium">
                  Committed to accuracy and patient satisfaction
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
