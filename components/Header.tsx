// components/Header.tsx
import React from 'react';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
        {/* Left: Brand */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-purple-600">ULA</span>
        </div>

        {/* Middle: Search Bar + Search Icon */}
        <div className="mx-4 flex w-full max-w-md flex-1 items-center">
          <input
            type="text"
            placeholder="Searching for iteams"
            className="w-full rounded-l-md border border-gray-300 
                       py-2 px-4 text-sm outline-none 
                       focus:border-purple-500"
          />
          <button
            type="button"
            className="flex items-center justify-center rounded-r-md 
                       border border-l-0 border-gray-300 bg-gray-100 
                       px-3 py-2 text-black hover:bg-gray-200 
                       focus:outline-none"
          >
            <Search size={18} />
          </button>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="p-2 text-black transition-colors 
                       hover:bg-gray-100 focus:outline-none"
          >
            <ShoppingCart size={24} />
          </button>

          {/* Heart icon hidden on small devices */}
          <button
            type="button"
            className="hidden sm:flex p-2 text-black transition-colors 
                       hover:bg-gray-100 focus:outline-none"
          >
            <Heart size={24} />
          </button>

          {/* User icon hidden on small devices */}
          <button
            type="button"
            className="hidden sm:flex p-2 text-black transition-colors 
                       hover:bg-gray-100 focus:outline-none"
          >
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
