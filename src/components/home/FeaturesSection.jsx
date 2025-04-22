import React from 'react';
import { FiTruck, FiStar, FiShoppingBag, FiHeart } from 'react-icons/fi';

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <FiTruck className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-primary-900">
              Free Shipping
            </h3>
            <p className="text-primary-700">On all orders over $50</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FiStar className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-primary-900">
              Best Quality
            </h3>
            <p className="text-primary-700">Handpicked products</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FiShoppingBag className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-primary-900">
              Easy Returns
            </h3>
            <p className="text-primary-700">30 day return policy</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FiHeart className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-primary-900">
              Customer Support
            </h3>
            <p className="text-primary-700">24/7 dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
