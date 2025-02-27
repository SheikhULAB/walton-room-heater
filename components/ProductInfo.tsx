"use client";
import React, { useState } from "react";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";

interface ProductInfoProps {
  title: string;
  model: string;
  oldPrice?: number;
  newPrice: number;
  brand: string;
  type: string;
  heatingElement: string;
  ratedPower: string;
  inStock: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  model,
  oldPrice,
  newPrice,
  brand,
  type,
  heatingElement,
  ratedPower,
  inStock,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-md shadow-sm p-4 space-y-4">
      <h1
        className="
          font-semibold 
          text-2xl 
          leading-[31px] 
          text-[#202020] 
          uppercase 
          tracking-wide 
          font-roboto
        "
      >
        {title}
      </h1>

      {/* Price Row */}
      <div className="flex items-baseline space-x-2">
        <p
          className="
            text-[22px]
            leading-[22px]
            font-bold
            text-[#288C53]
            font-roboto
          "
        >
          Tk {newPrice}
        </p>
        {oldPrice && (
          <p
            className="
              text-[18px]
              leading-[22px]
              font-light
              text-[#202020]
              line-through
              font-roboto
            "
          >
            Tk {oldPrice}
          </p>
        )}
      </div>

      {/* Info List */}
      <ul className="space-y-1">
        <li className="text-[14px] leading-[22px] text-[#696969] font-roboto">
          <span className="font-bold">Brand:</span>{" "}
          <span className="font-normal">{brand}</span>
        </li>
        <li className="text-[14px] leading-[22px] text-[#696969] font-roboto">
          <span className="font-bold">Model:</span>{" "}
          <span className="font-normal">{model}</span>
        </li>
        <li className="text-[14px] leading-[22px] text-[#696969] font-roboto">
          <span className="font-bold">Type:</span>{" "}
          <span className="font-normal">{type}</span>
        </li>
        <li className="text-[14px] leading-[22px] text-[#696969] font-roboto">
          <span className="font-bold">Heating Element:</span>{" "}
          <span className="font-normal">{heatingElement}</span>
        </li>
        <li className="text-[14px] leading-[22px] text-[#696969] font-roboto">
          <span className="font-bold">Rated Power:</span>{" "}
          <span className="font-normal">{ratedPower}</span>
        </li>
      </ul>

      {/* Status Box */}
      <div className="border rounded p-3 bg-gray-50 space-y-1">
        <p className="text-sm">
          <span className="font-semibold">Status:</span>{" "}
          <span className={inStock ? "text-green-600" : "text-red-600"}>
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>
        <hr></hr>
        <p className="text-sm">
          <span className="font-semibold">Brand:</span> {brand.toUpperCase()}
        </p>
      </div>

      {/* Quantity & Total */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="bg-black text-white w-8 h-8 rounded flex items-center justify-center font-bold hover:bg-gray-800"
          >
            -
          </button>
          <div className="w-8 text-center">{quantity}</div>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="bg-black text-white w-8 h-8 rounded flex items-center justify-center font-bold hover:bg-gray-800"
          >
            +
          </button>
        </div>
        <p className="text-green-600 font-semibold">
          Total: Tk {quantity * newPrice}
        </p>
      </div>

      {/* Bottom Buttons */}
<div className="flex flex-wrap items-center gap-2 justify-start">
  {/* Wishlist */}
  <button
    className="border border-black bg-white text-black px-3 py-2 rounded hover:bg-gray-100 flex items-center justify-center transition-transform duration-200 hover:scale-105"
    title="Add to Wishlist"
  >
    <Heart className="w-4 h-4" />
  </button>

  {/* Add to Cart */}
  <button
    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
    title="Add to Cart"
  >
    <ShoppingBag className="w-4 h-4" />
    <span>Add to Cart</span>
  </button>

  {/* Buy Now */}
  <button
    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
    title="Buy Now"
  >
    <ShoppingCart className="w-4 h-4" />
    <span>Buy Now</span>
  </button>
</div>

    </div>
  );
};

export default ProductInfo;
