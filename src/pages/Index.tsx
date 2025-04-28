
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorldMap from "@/components/WorldMap";
import Education from "@/components/Education";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-navy text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <div id="map">
        <WorldMap />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="assassin">
        <About />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
