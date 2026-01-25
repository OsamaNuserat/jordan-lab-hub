import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChoosePreview from "@/components/home/WhyChoosePreview";

import HomeSampling from "@/components/home/HomeSampling";
import InsuranceTicker from "@/components/home/InsuranceTicker";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <HomeSampling />
      <WhyChoosePreview />
      
      <InsuranceTicker />
      
      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-[450px] bg-secondary/20">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.1132287180185!2d35.86362667605506!3d31.984945874004627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca112d2c47281%3A0xda86f8457029afba!2sOne%20Lab!5e0!3m2!1sen!2sjo!4v1769168477423!5m2!1sen!2sjo" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
