import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import { products as allProducts } from '../../data/products';

const products = allProducts.slice(0, 4);

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden bg-pearl/30 rounded-lg">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </Link>
        {product.tag && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-midnight text-[10px] font-montserrat font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.tag}
          </span>
        )}
        
        {/* Hover Overlays */}
        <div className="absolute inset-0 bg-midnight/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button 
            onClick={() => addToCart(product)}
            className="p-3 bg-white text-midnight rounded-full hover:bg-gold hover:text-white transition-colors"
          >
            <ShoppingBag size={20} />
          </button>
          <Link to={`/product/${product.id}`} className="p-3 bg-white text-midnight rounded-full hover:bg-gold hover:text-white transition-colors">
            <Eye size={20} />
          </Link>
          <button className="p-3 bg-white text-midnight rounded-full hover:bg-gold hover:text-white transition-colors">
            <Heart size={20} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <Link to={`/product/${product.id}`}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-montserrat font-bold block mb-1">
            {product.category}
          </span>
          <h3 className="text-midnight font-montserrat font-semibold group-hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <span className="font-montserrat font-bold text-midnight">${product.price.toLocaleString()}</span>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 px-4 md:px-0">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-montserrat uppercase tracking-[0.3em] text-xs block mb-2"
            >
              Curated Collections
            </motion.span>
            <h2 className="text-4xl font-bold text-midnight font-montserrat">Featured Masterpieces</h2>
          </div>
          <Link to="/shop" className="text-midnight font-montserrat font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 px-4 md:px-0">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
