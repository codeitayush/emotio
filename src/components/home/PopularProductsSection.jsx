import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const PopularProductsSection = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Summer T-shirt',
      image:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 29.99,
      rating: 4,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Casual Jacket',
      image:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 59.99,
      rating: 5,
      reviews: 42,
    },
    {
      id: 3,
      name: 'Canvas Sneakers',
      image:
        'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4,
      reviews: 18,
      sale: true,
    },
    {
      id: 4,
      name: 'Designer Bag',
      image:
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 129.99,
      rating: 5,
      reviews: 36,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors font-medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
