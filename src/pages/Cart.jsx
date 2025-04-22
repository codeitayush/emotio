import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
  // Sample cart items data - in a real app this would come from a state manager or API
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Summer T-shirt',
      image:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 29.99,
      quantity: 1,
      size: 'Medium',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Casual Jacket',
      image:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 59.99,
      quantity: 2,
      size: 'Large',
      color: 'Navy Blue',
    },
  ]);

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Handle quantity changes
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="text-center py-16">
          <div className="flex justify-center">
            <FiShoppingBag className="text-5xl text-gray-300 mb-4" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/products"
            className="bg-indigo-600 text-white py-3 px-6 rounded-md inline-flex items-center hover:bg-indigo-700 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items (2 columns on large screens) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="pb-4 font-semibold">Product</th>
                  <th className="pb-4 font-semibold text-center">Quantity</th>
                  <th className="pb-4 font-semibold text-right">Price</th>
                  <th className="pb-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {cartItems.map((item) => (
                  <tr key={item.id} className="text-sm md:text-base">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded mr-4 hidden sm:block"
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="text-gray-600 text-sm mt-1">
                            <span>Size: {item.size}</span> |{' '}
                            <span>Color: {item.color}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-10 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remove item"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mb-8">
            <Link
              to="/products"
              className="text-indigo-600 inline-flex items-center hover:text-indigo-800"
            >
              <FiArrowLeft className="mr-2" /> Continue Shopping
            </Link>

            <button
              className="text-red-500 inline-flex items-center hover:text-red-700"
              onClick={() => setCartItems([])}
            >
              <FiTrash2 className="mr-2" /> Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary (1 column on large screens) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Tax:</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">Including VAT</p>
              </div>
            </div>

            <button className="bg-indigo-600 text-white w-full py-3 px-4 rounded-md mt-6 hover:bg-indigo-700 transition-colors font-medium">
              Proceed to Checkout
            </button>

            <div className="mt-4 text-center text-sm text-gray-500">
              <p>We accept:</p>
              <div className="flex justify-center space-x-2 mt-2">
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
