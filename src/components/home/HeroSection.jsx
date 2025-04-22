import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const HeroSection = () => {
  // Slider data with different hero banners
  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      title: 'Spring Collection 2024',
      description:
        'Discover the latest trends in fashion and get ready for the new season with our stylish collection.',
      primaryButtonText: 'Shop Now',
      primaryButtonLink: '/products',
      secondaryButtonText: 'New Arrivals',
      secondaryButtonLink: '/products/new',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      title: 'Summer Essentials',
      description:
        'Stay cool and stylish with our curated collection of summer must-haves.',
      primaryButtonText: 'Explore',
      primaryButtonLink: '/category/summer',
      secondaryButtonText: 'View Deals',
      secondaryButtonLink: '/sale',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      title: 'Premium Accessories',
      description:
        'Complete your look with our exclusive collection of designer accessories.',
      primaryButtonText: 'Shop Accessories',
      primaryButtonLink: '/category/accessories',
      secondaryButtonText: 'Gift Ideas',
      secondaryButtonLink: '/gifts',
    },
  ];

  // State for tracking current slide and direction
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('left'); // 'left' or 'right'

  // Reference to track the slider container
  const sliderRef = useRef(null);

  // Function to go to next slide
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, slides.length]);

  // Function to go to previous slide
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, slides.length]);

  // Function to go to a specific slide
  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentSlide) return;
      setIsAnimating(true);
      setDirection(index > currentSlide ? 'left' : 'right');
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [currentSlide, isAnimating]
  );

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slides Container */}
      <div ref={sliderRef} className="h-full w-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 h-full w-full bg-cover bg-center transition-transform duration-600 ease-in-out`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${slide.image}")`,
              transform:
                index === currentSlide
                  ? 'translateX(0)'
                  : index < currentSlide ||
                    (currentSlide === 0 &&
                      index === slides.length - 1 &&
                      direction === 'right')
                  ? `translateX(-100%)`
                  : `translateX(100%)`,
              zIndex: index === currentSlide ? 10 : 5,
              opacity: index === currentSlide ? 1 : 1,
              transition: isAnimating
                ? 'transform 600ms ease-in-out'
                : index === currentSlide
                ? 'transform 600ms ease-in-out'
                : 'none',
            }}
          >
            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-xl">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={slide.primaryButtonLink}
                  className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors"
                >
                  {slide.primaryButtonText}
                </Link>
                <Link
                  to={slide.secondaryButtonLink}
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 py-3 px-8 rounded-md font-medium transition-colors"
                >
                  {slide.secondaryButtonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
