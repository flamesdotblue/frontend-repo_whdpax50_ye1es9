import React from 'react';
import { Star } from 'lucide-react';

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-semibold">{product.title}</h3>
          <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
            {formatCurrency(product.price)}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}`} />
          ))}
          <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
        </div>
        <p className="mt-2 line-clamp-2 text-xs text-gray-600">{product.description}</p>
        <div className="mt-auto pt-4">
          <button
            onClick={() => onAdd(product)}
            className="w-full rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, onAdd }) => {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Bestsellers</h2>
          <p className="mt-1 text-sm text-gray-600">Hand-picked favorites from our community</p>
        </div>
        <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">View all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
