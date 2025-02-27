"use client";
import React, { useState } from 'react';
import RelatedProducts from './RelatedProducts';
import WaltonHeaterDescription from './WaltonHeaterDescription';

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Description' | 'Reviews'>('Description');

  return (
    <div className="ml-[92px] p-1">
      {/* Tabs */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab('Description')}
          className={`px-4 py-2 rounded border transition-colors text-[16px] leading-[22px] font-bold font-roboto ${
            activeTab === 'Description'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('Reviews')}
          className={`px-4 py-2 rounded border transition-colors text-[16px] leading-[22px] font-bold font-roboto ${
            activeTab === 'Reviews'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-4 text-[14px] leading-[22px] font-bold font-roboto text-[#202020]">
        {activeTab === 'Description' && (
          <div>
            <WaltonHeaterDescription />
            <RelatedProducts />
          </div>
        )}
        {activeTab === 'Reviews' && (
          <div>
          <RelatedProducts />
         </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
