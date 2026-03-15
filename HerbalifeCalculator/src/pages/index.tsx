import { useState } from 'react';
import { ProductGrid } from '../components/product-grid';
import { SearchBar } from '../components/search-bar';
import { SortDropdown } from '../components/sort-dropdown';
import { CopyResultsButton } from '../components/copy-results-button';
import { ShareButton } from '../components/share-button';
import { PdfExportButton } from '../components/pdf-export-button';
import { LanguageSelector } from '../components/language-selector';
import { useLanguage } from '../hooks/useLanguage';
import { productsData } from '../data/products'; // Assuming you have a data file for products

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const { language } = useLanguage();

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  return (
    <div>
      <LanguageSelector />
      <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <SortDropdown selectedOption={sortOption} onOptionChange={setSortOption} />
      <ProductGrid products={sortedProducts} />
      <CopyResultsButton products={sortedProducts} />
      <ShareButton products={sortedProducts} />
      <PdfExportButton products={sortedProducts} />
    </div>
  );
}

function sortProducts(products, option) {
  switch (option) {
    case 'price':
      return [...products].sort((a, b) => a.price - b.price);
    case 'vp':
      return [...products].sort((a, b) => a.vp - b.vp);
    default:
      return products;
  }
}