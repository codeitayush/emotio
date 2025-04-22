import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-primary-700 max-w-xl mx-auto mb-8">
          Stay updated with our latest offers, product releases and deals by
          subscribing to our newsletter.
        </p>
        <form className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-primary-900"
          />
          <button
            type="submit"
            className="bg-primary-600 text-primary-50 px-6 py-3 rounded-r-md hover:bg-primary-700 transition-colors font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
