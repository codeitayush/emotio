import React from 'react';

const ProductCardSkeleton = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    {/* Product image placeholder */}
    <div className="bg-gray-300 h-64 w-full"></div>

    <div className="p-4">
      {/* Product title placeholder */}
      <div className="h-6 bg-gray-300 w-3/4 rounded-lg mb-3"></div>

      {/* Rating placeholder */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 bg-gray-300 rounded-full"></div>
        ))}
        <div className="h-4 bg-gray-300 w-10 rounded-lg ml-1"></div>
      </div>

      {/* Price and button placeholder */}
      <div className="flex justify-between items-center mt-2">
        <div className="h-6 bg-gray-300 w-16 rounded-lg"></div>
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>
);

const ProductsSkeleton = () => {
  return (
    <div className="py-12 bg-white animate-pulse">
      <div className="container mx-auto px-4">
        {/* Section title placeholder */}
        <div className="h-10 bg-gray-300 w-64 mx-auto rounded-lg mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>

        {/* View all button placeholder */}
        <div className="mt-10 text-center">
          <div className="inline-block h-12 bg-gray-300 w-40 rounded-md mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSkeleton;
