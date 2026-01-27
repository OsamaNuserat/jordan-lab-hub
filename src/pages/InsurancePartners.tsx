
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import logos (reusing the same imports would be better if extracted to a data file, 
// for now ensuring we have them or move data to a shared location. 
// Plan: I will assume I need to copy imports or better, create a shared data file.
// Given constraints, I will re-import here to be safe and quick, then refactor if needed.
// Actually, let's just duplicate the imports for now as it's cleaner than refactoring the whole data structure in one go without user request.
import globeMed from '@/assets/insurance/globemed-logo-png_seeklogo-349787.png';
import omniCare from '@/assets/insurance/images (1).png';
import medService from '@/assets/insurance/images (2).png';
import natHealth from '@/assets/insurance/images (3).png';
import islamic from '@/assets/insurance/images (4).jpg';
import gig from '@/assets/insurance/images (5).png';
import arabBank from '@/assets/insurance/images.jpeg';
import solidarity from '@/assets/insurance/1_7.jpg';
import barAssociation from '@/assets/insurance/Jordan_Bar_Association-logo.png';
import euroArab from '@/assets/insurance/euro_arab_insurance_group-02.jpg';
import engineers from '@/assets/insurance/notAvailable.png';
import medNet from '@/assets/insurance/200200.jpeg';
import medExa from '@/assets/insurance/images (1).jpeg';
import newton from '@/assets/insurance/newton-01.jpg';

const companies = [
  { name: 'GlobeMed', logo: globeMed },
  { name: 'Omni Care', logo: omniCare },
  { name: 'Med Service', logo: medService },
  { name: 'Nat Health', logo: natHealth },
  { name: 'The Islamic Insurance Co', logo: islamic },
  { name: 'GIG', logo: gig },
  { name: 'Arab Bank', logo: arabBank },
  { name: 'Solidarity', logo: solidarity },
  { name: 'Jordan Bar Association', logo: barAssociation },
  { name: 'Euro Arab Insurance', logo: euroArab },
  { name: 'Jordan Engineers Association', logo: engineers },
  { name: 'MedNet', logo: medNet },
  { name: 'MedExa', logo: medExa },
  { name: 'Newton Insurance', logo: newton },
];

const InsurancePartners = () => {
    const { t, isRTL } = useLanguage();

    return (
        <Layout>
            <div className="py-20 md:py-28 bg-background">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                            {t("insurance.pageTitle")}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t("insurance.pageDesc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {companies.map((company, index) => (
                            <div 
                                key={index} 
                                className="bg-card border border-border rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 group hover:border-primary/20 aspect-[3/2]"
                            >
                                <img 
                                    src={company.logo} 
                                    alt={company.name} 
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" asChild>
                            <Link to="/" className="gap-2">
                                {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                                {t("nav.home")}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default InsurancePartners;
