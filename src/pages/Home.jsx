import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import heroImage from '../assets/hero.png';

const Home = () => {
  return (
    <main className="bg-cream/20">
      <Hero heroImage={heroImage} />
      
      {/* Brand Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold font-montserrat uppercase tracking-[0.4em] text-xs mb-4 block">The Aura Story</span>
          <h2 className="text-4xl font-bold text-midnight mb-8">Jewelry is more than an accessory—it’s a story.</h2>
          <p className="text-charcoal leading-relaxed text-lg font-roboto italic mb-10">
            "At Aura Artisans, we believe in the quiet power of craftsmanship. Each piece is meticulously handcrafted to reflect individuality and timeless elegance, using only the finest ethically sourced materials."
          </p>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-10"></div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <span className="text-3xl font-bold text-midnight block">25+</span>
              <span className="text-[10px] uppercase tracking-widest text-silver font-bold">Years Experience</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-midnight block">150k+</span>
              <span className="text-[10px] uppercase tracking-widest text-silver font-bold">Happy Clients</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-midnight block">12k+</span>
              <span className="text-[10px] uppercase tracking-widest text-silver font-bold">Unique Designs</span>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Promotion Sidebar / Section */}
      <section className="bg-midnight py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="text-white mb-10 md:mb-0">
            <span className="text-gold font-montserrat uppercase tracking-[0.3em] text-xs mb-4 block">Limited Time Offer</span>
            <h2 className="text-4xl font-bold mb-4 font-montserrat">Celebrate Your Radiance</h2>
            <p className="text-silver/80 font-roboto mb-8">Take an exclusive 15% off on our Spring Collection with code: <span className="text-gold font-bold">AURA15</span></p>
            <button className="btn-secondary">Redeem Offer</button>
          </div>
          <div className="w-full md:w-1/3 aspect-video relative">
            <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full"></div>
            <img src="/src/assets/necklace.png" alt="Promo" className="w-full h-full object-contain relative z-10 animate-float" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Categories / Collections Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-midnight mb-16">Explore Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {['Necklaces', 'Earrings', 'Rings'].map((cat, i) => (
               <Link 
                 key={cat} 
                 to={`/shop?category=${cat.toLowerCase()}`}
                 className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
               >
                  <img src={`/src/assets/${cat.toLowerCase().slice(0, -1)}.png`} alt={cat} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-midnight/30 flex items-center justify-center group-hover:bg-midnight/10 transition-colors">
                    <h3 className="text-white text-3xl font-bold font-montserrat tracking-widest uppercase">{cat}</h3>
                  </div>
               </Link>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
