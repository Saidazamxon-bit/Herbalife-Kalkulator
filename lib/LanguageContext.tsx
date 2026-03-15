'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'uz-latn' | 'uz-cyrl' | 'ru' | 'en';

const translations = {
  'uz-latn': {
    // Header
    title: 'Herbalife Mahsulotlari',
    home: 'Bosh sahifa',
    news: 'Yangiliklar',
    settings: 'Sozlamalar',
    history: 'Tarixi',
    
    // Catalog
    products: 'Mahsulotlar',
    cosmetics: 'Kosmetika',
    other: 'Boshqa',
    
    // Discount
    discount: 'Chegirma',
    recommended: 'Tavsiyalangan narx',
    
    // Search & Sort
    search: 'Mahsulot qidirish...',
    sort: 'Saralash',
    sortByName: 'Nomi bo\'yicha',
    sortByVP: 'VP bo\'yicha',
    sortByPrice: 'Narxi bo\'yicha',
    
    // Actions
    add: 'Qo\'shish',
    remove: 'O\'chirish',
    copy: 'Nusxa olish',
    share: 'Ulashish',
    downloadPDF: 'PDF Yuklab olish',
    
    // Cart
    selected: 'Tanlangan mahsulotlar',
    totalVP: 'Jami VP',
    totalPrice: 'Jami narx',
    quantity: 'Miqdor',
    price: 'Narx',
    vp: 'VP',
    
    // Notifications
    addedToCart: 'mahsuloti belgilandi',
    removedFromCart: 'tanlanganlardan olib tashlandi',
    copied: 'Nusxa olindi!',
    shared: 'Ulashish tugmasi',
    
    // PDF
    productList: 'Mahsulotlar ro\'yxati',
    menu: 'Menyu',
    
    // Language
    language: 'Til',
    uzbekLatin: 'O\'zbek (Latin)',
    uzbekCyrillic: 'O\'zbek (Kirill)',
    russian: 'Ruscha',
    english: 'Inglizcha',
  },
  'uz-cyrl': {
    title: 'Herbalife Махсулотлари',
    home: 'Бош сахифа',
    news: 'Янгиликлар',
    settings: 'Созламалар',
    history: 'Тариҳи',
    
    products: 'Махсулотлар',
    cosmetics: 'Косметика',
    other: 'Бошқа',
    
    discount: 'Чегирма',
    recommended: 'Тавсияланган нарх',
    
    search: 'Махсулот қидириш...',
    sort: 'Саралаш',
    sortByName: 'Номи бўйича',
    sortByVP: 'VP бўйича',
    sortByPrice: 'Нархи бўйича',
    
    add: 'Қўшиш',
    remove: 'Ўчириш',
    copy: 'Нусха олиш',
    share: 'Улашиш',
    downloadPDF: 'PDF Юклаб олиш',
    
    selected: 'Танланган махсулотлар',
    totalVP: 'Жами VP',
    totalPrice: 'Жами нарх',
    quantity: 'Миқдор',
    price: 'Нарх',
    vp: 'VP',
    
    addedToCart: 'махсулоти белгилади',
    removedFromCart: 'танланганлардан ўлиб ташланди',
    copied: 'Нусха олинди!',
    shared: 'Улашиш тугмаси',
    
    productList: 'Махсулотлар рўйхати',
    menu: 'Меню',
    
    language: 'Тил',
    uzbekLatin: 'Ўзбек (Латин)',
    uzbekCyrillic: 'Ўзбек (Кирилл)',
    russian: 'Русча',
    english: 'Инглизча',
  },
  'ru': {
    title: 'Продукты Herbalife',
    home: 'Главная',
    news: 'Новости',
    settings: 'Настройки',
    history: 'История',
    
    products: 'Продукты',
    cosmetics: 'Косметика',
    other: 'Другое',
    
    discount: 'Скидка',
    recommended: 'Рекомендуемая цена',
    
    search: 'Поиск продукта...',
    sort: 'Сортировать',
    sortByName: 'По названию',
    sortByVP: 'По VP',
    sortByPrice: 'По цене',
    
    add: 'Добавить',
    remove: 'Удалить',
    copy: 'Копировать',
    share: 'Поделиться',
    downloadPDF: 'Скачать PDF',
    
    selected: 'Выбранные товары',
    totalVP: 'Всего VP',
    totalPrice: 'Общая цена',
    quantity: 'Количество',
    price: 'Цена',
    vp: 'VP',
    
    addedToCart: 'товар добавлен',
    removedFromCart: 'товар удален',
    copied: 'Скопировано!',
    shared: 'Поделиться',
    
    productList: 'Список продуктов',
    menu: 'Меню',
    
    language: 'Язык',
    uzbekLatin: 'Узбекский (Латиница)',
    uzbekCyrillic: 'Узбекский (Кириллица)',
    russian: 'Русский',
    english: 'Английский',
  },
  'en': {
    title: 'Herbalife Products',
    home: 'Home',
    news: 'News',
    settings: 'Settings',
    history: 'History',
    
    products: 'Products',
    cosmetics: 'Cosmetics',
    other: 'Other',
    
    discount: 'Discount',
    recommended: 'Recommended Price',
    
    search: 'Search products...',
    sort: 'Sort',
    sortByName: 'By Name',
    sortByVP: 'By VP',
    sortByPrice: 'By Price',
    
    add: 'Add',
    remove: 'Remove',
    copy: 'Copy',
    share: 'Share',
    downloadPDF: 'Download PDF',
    
    selected: 'Selected Products',
    totalVP: 'Total VP',
    totalPrice: 'Total Price',
    quantity: 'Quantity',
    price: 'Price',
    vp: 'VP',
    
    addedToCart: 'product added',
    removedFromCart: 'product removed',
    copied: 'Copied!',
    shared: 'Share',
    
    productList: 'Product List',
    menu: 'Menu',
    
    language: 'Language',
    uzbekLatin: 'Uzbek (Latin)',
    uzbekCyrillic: 'Uzbek (Cyrillic)',
    russian: 'Russian',
    english: 'English',
  },
};

type Translations = typeof translations['en'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('uz-latn');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('language') as Language | null;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (translations[lang]) {
      setLanguageState(lang);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('language', lang);
      }
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'uz-latn' as Language,
      setLanguage: () => {},
      t: translations['uz-latn'],
    };
  }
  return context;
}
