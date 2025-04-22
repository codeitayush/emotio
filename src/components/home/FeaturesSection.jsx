import React from 'react';
import { FiTruck, FiStar, FiShoppingBag, FiHeart } from 'react-icons/fi';

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <FiTruck className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FiStar className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Best Quality</h3>
            <p className="text-gray-600">Handpicked products</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FiShoppingBag className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600">30 day return policy</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FiHeart className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">24/7 dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
