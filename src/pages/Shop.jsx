import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import { products as allProducts } from '../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const categories = ['All', 'Necklaces', 'Earrings', 'Rings', 'Bracelets'];

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0; // Newest keeps the default order
  });

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4 font-montserrat">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Collections'}
          </h1>
          {!searchQuery && (
            <p className="text-silver font-roboto max-w-xl mx-auto italic">Explore our curated selection of fine jewelry, handcrafted for those who appreciate the extraordinary.</p>
          )}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-pearl pb-6">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-charcoal font-montserrat font-semibold hover:text-gold transition-colors"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <div className="h-6 w-[1px] bg-pearl"></div>
            <div className="flex space-x-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm font-montserrat tracking-widest uppercase transition-all ${selectedCategory === cat ? 'text-gold border-b-2 border-gold font-bold' : 'text-silver hover:text-charcoal'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs text-silver uppercase tracking-widest font-bold">Sort By:</span>
            <div className="relative group">
              <button className="flex items-center justify-between space-x-2 text-sm font-montserrat font-bold text-midnight w-40 text-left">
                <span>{sortBy}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-white border border-pearl shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 w-48 text-left">
                {['Newest', 'Price: Low to High', 'Price: High to Low'].map(option => (
                  <button 
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="block w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-pearl/20 hover:text-gold"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-pearl/20 rounded-lg mb-4">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-midnight/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                      navigate('/cart');
                    }}
                    className="absolute bottom-4 left-4 right-4 py-3 bg-midnight text-white font-montserrat font-bold text-xs uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-gold"
                  >
                    <ShoppingBag size={14} />
                    <span>Add to Cart</span>
                  </button>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-montserrat font-semibold text-midnight group-hover:text-gold transition-colors">{product.name}</h3>
                </Link>
                <p className="text-gold font-bold mt-1">${product.price.toLocaleString()}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Shop;
