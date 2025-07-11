import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaDumbbell, FaServer, FaKey } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.4)",
    transition: { duration: 0.4 },
  },
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    transition: { duration: 0.4 },
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 max-w-6xl mx-auto px-6">
      {/* Fondos decorativos */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 -z-10"></div>

      <h3 className="text-4xl md:text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Proyectos destacados
      </h3>

      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
     
       <SwiperSlide>
  <motion.div
    className="px-4"
    whileHover="hover"
    initial="rest"
    animate="rest"
  >
    <motion.div
      variants={cardVariants}
      className="relative p-6 bg-gray-900 rounded-3xl shadow-xl border border-transparent cursor-pointer group"
    >
      {/* Glow efecto */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 pointer-events-none"
        style={{
          boxShadow: "0 0 20px 4px rgba(0, 255, 255, 0.5)",
          filter: "blur(15px)"
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="flex items-center mb-2 space-x-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
        <FaDumbbell size={36} />
        <h4 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors duration-300">
          GYMAPP
        </h4>
      </div>

      <p className="text-cyan-400 font-semibold mb-3">
        Control total para tu gimnasio
      </p>

      <p className="text-gray-400 mb-6">
  Esta es una landing page moderna diseñada para presentar y promocionar <strong>GymApp</strong>, 
  un sistema de escritorio que facilita la gestión de gimnasios.  
</p>


      <a
        href="https://gymapp-rosy.vercel.app"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-600 transition-colors duration-300"
      >
        <span>Ver demo online</span>
        <motion.span
          className="inline-block"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          →
        </motion.span>
      </a>
    </motion.div>
  </motion.div>
</SwiperSlide>


         
        <SwiperSlide>
          <motion.div
            className="px-4"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              variants={cardVariants}
              className="relative p-6 bg-gray-900 rounded-3xl shadow-xl border border-transparent cursor-pointer group"
            >
              {/* Glow animado */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 pointer-events-none"
                style={{
                  boxShadow: "0 0 20px 4px rgba(0, 200, 255, 0.5)",
                  filter: "blur(15px)"
                }}
                transition={{ duration: 0.4 }}
              />

              <div className="flex items-center mb-4 space-x-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <FaKey size={36} />
                <h4 className="text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300">
                  Gestión de Licencias - GymApp
                </h4>
              </div>
              <p className="text-gray-400 mb-6">
                Plataforma web para administrar claves de activación y controlar el uso autorizado de GymApp. Consumía API con Node, Express, JWT, SQLite y MySQL.
              </p>
           
              <a
                href="https://panel-licencia-gymapp.vercel.app/index.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-600 transition-colors duration-300"
              >
                <span>Ver proyecto</span>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </SwiperSlide>

     <SwiperSlide>
          <motion.div
            className="px-4"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              variants={cardVariants}
              className="relative p-6 bg-gray-900 rounded-3xl shadow-xl border border-transparent cursor-pointer group"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 pointer-events-none"
                style={{
                  boxShadow: "0 0 20px 4px rgba(0, 200, 255, 0.5)",
                  filter: "blur(15px)"
                }}
              />
              <div className="flex items-center mb-4 space-x-4 text-blue-400">
                <FaServer size={36} />
                <h4 className="text-2xl font-bold">API Licencias GymApp</h4>
              </div>
              <p className="text-gray-400 mb-6">
                Web service en Node.js + Express con JWT para gestionar licencias del software GymApp, con DB en MySQL y SQLite. Segura, escalable y desplegada en Render.
              </p>
              <a
                href="https://api-licencia-gymapp.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-600 transition-colors duration-300"
              >
                <span>Ver API</span>
                <motion.span whileHover={{ x: 8 }}>→</motion.span>
              </a>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      
      </Swiper>
    </section>
  );
};

export default Projects;
