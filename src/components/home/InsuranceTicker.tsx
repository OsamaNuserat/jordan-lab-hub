
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
  const { lang } = useLanguage();

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {lang === 'ar' ? 'شركات التامين المعتمده لدينا' : 'Our Accredited Insurance Companies'}
        </h2>
      </div>
      
      <div className="relative w-full">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex w-max animate-scroll flex-nowrap">
          {[...companies, ...companies].map((company, index) => (
            <div 
              key={`${company.name}-${index}`} 
              className="flex-shrink-0 flex items-center justify-center w-[150px] h-[80px] mx-8 transition-transform hover:scale-110 duration-300"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTicker;
