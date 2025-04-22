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
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    // Only run the rotation if the bar is expanded
    if (!expanded) return;

    const interval = setInterval(() => {
      // Fade out, change text, and fade in
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setIsVisible(true);
      }, 500); // Half a second for transition
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [announcements.length, expanded]);

  const toggleBar = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-black text-white transition-all duration-300 ${
        expanded ? 'py-2' : 'py-0 h-0 overflow-hidden'
      }`}
    >
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

        <button
          aria-label={expanded ? 'Close announcement' : 'Open announcement'}
          onClick={toggleBar}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        >
          {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
