import React from 'react';
import { motion } from 'framer-motion';
 

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-28 px-6 max-w-6xl mx-auto relative overflow-hidden">
      
  {/* Imagen con partículas */}
<div className="relative mb-10 md:mb-0 md:mr-12 flex-shrink-0">
  {/* Radial gradient detrás */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 blur-3xl"
  ></motion.div>

  {/* Imagen */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl"
  >
    <img
      src="/IMG/MIPERFIL.png"  //  
      alt="Foto de Carlos Alvarez"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Partículas flotantes */}
  <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping-slow"></div>
  <div className="absolute bottom-0 -right-4 w-4 h-4 bg-blue-600 rounded-full animate-float"></div>
  <div className="absolute top-6 right-6 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
</div>


      {/* Texto */}
      <div className="max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          Hola, soy <span className="  relative after:block after:h-1 after:bg-cyan-400 after:absolute after:left-0 after:bottom-0 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
            Carlos Alvarez
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-400 mb-8 text-lg md:text-xl"
        >
          Ingeniero en Tecnologías de la Información (último año) con experiencia en desarrollo web Full Stack, POO, bases de datos SQL y metodologías ágiles Scrum/Kanban.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold shadow-lg hover:bg-cyan-600 transition-colors duration-300"
        >
          Contáctame
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
