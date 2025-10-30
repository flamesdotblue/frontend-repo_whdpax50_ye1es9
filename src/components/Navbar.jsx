import React from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';

const Navbar = ({ onCartToggle, cartCount }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight">ShopSphere</span>
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full rounded-full border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </button>
          <button
            onClick={onCartToggle}
            className="relative inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
