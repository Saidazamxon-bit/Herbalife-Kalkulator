'use client';

import { ProductCard } from './product-card';

interface ProductGridProps {
  products: any[];
  quantities: string[];
  discount: number;
  onQuantityChange: (index: number, value: string) => void;
  onQuantityBlur: (index: number) => void;
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
  onAddToCart: (index: number) => void;
  getDiscountedPrice: (product: any, discount: number) => number;
}

export function ProductGrid({
  products,
  quantities,
  discount,
  onQuantityChange,
  onQuantityBlur,
  onIncrement,
  onDecrement,
  onAddToCart,
  getDiscountedPrice,
}: ProductGridProps) {
  return (
    <section className="py-6 sm:py-12 px-3 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              product={product}
              quantity={quantities[index] || '0'}
              discountedPrice={getDiscountedPrice(product, discount)}
              onQuantityChange={(value) => onQuantityChange(index, value)}
              onQuantityBlur={() => onQuantityBlur(index)}
              onIncrement={() => onIncrement(index)}
              onDecrement={() => onDecrement(index)}
              onAddToCart={() => onAddToCart(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
