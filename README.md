# Herbalife Product Catalog - Modern Rebuild

A completely rebuilt and improved version of the Herbalife product catalog application using modern web technologies and best practices.

## Key Improvements

### Architecture & Code Quality
- **Component-Based**: Split monolithic code into reusable, focused components
- **TypeScript**: Type-safe development with full TypeScript support
- **Next.js 16**: Leveraging the latest App Router and server capabilities
- **Clean Data Structure**: Centralized product data in `/data/products.ts`

### UI/UX Enhancements
- **Tailwind CSS**: Modern, responsive design replacing CSS modules
- **Better Mobile Experience**: Fully responsive grid (1-4 columns based on screen size)
- **Improved Interactions**: Smooth hover effects, better visual feedback
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
- **Icons**: lucide-react for consistent, professional icons

### Features
- **Product Catalog** with 3 categories (Mahsulotlar, Kosmetika, Boshqa)
- **Dynamic Pricing** with 5 discount levels (0%, 25%, 35%, 42%, 50%)
- **Cart Management** with floating summary and detailed view
- **Like/Unlike System** with visual state management
- **Quantity Counter** with increment/decrement controls
- **Toast Notifications** for user feedback
- **Real-time Calculations** for total VP and pricing

### Performance
- Optimized component rendering
- Efficient state management
- Image optimization ready (using Next.js Image component pattern)
- No external API calls in demo (can be extended)

## Project Structure

```
/app
  /page.tsx              # Main page with state management
  /layout.tsx            # Root layout with metadata
  /globals.css           # Global styles with design tokens

/components
  /header.tsx            # Header with catalog & discount selectors
  /product-card.tsx      # Individual product card component
  /product-grid.tsx      # Grid layout for products
  /cart-summary.tsx      # Cart summary (floating + full view)
  /notification-toast.tsx # Toast notifications
  /footer.tsx            # Footer component

/data
  /products.ts           # All product data (nutrition, cosmetics, other)

/public/images/
  /placeholder.jpg       # Default product image
```

## Getting Started

### Installation
```bash
npm install
# or
pnpm install
```

### Development
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Building for Production
```bash
npm run build
npm start
```

## Customization

### Adding Products
Edit `/data/products.ts` and add items to the appropriate array:
- `NUTRITION_PRODUCTS` - Mahsulotlar (nutrition products)
- `COSMETICS` - Kosmetika (cosmetic products)
- `OTHER_PRODUCTS` - Boshqa (other items)

Example:
```typescript
{
  name: "Product Name",
  vp: 25.95,
  recommendedPrice: 623632,
  price25: 494043,
  price35: 442208,
  price42: 405923,
  price50: 364454,
  likes: 19,
  unlikes: 3,
  image: '/images/product-image.jpg',
  category: 'mahsulotlar',
}
```

### Styling
The app uses Tailwind CSS with a green color scheme (emerald-500 primary):
- Primary: `emerald-*` classes
- Backgrounds: `slate-*` classes
- Accents: Automatically applied with hover states

To change colors globally, update Tailwind configuration or override specific classes.

### Images
Replace placeholder images in `/public/images/`:
- Update image paths in `/data/products.ts`
- Recommended image format: JPG or PNG
- Recommended size: 200x200px for products

## Technology Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.2
- **Icons**: lucide-react
- **Language**: TypeScript
- **Package Manager**: pnpm

## Features Overview

### 1. **Product Catalog**
Browse products across 3 categories with beautiful card layout and hover effects.

### 2. **Smart Pricing**
Select discount levels to see real-time price updates across all products.

### 3. **Shopping Cart**
- Add/remove products with quantity selector
- Floating summary on desktop (top-right)
- Full cart view with itemized breakdown
- Total VP and price calculations

### 4. **Social Features**
- Like/Unlike products with visual feedback
- Like/unlike counts update in real-time

### 5. **Notifications**
Toast notifications appear at the top for user actions (add to cart, remove from cart).

### 6. **Responsive Design**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns
- Adaptive header and controls

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Backend integration with database
- User authentication
- Order history and tracking
- Wishlist functionality
- Product reviews and ratings
- Advanced search and filtering
- Payment integration
- Admin dashboard

## License

This project is built for Herbalife product catalog management.

## Notes

- All prices and product data are examples
- Replace placeholder images with actual product images
- The app uses client-side state management; consider Redux/Zustand for larger apps
- Consider implementing backend for production use
