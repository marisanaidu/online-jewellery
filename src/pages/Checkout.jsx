import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, CheckCircle, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const shipping = cartTotal > 2000 ? 0 : 50;
  const total = cartTotal + shipping;

  useEffect(() => {
    if (cartItems.length === 0 && !isCompleted) {
      navigate('/shop');
    }
  }, [cartItems, isCompleted, navigate]);

  const handleComplete = () => {
    setIsCompleted(true);
    clearCart();
  };

  if (isCompleted) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen px-4 animate-fade-in font-montserrat">
        <CheckCircle size={80} className="mx-auto text-emerald mb-6" />
        <h1 className="text-4xl font-bold text-midnight mb-4">Order Confirmed!</h1>
        <p className="text-silver mb-2">Thank you for choosing Aura Artisans.</p>
        <p className="text-charcoal font-bold mb-8">Order #AURA-{Math.floor(Math.random() * 10000)}-2026</p>
        <div className="flex justify-center space-x-4">
          <button className="btn-secondary">Track Order</button>
          <Link to="/" className="px-6 py-3 border border-gold text-gold rounded-md hover:bg-gold hover:text-white transition-all font-bold">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen font-montserrat">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-pearl -translate-y-1/2 -z-10"></div>
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-gold text-white scale-110 shadow-lg' : 'bg-pearl text-silver'}`}>{s}</div>
               <span className={`text-[10px] uppercase tracking-widest mt-2 font-bold ${step >= s ? 'text-gold' : 'text-silver'}`}>
                 {s === 1 ? 'Shipping' : s === 2 ? 'Payment' : 'Review'}
               </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Forms */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold text-midnight mb-8 flex items-center space-x-3">
                  <Truck size={24} className="text-gold" />
                  <span>Shipping Details</span>
                </h2>
                <div className="grid grid-cols-2 gap-4 font-roboto">
                  <input placeholder="First Name" className="p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                  <input placeholder="Last Name" className="p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                  <input placeholder="Address" className="col-span-2 p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                  <input placeholder="City" className="p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                  <input placeholder="Zip Code" className="p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                  <input placeholder="Phone Number" className="col-span-2 p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                </div>
                <button onClick={nextStep} className="mt-10 w-full btn-secondary py-4 uppercase tracking-widest text-sm">Continue to Payment</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-midnight flex items-center space-x-3">
                    <CreditCard size={24} className="text-gold" />
                    <span>Payment Information</span>
                  </h2>
                  <button onClick={prevStep} className="text-silver hover:text-midnight flex items-center space-x-1 text-sm">
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                </div>
                <div className="space-y-4 font-roboto">
                   <div className="p-6 border-2 border-gold bg-gold/5 rounded-xl flex justify-between items-center cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="text-gold" />
                        <div>
                          <p className="font-bold text-midnight">Credit / Debit Card</p>
                          <p className="text-xs text-silver">Secure AES-256 Encryption</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-gold flex items-center justify-center">
                        <div className="w-3 h-3 bg-gold rounded-full"></div>
                      </div>
                   </div>
                   <input placeholder="Card Number" className="w-full p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                   <div className="grid grid-cols-2 gap-4">
                     <input placeholder="MM/YY" className="p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                     <input placeholder="CVC" className="p-4 border border-pearl rounded-md focus:border-gold outline-none" />
                   </div>
                </div>
                <button onClick={nextStep} className="mt-10 w-full btn-secondary py-4 uppercase tracking-widest text-sm">Review Order</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-midnight">Final Review</h2>
                  <button onClick={prevStep} className="text-silver hover:text-midnight flex items-center space-x-1 text-sm">
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                </div>
                <div className="bg-pearl/10 p-6 rounded-xl border border-dashed border-gold/30 mb-8 text-charcoal font-roboto">
                   <p className="font-bold mb-2 uppercase tracking-widest text-xs text-gold">Shipping to:</p>
                   <p className="text-sm mb-6">John Doe, 123 Artisan Lane, Mayfair, London, W1J 7JZ</p>
                   <p className="font-bold mb-2 uppercase tracking-widest text-xs text-gold">Payment Method:</p>
                   <p className="text-sm">Visa ending in 4242</p>
                </div>
                <button onClick={handleComplete} className="w-full btn-primary py-4 text-xl uppercase tracking-[0.2em]">Complete Purchase</button>
                <div className="mt-6 flex items-center justify-center space-x-2 text-emerald font-bold text-sm">
                  <ShieldCheck size={18} />
                  <span>Secure & Private Transaction</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-1 font-roboto">
            <div className="bg-pearl/5 p-8 rounded-xl border border-pearl sticky top-32">
               <h3 className="font-montserrat font-bold text-lg mb-6 border-b border-pearl pb-4 uppercase tracking-wider">Order Summary</h3>
               <div className="space-y-4 text-sm mb-6 max-h-[40vh] overflow-y-auto pr-2">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex space-x-3 items-center">
                        <div className="w-12 h-12 bg-white rounded border border-pearl p-1">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-midnight font-medium line-clamp-1">{item.name}</span>
                          <span className="text-xs text-silver">Qty: {item.quantity}</span>
                        </div>
                      </div>
                      <span className="font-bold">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
               </div>
               <div className="space-y-2 pt-4 border-t border-pearl mb-6">
                  <div className="flex justify-between text-silver">
                    <span>Subtotal</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-silver">
                    <span>Shipping</span>
                    <span className="text-emerald font-bold">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-midnight font-bold text-lg pt-2 font-montserrat">
                    <span>Total</span>
                    <span className="text-gold">${total.toLocaleString()}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
