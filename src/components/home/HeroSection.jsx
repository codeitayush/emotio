import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80")',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Spring Collection 2024
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl">
          Discover the latest trends in fashion and get ready for the new season
          with our stylish collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors"
          >
            Shop Now
          </Link>
          <Link
            to="/products/new"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 py-3 px-8 rounded-md font-medium transition-colors"
          >
            New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
