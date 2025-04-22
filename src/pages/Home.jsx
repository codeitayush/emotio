import React, { lazy, Suspense, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

// Lazy load components for code splitting
const HeroSection = lazy(() => import('../components/home/HeroSection'));
const FeaturesSection = lazy(() =>
  import('../components/home/FeaturesSection')
);
const PopularProductsSection = lazy(() =>
  import('../components/home/PopularProductsSection')
);
const NewsletterSection = lazy(() =>
  import('../components/home/NewsletterSection')
);

// Import skeleton loaders
import HeroSkeleton from '../components/skeletons/HeroSkeleton';
import FeaturesSkeleton from '../components/skeletons/FeaturesSkeleton';
import ProductsSkeleton from '../components/skeletons/ProductsSkeleton';
import NewsletterSkeleton from '../components/skeletons/NewsletterSkeleton';

const Home = () => {
  const { setTheme } = useTheme();

  // Set default theme when home page loads
  useEffect(() => {
    setTheme('default');
  }, [setTheme]);

  return (
    <div className="bg-gray-50">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<FeaturesSkeleton />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<ProductsSkeleton />}>
        <PopularProductsSection />
      </Suspense>

      <Suspense fallback={<NewsletterSkeleton />}>
        <NewsletterSection />
      </Suspense>
    </div>
  );
};

export default Home;
