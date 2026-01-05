import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Activity, 
  Heart, 
  Microscope, 
  TestTube,
  Dna,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Blood Tests",
    description: "Complete blood count, blood chemistry, and comprehensive panels for thorough health assessment.",
  },
  {
    icon: Activity,
    title: "Hormone Analysis",
    description: "Thyroid function, reproductive hormones, and metabolic hormone testing with precision.",
  },
  {
    icon: Heart,
    title: "Diabetes Screening",
    description: "Glucose testing, HbA1c monitoring, and insulin level assessments for diabetes management.",
  },
  {
    icon: Dna,
    title: "PCR Testing",
    description: "Advanced molecular diagnostics for infectious diseases and genetic testing.",
  },
  {
    icon: Microscope,
    title: "Pathology",
    description: "Tissue analysis, cytology, and histopathology services for accurate diagnosis.",
  },
  {
    icon: TestTube,
    title: "General Diagnostics",
    description: "Urinalysis, stool tests, and other routine laboratory examinations.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Comprehensive Laboratory Services
          </h2>
          <p className="text-muted-foreground">
            We offer a wide range of diagnostic tests using advanced technology 
            and performed by experienced professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
