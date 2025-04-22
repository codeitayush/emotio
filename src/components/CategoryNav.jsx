import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMenu } from 'react-icons/fi';

const CategoryNav = () => {
  // Categories data - in a real app, this might come from an API or context
  const categories = [
    { id: 1, name: 'Women', slug: 'women', featured: true },
    { id: 2, name: 'Men', slug: 'men', featured: true },
    { id: 3, name: 'Accessories', slug: 'accessories', featured: true },
    { id: 4, name: 'Shoes', slug: 'shoes', featured: true },
    { id: 5, name: 'Bags', slug: 'bags', featured: true },
    { id: 6, name: 'Jewelry', slug: 'jewelry', featured: false },
    { id: 7, name: 'Beauty', slug: 'beauty', featured: false },
    { id: 8, name: 'Home', slug: 'home', featured: false },
    { id: 9, name: 'Sale', slug: 'sale', featured: true },
  ];

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-gray-100  shadow-sm">
      <div className="container mx-auto px-4">
        {/* Desktop navigation */}
        <div className="hidden md:flex justify-center">
          <ul className="flex space-x-8">
            {categories
              .filter((category) => category.featured)
              .map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="block py-3 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            <li className="relative group">
              <button className="flex items-center py-3 text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                More <FiChevronDown className="ml-1" size={16} />
              </button>
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded-b-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top z-50">
                <ul>
                  {categories
                    .filter((category) => !category.featured)
                    .map((category) => (
                      <li key={category.id}>
                        <Link
                          to={`/category/${category.slug}`}
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden py-2" ref={menuRef}>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center py-2 text-gray-700"
          >
            <FiMenu className="mr-2" size={20} /> Categories{' '}
            <FiChevronDown
              className={`ml-1 transition-transform ${
                mobileMenuOpen ? 'rotate-180' : ''
              }`}
              size={16}
            />
          </button>

          {mobileMenuOpen && (
            <div className="mt-2 bg-white rounded-md shadow-lg absolute left-0 right-0 z-50 mx-4 border border-gray-200">
              <ul className="py-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
