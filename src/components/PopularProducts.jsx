import React from 'react';

const PopularProducts = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(id => (
          <div key={id} className="border rounded-lg p-2 shadow hover:shadow-lg">
            <img src={`/product${id}.jpg`} alt={`Product ${id}`} className="w-full h-40 object-cover" />
            <h3 className="mt-2 font-medium">Product {id}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
