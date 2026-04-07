import React from 'react';

const AdminDashboard = () => (
  <div className="pt-32 pb-20 px-8 bg-pearl/5 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-midnight font-montserrat">Admin Master Console</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-emerald text-white rounded font-bold text-sm">+ Add Product</button>
          <button className="px-4 py-2 bg-midnight text-white rounded font-bold text-sm">Reports</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[{t:'Sales', v:'$124,500', c:'text-emerald'}, {t:'Orders', v:'1,240', c:'text-midnight'}, {t:'Inventory', v:'450', c:'text-gold'}, {t:'Customers', v:'8,900', c:'text-charcoal'}].map(s => (
          <div key={s.t} className="bg-white p-6 rounded-xl border border-pearl shadow-sm">
            <p className="text-xs text-silver uppercase tracking-widest font-bold mb-2">{s.t}</p>
            <p className={`text-2xl font-bold ${s.c}`}>{s.v}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-pearl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-pearl bg-pearl/5 font-bold text-midnight">Recent Inventory Transactions</div>
        <table className="w-full text-left">
          <thead className="bg-pearl/10 text-xs font-bold uppercase text-silver">
            <tr><th className="p-4">Product</th><th className="p-4">SKU</th><th className="p-4">Stock</th><th className="p-4">Price</th><th className="p-4">Status</th></tr>
          </thead>
          <tbody className="text-sm text-charcoal">
            <tr><td className="p-4">Handcrafted Gold Necklace</td><td className="p-4 text-silver">#AA-4029</td><td className="p-4">24</td><td className="p-4">$1,250</td><td className="p-4"><span className="text-emerald font-bold">In Stock</span></td></tr>
            <tr className="bg-pearl/5"><td className="p-4">Dewy Petals Earrings</td><td className="p-4 text-silver">#AA-1025</td><td className="p-4">8</td><td className="p-4">$850</td><td className="p-4"><span className="text-gold font-bold">Low Stock</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
