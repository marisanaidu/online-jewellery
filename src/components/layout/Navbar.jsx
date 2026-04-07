import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-charcoal p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-montserrat text-2xl font-bold tracking-tight text-gold">
              AURA<span className="text-midnight italic">ARTISANS</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="nav-link text-sm uppercase tracking-widest">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSearch}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-sm border border-pearl flex items-center pr-10 pl-4 h-10 overflow-hidden"
                  >
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..." 
                      className="w-full bg-transparent outline-none text-sm text-charcoal placeholder:text-silver"
                      autoFocus
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className={`text-charcoal hover:text-gold transition-colors p-2 z-10 relative ${isSearchOpen ? 'bg-transparent' : ''}`}
              >
                {isSearchOpen ? <X size={20} className="text-silver hover:text-charcoal" /> : <Search size={20} />}
              </button>
            </div>
            <Link to="/account" className="text-charcoal hover:text-gold transition-colors p-2">
              <User size={20} />
            </Link>
            <Link to="/wishlist" className="text-charcoal hover:text-gold transition-colors p-2 hidden sm:block">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="text-charcoal hover:text-gold transition-colors p-2 relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-coral text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce-subtle">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 pt-20 px-6 animate-fade-in">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-montserrat font-semibold text-midnight hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-pearl">
              <Link to="/account" className="flex items-center space-x-3 text-charcoal py-2" onClick={() => setIsMobileMenuOpen(false)}>
                <User size={20} /> <span>Account</span>
              </Link>
              <Link to="/wishlist" className="flex items-center space-x-3 text-charcoal py-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Heart size={20} /> <span>Wishlist</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
