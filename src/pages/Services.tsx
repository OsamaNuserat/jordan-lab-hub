import Layout from "@/components/layout/Layout";
import { 
  Droplets, 
  Activity, 
  Heart, 
  Microscope, 
  TestTube,
  Dna,
  Baby,
  Pill,
  Shield,
  Beaker
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Complete Blood Count (CBC)",
    description: "Comprehensive analysis of blood cells including red blood cells, white blood cells, and platelets. Essential for detecting infections, anemia, and other conditions.",
    tests: ["Hemoglobin", "Hematocrit", "WBC Count", "Platelet Count", "RBC Indices"],
  },
  {
    icon: Activity,
    title: "Hormone Analysis",
    description: "Detailed hormone level testing to assess thyroid function, reproductive health, and metabolic disorders.",
    tests: ["Thyroid Panel (T3, T4, TSH)", "Testosterone", "Estrogen", "Cortisol", "Prolactin"],
  },
  {
    icon: Heart,
    title: "Diabetes & Metabolic Testing",
    description: "Comprehensive diabetes screening and monitoring including glucose levels and long-term blood sugar control.",
    tests: ["Fasting Blood Glucose", "HbA1c", "Glucose Tolerance Test", "Insulin Levels", "Lipid Profile"],
  },
  {
    icon: Dna,
    title: "PCR & Molecular Diagnostics",
    description: "Advanced molecular testing using PCR technology for accurate detection of infectious diseases and genetic markers.",
    tests: ["COVID-19 PCR", "Hepatitis Panel", "HIV Testing", "STD Screening", "Genetic Testing"],
  },
  {
    icon: Microscope,
    title: "Pathology & Histology",
    description: "Expert analysis of tissue samples and cells for accurate diagnosis of diseases including cancer screening.",
    tests: ["Tissue Biopsy", "Cytology", "Pap Smear", "Fine Needle Aspiration", "Histopathology"],
  },
  {
    icon: TestTube,
    title: "Urinalysis & Stool Tests",
    description: "Routine and comprehensive analysis of urine and stool samples for kidney function, infections, and digestive health.",
    tests: ["Complete Urinalysis", "Urine Culture", "Stool Analysis", "Occult Blood Test", "Parasitology"],
  },
  {
    icon: Shield,
    title: "Immunology & Serology",
    description: "Testing for immune system function, allergies, and autoimmune conditions.",
    tests: ["Allergy Panel", "Autoimmune Markers", "Immunoglobulins", "Rheumatoid Factor", "ANA Test"],
  },
  {
    icon: Baby,
    title: "Prenatal Screening",
    description: "Comprehensive testing for expectant mothers to ensure healthy pregnancy outcomes.",
    tests: ["Blood Type & Rh", "Prenatal Panel", "TORCH Screening", "Glucose Screening", "Genetic Screening"],
  },
  {
    icon: Pill,
    title: "Drug Monitoring",
    description: "Therapeutic drug monitoring and toxicology screening for medication management and safety.",
    tests: ["Drug Levels", "Toxicology Screen", "Therapeutic Monitoring", "Medication Compliance"],
  },
  {
    icon: Beaker,
    title: "Chemistry Panel",
    description: "Comprehensive metabolic panel to assess organ function and overall health status.",
    tests: ["Liver Function", "Kidney Function", "Electrolytes", "Cholesterol Panel", "Cardiac Markers"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Comprehensive Laboratory Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a wide range of diagnostic tests using state-of-the-art equipment 
              and performed by experienced laboratory professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tests.map((test) => (
                        <span
                          key={test}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Getting tested is quick and easy. Here's what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visit Our Lab", desc: "Walk in or make an appointment at our facility" },
              { step: "02", title: "Sample Collection", desc: "Our trained staff will collect your samples" },
              { step: "03", title: "Lab Analysis", desc: "Your samples are analyzed using advanced equipment" },
              { step: "04", title: "Get Results", desc: "Receive accurate results within 24-48 hours" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
