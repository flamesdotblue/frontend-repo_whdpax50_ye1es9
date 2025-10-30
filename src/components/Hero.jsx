import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-14 sm:py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24 lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            New season, fresh picks
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Discover products you’ll love
          </h1>
          <p className="mt-3 max-w-xl text-base text-gray-600 sm:text-lg">
            Curated essentials from top brands. Free shipping over $50 and 30-day returns on everything.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900"
            >
              Shop bestsellers
            </a>
            <a
              href="#"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Explore categories
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop"
              alt="Featured collection"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
