import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Solutions', hasDropdown: true },
    { name: 'Features', hasDropdown: false },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Blog', hasDropdown: true },
    { name: 'Restaurants', hasDropdown: false },
    { name: 'Food', hasDropdown: true },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <div className="w-6 h-8 bg-[#A3C03F] rounded-t-full rounded-bl-full relative">
            {/* Simple CSS representation of the olive logo */}
            <div className="w-1 h-2 bg-green-800 absolute -top-1 left-3 rotate-45 rounded-full"></div>
            <div className="flex gap-1 absolute top-2 left-1.5">
                <div className="w-1 h-1 bg-[#243322] rounded-full"></div>
                <div className="w-1 h-1 bg-[#243322] rounded-full"></div>
            </div>
            <div className="w-2 h-[1px] bg-[#243322] absolute top-5 left-2"></div>
        </div>
        <span className="text-2xl font-bold tracking-tighter text-[#A3C03F]">live</span>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        {navItems.map((item) => (
          <div key={item.name} className="flex items-center cursor-pointer hover:text-black transition-colors">
            {item.name}
            {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />}
          </div>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <button className="hover:text-black transition-colors">Sign in</button>
        <button className="bg-[#243322] text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-black transition-colors">
          Get Olive <span className="text-lg leading-none">&rarr;</span>
        </button>
      </div>
    </nav>
  );
}