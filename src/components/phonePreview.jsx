import React from 'react';
import { Heart, Share } from 'lucide-react';

export default function PhoneMockup() {
  // A helper component to render the faded background cards
  const BackgroundCard = ({ position }) => (
    <div className={`absolute ${position} top-32 w-[240px] bg-white/40 backdrop-blur-sm rounded-3xl opacity-50 scale-90 -z-10 p-4 shadow-sm border border-white/50 flex flex-col items-center pointer-events-none`}>
      <div className="w-full h-24 bg-white/60 rounded-xl mb-3"></div>
      <div className="w-3/4 h-3 bg-gray-200/60 rounded-full mb-2"></div>
      <div className="w-1/2 h-2 bg-gray-200/60 rounded-full"></div>
    </div>
  );

  return (
    <div className="mt-12 relative flex justify-center items-center h-[680px] w-full max-w-4xl mx-auto">
      
      {/* Blurred background cards replicating the app UI */}
      <BackgroundCard position="left-[10%] md:left-[15%]" />
      <BackgroundCard position="right-[10%] md:right-[15%]" />

      {/* Main Phone Chassis */}
      <div className="relative z-10 w-[320px] h-[650px] bg-white rounded-[45px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-[8px] border-[#F2F2F2] overflow-hidden flex flex-col">
        
        {/* Dynamic Island / Top Notch */}
        <div className="absolute top-0 inset-x-0 h-8 flex justify-center z-20 pt-2.5">
          <div className="w-[100px] h-[26px] bg-black rounded-full"></div>
        </div>

        {/* Inner App Content - hide-scrollbar class assumes you add `::-webkit-scrollbar { display: none; }` to your global css */}
        <div className="flex-1 bg-white pt-16 px-5 flex flex-col overflow-y-auto pb-8" style={{ scrollbarWidth: 'none' }}>
          
          {/* Product Image Carousel Layout */}
          <div className="flex items-center justify-center gap-3 mb-6 w-full">
            {/* Left partial image */}
            <div className="w-10 h-20 bg-gray-100 rounded-r-xl flex-shrink-0 border-y border-r border-gray-200 overflow-hidden opacity-40">
               <img src="src\assets\product-1.webp" alt="" className="w-full h-full object-cover" />
            </div>
            
            {/* Center Main Image */}
            <div className="w-48 h-32 bg-gray-50 rounded-2xl flex-shrink-0 overflow-hidden border border-gray-100 shadow-sm">
               {/* Replace with actual cracker image */}
               <img src="src\assets\product-1.webp" alt="Fig and Olive Crackers" className="w-full h-full object-cover" />
            </div>

            {/* Right partial image */}
            <div className="w-10 h-20 bg-gray-100 rounded-l-xl flex-shrink-0 border-y border-l border-gray-200 overflow-hidden opacity-40">
               <img src="src\assets\product-1.webp" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Product Info (Centered exactly like the image) */}
          <div className="mb-6 flex flex-col items-center text-center px-2">
             <h2 className="font-bold text-[#243322] text-[17px] leading-[1.2] mb-1.5">Fig and Olive Crackers, Fig<br/>and Olive</h2>
             <p className="text-[#8E8E8E] text-[13px] font-medium">Lesley Stowe</p>
          </div>

          {/* Score & Actions Row */}
          <div className="flex items-start justify-between mb-6 px-1">
            {/* Score */}
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 bg-[#E4574D] rounded-full mt-2"></div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="font-extrabold text-[22px] text-[#243322] leading-none">46</span>
                  <span className="text-[#8E8E8E] text-[13px] font-medium ml-0.5">/100</span>
                </div>
                <span className="text-[#8E8E8E] text-[12px] font-medium mt-1">Avoid</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-4 text-[#8E8E8E] mt-1">
              <Heart className="w-[22px] h-[22px] stroke-[1.5] cursor-pointer hover:text-black transition-colors" />
              <Share className="w-[22px] h-[22px] stroke-[1.5] cursor-pointer hover:text-black transition-colors" />
            </div>
          </div>

          {/* "Oliver Says" Section */}
          <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#F2F1EC] shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              {/* Using a simplified CSS version of the mascot for accuracy */}
              <div className="w-[18px] h-[22px] bg-[#A3C03F] rounded-t-full rounded-bl-full relative">
                <div className="w-1 h-1.5 bg-green-800 absolute -top-1 left-2 rotate-45 rounded-full"></div>
                <div className="flex gap-0.5 absolute top-1.5 left-1">
                    <div className="w-1 h-1 bg-[#243322] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#243322] rounded-full"></div>
                </div>
              </div>
              <span className="font-bold text-[14px] tracking-tight text-[#243322]">Oliver Says:</span>
            </div>
            
            <p className="text-[12.5px] leading-[1.6] text-[#4A4A4A]">
              "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully."
            </p>
          </div>

          {/* Breakdown Title */}
          <div className="mt-6">
            <h3 className="font-bold text-[#243322] text-[15px] italic border-b-2 border-black inline-block pb-0.5">Breakdown</h3>
          </div>

        </div>
      </div>
    </div>
  );
}