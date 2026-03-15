# Customization Examples

Copy and paste these code examples to customize your app.

## Color Scheme Changes

### Change Primary Color (Green → Blue)

**Before**:
```tsx
// components/header.tsx
className="border-2 border-emerald-500 rounded-lg font-medium text-emerald-700 bg-emerald-50"
```

**After**:
```tsx
className="border-2 border-blue-500 rounded-lg font-medium text-blue-700 bg-blue-50"
```

Then search and replace in all components:
- `emerald-500` → `blue-500`
- `emerald-600` → `blue-600`
- `emerald-50` → `blue-50`
- `emerald-100` → `blue-100`
- `emerald-700` → `blue-700`

### Dark Mode Color Scheme

```tsx
// In product-card.tsx
<div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl">
  <h3 className="text-slate-900 dark:text-white">
    {product.name}
  </h3>
</div>
```

## Adding New Features

### Add Search Filter

**In app/page.tsx**:
```tsx
const [searchTerm, setSearchTerm] = useState('');

const filteredProducts = products.filter((p) =>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// In return statement:
<input
  type="text"
  placeholder="Qidirish..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="px-4 py-2 border-2 border-emerald-500 rounded-lg"
/>
```

### Add Favorites System

**In app/page.tsx**:
```tsx
const [favorites, setFavorites] = useState<string[]>([]);

const toggleFavorite = (productName: string) => {
  setFavorites((prev) =>
    prev.includes(productName)
      ? prev.filter((name) => name !== productName)
      : [...prev, productName]
  );
};

// Pass to ProductCard
<ProductCard
  isFavorite={favorites.includes(product.name)}
  onToggleFavorite={() => toggleFavorite(product.name)}
  // ...other props
/>
```

### Add Product Sorting

**In app/page.tsx**:
```tsx
const [sortBy, setSortBy] = useState<'name' | 'price' | 'vp'>('name');

const sortedProducts = [...products].sort((a, b) => {
  switch (sortBy) {
    case 'price':
      return getDiscountedPrice(a, discount) - getDiscountedPrice(b, discount);
    case 'vp':
      return a.vp - b.vp;
    case 'name':
    default:
      return a.name.localeCompare(b.name);
  }
});

// Add dropdown:
<select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
  <option value="name">A-Z</option>
  <option value="price">Narx bo'yicha</option>
  <option value="vp">VP bo'yicha</option>
</select>
```

## Text & Language Changes

### Change Button Labels

**In components/product-card.tsx**:
```tsx
// Change from
<button>{/* Qo'shish */}</button>

// To
<button>Add to Cart</button>
```

### Change Category Names

**In components/header.tsx**:
```tsx
const CATALOG_OPTIONS = [
  { value: 'mahsulotlar', label: 'All Products' },     // Changed
  { value: 'kosmetika', label: 'Beauty & Skincare' }, // Changed
  { value: 'boshqa', label: 'Accessories' },           // Changed
] as const;
```

### Add Translations

**Create i18n system**:
```typescript
// data/translations.ts
export const translations = {
  uz: {
    addToCart: 'Qo\'shish',
    remove: 'Olib tashla',
    total: 'Jami',
  },
  en: {
    addToCart: 'Add to Cart',
    remove: 'Remove',
    total: 'Total',
  },
};

// Use in components:
const t = translations[language];
<button>{t.addToCart}</button>
```

## Layout & Styling Changes

### Change Product Grid Columns

**In components/product-grid.tsx**:
```tsx
// Before (1-4 columns)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

// After (2-5 columns)
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

// After (1-2 columns only)
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
```

### Make Card Layout Horizontal

**In components/product-card.tsx**:
```tsx
<div className="flex flex-row gap-4 bg-white rounded-2xl shadow-md p-4">
  {/* Image on left */}
  <div className="w-32 h-32 bg-slate-50 flex items-center justify-center rounded-lg flex-shrink-0">
    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
  </div>
  
  {/* Info on right */}
  <div className="flex-1">
    <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
    {/* rest of content */}
  </div>
</div>
```

