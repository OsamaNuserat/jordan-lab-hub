import Layout from "@/components/layout/Layout";
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Building,
  Clock
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "We maintain the highest standards of precision in every test we perform.",
  },
  {
    icon: Heart,
    title: "Patient Care",
    description: "Your comfort and well-being are at the center of everything we do.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "We understand the importance of quick results and work efficiently.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous improvement and adherence to international standards.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Your Trusted Partner in Medical Diagnostics
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, Medical Lab Name has been providing accurate, reliable 
              laboratory services to healthcare providers and patients across Jordan.
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
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Legacy of Excellence in Healthcare
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, Medical Lab Name began with a simple mission: to provide 
                  the most accurate and accessible laboratory services to the people of Jordan.
                </p>
                <p>
                  Over the years, we have grown from a small facility to a comprehensive 
                  diagnostic center equipped with state-of-the-art technology and staffed 
                  by highly qualified professionals.
                </p>
                <p>
                  Today, we serve thousands of patients annually, partnering with hospitals, 
                  clinics, and healthcare providers throughout Amman and beyond. Our commitment 
                  to quality and patient care remains at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Modern Facility</h3>
                  <p className="text-sm text-muted-foreground">State-of-the-art equipment</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Certified pathologists & technicians</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">ISO Certified</h3>
                  <p className="text-sm text-muted-foreground">International quality standards</p>
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
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To deliver accurate, timely, and affordable laboratory services that empower 
                healthcare providers and patients to make informed medical decisions. We are 
                committed to maintaining the highest standards of quality while ensuring 
                accessible care for all.
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To be the leading medical laboratory in Jordan, recognized for our commitment 
                to excellence, innovation, and patient-centered care. We envision a future 
                where every individual has access to world-class diagnostic services.
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
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-muted-foreground">
              These core values guide our work and define who we are as an organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
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
