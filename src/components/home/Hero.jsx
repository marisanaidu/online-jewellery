import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Note: In a real app, we would import the generated image directly
// For this prototype, I'll use placeholders or relative paths if moved to public
const Hero = ({ heroImage }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Aura Artisans Hero" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-midnight/30 backdrop-brightness-75 transition-all"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gold font-montserrat uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Spring Collection 2026
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white text-5xl md:text-7xl font-bold font-montserrat leading-tight mb-6"
          >
            Discover the <br />
            <span className="text-gradient-gold italic">Elegance</span> of <br />
            Handcrafted Art.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-silver font-roboto mb-10 leading-relaxed max-w-lg"
          >
            Each piece is meticulously crafted by master artisans to tell a story of individuality and timeless sophistication.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/shop" className="btn-secondary btn-glow flex items-center justify-center space-x-2">
              <span>Shop Collection</span>
              <ChevronRight size={18} />
            </Link>
            <Link to="/about" className="px-6 py-3 border border-white/50 text-white rounded-md hover:bg-white hover:text-midnight transition-all font-montserrat font-semibold flex items-center justify-center">
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 text-silver">Scroll</span>
        <div className="w-[1px] h-12 bg-gold/50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
