"use client"
import React, { useState } from 'react';

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Description' | 'Reviews'>('Description');

  return (
    <div className="ml-[92] p-1">
      {/* Tabs */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab('Description')}
          className={`px-4 py-2 rounded border transition-colors ${
            activeTab === 'Description'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('Reviews')}
          className={`px-4 py-2 rounded border transition-colors ${
            activeTab === 'Reviews'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {activeTab === 'Description' && (
         <div className='font-bold'>Walton Room Heater | Model: WRH-PTC0X</div>
        )}
        {activeTab === 'Reviews' && (
            <p className="text-gray-600">No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
