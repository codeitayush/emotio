import React from 'react';

const CategoriesSkeleton = () => {
  return (
    <div className="py-12 bg-primary-50 animate-pulse">
      <div className="container mx-auto px-4">
        {/* Section title placeholder */}
        <div className="h-10 bg-primary-200 w-64 mx-auto rounded-lg mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_) => (
            <div key={_} className="relative rounded-lg bg-primary-200 h-80">
              {/* Category content placeholder */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="h-7 bg-primary-300 w-40 rounded-lg mb-3"></div>
                <div className="h-5 bg-primary-300 w-32 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
