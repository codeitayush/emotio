import React from 'react';

const FeaturesSkeleton = () => {
  return (
    <div className="py-12 bg-white animate-pulse">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              {/* Icon placeholder */}
              <div className="rounded-full bg-gray-200 h-16 w-16 mb-4"></div>

              {/* Title placeholder */}
              <div className="h-6 bg-gray-200 w-32 rounded-lg mb-3"></div>

              {/* Description placeholder */}
              <div className="h-4 bg-gray-200 w-full rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSkeleton;
