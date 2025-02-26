import React from 'react';
import {
  Truck,
  BadgeDollarSign,
  ShieldCheck,
  Shield,
  Facebook,
  Mail,
  Linkedin,
  Copy,
} from 'lucide-react';

// Example custom inline SVG icons for brands not included in Lucide
// (You can replace these with official brand SVGs if desired)

// X (formerly Twitter)
const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M17 3H21L13 14L19 21H15L9 13L3 21H3.5L11 3H17Z" />
  </svg>
);

// WhatsApp
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M380.9 97.1C339.3 55.5 283.1 32 224 32 99.9 32 0 131.9 0 256c0 45.1 11.8 89.2 34.3 128L0 480l99.8-33.1c38.2 20.9 81.5 31.9 124.2 31.9h.1c124.1 0 224-99.9 224-224 .1-59.1-23.4-115.3-67.2-158.8zM224.2 415.8h-.1c-37 0-73.1-10-104.2-29l-7.4-4.4-59.2 19.6 19.8-57.6-4.8-7.8c-18.6-30.3-28.3-65.2-28.3-100.8 0-106.5 86.7-193.2 193.3-193.2 51.5 0 99.9 20.1 136.2 56.4 36.3 36.3 56.4 84.8 56.3 136.3-.1 106.5-86.8 193.2-193.7 193.2zm105.4-138.5c-5.8-2.9-34.5-17-39.9-18.9-5.3-1.9-9.2-2.9-13.1 2.9-3.9 5.8-15 18.9-18.4 22.8-3.4 3.8-6.8 4.3-12.6 1.4-5.8-2.9-24.5-9-46.6-28.7-17.2-15.3-28.8-34.2-32.2-40-3.4-5.8-.4-8.9 2.6-11.8 2.7-2.6 5.8-6.8 8.7-10.2 2.9-3.4 3.8-5.8 5.8-9.7 1.9-3.8 1-7.3-.5-10.2-1.4-2.9-13.1-31.6-18-43.4-4.8-11.6-9.7-10-13.1-10.2-3.4-.2-7.3-.2-11.2-.2s-10.2 1.4-15.6 7.3c-5.3 5.8-20.3 19.8-20.3 48.2s20.8 55.9 23.7 59.8c2.9 3.8 39.7 60.7 96.2 85.2 13.4 5.8 23.9 9.3 32.2 11.9 13.4 4.2 25.6 3.6 35.2 2.2 10.7-1.6 34.5-14.1 39.3-27.7 4.8-13.6 4.8-25.2 3.4-27.7-1.3-2.6-5.3-3.9-11.1-6.8z" />
  </svg>
);

// Telegram
const TelegramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 496 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm123.8 161.4-33.5 158c-2.5 11.2-9 14-18.3 8.7l-50.7-37.4-24.5 23.6c-2.6 2.6-4.8 4.3-9.8 4.3l3.5-49.7 90.7-81.8c3.9-3.4-0.8-5.3-6-1.8l-112 70.7-48.3-15.1c-10.5-3.3-10.7-10.4 2.2-15.4l187.8-72.3c8.7-3.2 16.3 2.1 13.5 15.2z" />
  </svg>
);

// Skype
const SkypeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M424.8 297c2.8-13.8 4.2-28.1 4.2-42.6 0-114.7-93.3-208-208-208-14.5 0-28.8 1.4-42.6 4.2C168.4 18.4 152.5 0 128 0 92.7 0 64 28.7 64 64c0 24.5 18.4 40.4 19.6 50.4-2.8 13.8-4.2 28.1-4.2 42.6 0 114.7 93.3 208 208 208 14.5 0 28.8-1.4 42.6-4.2 10 1.2 25.9 19.6 50.4 19.6 35.3 0 64-28.7 64-64 0-24.5-18.4-40.4-19.6-50.4zM305.1 340.1c-22.1 14.6-49.2 22.3-77.2 22.3-68.5 0-124-42.7-124-95.3 0-31.5 18.4-58.9 48.4-76.8 8.1-4.8 18.5-2.2 23.3 5.9 4.8 8.1 2.2 18.5-5.9 23.3-19.2 11.3-30.2 28.1-30.2 47.5 0 31.6 32.5 58.5 72.5 58.5 17.1 0 33.3-4 46-11.2 8-5.2 18.7-2.8 23.9 5.2s2.8 18.7-5.2 23.9z" />
  </svg>
);

