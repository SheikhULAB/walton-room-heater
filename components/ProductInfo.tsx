"use client";
import React, { useState } from "react";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";

interface ProductInfoProps {
  /** e.g. "WALTON ROOM HEATER | WRH-PTC0X" */
  title: string;
  /** e.g. "WRH-PTC0X" */
  model: string;
  /** Old price (strikethrough) */
  oldPrice?: number;
  /** New price (highlighted in green) */
  newPrice: number;
  /** e.g. "Walton" */
  brand: string;
  /** e.g. "Room Heater" */
  type: string;
  /** e.g. "PTC Ceramic" */
  heatingElement: string;
  /** e.g. "1500 Watts" */
  ratedPower: string;
  /** true if in stock, false if out of stock */
  inStock: boolean;
}

/**
 * Displays product name, brand, pricing, and other info
 * in a layout closely matching your screenshot.
 */
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
  // Local state for quantity, so plus/minus buttons work
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-md shadow-sm p-4 space-y-4">
    
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

      <div className="flex items-baseline space-x-2">
  {/* New Price: Roboto 700, #288C53, 22px/22px */}
  <p className="
    text-[22px]
    leading-[22px]
    font-bold
    text-[#288C53]
    font-roboto
  ">
    Tk {newPrice}
  </p>

  {/* Old Price: Roboto 300, #202020, 18px/22px, line-through */}
  {oldPrice && (
    <p className="
      text-[18px]
      leading-[22px]
      font-light
      text-[#202020]
      line-through
      font-roboto
    ">
      Tk {oldPrice}
    </p>
  )}
</div>


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


      {/* Small "Status" card (bordered box) */}
      <div className="border rounded p-3 bg-gray-50 space-y-1">
        <p className="text-sm">
          <span className="font-semibold">Status:</span>{" "}
          <span className={inStock ? "text-green-600" : "text-red-600"}>
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Brand:</span> {brand.toUpperCase()}
        </p>
      </div>

      {/* Quantity & Total row */}
      <div className="flex items-center justify-between">
        {/* Quantity selector with minus/plus in black, white text */}
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

        {/* Total price in green */}
        <p className="text-green-600 font-semibold">
          Total: Tk {quantity * newPrice}
        </p>
      </div>

      {/* Bottom row: Love, Add to Cart, Buy Now */}
      <div className="flex flex-wrap items-center gap-2 justify-start">
        {/* Love button (white, black border) */}
        <button
          className="border border-black bg-white text-black px-3 py-2 rounded hover:bg-gray-100 flex items-center justify-center"
          title="Add to Wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Add to Cart button (black) */}
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition flex items-center space-x-2"
          title="Add to Cart"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>

        {/* Buy Now button (black) */}
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition flex items-center space-x-2"
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
