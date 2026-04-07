import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const shipping = cartTotal > 2000 || cartTotal === 0 ? 0 : 50;
  const total = cartTotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen px-4 font-montserrat">
        <ShoppingBag size={64} className="mx-auto text-pearl mb-6" />
        <h2 className="text-3xl font-bold text-midnight mb-4">Your cart is empty</h2>
        <p className="text-silver mb-8">It looks like you haven't added any masterpieces yet.</p>
        <Link to="/shop" className="btn-secondary inline-block">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-cream/10 min-h-screen font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-midnight mb-12 tracking-tight text-center md:text-left">Your Shopping Bag</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key={item.id} 
                  className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-6 border border-pearl/50"
                >
                  <div className="w-24 h-24 bg-pearl/20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-midnight">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-silver hover:text-coral transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-xs text-silver uppercase tracking-widest mb-4 font-bold">{item.material || '18k Gold'}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-pearl rounded-md overflow-hidden font-roboto">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-pearl transition-colors"><Minus size={14} /></button>
                        <span className="px-4 font-bold text-sm text-midnight">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-pearl transition-colors"><Plus size={14} /></button>
                      </div>
                      <span className="font-bold text-midnight">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-pearl/50 sticky top-32">
              <h2 className="font-bold text-xl text-midnight mb-6 border-b border-pearl pb-4 uppercase tracking-wider text-center">Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-charcoal">
                  <span>Subtotal</span>
                  <span className="font-bold">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-charcoal">
                  <span>Estimated Shipping</span>
                  <span className="font-bold text-emerald">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="pt-4 border-t border-pearl flex justify-between text-xl text-midnight font-bold">
                  <span>Total</span>
                  <span className="text-gold">${total.toLocaleString()}</span>
                </div>
              </div>
              
              <Link to="/checkout" className="w-full btn-secondary flex items-center justify-center space-x-2 py-4">
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </Link>
              
              <div className="mt-8 text-center font-roboto">
                <p className="text-[10px] text-silver uppercase tracking-[0.2em] mb-4 font-bold">Secure Checkout Powered by Aura</p>
                <div className="flex justify-center space-x-4 grayscale opacity-50">
                   <span className="font-bold italic text-midnight">VISA</span>
                   <span className="font-bold italic text-midnight">AMEX</span>
                   <span className="font-bold italic text-midnight">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
