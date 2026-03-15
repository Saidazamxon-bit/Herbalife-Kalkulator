'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { ProductGrid } from '@/components/product-grid';
import { CartSummary } from '@/components/cart-summary';
import { NotificationToast } from '@/components/notification-toast';
import { Footer } from '@/components/footer';
import { CopyShareButtons } from '@/components/copy-share-buttons';
import { useLanguage } from '@/lib/LanguageContext';
import { PRODUCTS_DATA } from '@/data/products';
import { Search, ArrowUpDown } from 'lucide-react';

type CatalogType = 'mahsulotlar' | 'kosmetika' | 'boshqa';
type SortType = 'name' | 'vp' | 'price';

interface CartItem {
  name: string;
  vp: number;
  price: number;
  quantity: number;
}

export default function Home() {
  const { t } = useLanguage();
  const [catalogType, setCatalogType] = useState<CatalogType>('mahsulotlar');
  const [discount, setDiscount] = useState(0);
  const [notification, setNotification] = useState('');
  const [notifVisible, setNotifVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState<SortType>('name');

  const getDiscountedPrice = (product: any, discountValue: number) => {
    switch (discountValue) {
      case 25:
        return product.price25;
      case 35:
        return product.price35;
      case 42:
        return product.price42;
      case 50:
        return product.price50;
      default:
        return product.recommendedPrice;
    }
  };

  const allProducts = PRODUCTS_DATA[catalogType];
  
  // 🔍 Filtrlash va saralash
  const filteredProducts = allProducts
    .filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortType) {
        case 'vp':
          return b.vp - a.vp;
        case 'price':
          return getDiscountedPrice(a, discount) - getDiscountedPrice(b, discount);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  useEffect(() => {
    setQuantities(Array(allProducts.length).fill('0'));
  }, [catalogType, allProducts.length]);

  useEffect(() => {
    setCartItems((prev) =>
      prev.map((item) => {
        const product = allProducts.find((p) => p.name === item.name);
        if (!product) return item;

        const newPrice = getDiscountedPrice(product, discount);
        return { ...item, price: newPrice };
      })
    );
  }, [discount, catalogType, allProducts]);

  const showNotification = (message: string) => {
    setNotification(message);
    setNotifVisible(true);
    setTimeout(() => setNotifVisible(false), 2000);
    setTimeout(() => setNotification(''), 2600);
  };

  const handleAddToCart = (index: number) => {
    const product = filteredProducts[index];
    const qty = parseInt(quantities[index] || '0');

    if (qty === 0) {
      setCartItems((prev) => prev.filter((i) => i.name !== product.name));
      showNotification(`${product.name} ${t.removedFromCart}`);
      return;
    }

    const price = getDiscountedPrice(product, discount);
    const newItem = { name: product.name, vp: product.vp, price, quantity: qty };

    setCartItems((prev) => {
      const exists = prev.find((i) => i.name === newItem.name);
      if (exists) {
        return prev.map((i) =>
          i.name === newItem.name ? { ...i, quantity: newItem.quantity } : i
        );
      }
      return [...prev, newItem];
    });

    showNotification(`${product.name} ${t.addedToCart}`);
  };

  const handleQuantityChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newQuantities = [...quantities];
      newQuantities[index] = value;
      setQuantities(newQuantities);
    }
  };

  const handleQuantityBlur = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] === '') {
      newQuantities[index] = '0';
      setQuantities(newQuantities);
    }
  };

  const handleIncrement = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = (parseInt(newQuantities[index] || '0') + 1).toString();
    setQuantities(newQuantities);
  };

  const handleDecrement = (index: number) => {
    const newQuantities = [...quantities];
    const current = parseInt(newQuantities[index] || '0');
    if (current > 0) {
      newQuantities[index] = (current - 1).toString();
      setQuantities(newQuantities);
    }
  };

  const totalVP = cartItems.reduce((sum, item) => sum + item.vp * item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <Header catalogType={catalogType} onCatalogChange={setCatalogType} discount={discount} onDiscountChange={setDiscount} />

      <NotificationToast message={notification} isVisible={notifVisible} />

      {cartItems.length > 0 && <CartSummary totalVP={totalVP} totalPrice={totalPrice} isFloating />}

      {/* 🔍 Search & Sort Section */}
      <section className="py-4 px-3 sm:px-4 bg-white dark:bg-slate-900 border-b border-green-100 dark:border-green-900 sticky top-16 z-30">
        <div className="mx-auto max-w-7xl space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-green-200 dark:border-green-900 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Sort Options */}
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{t.sort}:</span>
            </div>
            {(['name', 'vp', 'price'] as const).map((sort) => (
              <button
                key={sort}
                onClick={() => setSortType(sort)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  sortType === sort
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sort === 'name' && t.sortByName}
                {sort === 'vp' && t.sortByVP}
                {sort === 'price' && t.sortByPrice}
              </button>
            ))}
          </div>

          {/* Results Count */}
          {searchQuery && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {filteredProducts.length} ta mahsulot topildi
            </p>
          )}
        </div>
      </section>

      <ProductGrid
        products={filteredProducts}
        quantities={quantities}
        discount={discount}
        onQuantityChange={handleQuantityChange}
        onQuantityBlur={handleQuantityBlur}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onAddToCart={handleAddToCart}
        getDiscountedPrice={getDiscountedPrice}
      />

      {cartItems.length > 0 && (
        <section className="py-6 sm:py-12 px-3 sm:px-4 bg-green-50 dark:bg-slate-900 border-t-2 border-green-200 dark:border-green-900">
          <div className="mx-auto max-w-4xl">
            <CartSummary
              totalVP={totalVP}
              totalPrice={totalPrice}
              cartItems={cartItems}
              isFloating={false}
            />
            
            {/* Copy/Share/PDF Buttons */}
            <div className="mt-6">
              <CopyShareButtons
                cartItems={cartItems}
                totalVP={totalVP}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
