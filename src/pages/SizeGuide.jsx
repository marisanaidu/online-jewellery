import React from 'react';

const SizeGuide = () => {
  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl text-midnight font-bold mb-8 text-center">Jewelry Size Guide</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="p-8 border border-pearl rounded-xl">
          <h3 className="font-bold mb-4 text-midnight">Ring Sizing</h3>
          <p className="text-sm text-silver">Measure your finger circumference or use an existing ring to find your perfect fit.</p>
        </div>
        <div className="p-8 border border-pearl rounded-xl">
          <h3 className="font-bold mb-4 text-midnight">Necklace Lengths</h3>
          <p className="text-sm text-silver">From 14" chokers to 36" long ropes.</p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
