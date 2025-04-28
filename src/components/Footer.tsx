
import { MapPin, Feather } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-navy-dark py-12 border-t border-gold/20" id="sanctum">
      <div 
        className="absolute inset-0 overflow-hidden"
      >
        {/* Rune animations - Add subtle floating elements */}
        <div className="absolute top-10 left-[10%] w-2 h-2 rounded-full bg-gold/30 animate-float opacity-60"></div>
        <div className="absolute top-20 left-[30%] w-1 h-1 rounded-full bg-gold/20 animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-15 left-[70%] w-2 h-2 rounded-full bg-gold/30 animate-float opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-25 left-[85%] w-1.5 h-1.5 rounded-full bg-gold/20 animate-float opacity-30" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-medieval text-xl text-gold mb-2">Secret Sanctum</h2>
          <p className="text-silver-light text-sm">To contact the assassin, leave a message with the guild...</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <MapPin className="text-gold h-5 w-5" />
            <span className="font-medieval text-gold">Digital Assassin Guild</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-silver text-sm">© 2025 Ishita Verma | All rights reserved</div>
            <div className="text-silver-dark text-xs mt-2">Contact: ishita.verma@email.com</div>
            <div className="text-silver-dark text-xs mt-1">Phone: +91-9876543210</div>
          </div>
        </div>
        
        {/* Hidden feather - part of the collection game */}
        <div className="absolute bottom-5 right-5 opacity-20 hover:opacity-60 transition-opacity cursor-pointer feather-collectible" data-feather-id="footer">
          <Feather className="w-6 h-6 text-gold" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
