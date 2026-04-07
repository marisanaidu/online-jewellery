import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <span className="text-gold font-montserrat uppercase tracking-[0.3em] text-xs block mb-4">Our Heritage</span>
            <h1 className="text-5xl font-bold text-midnight mb-8 font-montserrat">Crafting Stories <br /><span className="text-gold italic">Since 1998</span></h1>
            <p className="text-charcoal leading-relaxed text-lg mb-6">
              Founded in a small artisanal workshop in London, Aura Artisans began with a simple vision: to create jewelry that doesn't just decorate, but defines.
            </p>
            <p className="text-charcoal leading-relaxed mb-8">
              Every curve, every setting, and every stone is chosen with intention. We believe that true luxury lies in the details—those subtle nuances that only the human hand can achieve.
            </p>
            <div className="flex space-x-12">
              <div>
                <p className="text-3xl font-bold text-midnight">28</p>
                <p className="text-xs text-silver uppercase tracking-widest">Master Artisans</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-midnight">100%</p>
                <p className="text-xs text-silver uppercase tracking-widest">Ethical Sourcing</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2 relative"
          >
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
             <img src="/src/assets/hero.png" className="rounded-2xl shadow-2xl relative z-10" alt="Workshop" />
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-midnight rounded-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           {[
             { t: 'Artisanship', d: 'Traditional techniques meet modern design.' },
             { t: 'Sustainability', d: 'Conscious choices for a beautiful planet.' },
             { t: 'Individuality', d: 'Unique pieces for unique stories.' }
           ].map((v, i) => (
             <motion.div 
               key={v.t}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.2 }}
               className="p-8 bg-pearl/5 rounded-xl border border-pearl"
             >
               <h3 className="font-montserrat font-bold text-xl text-midnight mb-4">{v.t}</h3>
               <p className="text-silver text-sm leading-relaxed">{v.d}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default About;
