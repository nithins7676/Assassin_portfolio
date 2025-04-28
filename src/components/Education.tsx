
import { ArrowRight } from 'lucide-react';

const Education = () => {
  return (
    <section className="relative py-20 min-h-screen bg-navy-dark" id="education">
      <div 
        className="absolute inset-0 bg-[url('/ancient-map-bg.jpg')] bg-cover bg-center opacity-10"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-medieval text-center text-gold mb-16">
          Education Guild
        </h2>
        
        <div className="max-w-3xl mx-auto ancient-scroll p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
            <div className="w-24 h-24 flex-shrink-0 rounded-full bg-navy border-2 border-gold flex items-center justify-center">
              <span className="font-medieval text-gold text-3xl">VIT</span>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-medieval text-gold mb-2">
                B.Tech in Computer Science
              </h3>
              <p className="text-silver mb-4">VIT University, Vellore (2021-2025)</p>
              <p className="text-silver-light mb-6">CGPA: 8.9/10</p>
              
              <p className="text-silver-light">
                Mastered the arcane arts of Computer Science, specializing in web development
                and interactive design. Participated in various technology guilds and hackathons,
                honing my skills to perfection.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-3 py-1.5 bg-navy border border-gold/30 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  <span className="text-silver text-sm">Web Development</span>
                </div>
                <div className="px-3 py-1.5 bg-navy border border-gold/30 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  <span className="text-silver text-sm">UI/UX Design</span>
                </div>
                <div className="px-3 py-1.5 bg-navy border border-gold/30 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  <span className="text-silver text-sm">Data Structures</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gold/20">
            <h3 className="text-xl font-medieval text-gold mb-6">Allied Guilds</h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.linkedin.com/" className="w-12 h-12 rounded-full bg-navy border border-gold/50 flex items-center justify-center glow-on-hover">
                <span className="font-medieval text-gold">Li</span>
              </a>
              <a href="https://github.com/" className="w-12 h-12 rounded-full bg-navy border border-gold/50 flex items-center justify-center glow-on-hover">
                <span className="font-medieval text-gold">Gh</span>
              </a>
              <a href="https://x.com/home" className="w-12 h-12 rounded-full bg-navy border border-gold/50 flex items-center justify-center glow-on-hover">
                <span className="font-medieval text-gold">Tw</span>
              </a>
              <a href="https://www.instagram.com/" className="w-12 h-12 rounded-full bg-navy border border-gold/50 flex items-center justify-center glow-on-hover">
                <span className="font-medieval text-gold">In</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#assassin" className="flex items-center gap-2 font-medieval text-gold hover:text-gold-light transition-colors">
            <span>Continue to About the Assassin</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
