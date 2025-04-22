import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="relative bg-gray-200 animate-pulse h-[500px]">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        {/* Title placeholder */}
        <div className="h-12 bg-gray-300 w-3/4 md:w-1/2 rounded-lg mb-6"></div>

        {/* Description placeholder */}
        <div className="h-6 bg-gray-300 w-full md:w-2/3 max-w-xl rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-300 w-5/6 md:w-1/2 max-w-xl rounded-lg mb-8"></div>

        {/* Buttons placeholder */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <div className="h-12 bg-gray-300 w-48 rounded-md"></div>
          <div className="h-12 bg-gray-300 w-48 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
