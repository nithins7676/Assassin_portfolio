const About = () => {
  const skills = [
    { name: 'HTML5, CSS3, JavaScript', icon: '🔥', level: 90 },
    { name: 'React.js, Node.js', icon: '⚡', level: 85 },
    { name: 'Python', icon: '🧩', level: 80 },
    { name: 'Figma (for UI/UX Design)', icon: '✨', level: 75 },
    { name: 'MySQL', icon: '🛡️', level: 70 },
  ];
  
  const interests = [
    { name: 'Designing websites and apps', icon: '🎨' },
    { name: 'Playing chess', icon: '♟️' },
    { name: 'Traveling and photography', icon: '🌍' },
    { name: 'Blogging about tech', icon: '✍️' },
  ];
  
  return (
    <section className="relative py-20 min-h-screen" id="assassin">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medieval text-center text-gold mb-16">
          About the Assassin
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="ancient-scroll p-6">
              <h3 className="text-xl font-medieval text-gold mb-6">Objective Scroll</h3>
              <p className="text-silver-light mb-6 italic">
                My objective is to leverage my skills in web development and design to create impactful, 
                user-friendly digital experiences. I'm a keen learner, constantly evolving in the fields 
                of front-end and back-end technologies.
              </p>
              
              <p className="text-silver-light">
                I strive to combine technical precision with creative vision, 
                much like an assassin combines stealth with strategic planning.
                Every project I undertake is a mission, executed with the utmost care and attention to detail.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medieval text-gold mb-6">Interests</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-4 ancient-scroll p-4">
                    <div className="text-2xl">{interest.icon}</div>
                    <div className="text-silver-light text-sm">{interest.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medieval text-gold mb-6">Magic Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="ancient-scroll p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-silver">{skill.name}</span>
                  </div>
                  
                  <div className="h-2 bg-navy-light rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
