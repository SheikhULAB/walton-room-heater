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
      {/* Product Title (uppercase, bold) */}
      <h1 className="text-lg font-black uppercase tracking-wide">{title}</h1>

      {/* Pricing row: new price in green, old price (if any) with line-through */}
      <div className="flex items-baseline space-x-2">
        <p className="text-2xl font-semibold text-green-600">Tk {newPrice}</p>
        {oldPrice && (
          <p className="text-gray-500 line-through text-sm">Tk {oldPrice}</p>
        )}
      </div>

      {/* Basic Info: brand, model, type, heating element, rated power */}
      <ul className="text-sm space-y-1">
        <li>
          <span className="font-semibold">Brand:</span> {brand}
        </li>
        <li>
          <span className="font-semibold">Model:</span> {model}
        </li>
        <li>
          <span className="font-semibold">Type:</span> {type}
        </li>
        <li>
          <span className="font-semibold">Heating Element:</span>{" "}
          {heatingElement}
        </li>
        <li>
          <span className="font-semibold">Rated Power:</span> {ratedPower}
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
