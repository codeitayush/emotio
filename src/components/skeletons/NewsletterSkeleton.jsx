import React from 'react';

const NewsletterSkeleton = () => {
  return (
    <div className="py-16 bg-indigo-100 animate-pulse">
      <div className="container mx-auto px-4 text-center">
        {/* Title placeholder */}
        <div className="h-10 bg-gray-200 w-72 mx-auto rounded-lg mb-4"></div>

        {/* Description placeholder */}
        <div className="h-5 bg-gray-200 w-full max-w-md mx-auto rounded-lg mb-2"></div>
        <div className="h-5 bg-gray-200 w-3/4 max-w-sm mx-auto rounded-lg mb-8"></div>

        {/* Form placeholder */}
        <div className="max-w-md mx-auto flex">
          <div className="h-12 bg-gray-200 flex-1 rounded-l-md"></div>
          <div className="h-12 bg-gray-300 w-32 rounded-r-md"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSkeleton;
