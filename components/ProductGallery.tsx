import React from 'react';

const ProductGallery: React.FC = () => {
  
  const images = [
    '/images/walton-room-heater.webp',  // Main image
    '/images/walton-room-heater.webp',  // Thumbnail #1
  ];

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-md shadow-sm p-4 space-y-4">
      <div className="relative border rounded shadow-md bg-white p-4">
        <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
          SAVE 13%
        </div>

        {/* Main Image */}
        <img
          src={images[0]}
          alt="Walton Room Heater"
          className="w-full h-auto object-contain rounded-md"
        />

        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.slice(1).map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                className="w-16 h-16 object-cover rounded cursor-pointer
                           hover:opacity-80 transition"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
