import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from '@/contexts/LanguageContext';

// Import logos
import globeMed from '@/assets/insurance/globemed-logo-png_seeklogo-349787.png';
import omniCare from '@/assets/insurance/images (1).png';
import medService from '@/assets/insurance/images (2).png';
import natHealth from '@/assets/insurance/images (3).png';
import islamic from '@/assets/insurance/images (4).jpg';
import gig from '@/assets/insurance/images (5).png';
import arabBank from '@/assets/insurance/images.jpeg';
import solidarity from '@/assets/insurance/1_7.jpg'; // Guessing this is "First" => Solidarity
import barAssociation from '@/assets/insurance/Jordan_Bar_Association-logo.png';
import euroArab from '@/assets/insurance/euro_arab_insurance_group-02.jpg';
import engineers from '@/assets/insurance/notAvailable.png'; // Tentative
import medNet from '@/assets/insurance/200200.jpeg'; // Tentative
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

const InsuranceTicker = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("insurance.title")}
            </h2>
        </div>
      
        <div className="relative max-w-5xl mx-auto mb-10">
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {companies.map((company, index) => (
                        <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <div className="flex items-center justify-center p-6 h-32 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <img 
                                        src={company.logo} 
                                        alt={company.name} 
                                        className="max-w-full max-h-full object-contain mix-blend-multiply"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>

        <div className="text-center">
            <Button variant="outline" asChild className="group">
                <Link to="/insurance-partners">
                    {t("insurance.viewAll")}
                    <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTicker;
