
import { useState } from 'react';
import { MapPin, Feather } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
}

const WorldMap = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  const locations: Location[] = [
    {
      id: 'castle',
      name: 'Castle of Knowledge',
      x: 30,
      y: 20,
      description: 'Where the assassin mastered the crafts of technology and design.'
    },
    {
      id: 'grounds',
      name: 'Training Grounds',
      x: 65,
      y: 40,
      description: 'Skills forged through practice and determination.'
    },
    {
      id: 'hall',
      name: 'Hall of Valor',
      x: 45,
      y: 70,
      description: 'Achievements and memorable quests completed along the journey.'
    },
    {
      id: 'sanctum',
      name: 'Secret Sanctum',
      x: 80,
      y: 75,
      description: 'A hidden place where the assassin can be contacted.'
    },
  ];

  return (
    <section className="relative py-20 min-h-screen" id="map">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medieval text-center text-gold mb-16">
          Explore The Realm
        </h2>
        
        <div className="relative w-full h-[500px] md:h-[600px] bg-[url('ancient.png')] bg-cover bg-center rounded-lg border border-gold/30 shadow-lg overflow-hidden">
          {/* Map markers */}
          {locations.map((location) => (
            <div 
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onClick={() => setActiveLocation(activeLocation === location.id ? null : location.id)}
            >
              <div className="flex flex-col items-center">
                <MapPin 
                  className={`h-8 w-8 ${
                    activeLocation === location.id ? 'text-gold animate-glow' : 'text-silver hover:text-gold-light'
                  } transition-colors duration-300`}
                />
                <span className="font-medieval text-xs text-center whitespace-nowrap px-2 py-1 rounded-md bg-navy-dark/80 backdrop-blur-sm">
                  {location.name}
                </span>
              </div>
              
              {/* Popup for active location */}
              {activeLocation === location.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 ancient-scroll p-4 z-20 animate-fadeIn">
                  <h3 className="font-medieval text-gold text-lg">{location.name}</h3>
                  <p className="text-silver-light text-sm mt-2">{location.description}</p>
                  <button className="mt-2 text-gold-light text-xs underline">Travel Here</button>
                </div>
              )}
            </div>
          ))}
          
          {/* Hidden feather */}
          <div className="absolute top-[35%] left-[22%] opacity-20 hover:opacity-60 transition-opacity cursor-pointer feather-collectible" data-feather-id="map">
            <Feather className="w-6 h-6 text-gold animate-float" style={{animationDelay: '1s'}} />
          </div>
        </div>
        
        <div className="mt-8 text-center text-silver text-sm">
          Click on locations to reveal more details about the assassin's journey.
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
