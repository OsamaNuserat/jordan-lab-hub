
const WhatsAppButton = () => {
  const phoneNumber = "962786511175";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 active:scale-95 animate-in fade-in zoom-in duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Logo Container */}
        <div className="relative bg-white rounded-full">
          <img src="/jordan-lab-hub/src/assets/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-14 h-14 md:w-16 md:h-16" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
