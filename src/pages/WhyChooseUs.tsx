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

const reasons = [
  {
    icon: ShieldCheck,
    title: "ISO Accredited Laboratory",
    description: "Our laboratory meets international quality standards, ensuring reliable and accurate results you can trust.",
  },
  {
    icon: Timer,
    title: "Fast Turnaround Time",
    description: "Most test results are available within 24-48 hours, helping you and your healthcare provider make timely decisions.",
  },
  {
    icon: Stethoscope,
    title: "Expert Medical Team",
    description: "Board-certified pathologists and experienced laboratory technicians with years of expertise in diagnostic testing.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description: "State-of-the-art diagnostic equipment and automated systems ensure precise and consistent results.",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description: "A comfortable, welcoming environment with compassionate staff dedicated to your well-being.",
  },
  {
    icon: Award,
    title: "15+ Years of Experience",
    description: "Over a decade of trusted service to patients and healthcare providers across Jordan.",
  },
];

const commitments = [
  "Accuracy guaranteed with quality control protocols",
  "Confidential handling of all patient information",
  "Affordable pricing with transparent costs",
  "Convenient location in central Amman",
  "Extended operating hours for your convenience",
  "Partnership with leading healthcare providers",
];

const WhyChooseUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Excellence in Every Test
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover why thousands of patients and healthcare providers in Jordan 
              trust Medical Lab Name for their diagnostic needs.
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
                key={reason.title}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
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
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "50,000+", label: "Tests Per Year" },
              { value: "100+", label: "Test Types Available" },
              { value: "99%", label: "Patient Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
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
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Your Health is Our Priority
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Medical Lab Name, we go beyond just providing test results. 
                We're committed to supporting your healthcare journey with 
                excellence at every step.
              </p>
              <ul className="space-y-3">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/50 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Visit Us Today
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">123 Medical District, Amman, Jordan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p className="text-sm text-muted-foreground">Sat-Thu: 7AM-9PM | Fri: 8AM-2PM</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
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
