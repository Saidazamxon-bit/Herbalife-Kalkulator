'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface ProductCardProps {
  product: any;
  quantity: string;
  discountedPrice: number;
  onQuantityChange: (value: string) => void;
  onQuantityBlur: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
}

export function ProductCard({
  product,
  quantity,
  discountedPrice,
  onQuantityChange,
  onQuantityBlur,
  onIncrement,
  onDecrement,
  onAddToCart,
}: ProductCardProps) {
  const [likes, setLikes] = useState(product.likes);
  const [unlikes, setUnlikes] = useState(product.unlikes);
  const [userReaction, setUserReaction] = useState<'like' | 'unlike' | null>(null);

  // 🌟 SSR-safe: faqat clientda formatlash
  const [formattedPrice, setFormattedPrice] = useState('');
  useEffect(() => {
    setFormattedPrice(discountedPrice.toLocaleString('uz-UZ'));
  }, [discountedPrice]);

  const handleLike = () => {
    if (userReaction === 'like') {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === 'unlike') {
        setUnlikes(unlikes - 1);
      }
      setLikes(likes + 1);
      setUserReaction('like');
    }
  };

  const handleUnlike = () => {
    if (userReaction === 'unlike') {
      setUnlikes(unlikes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === 'like') {
        setLikes(likes - 1);
      }
      setUnlikes(unlikes + 1);
      setUserReaction('unlike');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-0.5 border border-green-100 dark:border-green-900">
      {/* Image Container */}
      <div className="relative w-full h-36 sm:h-40 bg-green-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain p-2"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-3 sm:p-4">
        {/* Product Name */}
        <h3 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white line-clamp-2 mb-2">
          {product.name}
        </h3>

        {/* VP Badge */}
        <div className="inline-flex items-center gap-1 mb-2">
          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
            {product.vp} VP
          </span>
        </div>

        {/* Price */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 flex items-baseline gap-1">
          <span className="text-xs text-slate-500 dark:text-slate-500">So'm:</span>
          <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">
            {formattedPrice}
          </span>
        </p>

        {/* Quantity Control */}
        <div className="flex items-center gap-1 mb-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-0.5">
          <button
            onClick={onDecrement}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded font-bold text-slate-700 dark:text-slate-300 transition-colors text-sm"
          >
            -
          </button>
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => onQuantityChange(e.target.value)}
            onBlur={onQuantityBlur}
            className="flex-1 w-10 text-center border-none bg-transparent font-semibold text-slate-900 dark:text-white outline-none text-sm"
          />
          <button
            onClick={onIncrement}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded font-bold text-slate-700 dark:text-slate-300 transition-colors text-sm"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-1.5 sm:py-2 rounded-lg transition-colors mb-2 text-sm"
        >
          Qo'shish
        </button>

        {/* Like/Unlike Section */}
        <div className="flex gap-1 pt-2 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 flex-1 justify-center py-1.5 rounded text-xs font-medium transition-all ${
              userReaction === 'like'
                ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <ThumbsUp className="w-3 h-3" />
            <span>{likes}</span>
          </button>
          <button
            onClick={handleUnlike}
            className={`flex items-center gap-1 flex-1 justify-center py-1.5 rounded text-xs font-medium transition-all ${
              userReaction === 'unlike'
                ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <ThumbsDown className="w-3 h-3" />
            <span>{unlikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}