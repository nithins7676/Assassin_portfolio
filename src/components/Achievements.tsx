
const Achievements = () => {
  const certificates = [
    {
      title: 'Certified Web Developer',
      issuer: 'Udemy',
      year: '2024',
      icon: '🥇'
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Coursera',
      year: '2023',
      icon: '🛡️'
    },
    {
      title: 'Winner — CodeSprint Hackathon',
      issuer: '',
      year: '2024',
      icon: '🏆'
    },
  ];
  
  const internships = [
    {
      title: 'Web Development Intern',
      company: 'InnovateTech Pvt. Ltd.',
      period: 'June 2024 - August 2024',
      icon: '⚔️'
    },
    {
      title: 'UI/UX Design Intern',
      company: 'DesignHub Solutions',
      period: 'Jan 2024 - March 2024',
      icon: '🧙‍♂️'
    },
  ];
  
  const projects = [
    {
      title: 'Portfolio Website',
      tech: 'HTML, CSS, JavaScript',
      icon: '🗡️'
    },
    {
      title: 'E-commerce Clone',
      tech: 'React.js + Node.js',
      icon: '🛡️'
    },
    {
      title: 'Weather App',
      tech: 'JavaScript + API integration',
      icon: '🧙‍♀️'
    },
  ];
  
  return (
    <section className="relative py-20 min-h-screen bg-navy-dark" id="achievements">
      <div 
        className="absolute inset-0 bg-[url('/ancient-map-bg.jpg')] bg-cover bg-center opacity-10"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-medieval text-center text-gold mb-16">
          Hall of Valor
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certificates */}
          <div>
            <h3 className="text-xl font-medieval text-gold mb-6 text-center">Ancient Scrolls</h3>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div key={index} className="ancient-scroll p-4 flex items-start gap-4">
                  <div className="text-2xl mt-1">{cert.icon}</div>
                  <div>
                    <h4 className="font-medieval text-gold-light">{cert.title}</h4>
                    {cert.issuer && (
                      <p className="text-silver text-sm">{cert.issuer} ({cert.year})</p>
                    )}
                    {!cert.issuer && (
                      <p className="text-silver text-sm">{cert.year}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Internships */}
          <div>
            <h3 className="text-xl font-medieval text-gold mb-6 text-center">Training Missions</h3>
            
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div key={index} className="ancient-scroll p-4 flex items-start gap-4">
                  <div className="text-2xl mt-1">{internship.icon}</div>
                  <div>
                    <h4 className="font-medieval text-gold-light">{internship.title}</h4>
                    <p className="text-silver text-sm">{internship.company}</p>
                    <p className="text-silver-dark text-xs mt-1">{internship.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Projects */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-medieval text-gold mb-6 text-center">Legendary Artifacts</h3>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="ancient-scroll p-4 flex items-start gap-4">
                  <div className="text-2xl mt-1">{project.icon}</div>
                  <div>
                    <h4 className="font-medieval text-gold-light">{project.title}</h4>
                    <p className="text-silver text-sm">{project.tech}</p>
                    <button className="mt-2 text-gold-light text-xs underline">View Project</button>
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

export default Achievements;
