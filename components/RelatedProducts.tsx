"use client";
import React from 'react';
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  discount: number; // e.g., 13 for "SAVE 13%"
  price: number;    // e.g., 2600
  oldPrice?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "WALTON ROOM HEATER | WRH-FH103",
    image: "/images/heater1.webp",
    discount: 13,
    price: 2600,
    oldPrice: 3000,
  },
  {
    id: 2,
    name: "WALTON ROOM HEATER | WRH-FHW02",
    image: "/images/heater2.webp",
    discount: 13,
    price: 1485,
    oldPrice: 1700,
  },
  {
    id: 3,
    name: "WALTON ROOM HEATER | WRH-PTC205T",
    image: "/images/heater3.webp",
    discount: 10,
    price: 3200,
    oldPrice: 3550,
  },
  {
    id: 4,
    name: "XIAOMI MIJIA DESKTOP ELECTRIC HEATER 600W",
    image: "/images/heater4.webp",
    discount: 10,
    price: 3370,
    oldPrice: 3750,
  },
  {
    id: 5,
    name: "WALTON ROOM HEATER | WRH-PTC007",
    image: "/images/heater5.webp",
    discount: 13,
    price: 1990,
    oldPrice: 2300,
  },
];

const RelatedProducts: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Related Products
        </h2>

        {/* Grid layout: 1 column on smallest screens, up to 5 on extra-large */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-md border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md group"
            >
              {/* Discount Label */}
              {product.discount && (
                <span
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#FFFFFF",
                  }}
                  className="absolute left-2 top-2 z-20 rounded bg-black px-2 py-1"
                >
                  SAVE {product.discount}%
                </span>
              )}

              {/* Basket Icon on Top Right */}
              <button className="absolute top-2 right-2 z-20 transition-transform duration-200 hover:scale-110">
                <ShoppingCart className="h-5 w-5 text-green-600" />
              </button>

              {/* Product Image with scale animation on hover */}
              <div className="mb-3 flex justify-center overflow-hidden cursor-pointer">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Product Name */}
              <h3
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "21px",
                  color: "#010106",
                }}
                className="mb-2 line-clamp-2"
              >
                {product.name}
              </h3>

              {/* New Price */}
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#288c53",
                }}
                className="mb-1"
              >
                ฿{product.price.toLocaleString()}
              </div>

              {/* Old Price (if available) */}
              {product.oldPrice && (
                <div
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "22px",
                    color: "#494949",
                  }}
                  className="line-through"
                >
                  ฿{product.oldPrice.toLocaleString()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
