import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-30 top-0 left-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer select-none">
          Carlos Alvarez
        </h1>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {['about', 'projects', 'contact'].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="relative hover:text-cyan-400 transition-colors duration-300 after:absolute after:block after:h-0.5 after:bg-cyan-400 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500"
            >
              {link === 'about' ? 'Sobre mí' : link === 'projects' ? 'Proyectos' : 'Contacto'}
            </a>
          ))}
        </div>

        {/* Botón mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Menú mobile animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-800 flex flex-col items-center space-y-6 py-6 font-semibold text-lg shadow-inner"
          >
            {['about', 'projects', 'contact'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link === 'about' ? 'Sobre mí' : link === 'projects' ? 'Proyectos' : 'Contacto'}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
