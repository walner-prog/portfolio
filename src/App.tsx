import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from 'react-tsparticles';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans relative">
      <Particles
        options={{
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { speed: 1 },
            links: { enable: true, color: "#3b82f6" },
          },
        }}
        className="absolute w-full h-full -z-10"
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
