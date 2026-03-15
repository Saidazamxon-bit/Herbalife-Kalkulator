import React from 'react';

interface ProductCardProps {
  product: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
  quantity: string;
  discountedPrice: number;
  onQuantityChange: (value: string) => void;
  onQuantityBlur: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantity,
  discountedPrice,
  onQuantityChange,
  onQuantityBlur,
  onIncrement,
  onDecrement,
  onAddToCart,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-xl font-bold mt-2">${discountedPrice.toFixed(2)}</p>
      <div className="flex items-center mt-4">
        <button onClick={onDecrement} className="bg-gray-200 px-2 py-1 rounded">-</button>
        <input
          type="text"
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
          onBlur={onQuantityBlur}
          className="mx-2 w-12 text-center border rounded"
        />
        <button onClick={onIncrement} className="bg-gray-200 px-2 py-1 rounded">+</button>
      </div>
      <button onClick={onAddToCart} className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};