import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';

const seedProducts = [
  {
    id: 'p1',
    title: 'Eco Stainless Water Bottle 32oz',
    description: 'Double-wall insulated bottle keeps drinks cold for 24h or hot for 12h. BPA-free cap.',
    price: 28.0,
    rating: 4.7,
    reviews: 1542,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Minimal Leather Sneakers',
    description: 'Premium full-grain leather upper with supportive insole for everyday comfort.',
    price: 119.0,
    rating: 4.5,
    reviews: 834,
    badge: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: '65% Mechanical Keyboard (RGB)',
    description: 'Hot-swappable switches, PBT keycaps, and per-key RGB with USB-C connectivity.',
    price: 99.99,
    rating: 4.6,
    reviews: 672,
    badge: 'Hot',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Portable Mini Projector',
    description: '1080p supported, built-in speaker, and compact design for movie nights anywhere.',
    price: 199.0,
    rating: 4.3,
    reviews: 311,
    badge: 'Deal',
    image:
      'https://images.unsplash.com/photo-1601935111741-a3c9ececf5b5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Aromatherapy Essential Oil Diffuser',
    description: 'Ultra-quiet mist with 7 ambient light colors and auto shut-off timer.',
    price: 29.5,
    rating: 4.4,
    reviews: 928,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1610375461246-e3ed32bb3bd2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Cordless Stick Vacuum',
    description: 'Lightweight design with up to 45 minutes of fade-free suction and HEPA filter.',
    price: 159.99,
    rating: 4.2,
    reviews: 247,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1595433707802-6b2626ef1c86?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p7',
    title: 'Chef Knife 8" (VG10 Core)',
    description: 'Razor-sharp edge with ergonomic handle for precision chopping and slicing.',
    price: 79.0,
    rating: 4.8,
    reviews: 1034,
    badge: 'Staff Pick',
    image:
      'https://images.unsplash.com/photo-1585238342028-4bbc91a30fa4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p8',
    title: 'Carry-On Hardside Luggage 20"',
    description: 'Durable polycarbonate shell with TSA lock and 360° spinner wheels.',
    price: 129.5,
    rating: 4.5,
    reviews: 562,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1582582621959-48d2916e5af1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p9',
    title: 'Ultra-Soft Throw Blanket',
    description: 'Cozy microfiber knit, machine-washable, perfect for couch and bed.',
    price: 39.0,
    rating: 4.6,
    reviews: 778,
    badge: 'Cozy',
    image:
      'https://images.unsplash.com/photo-1549216963-72c1712c1193?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p10',
    title: 'True Wireless Earbuds (ANC)',
    description: 'Active noise cancellation, wireless charging, and 28h total playtime.',
    price: 89.99,
    rating: 4.3,
    reviews: 1422,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1518449032140-03a4b5a1d232?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p11',
    title: 'Stoneware Dinner Set (12-piece)',
    description: 'Matte finish plates and bowls. Durable and dishwasher safe for everyday use.',
    price: 74.0,
    rating: 4.4,
    reviews: 390,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p12',
    title: 'Premium Yoga Block (2-pack)',
    description: 'High-density EVA blocks to improve stability and alignment in your practice.',
    price: 22.0,
    rating: 4.5,
    reviews: 205,
    badge: 'New',
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
