import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const CartItem = ({ item, onInc, onDec, onRemove }) => {
  return (
    <div className="flex gap-3 py-3">
      <img src={item.image} alt={item.title} className="h-16 w-16 rounded object-cover" />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <h4 className="text-sm font-semibold leading-tight line-clamp-2 pr-2">{item.title}</h4>
          <button
            onClick={() => onRemove(item.id)}
            className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Remove"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border px-2 py-1">
            <button onClick={() => onDec(item.id)} className="rounded p-1 hover:bg-gray-100" aria-label="Decrease">
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
            <button onClick={() => onInc(item.id)} className="rounded p-1 hover:bg-gray-100" aria-label="Increase">
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <span className="text-sm font-semibold">{formatCurrency(item.price * item.qty)}</span>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ open, items, onClose, onInc, onDec, onRemove, onCheckout }) => {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'} flex justify-end`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`relative h-full w-full max-w-md transform bg-white shadow-xl transition-all ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <button onClick={onClose} className="rounded p-2 hover:bg-gray-100" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="h-[calc(100%-200px)] overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
              <p className="text-sm">Your cart is empty. Start adding products!</p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem key={item.id} item={item} onInc={onInc} onDec={onDec} onRemove={onRemove} />
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t p-4">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
            </div>
            <div className="flex items-center justify-between border-t pt-2 text-base">
              <span className="font-semibold">Total</span>
              <span className="font-bold">{formatCurrency(total)}</span>
            </div>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="mt-3 w-full rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
