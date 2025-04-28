
import { ArrowRight, Feather } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Map with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-[url('/ancient-map-bg.jpg')] bg-cover bg-center opacity-20 animate-drift"
        style={{ backgroundSize: '110% 110%' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medieval text-gold mb-6">
              Ishita Verma
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medieval text-silver mb-6">
              The Digital Assassin
            </h2>
            <p className="text-silver-light max-w-lg mb-8">
              Hi! I'm Ishita Verma, a passionate Web Developer and UI/UX enthusiast. 
              I love turning creative ideas into real-world websites and applications.
            </p>
            
            <Button 
              className="bg-gold hover:bg-gold-dark text-charcoal font-medieval flex items-center gap-2"
            >
              <span>Accept Mission</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative animate-float">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-gold/50 shadow-[0_0_30px] shadow-gold/20">
                <AvatarImage 
                  src="/avatar-assassin.jpg" 
                  alt="Ishita Verma - Digital Assassin Avatar"
                  className="object-cover"
                />
                <AvatarFallback className="bg-navy-dark text-gold text-3xl font-medieval">IV</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-navy border-2 border-gold flex items-center justify-center">
                <span className="font-medieval text-gold text-sm">Master</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden feather */}
      <div className="absolute bottom-10 right-10 opacity-30 hover:opacity-70 transition-opacity cursor-pointer feather-collectible" data-feather-id="hero">
        <Feather className="w-8 h-8 text-gold animate-float" style={{animationDuration: '3s'}} />
      </div>
    </div>
  );
};

export default Hero;
