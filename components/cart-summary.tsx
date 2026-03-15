'use client';

import { ShoppingCart } from 'lucide-react';

interface CartItem {
  name: string;
  vp: number;
  price: number;
  quantity: number;
}

interface CartSummaryProps {
  totalVP: number;
  totalPrice: number;
  cartItems?: CartItem[];
  isFloating?: boolean;
}

export function CartSummary({
  totalVP,
  totalPrice,
  cartItems,
  isFloating = false,
}: CartSummaryProps) {
  if (isFloating) {
    return (
      <div className="fixed top-[256px] right-4 z-30 bg-white dark:bg-slate-900 rounded-xl shadow-xl border-2 border-green-200 dark:border-green-900 p-4 max-w-xs hidden lg:block">
        <div className="flex items-center gap-2 mb-3">
          <ShoppingCart className="w-5 h-5 text-green-600 dark:text-green-400" />
          <h3 className="font-bold text-slate-900 dark:text-white">Tanlangan</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
            <span className="text-sm text-slate-600 dark:text-slate-400">VP:</span>
            <span className="font-bold text-green-600 dark:text-green-400">{totalVP.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">Narx:</span>
            <span className="font-bold text-lg text-green-600 dark:text-green-400">
              {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-6 sm:py-12 px-3 sm:px-4 bg-green-50 dark:bg-slate-900 border-t-2 border-green-200 dark:border-green-900">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 border border-green-100 dark:border-green-900">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 dark:text-green-400" />
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">Tanlangan mahsulotlar</h2>
          </div>

          {cartItems && cartItems.length > 0 && (
            <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
              <ul className="divide-y divide-slate-200 dark:divide-slate-700">
                {cartItems.map((item, idx) => (
                  <li key={idx} className="py-2 sm:py-3 flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 dark:text-white text-sm sm:text-base truncate">{item.name}</p>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {item.quantity}x - {(item.price * item.quantity).toLocaleString()} so'm
                      </p>
                    </div>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 font-semibold rounded text-xs sm:text-sm whitespace-nowrap">
                      {(item.vp * item.quantity).toFixed(2)} VP
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t-2 border-slate-200 dark:border-slate-700 pt-3 sm:pt-4 mt-4 sm:mt-6 space-y-3">
            <div className="flex justify-between items-center text-base sm:text-lg">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Jami VP:</span>
              <span className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">{totalVP.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-base sm:text-lg bg-green-100 dark:bg-green-950 -mx-4 sm:-mx-8 -mb-4 sm:-mb-8 px-4 sm:px-8 py-3 sm:py-4 rounded-b-xl sm:rounded-b-2xl">
              <span className="font-semibold text-green-900 dark:text-green-200">Jami narx:</span>
              <span className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-400">
                {totalPrice.toLocaleString()} so'm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
