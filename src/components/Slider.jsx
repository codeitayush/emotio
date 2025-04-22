import React, { useEffect, useRef, useState } from 'react';

const slides = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prevIndex) => (prevIndex + 1) % slides.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="w-full overflow-hidden relative h-64">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
