import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const words = ["Frontend Developer", "Full Stack Developer", "UI Enthusiast"];

const About: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setCurrentWord(words[(index + 1) % words.length]);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="about" className="relative py-24 max-w-5xl mx-auto px-6">
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-600 opacity-20 rounded-full blur-3xl -z-10"></div>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
      >
        Sobre mí
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 leading-8 text-lg md:text-xl text-center max-w-3xl mx-auto"
      >
        Soy un <span className="text-cyan-400 font-semibold">Ingeniero en Tecnologías de la Información</span> 
        con experiencia en desarrollo web y de aplicaciones. 
        He trabajado con lenguajes como
        <span className="text-cyan-300 font-semibold"> JavaScript</span>,
        <span className="text-cyan-300 font-semibold"> TypeScript</span>,
        <span className="text-cyan-300 font-semibold"> Python</span>,
        <span className="text-cyan-300 font-semibold"> PHP</span>,
        <span className="text-cyan-300 font-semibold"> HTML</span> y
        <span className="text-cyan-300 font-semibold"> CSS</span>; así como con bases de datos como
        <span className="text-blue-400 font-semibold"> MySQL</span>,
        <span className="text-blue-400 font-semibold"> PostgreSQL</span>,
        <span className="text-blue-400 font-semibold"> SQLite</span> y
        <span className="text-green-400 font-semibold"> MongoDB</span>.  
        También he trabajado con frameworks y tecnologías como
        <span className="text-purple-400 font-semibold"> React</span>,
        <span className="text-purple-400 font-semibold"> Next.js</span>,
        <span className="text-purple-400 font-semibold"> React Native</span>,
        <span className="text-pink-400 font-semibold"> Laravel</span>,
        <span className="text-cyan-400 font-semibold"> Node.js</span>,
        <span className="text-cyan-400 font-semibold"> Express</span>,
        <span className="text-yellow-400 font-semibold"> Electron</span> y
        <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>, aplicando metodologías ágiles
        <span className="text-orange-400 font-semibold"> Scrum</span> y
        <span className="text-orange-400 font-semibold"> Kanban</span>.
      </motion.p>

      {/* Typing effect */}
      <div className="mt-6 h-10 flex justify-center items-center text-2xl md:text-3xl font-semibold text-cyan-400">
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <Typewriter
            words={[currentWord]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