### Hide Floating Cart on Mobile

**In components/cart-summary.tsx**:
```tsx
// Before
hidden lg:block

// After (show on desktop only)
hidden 2xl:block

// Or hide completely
hidden
```

## Data & Product Examples

### Add Seasonal Badge

**In data/products.ts**:
```typescript
interface Product {
  // ... existing fields
  badge?: string; // NEW
}

const NUTRITION_PRODUCTS: Product[] = [
  {
    name: "Summer Special",
    badge: "🔥 Hot Deal",
    // ... other fields
  },
];
```

**Display badge**:
```tsx
// In product-card.tsx
{product.badge && (
  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
    {product.badge}
  </div>
)}
```

### Add Product Ratings

**In data/products.ts**:
```typescript
interface Product {
  name: string;
  vp: number;
  // ... existing fields
  rating?: number; // NEW (1-5)
  reviewCount?: number; // NEW
}
```

**Display stars**:
```tsx
// In product-card.tsx
{product.rating && (
  <div className="flex items-center gap-1 text-sm">
    <span className="text-yellow-400">★ {product.rating}</span>
    <span className="text-slate-600">({product.reviewCount})</span>
  </div>
)}
```

## Advanced Customizations

### Add Product Detail Modal

```tsx
// Create new component: components/product-modal.tsx
'use client';

import { X } from 'lucide-react';

export function ProductModal({ product, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X className="w-6 h-6" />
        </button>
        
        <img src={product.image} alt={product.name} className="w-full mb-4 rounded-lg" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-emerald-600 font-semibold mb-4">{product.vp} VP</p>
        <p className="text-slate-600 mb-4">Full product description here...</p>
        
        <button className="w-full bg-emerald-500 text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
```

### Add Cart Persistence (LocalStorage)

```tsx
// In app/page.tsx
useEffect(() => {
  // Save cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems]);

useEffect(() => {
  // Load cart from localStorage on mount
  const saved = localStorage.getItem('cart');
  if (saved) {
    setCartItems(JSON.parse(saved));
  }
}, []);
```

### Add Checkout Flow

```tsx
// Create components/checkout.tsx
'use client';

export function Checkout({ cartItems, totalPrice }: any) {
  const [step, setStep] = useState<'info' | 'payment' | 'confirmation'>('info');

  return (
    <div className="max-w-2xl mx-auto p-6">
      {step === 'info' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
          {/* Form fields */}
          <button onClick={() => setStep('payment')} className="bg-emerald-500 text-white px-6 py-2 rounded-lg">
            Continue
          </button>
        </div>
      )}
      
      {step === 'payment' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Payment</h2>
          {/* Payment form */}
          <p>Total: {totalPrice.toLocaleString()} so'm</p>
        </div>
      )}
    </div>
  );
}
```

## CSS Class Reference

### Common Tailwind Classes Used

```tsx
// Colors
bg-emerald-500    // Green background
text-emerald-700  // Green text
border-emerald-500 // Green border

// Sizes
w-full / h-40     // Width/height
px-4 / py-2       // Padding X/Y
gap-4             // Gap between items

// Effects
rounded-lg        // Border radius
shadow-md         // Shadow
hover:shadow-xl   // Hover shadow

// Layout
flex / grid       // Display
items-center      // Alignment
grid-cols-3       // Grid columns

// Responsive
sm: / md: / lg: / xl: // Breakpoints
```

## Performance Optimizations

### Memoize ProductCard Component

```tsx
// In components/product-card.tsx
import { memo } from 'react';

export const ProductCard = memo(function ProductCard({
  product,
  // ... props
}: ProductCardProps) {
  // Component code
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.product.name === nextProps.product.name &&
         prevProps.quantity === nextProps.quantity;
});
```

### Add Image Lazy Loading

```tsx
// In components/product-card.tsx
<img
  src={product.image}
  alt={product.name}
  loading="lazy"  // NEW
  className="max-w-full max-h-full object-contain"
/>
```

---

Need more examples? Check README.md and COMPONENT_GUIDE.md for detailed architecture documentation.
