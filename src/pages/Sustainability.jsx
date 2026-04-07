import React from 'react';
import { Leaf, ShieldCheck, Globe, Recycle } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-midnight text-white text-center py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full w-96 h-96 mx-auto top-0 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-gold font-montserrat uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Promise</span>
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">Ethical Sourcing & Sustainability</h1>
          <p className="text-silver text-lg font-roboto italic leading-relaxed">
            "Traceable, Ethical, Timeless. We believe true luxury cannot exist without profound respect for the earth and her people."
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Globe size={40} />, title: "Conflict-Free", desc: "100% of our diamonds and gemstones are traced to conflict-free zones adhering to the Kimberley Process." },
            { icon: <Recycle size={40} />, title: "Recycled Metals", desc: "We utilize 90% recycled 18k solid gold and sterling silver to drastically reduce our mining footprint." },
            { icon: <ShieldCheck size={40} />, title: "Fair Wages", desc: "Our artisan partners operate in safe environments and are guaranteed living wages above local standards." },
            { icon: <Leaf size={40} />, title: "Carbon Neutral", desc: "We offset the carbon emissions of all our shipping and atelier operations worldwide." }
          ].map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-pearl/30 rounded-full flex items-center justify-center text-gold mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-midnight font-montserrat mb-3">{pillar.title}</h3>
              <p className="text-charcoal text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video / Deep Dive Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-pearl/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-midnight rounded-xl relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80" alt="Artisan working" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all border border-white/50">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-2"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-midnight mb-6 font-montserrat">Behind The Craft</h2>
            <p className="text-charcoal leading-relaxed mb-6">
              Our journey begins deep within the earth and ends as an heirloom piece passed through generations. We partner directly with artisan communities in Jaipur and Florence, bypassing middlemen to ensure full transparency.
            </p>
            <p className="text-charcoal leading-relaxed mb-8">
              By choosing Aura Artisans, you are actively supporting women-led cooperations and educational programs in mining communities. Let's make the jewelry industry beautiful from the inside out.
            </p>
            <button className="btn-secondary group flex items-center space-x-2">
              <span>Read Our 2026 Impact Report</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
