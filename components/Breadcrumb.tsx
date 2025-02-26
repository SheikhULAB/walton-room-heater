import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ fontFamily: 'Roboto, sans-serif' }}
      className="shadow-sm rounded-lg p-4 ml-[92px] max-w-screen-xl font-normal"
    >
      <ol className="flex flex-wrap items-center gap-1 text-[14px] leading-[22px] text-[#010106]">
        <li className="flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <ChevronRight className="mx-2 text-[#010106]" size={16} />
        </li>

        <li className="flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home Appliances
          </a>
          <ChevronRight className="mx-2 text-[#010106]" size={16} />
        </li>

        <li className="flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Small Appliances
          </a>
          <ChevronRight className="mx-2 text-[#010106]" size={16} />
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
