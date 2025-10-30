import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';

const seedProducts = [
  {
    id: 'p1',
    title: 'Wireless Noise-Cancelling Headphones',
    description: 'Immersive sound, 35h battery, and ultra-soft ear cushions for all-day comfort.',
    price: 129.99,
    rating: 4.7,
    reviews: 1243,
    badge: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1518449032140-03a4b5a1d232?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Smart Fitness Watch',
    description: 'Track heart rate, GPS runs, sleep stages, and more with a vibrant AMOLED display.',
    price: 89.0,
    rating: 4.4,
    reviews: 862,
    badge: 'Hot',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Ergonomic Office Chair',
    description: 'Adjustable lumbar support, breathable mesh, and smooth-rolling casters.',
    price: 219.99,
    rating: 4.6,
    reviews: 532,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1582582621959-48d2916e5af1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Minimalist Table Lamp',
    description: 'Warm LED light with touch controls and a sleek matte finish.',
    price: 39.5,
    rating: 4.3,
    reviews: 211,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Everyday Backpack 20L',
    description: 'Water-resistant fabric, padded laptop sleeve, and smart organization.',
    price: 74.99,
    rating: 4.5,
    reviews: 980,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Ceramic Mug Set (2-pack)',
    description: 'Matte glaze with ergonomic handle. Microwave and dishwasher safe.',
    price: 24.0,
    rating: 4.8,
    reviews: 403,
    badge: 'Staff pick',
    image:
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p7',
    title: '4K Ultra HD Monitor 27"',
    description: 'Crisp visuals, 99% sRGB, and ultra-thin bezels for focused workflows.',
    price: 299.99,
    rating: 4.4,
    reviews: 257,
    badge: 'Deal',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p8',
    title: 'Premium Yoga Mat',
    description: 'Non-slip surface with eco-friendly materials and 6mm cushioning.',
    price: 36.0,
    rating: 4.2,
    reviews: 189,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1539181752428-34b5c7b4ab6c?q=80&w=1600&auto=format&fit=crop',
  },
];

function App() {
  const products = useMemo(() => seedProducts, []);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const incQty = (id) => setCartItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decQty = (id) =>
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(0, i.qty - 1) } : i))
        .filter((i) => i.qty > 0)
    );
  const removeItem = (id) => setCartItems((prev) => prev.filter((i) => i.id !== id));

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  const checkout = () => {
    alert('This is a demo checkout. In a full app, this would take you to a secure payment flow.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onCartToggle={() => setCartOpen(true)} cartCount={cartCount} />
      <main>
        <Hero />
        <ProductGrid products={products} onAdd={addToCart} />
      </main>
      <Cart
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onInc={incQty}
        onDec={decQty}
        onRemove={removeItem}
        onCheckout={checkout}
      />
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
            <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
