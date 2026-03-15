'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { ProductGrid } from '@/components/product-grid';
import { CartSummary } from '@/components/cart-summary';
import { NotificationToast } from '@/components/notification-toast';
import { Footer } from '@/components/footer';
import { PRODUCTS_DATA } from '@/data/products';

type CatalogType = 'mahsulotlar' | 'kosmetika' | 'boshqa';

interface CartItem {
  name: string;
  vp: number;
  price: number;
  quantity: number;
}

export default function Home() {
  const [catalogType, setCatalogType] = useState<CatalogType>('mahsulotlar');
  const [discount, setDiscount] = useState(0);
  const [notification, setNotification] = useState('');
  const [notifVisible, setNotifVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<string[]>([]);

  const products = PRODUCTS_DATA[catalogType];

  useEffect(() => {
    setQuantities(Array(products.length).fill('0'));
  }, [catalogType, products.length]);

  useEffect(() => {
    setCartItems((prev) =>
      prev.map((item) => {
        const product = products.find((p) => p.name === item.name);
        if (!product) return item;

        const newPrice = getDiscountedPrice(product, discount);
        return { ...item, price: newPrice };
      })
    );
  }, [discount, catalogType, products]);

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

  const showNotification = (message: string) => {
    setNotification(message);
    setNotifVisible(true);
    setTimeout(() => setNotifVisible(false), 2000);
    setTimeout(() => setNotification(''), 2600);
  };

  const handleAddToCart = (index: number) => {
    const qty = parseInt(quantities[index]);
    const product = products[index];

    if (qty === 0) {
      setCartItems((prev) => prev.filter((i) => i.name !== product.name));
      showNotification(`${product.name} tanlanganlardan olib tashlandi`);
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

    showNotification(`${product.name} mahsuloti ${qty} dona qilib belgilandi`);
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

      <ProductGrid
        products={products}
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
        <CartSummary
          totalVP={totalVP}
          totalPrice={totalPrice}
          cartItems={cartItems}
          isFloating={false}
        />
      )}

      <Footer />
    </main>
  );
}
