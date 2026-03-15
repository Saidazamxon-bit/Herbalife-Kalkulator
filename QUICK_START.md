# Quick Start Guide

Get the Herbalife catalog running in 5 minutes!

## 1. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

Your app runs at: **http://localhost:3000**

## 2. Browse the App

You should see:
- ✅ Herbalife header with logo
- ✅ Catalog selector (Mahsulotlar, Kosmetika, Boshqa)
- ✅ Discount selector (0% to 50%)
- ✅ Product grid with 20+ items
- ✅ Floating cart summary (on desktop)
- ✅ Footer

## 3. Try Core Features

### Switch Categories
1. Click the "Mahsulotlar" dropdown in the header
2. Select "Kosmetika" or "Boshqa"
3. Product grid updates instantly

### Change Pricing
1. Click the discount dropdown
2. Select "42% Chegirma"
3. All prices update immediately

### Add to Cart
1. Enter quantity (e.g., 2)
2. Click "Qo'shish" button
3. Toast notification appears
4. Cart totals update

### Like Products
1. Click the thumbs up/down icons
2. Counter increases
3. Button highlights green (like) or red (unlike)

### View Cart
- **Desktop**: Floating summary on right side
- **Mobile**: Scroll down to see full summary
- Shows total VP and price

## 4. Customize

### Add Your Products

Edit `/data/products.ts`:

```typescript
{
  name: "Your Product Name",
  vp: 25,
  recommendedPrice: 100000,
  price25: 75000,
  price35: 65000,
  price42: 58000,
  price50: 50000,
  likes: 0,
  unlikes: 0,
  image: '/images/your-product.jpg',  // Add image to /public/images/
  category: 'mahsulotlar',
}
```

### Add Product Images

1. Create/save product images
2. Place in `/public/images/`
3. Update image paths in `data/products.ts`

Supported formats: JPG, PNG, WebP

### Change Colors

Edit `/components/header.tsx`, `/components/product-card.tsx`, etc.

Find: `emerald-500` (primary green)
Replace with: `blue-500`, `red-500`, `purple-500`, etc.

### Edit Text/Language

- Header text: `/components/header.tsx`
- Button labels: `/components/product-card.tsx`
- Footer text: `/components/footer.tsx`

## 5. Build for Production

```bash
npm run build
npm start
```

Optimized build ready to deploy!

## 6. Deploy to Vercel

### Option A: GitHub + Vercel Auto-Deploy
1. Push to GitHub
2. Import repo on vercel.com
3. Auto-deploys on push

### Option B: CLI Deploy
```bash
npm i -g vercel
vercel
```

## Troubleshooting

### Products not showing?
- Check `/data/products.ts` has products
- Verify `image` paths are correct
- Check browser console for errors

### Prices not updating?
- Make sure discount value matches product prices
- Check discount selector is working

### Images missing?
- Add images to `/public/images/`
- Update image paths in `data/products.ts`
- Clear browser cache (Ctrl+Shift+Delete)

### Styling looks wrong?
- Run `npm install` to ensure Tailwind is installed
- Restart dev server: Ctrl+C, then `npm run dev`

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main app logic & state |
| `data/products.ts` | All product data |
| `components/header.tsx` | Top navigation |
| `components/product-card.tsx` | Individual product UI |
| `components/product-grid.tsx` | Product grid layout |
| `components/cart-summary.tsx` | Cart totals display |

## Common Tasks

### Add a New Discount Level
1. Edit `DISCOUNT_OPTIONS` in `/components/header.tsx`
2. Add new price field to products in `data/products.ts`
3. Update price logic in `app/page.tsx`

### Change Category Names
1. Edit `CATALOG_OPTIONS` in `/components/header.tsx`
2. Edit category names in `/data/products.ts`
3. Update labels in categories

### Hide Floating Cart
Edit `/app/page.tsx`:
```tsx
{cartItems.length > 0 && <CartSummary ... isFloating />}
// Change to:
{false && <CartSummary ... isFloating />}
```

### Add Search Feature
1. Add search state to `app/page.tsx`
2. Filter products by name
3. Display results in ProductGrid

### Add to Favorites
1. Add favorites state
2. Add button in ProductCard
3. Show favorites in separate view

## Next Steps

- [ ] Replace placeholder images
- [ ] Update product data
- [ ] Customize colors
- [ ] Translate UI text
- [ ] Test on mobile
- [ ] Deploy to Vercel
- [ ] Add backend integration
- [ ] Implement checkout

## Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **TypeScript**: https://typescriptlang.org

## Getting Help

### Development Issues
- Check console for errors (F12 → Console)
- Read full documentation in `README.md`
- Review component architecture in `COMPONENT_GUIDE.md`

### Migration Questions
- See `MIGRATION_GUIDE.md` for detailed changes
- Compare old vs new implementation

### Customization Help
- Edit specific component file
- Use Tailwind class references
- Check existing patterns

## Pro Tips

1. **Hot Reload**: Changes auto-refresh (no need to restart)
2. **Mobile Testing**: Visit `http://localhost:3000` on phone
3. **Console Logs**: Use `console.log()` for debugging
4. **TypeScript**: Hover over variables for type hints
5. **Tailwind**: Use Tailwind IntelliSense VS Code extension

---

**Congratulations!** Your Herbalife catalog is ready. Start customizing! 🚀
