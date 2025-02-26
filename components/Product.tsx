import React from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductSidebar from '../components/ProductSidebar';

export default function ProductPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 
        Use a flex container that stacks vertically on small screens (flex-col) 
        and horizontally from md: breakpoint onward (flex-row). 
      */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        <ProductGallery />

        <ProductInfo
          title="WALTON ROOM HEATER | WRH-PTC0X"
          model="WRH-PTC0X"
          oldPrice={2990}
          newPrice={2600}
          brand="Walton"
          type="Room Heater"
          heatingElement="PTC Ceramic"
          ratedPower="1500 Watts"
          inStock={true}
         />


        <ProductSidebar />
      </div>
    </div>
  );
}
