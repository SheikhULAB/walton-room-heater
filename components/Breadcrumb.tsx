import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="shadow-sm rounded-lg p-4 ml-[92] max-w-screen-xl font-bold"
    >
      <ol className="flex flex-wrap items-center gap-1 text-gray-600 text-base">
        <li className="flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <ChevronRight className="mx-2 text-gray-400" size={16} />
        </li>

        <li className="flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home Appliances
          </a>
          <ChevronRight className="mx-2 text-gray-400" size={16} />
        </li>

        <li className="flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Small Appliances
          </a>
          <ChevronRight className="mx-2 text-gray-400" size={16} />
        </li>

        <li className="flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Room Heater
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
