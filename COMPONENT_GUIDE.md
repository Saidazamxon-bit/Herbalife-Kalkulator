# Component Architecture Guide

## Component Hierarchy

```
app/page.tsx (Main Page Component)
├── Header
│   ├── Catalog Selector
│   └── Discount Selector
├── NotificationToast
│   └── Toast messages on actions
├── CartSummary (Floating on desktop)
│   └── Quick VP & Price view
├── ProductGrid
│   └── ProductCard (repeated)
│       ├── Product Image
│       ├── Product Info
│       ├── Price Display
│       ├── Quantity Counter
│       ├── Add to Cart Button
│       └── Like/Unlike Buttons
├── CartSummary (Full view)
│   └── Detailed cart items list
└── Footer
    └── Footer content
```

## Component Descriptions

### Header Component (`components/header.tsx`)
- **Purpose**: Navigation and filter controls
- **Props**:
  - `catalogType`: Current selected category
  - `onCatalogChange`: Callback when category changes
  - `discount`: Current discount percentage
  - `onDiscountChange`: Callback when discount changes
- **State**: None (controlled by parent)
- **Features**: Sticky positioning, responsive layout

### ProductCard Component (`components/product-card.tsx`)
- **Purpose**: Individual product display
- **Props**:
  - `product`: Product object with all details
  - `quantity`: Current quantity in counter
  - `discountedPrice`: Calculated price
  - Callbacks for quantity and cart actions
- **State**: 
  - `likes`, `unlikes`: Like/unlike counts
  - `userReaction`: Track user's reaction
- **Features**: Responsive image, hover effects, like/unlike tracking

### ProductGrid Component (`components/product-grid.tsx`)
- **Purpose**: Container for product cards
- **Props**: All product data and callbacks
- **Layout**: Responsive grid (1-4 columns)
- **Features**: Maps products to cards with unique keys

### CartSummary Component (`components/cart-summary.tsx`)
- **Purpose**: Display shopping cart totals
- **Props**:
  - `totalVP`, `totalPrice`: Totals
  - `cartItems`: Optional, for detailed view
  - `isFloating`: Position mode
- **Variants**:
  - Floating (fixed top-right on desktop)
  - Full (below product grid)

### NotificationToast Component (`components/notification-toast.tsx`)
- **Purpose**: Display user feedback messages
- **Props**:
  - `message`: Toast message
  - `isVisible`: Show/hide state
- **Features**: Auto-hide, smooth animations, centered position

### Footer Component (`components/footer.tsx`)
- **Purpose**: Page footer
- **Content**: Links, branding, copyright
- **Features**: Responsive grid, semantic footer structure

## Data Flow

### Main State Management (app/page.tsx)

```typescript
// Main state variables
- catalogType: 'mahsulotlar' | 'kosmetika' | 'boshqa'
- discount: 0 | 25 | 35 | 42 | 50
- notification: string (message)
- notifVisible: boolean
- cartItems: CartItem[] (selected products)
- quantities: string[] (per-product quantity)

// Derived state
- products: Selected category products
- totalVP: Sum of (vp * quantity)
- totalPrice: Sum of (price * quantity)
```

### Action Flows

#### Adding to Cart
1. User sets quantity and clicks "Qo'shish"
2. `handleAddToCart(index)` called
3. Validates quantity > 0
4. Calculates discounted price based on current discount
5. Updates `cartItems` or modifies existing item
6. Displays toast notification
7. CartSummary updates with new totals

#### Changing Discount
1. User selects new discount level
2. `onDiscountChange(discount)` updates state
3. `useEffect` recalculates prices for all cart items
4. `ProductGrid` re-renders with new prices
5. `CartSummary` updates with new totals

#### Liking/Unliking Products
1. User clicks like/unlike button
2. `ProductCard` updates local like/unlike counts
3. Visual feedback with colored backgrounds
4. Only one reaction per product per user

## Styling System

### Color Scheme
- **Primary**: emerald-500, emerald-600 (green)
- **Backgrounds**: white, slate-50, slate-100
- **Text**: slate-900 (dark), slate-600 (medium), slate-400 (light)
- **Accents**: red-100/700 for unlikes

### Responsive Breakpoints
- `sm`: 640px - 2 columns
- `md`: 768px - Header adjustments
- `lg`: 1024px - 3 columns, FloatingCart visible
- `xl`: 1280px - 4 columns

### Design Tokens
- Border radius: `rounded-lg`, `rounded-xl`, `rounded-2xl`
- Shadows: `shadow-md`, `shadow-lg`, `shadow-xl`
- Transitions: `transition-all`, `transition-colors`
- Spacing: Standard Tailwind scale (4px units)

## Key Implementation Details

### Quantity Input Validation
```typescript
// Only accepts digits
if (/^\d*$/.test(value)) {
  // Update state
}

// Defaults to "0" on blur if empty
onBlur={() => {
  if (newQuantities[index] === '') {
    newQuantities[index] = '0';
  }
}}
```

### Price Calculation Logic
```typescript
// Discount priority
switch(discountValue) {
  case 25: return product.price25;
  case 35: return product.price35;
  case 42: return product.price42;
  case 50: return product.price50;
  default: return product.recommendedPrice;
}
```

### Cart Item Updates
- If product already in cart: update quantity
- If product not in cart: add new item
- If quantity becomes 0: remove from cart

### Toast Notifications
- Auto-hide after 2 seconds
- Fade out animation
- Centered at top of page
- Non-blocking (clickthrough possible)

## Performance Considerations

1. **Component Memoization**: ProductCard could use React.memo for optimization
2. **useCallback**: Consider for frequently passed callbacks
3. **Image Optimization**: Implement next/image for lazy loading
4. **Virtual Scrolling**: For large product catalogs (100+ items)

## Accessibility Features

- Semantic HTML (`header`, `main`, `footer`, `section`)
- `aria-labels` on interactive elements
- Keyboard navigation support
- High contrast color ratios
- Focus states on buttons

## Future Enhancement Opportunities

1. Add search/filter functionality
2. Implement product detail modal
3. Add favorites/wishlist
4. Implement checkout flow
5. Add product reviews system
6. Integrate payment gateway
7. Add backend API calls
8. Implement user authentication
