
import { useState, useEffect } from 'react';
import { MapPin, Feather } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [feathersCollected, setFeathersCollected] = useState(0);
  
  const navItems = [
    { id: 'map', label: 'Map' },
    { id: 'education', label: 'Education Guild' },
    { id: 'assassin', label: 'About the Assassin' },
    { id: 'achievements', label: 'Achievements Hall' }
  ];
  
  const handleNavigation = (id: string) => {
    setActiveTab(id);
    
    // Smooth scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Handle feather collection
  useEffect(() => {
    // Check localStorage for already collected feathers
    const savedFeathers = localStorage.getItem('collectedFeathers');
    const collectedFeathers = savedFeathers ? JSON.parse(savedFeathers) : [];
    setFeathersCollected(collectedFeathers.length);
    
    // Add click event listener to all feathers
    const feathers = document.querySelectorAll('.feather-collectible');
    
    feathers.forEach(feather => {
      const featherId = feather.getAttribute('data-feather-id');
      
      // If this feather is already collected, hide it
      if (collectedFeathers.includes(featherId)) {
        feather.classList.add('opacity-0');
        feather.classList.remove('cursor-pointer');
      }
      
      feather.addEventListener('click', () => {
        if (!collectedFeathers.includes(featherId)) {
          collectedFeathers.push(featherId);
          localStorage.setItem('collectedFeathers', JSON.stringify(collectedFeathers));
          setFeathersCollected(collectedFeathers.length);
          
          // Hide the feather that was just collected
          feather.classList.add('opacity-0');
          feather.classList.remove('cursor-pointer');
          
          // Add a cool effect
          const audio = new Audio('/feather-collect.mp3');
          audio.volume = 0.2;
          audio.play().catch(e => console.log('Audio play failed:', e));
        }
      });
    });
    
    return () => {
      // Clean up event listeners
      feathers.forEach(feather => {
        feather.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="w-full py-4 px-6 bg-navy-dark/80 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-gold/30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="text-gold h-5 w-5" />
          <span className="font-medieval text-gold text-lg">Digital Assassin</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`relative font-medieval text-sm py-1 transition-colors ${
                activeTab === item.id ? 'text-gold' : 'text-silver hover:text-gold-light'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
              )}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-xs text-silver-light">
            <span className="text-gold">XP:</span> 125/500
          </div>
          <div className="w-24 h-1.5 bg-navy-light rounded-full overflow-hidden">
            <div className="h-full bg-gold w-1/4" />
          </div>
          <div className="flex items-center gap-1 text-xs text-silver-light">
            <span className="text-gold">Feathers:</span> 
            <div className="flex items-center">
              <span>{feathersCollected}/5</span>
              <Feather className="h-3 w-3 ml-1 text-gold" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
