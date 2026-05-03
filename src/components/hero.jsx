import React from 'react';
import { Apple } from 'lucide-react';

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center mt-8">
      {/* Social Proof Pill */}
      <div className="flex items-center gap-3 bg-[#F4F4F0] rounded-full pl-1 pr-4 py-1 mb-8">
        <div className="flex -space-x-2">
          {/* Placeholders for the 4 avatar images */}
          <img src="https://i.pravatar.cc/100?img=1" alt="User 1" className="w-6 h-6 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/100?img=2" alt="User 2" className="w-6 h-6 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/100?img=3" alt="User 3" className="w-6 h-6 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/100?img=4" alt="User 4" className="w-6 h-6 rounded-full border-2 border-white" />
        </div>
        <span className="text-xs font-medium text-gray-600">Trusted by thousands of healthy families</span>
      </div>

      {/* Main Headlines */}
      <h1 className="text-5xl md:text-[64px] leading-[1.1] font-bold text-[#243322] mb-6 max-w-3xl tracking-tight">
        The Safest Way to <br /> Shop for Groceries
      </h1>
      
      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-[15px] leading-relaxed">
        Use the Olive Food Scanner App to Instantly Eliminate<br/> 
        Harmful Ingredients from Your Family's Diet and Get<br/> 
        Expert-Backed Food Insights
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-6">
        <button className="bg-[#243322] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black transition-colors font-medium text-sm">
          <Apple className="w-5 h-5 mb-0.5" />
          Download for iOS
        </button>
        <button className="text-[#243322] font-semibold text-sm flex items-center gap-2 hover:opacity-70 transition-opacity">
          Join the Olive Community <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}