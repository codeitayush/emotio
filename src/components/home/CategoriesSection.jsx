import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Women's Fashion"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Women's Fashion
                </h3>
                <Link
                  to="/category/women"
                  className="inline-block text-white border-b border-white pb-1 transform group-hover:translate-x-2 transition-transform"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Men's Collection
                </h3>
                <Link
                  to="/category/men"
                  className="inline-block text-white border-b border-white pb-1 transform group-hover:translate-x-2 transition-transform"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Accessories"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Accessories
                </h3>
                <Link
                  to="/category/accessories"
                  className="inline-block text-white border-b border-white pb-1 transform group-hover:translate-x-2 transition-transform"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
