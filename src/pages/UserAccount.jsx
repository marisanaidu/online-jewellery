import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Package, Heart, Settings, LogOut, ChevronRight, MapPin, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const navigate = useNavigate();
  const user = {
    name: "Eleanor Vance",
    email: "eleanor.vance@example.com",
    memberSince: "Nov 2023",
    avatar: "EV"
  };

  const orders = [
    { id: 'ORD-4029', date: 'Oct 12, 2025', total: '$1,250', status: 'Delivered' },
    { id: 'ORD-3910', date: 'Aug 05, 2025', total: '$850', status: 'Delivered' },
  ];

  return (
    <div className="pt-32 pb-24 bg-pearl/5 min-h-screen font-montserrat px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-pearl mb-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center text-3xl font-bold text-gold border-2 border-gold/20">
            {user.avatar}
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl font-bold text-midnight mb-1 font-montserrat">{user.name}</h1>
            <p className="text-silver mb-4 font-roboto">{user.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <span className="px-3 py-1 bg-pearl/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-charcoal">Gold Member</span>
               <span className="px-3 py-1 bg-pearl/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-charcoal">Since {user.memberSince}</span>
            </div>
          </div>
          <button onClick={() => alert('Edit profile functionality coming soon!')} className="flex items-center space-x-2 px-6 py-3 border border-pearl rounded-md hover:bg-pearl/30 transition-colors text-charcoal font-bold text-sm">
            <Settings size={18} />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'Profile', icon: <User size={20} />, label: 'Profile' },
              { id: 'Orders', icon: <Package size={20} />, label: 'Orders' },
              { id: 'Wishlist', icon: <Heart size={20} />, label: 'Wishlist' },
              { id: 'Addresses', icon: <MapPin size={20} />, label: 'Addresses' },
              { id: 'Payments', icon: <CreditCard size={20} />, label: 'Payments' },
            ].map((item, i) => (
              <button 
                key={item.label}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${activeTab === item.id ? 'bg-midnight text-white shadow-lg' : 'hover:bg-white text-charcoal'}`}
              >
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <span className="font-bold text-sm tracking-wide">{item.label}</span>
                </div>
                {activeTab !== item.id && <ChevronRight size={16} className="text-silver" />}
              </button>
            ))}
            <button onClick={() => navigate('/')} className="w-full flex items-center space-x-4 p-4 text-coral hover:bg-coral/5 rounded-xl transition-all mt-4">
              <LogOut size={20} />
              <span className="font-bold text-sm tracking-wide">Logout</span>
            </button>
          </div>

          {/* Main Content Areas */}
          <div className="lg:col-span-3 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {(activeTab === 'Profile' || activeTab === 'Orders') && (
                  <div className="bg-white rounded-2xl p-8 border border-pearl shadow-sm">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-pearl font-montserrat">
                      <h2 className="text-xl font-bold text-midnight">{activeTab === 'Orders' ? 'All Orders' : 'Recent Orders'}</h2>
                      {activeTab === 'Profile' && <button onClick={() => setActiveTab('Orders')} className="text-gold text-xs font-bold uppercase tracking-widest hover:underline">View All</button>}
                    </div>
                    <div className="space-y-4 font-roboto">
                      {orders.map((order) => (
                        <div key={order.id} className="flex flex-wrap items-center justify-between p-4 border border-pearl rounded-xl hover:bg-pearl/5 transition-colors group cursor-pointer">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-pearl/30 rounded-lg group-hover:bg-gold/10 transition-colors">
                              <Package size={20} className="text-midnight group-hover:text-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-midnight">{order.id}</p>
                              <p className="text-xs text-silver">{order.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-midnight">{order.total}</p>
                            <span className="text-[10px] font-bold uppercase text-emerald">{order.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(activeTab === 'Profile' || activeTab === 'Wishlist' || activeTab === 'Payments') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-montserrat">
                    {(activeTab === 'Profile' || activeTab === 'Payments') && (
                      <div className="bg-midnight rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <h3 className="text-xl font-bold mb-2">Aura Rewards</h3>
                        <p className="text-silver text-sm mb-6 font-roboto">You have 1,240 points. You're $260 away from your next reward.</p>
                        <button onClick={() => alert('Points redeemed successfully!')} className="px-6 py-3 bg-gold text-midnight font-bold rounded-md hover:bg-white transition-colors text-sm uppercase tracking-widest">Redeem Points</button>
                      </div>
                    )}
                    {(activeTab === 'Profile' || activeTab === 'Wishlist') && (
                      <div className="bg-white rounded-2xl p-8 border border-pearl text-charcoal border-dashed border-2 flex flex-col items-center justify-center text-center">
                        <Heart size={32} className="text-gold mb-4" />
                        <h3 className="text-xl font-bold mb-1">Your Wishlist</h3>
                        <p className="text-silver text-sm mb-6 font-roboto">3 Items in your collection</p>
                        {activeTab === 'Profile' ? (
                          <button onClick={() => setActiveTab('Wishlist')} className="text-midnight font-bold uppercase tracking-widest text-xs border-b border-midnight pb-1 hover:text-gold hover:border-gold transition-colors">See your favorites</button>
                        ) : (
                          <button onClick={() => alert('No other wishlist items to show.')} className="text-midnight font-bold uppercase tracking-widest text-xs border-b border-midnight pb-1 hover:text-gold hover:border-gold transition-colors">Browse Shop</button>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'Addresses' && (
                  <div className="bg-white rounded-2xl p-8 border border-pearl shadow-sm">
                    <h2 className="text-xl font-bold text-midnight mb-6 font-montserrat">Saved Addresses</h2>
                    <div className="p-6 border border-pearl rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-midnight font-montserrat">Default Shipping</h4>
                        <button onClick={() => alert('Edit address functionality coming soon!')} className="text-gold text-xs font-bold uppercase tracking-widest hover:underline">Edit</button>
                      </div>
                      <p className="text-sm font-roboto text-silver">001, rajam.anajapalli<br/>vishakapatnam<br/>India</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
