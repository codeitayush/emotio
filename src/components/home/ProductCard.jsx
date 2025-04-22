import React from 'react';
import { FiHeart, FiStar, FiShoppingBag } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const { name, image, price, originalPrice, rating, reviews, sale } = product;

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <FiHeart className="text-gray-600 hover:text-red-500 cursor-pointer" />
        </div>
        {sale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({reviews})</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          {originalPrice ? (
            <div>
              <span className="text-indigo-600 font-bold">${price}</span>
              <span className="text-gray-400 line-through ml-2">
                ${originalPrice}
              </span>
            </div>
          ) : (
            <span className="text-indigo-600 font-bold">${price}</span>
          )}
          <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