// Pocket
const PocketIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M408 64H40C17.9 64 0 81.9 0 104v102.4c0 36.3 14.5 70.9 40.5 96.9 44.7 44.7 89.4 89.4 134.1 134.1 5.5 5.5 14.3 5.5 19.8 0l79.2-79.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-69.3 69.3-124.2-124.1C48.4 274.7 36 247.3 36 219.6V104c0-2.2 1.8-4 4-4h368c2.2 0 4 1.8 4 4v115.6c0 27.7-12.4 55.1-34.4 77.1L259.4 380.8l-69.3-69.3c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l79.2 79.2c5.5 5.5 14.3 5.5 19.8 0 44.7-44.7 89.4-89.4 134.1-134.1 26-26 40.5-60.6 40.5-96.9V104c0-22.1-17.9-40-40-40z" />
  </svg>
);

// Messenger
const MessengerIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M256.5 32C132.3 32 32 125.5 32 240.7c0 63.7 31.3 120.6 81.7 158.7v69.5l75.3-41.2c21.5 6 44.7 9.2 67.5 9.2 124.2 0 224.5-93.5 224.5-208.7S380.7 32 256.5 32zm94.7 158.6-53.3 85.2c-4.6 7.4-13.9 9.7-21.3 5.2l-59.1-35.6c-5.7-3.4-12.9-2.8-17.9 1.4l-72.6 60.8c-11.3 9.4-26.6-5.9-17.2-17.2l53.3-85.2c4.6-7.4 13.9-9.7 21.3-5.2l59.1 35.6c5.7 3.4 12.9 2.8 17.9-1.4l72.6-60.8c11.3-9.4 26.5 5.8 17.2 17.2z" />
  </svg>
);

const ProductSidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/3 bg-white border border-gray-200 rounded-md p-4 text-gray-700 space-y-6">
      {/* Delivery Section */}
      <div>
        <h2 className="flex items-center text-lg font-black mb-2">
          <Truck className="w-5 h-5 text-gray-600 mr-2" />
          Delivery
        </h2>
        <div className="ml-6 space-y-2 text-sm">
          <div>
            <p className="font-black">Standard Delivery</p>
            <p>3-5 working days</p>
          </div>
          <div className="flex items-start">
            <BadgeDollarSign className="w-5 h-5 text-gray-600 mr-2 mt-1" />
            <div>
              <p className="font-black">Booking Money Required</p>
              <p>Booking money: b300</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div>
        <h2 className="flex items-center text-lg font-black mb-2">
          <ShieldCheck className="w-5 h-5 text-gray-600 mr-2" />
          Service
        </h2>
        <div className="ml-6 space-y-2 text-sm">
          <p className="font-extrabold">100% Authentic</p>
          <p className="font-extrabold">6 months brand warranty</p>
          <a
            href="#"
            className="text-blue-600 hover:underline inline-block"
          >
            Click here for product warranty policy
          </a>
        </div>
      </div>

      {/* Sold By Section */}
      <div>
        <h2 className="flex items-center text-lg font-black mb-2">
          <Shield className="w-5 h-5 text-gray-600 mr-2" />
          Sold By
        </h2>
        <p className="ml-6 text-sm font-extrabold">Walton Home Appliances</p>
      </div>

      {/* Share Section */}
      <div>
        <h2 className="text-lg font-black mb-2">Share</h2>
        <div className="flex flex-wrap gap-3 text-gray-600 ml-1">
          {/* Facebook */}
          <a
            href="#"
            className="hover:text-blue-600 transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          {/* X (formerly Twitter) */}
          <a
            href="#"
            className="hover:text-black transition-colors"
            aria-label="Share on X"
          >
            <XIcon />
          </a>
          {/* WhatsApp */}
          <a
            href="#"
            className="hover:text-green-500 transition-colors"
            aria-label="Share on WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          {/* Email */}
          <a
            href="#"
            className="hover:text-red-500 transition-colors"
            aria-label="Share via Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            className="hover:text-blue-700 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {/* Telegram */}
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
            aria-label="Share on Telegram"
          >
            <TelegramIcon />
          </a>
        
          {/* Skype */}
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
            aria-label="Share on Skype"
          >
            <SkypeIcon />
          </a>
          {/* Pocket */}
          <a
            href="#"
            className="hover:text-pink-600 transition-colors"
            aria-label="Save to Pocket"
          >
            <PocketIcon />
          </a>
          {/* Messenger */}
          <a
            href="#"
            className="hover:text-blue-500 transition-colors"
            aria-label="Share on Messenger"
          >
            <MessengerIcon />
          </a>
          {/* Copy Link */}
          <a
            href="#"
            className="hover:text-gray-800 transition-colors"
            aria-label="Copy Link"
          >
            <Copy className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
