import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Truck, ShieldCheck, RefreshCw, Star, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-montserrat text-midnight mb-4">Product Not Found</h1>
        <p className="text-silver mb-8 font-roboto">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="px-8 py-3 bg-midnight text-white hover:bg-gold transition-colors font-bold uppercase tracking-widest text-sm rounded">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-pearl/20 rounded-2xl overflow-hidden relative group">
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-zoom-in" 
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronLeft size={20} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-gold' : 'border-pearl opacity-60'}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-gold font-montserrat uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Premium Necklace Collection</span>
              <h1 className="text-4xl font-bold text-midnight mb-4 font-montserrat">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-silver text-sm">({product.reviews} verified reviews)</span>
              </div>
              <p className="text-3xl font-montserrat font-bold text-midnight">${product.price.toLocaleString()}</p>
            </div>

            <p className="text-charcoal font-roboto leading-relaxed mb-8">
              {product.description}
            </p>

            {/* CTA's */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-pearl rounded-md">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-pearl transition-colors">-</button>
                  <span className="px-4 font-bold text-midnight">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-pearl transition-colors">+</button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-grow btn-secondary flex items-center justify-center space-x-2"
                >
                  <ShoppingBag size={20} />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-pearl rounded-md text-charcoal hover:text-coral hover:border-coral transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              <button className="w-full btn-primary py-4 text-lg">
                Buy It Now
              </button>
            </div>

            {/* Security/Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-pearl">
              <div className="flex items-center space-x-3 text-sm text-charcoal">
                <Truck size={20} className="text-gold" />
                <span>Complimentary Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-charcoal">
                <ShieldCheck size={20} className="text-gold" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-charcoal">
                <RefreshCw size={20} className="text-gold" />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordion / Details */}
            <div className="mt-12 space-y-4">
              <details className="group border-b border-pearl pb-4" open>
                <summary className="flex justify-between items-center cursor-pointer list-none font-montserrat font-bold text-midnight">
                  <span>Product Features</span>
                  <ChevronDown size={18} className="group-open:rotate-180 transition-transform" />
                </summary>
                <ul className="mt-4 space-y-2 text-silver text-sm list-disc pl-5">
                  {product.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
