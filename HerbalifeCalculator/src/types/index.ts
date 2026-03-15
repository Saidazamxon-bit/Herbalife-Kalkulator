// src/types/index.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  vp: number;
  imageUrl: string;
}

export interface ProductGridProps {
  products: Product[];
  quantities: string[];
  discount: number;
  onQuantityChange: (index: number, value: string) => void;
  onQuantityBlur: (index: number) => void;
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
  onAddToCart: (index: number) => void;
  getDiscountedPrice: (product: Product, discount: number) => number;
}

export interface Language {
  code: string;
  name: string;
}

export interface AppState {
  currentLanguage: Language;
  products: Product[];
  quantities: string[];
  discount: number;
}