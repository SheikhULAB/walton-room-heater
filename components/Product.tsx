import React from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductSidebar from '../components/ProductSidebar';

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/*
        - Use flex layout
        - On small screens (default): single column (flex-col)
        - On md+ screens: three equal-width columns (flex-row, each w-1/3)
        - items-stretch ensures they match the tallest column
      */}
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        <div className="w-full md:w-1/3 flex flex-col">
          <ProductGallery />
        </div>

        <div className="w-full md:w-1/3 flex flex-col">
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
        </div>

        <div className="w-full md:w-1/3 flex flex-col">
          <ProductSidebar />
        </div>
      </div>
    </div>
  );
}
