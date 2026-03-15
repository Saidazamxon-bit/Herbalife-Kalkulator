# Tez Ishlatiş Qo'llanmasi

## 🚀 Boshlanish

```bash
npm run dev
```

Shundan so'ng: http://localhost:3000

---

## 📍 Sahifalar

| Sahifa | URL | Tavsifi |
|--------|-----|---------|
| **Asosiy** | `/` | Mahsulotlar katalogi |
| **Yangiliklar** | `/yangiliklar` | Yangiliklar va e'lonlar |
| **Sozlamalar** | `/sozlamalar` | App sozlamalari |

---

## 🎨 Ranglar (Yangi)

### Asosiy Ranglar
```
Dark Green (Light):    #2D5E3F    (bg-green-600)
Bright Green (Dark):   #4A9D6F    (dark:text-green-400)
Light Accent:          #F0F9FF    (bg-green-50)
Dark Accent:           #1A3A2D    (dark:bg-green-950)
```

### Tailwind Klaslari
```
Primary:    text-green-600 dark:text-green-400
Buttons:    bg-green-600 hover:bg-green-700
Borders:    border-green-200 dark:border-green-900
Hover:      bg-green-50 dark:bg-green-950
```

---

## 📱 Responsive Sizes

```
Mobile:     320px - 640px
Tablet:     640px - 1024px
Desktop:    1024px - 1920px

Grid Columns:
Mobile:     2 (grid-cols-2)
Tablet:     2-3 (sm:grid-cols-2 md:grid-cols-3)
Desktop:    3-4 (lg:grid-cols-3 xl:grid-cols-4)

Gaps:
Mobile:     gap-2
Tablet:     sm:gap-3
Desktop:    lg:gap-4
```

---

## 🔧 Tez Customize

### Logo Rangi O'zgartirish
**File**: `components/header.tsx`

```jsx
// Hozirgi
<div className="bg-gradient-to-br from-green-600 to-green-700">
  <span className="text-white font-bold">HL</span>
</div>

// O'zgartirilgan
<div className="bg-gradient-to-br from-blue-600 to-blue-700">
  <span className="text-white font-bold">HL</span>
</div>
```

### Mahsulot Qo'shish
**File**: `data/products.ts`

```typescript
const PRODUCTS_DATA = {
  mahsulotlar: [
    {
      name: "Yangi Mahsulot",
      vp: 100,
      recommendedPrice: 50000,
      price25: 40000,
      price35: 35000,
      price42: 30000,
      price50: 25000,
      image: '/images/placeholder.jpg',
      likes: 0,
      unlikes: 0,
    }
  ]
}
```

### Yangilik Qo'shish
**File**: `app/yangiliklar/page.tsx`

```typescript
const NEWS_ITEMS = [
  {
    id: 7,
    title: "Yangi Xabar",
    date: "01-Aprel, 2026",
    description: "Tavsifi",
    content: "Kontent",
    image: "📰",
    category: "Kategoriya"
  }
]
```

---

## 🌓 Dark Mode Toggle

Settings sahifasida toggle qilin:

```tsx
// Dark mode qayta yoqish
html.classList.add('dark')
localStorage.setItem('theme', 'dark')

// Light mode qayta yoqish
html.classList.remove('dark')
localStorage.setItem('theme', 'light')
```

---

## 📊 Discount Levels

```
0%  - Tavsiya qilingan narx (recommendedPrice)
25% - price25
35% - price35
42% - price42
50% - price50
```

---

## 🎯 Key Files

| Fayl | Maqsadi | Qatorlari |
|------|---------|----------|
| `app/page.tsx` | Asosiy sahifa | 161 |
| `app/sozlamalar/page.tsx` | Settings sahifasi | 157 |
| `app/yangiliklar/page.tsx` | News sahifasi | 179 |
| `components/header.tsx` | Header | 75 |
| `components/product-card.tsx` | Mahsulot karti | 152 |
| `data/products.ts` | Mahsulotlar ma'lumotlari | 445 |
| `app/globals.css` | Ranglar va uslublar | 120+ |

