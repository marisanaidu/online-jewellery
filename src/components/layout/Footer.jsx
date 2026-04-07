import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-midnight text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div>
            <Link to="/" className="font-montserrat text-2xl font-bold tracking-tight text-gold block mb-6">
              AURA<span className="text-white italic text-xl">ARTISANS</span>
            </Link>
            <p className="text-silver/80 font-roboto text-sm leading-relaxed mb-6">
              Handcrafting timeless elegance since 1998. Our commitment to ethical sourcing and artisanal excellence ensures each piece tells a unique story.
            </p>
            <div className="flex space-x-6 text-sm font-bold tracking-widest uppercase mt-4">
              <a href="#" className="text-silver hover:text-gold cursor-pointer transition-colors">IG</a>
              <a href="#" className="text-silver hover:text-gold cursor-pointer transition-colors">FB</a>
              <a href="#" className="text-silver hover:text-gold cursor-pointer transition-colors">X</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-wider text-gold">Explore</h4>
            <ul className="space-y-4 text-silver/80 text-sm">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Collections</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=rings" className="hover:text-gold transition-colors">Rings</Link></li>
              <li><Link to="/gift-cards" className="hover:text-gold transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-wider text-gold">Information</h4>
            <ul className="space-y-4 text-silver/80 text-sm">
              <li><Link to="/sustainability" className="hover:text-gold transition-colors">Our Ethical Sourcing</Link></li>
              <li><Link to="/size-guide" className="hover:text-gold transition-colors">Jewelry Size Guide</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Returns & Shipping</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Wholesale & Careers</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Help & FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-wider text-gold">Join the Atelier</h4>
            <p className="text-silver/80 text-sm mb-4">Subscribe for exclusive access to new collections and artisanal stories.</p>
            <form className="relative" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to our Atelier!'); }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-silver/20 rounded-md py-3 px-4 text-sm text-white focus:outline-none focus:border-gold transition-all"
                required
              />
              <button type="submit" className="absolute right-2 top-2 p-1.5 bg-gold rounded text-midnight hover:bg-gold-light transition-colors">
                <Mail size={18} />
              </button>
            </form>
            <div className="mt-8 space-y-3 text-silver/60 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin size={14} className="shrink-0 mt-0.5" /> <span>001,rajam.anajapalli,vishakapatnam</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={14} className="shrink-0 mt-0.5" /> <span>8179507392</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-silver/10 flex flex-col md:flex-row justify-between items-center text-silver/40 text-xs space-y-4 md:space-y-0">
          <p>© 2026 Aura Artisans Jewelry. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-silver/60">Privacy Policy</Link>
            <Link to="/about" className="hover:text-silver/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
