import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-24 mr-2 object-contain cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaUser className="cursor-pointer" onClick={() => navigate('/login')} />
        <div
          className="relative cursor-pointer"
          onClick={() => navigate('/cart')}
        >
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
