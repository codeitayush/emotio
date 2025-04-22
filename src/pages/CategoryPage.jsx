import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/home/ProductCard';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // This would typically be fetched from an API based on the category
  // Using mock data for now
  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      // Generate sample products for the category
      const categoryProducts = [
        {
          id: 1,
          name: `${capitalize(categorySlug)} Item 1`,
          image:
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          price: 29.99,
          rating: 4,
          reviews: 24,
        },
        {
          id: 2,
          name: `${capitalize(categorySlug)} Item 2`,
          image:
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          price: 59.99,
          rating: 5,
          reviews: 42,
        },
        {
          id: 3,
          name: `${capitalize(categorySlug)} Item 3`,
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
          name: `${capitalize(categorySlug)} Item 4`,
          image:
            'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
          price: 129.99,
          rating: 5,
          reviews: 36,
        },
      ];

      setProducts(categoryProducts);
      setLoading(false);
    }, 800); // Simulating loading delay
  }, [categorySlug]);

  // Helper function to capitalize first letter
  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">{capitalize(categorySlug)}</h1>
      <p className="text-gray-600 mb-8">
        Browse our collection of {categorySlug} products
      </p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 animate-pulse h-96 rounded-lg"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
