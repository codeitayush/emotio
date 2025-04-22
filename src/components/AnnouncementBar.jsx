import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const AnnouncementBar = () => {
  const announcements = [
    'EMOTIO',
    'SIGN UP & GET 15% OFF',
    '50% OFF SUMMER COLLECTION',
    'FREE SHIPPING ON ORDERS OVER $100',
    'NEW ARRIVALS JUST DROPPED',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out, change text, and fade in
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setIsVisible(true);
      }, 500); // Half a second for transition
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className={`bg-black text-white transition-all duration-300 py-2`}>
      <div className="container mx-auto px-4 relative">
        <div
          className={`flex justify-center items-center transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-center text-sm font-medium tracking-wider uppercase">
            {announcements[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
