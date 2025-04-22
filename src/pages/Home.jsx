import React, { lazy, Suspense } from 'react';

// Lazy load components for code splitting
const HeroSection = lazy(() => import('../components/home/HeroSection'));
const FeaturesSection = lazy(() =>
  import('../components/home/FeaturesSection')
);
const CategoriesSection = lazy(() =>
  import('../components/home/CategoriesSection')
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
import CategoriesSkeleton from '../components/skeletons/CategoriesSkeleton';
import ProductsSkeleton from '../components/skeletons/ProductsSkeleton';
import NewsletterSkeleton from '../components/skeletons/NewsletterSkeleton';

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<FeaturesSkeleton />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesSection />
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