---

## 🔍 Common Tasks

### Mahsulot O'lchamini O'zgartirish
```tsx
// ProductCard.tsx
<div className="h-36 sm:h-40">  // O'zgartirilsin h-40 yoki h-32
```

### Tugmaning Rangini O'zgartirish
```tsx
<button className="bg-green-600 hover:bg-green-700">
  // O'zgartirilsin: bg-blue-600, bg-purple-600, etc
</button>
```

### Grid Ustunlarini O'zgartirish
```tsx
<div className="grid grid-cols-2 sm:grid-cols-3">
  // O'zgartirilsin: 2 → 3, sm:grid-cols-3 → sm:grid-cols-2
</div>
```

### Padding Qiymatlari
```
p-2 = 8px
p-3 = 12px
p-4 = 16px
p-6 = 24px
p-8 = 32px
```

---

## 📈 Performance Tips

1. **Rasmlarni optimize qiling** - WebP format ishlatish
2. **Lazy loading** - Tasvir komponentlariga `loading="lazy"`
3. **CSS Purge** - Tailwind faqat ishlatilgan uslublarni qo'llaydi
4. **Image Optimization** - Next.js Image component

---

## 🐛 Common Issues

### Dark Mode Ishlama
```javascript
// Check HTML for 'dark' class
console.log(document.documentElement.classList)

// Force toggle
document.documentElement.classList.toggle('dark')
```

### Ranglar Noto'g'ri
```css
/* Check globals.css for color definitions */
--primary: oklch(0.35 0.1 138.5);  /* Should be dark green */
```

### Mobile Ko'rinishi Yomon
```tsx
// Responsive classes qo'shilishi kerak
className="text-xs sm:text-sm"  // Not just text-sm
className="p-3 sm:p-4"          // Not just p-4
```

---

## 📚 Documentation Files

- `UPDATES_SUMMARY.md` - Barcha o'zgarishlarning xulasasi
- `IMPROVEMENTS_COMPLETED.md` - Batafsil yaxşilashtirmalar
- `VISUAL_CHANGES.md` - Dizayn o'zgarishlari
- `QUICK_REFERENCE.md` - Bu fayl (tez ishlatiş)

---

## 🔗 Links

- **Herbalife Home**: `/`
- **News Section**: `/yangiliklar`
- **Settings**: `/sozlamalar`

---

## 💡 Tips & Tricks

### Console Debuging
```javascript
// Dark mode tekshirilsin
document.documentElement.classList.contains('dark')

// Local storage tekshirilsin
localStorage.getItem('theme')

// Color token tekshirilsin
getComputedStyle(document.documentElement).getPropertyValue('--primary')
```

### Quick Mobile Test
```
Chrome DevTools: F12
Toggle Device Toolbar: Ctrl+Shift+M
Test sizes: 320px, 375px, 768px, 1024px
```

---

## ✅ Checklist

- [ ] Mobil versiyasi bo'ylab ishlaydi (gap-2, text-xs)
- [ ] Dark mode qo'shilgan (dark: prefikslar)
- [ ] Yangi sahifalar mavjud (/yangiliklar, /sozlamalar)
- [ ] Navigatsiya linklar ishlaydi
- [ ] Ranglar qorong'u yashil
- [ ] Smooth transitions qo'llanilgan
- [ ] Responsive padding/margin
- [ ] All buttons accessible (44px+ height)
- [ ] Font sizes responsive
- [ ] Animations working

---

## 🎓 Shuningdek O'rganish

- Tailwind CSS: https://tailwindcss.com
- Next.js: https://nextjs.org
- React: https://react.dev
- Lucide Icons: https://lucide.dev

---

**Muddatı**: 2026 / Sürüm 2.0 ✅
