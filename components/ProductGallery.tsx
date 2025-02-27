// Example for ProductGallery.tsx
import React from 'react';

const ProductGallery: React.FC = () => {
  const images = [
    '/images/walton-room-heater.webp',
    '/images/walton-room-heater.webp',
  ];

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-md shadow-sm p-4 space-y-4">
      <div className="relative rounded bg-white p-4 h-full">
        {/* Discount Label */}
        <div className="absolute top-2 right-2 bg-black text-white text-xs sm:text-sm leading-[18px] sm:leading-[20px] font-semibold px-2 py-1 rounded">
          SAVE 13%
        </div>

        {/* Main Image */}
        <img
          src={images[0]}
          alt="Walton Room Heater"
          className="w-full h-auto object-contain rounded-md"
        />

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.slice(1).map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
