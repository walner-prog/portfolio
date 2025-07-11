import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 max-w-4xl mx-auto px-6 text-center"
    >
      <motion.h3
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contacto
      </motion.h3>
      <div className="flex justify-center flex-wrap gap-8 text-3xl">
        {[
          {
            href: "https://github.com/walner-prog",
            icon: <FaGithub />,
            label: "GitHub"
          },
          {
            href: "https://www.linkedin.com/in/carlos-alvarez-dev/",
            icon: <FaLinkedin />,
            label: "LinkedIn"
          },
          {
            href: "mailto:ca140611@gmail.com",
            icon: <FaEnvelope />,
            label: "Enviar correo a ca140611@gmail.com"
          }
        ].map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="transition-colors duration-300 hover:text-cyan-400 dark:hover:text-cyan-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ scale: 1.2 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
