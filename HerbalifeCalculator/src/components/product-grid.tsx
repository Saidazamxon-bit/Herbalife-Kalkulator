import { ProductCard } from './product-card';
import { SearchBar } from './search-bar';
import { SortDropdown } from './sort-dropdown';
import { CopyResultsButton } from './copy-results-button';
import { ShareButton } from './share-button';
import { PdfExportButton } from './pdf-export-button';
import { LanguageSelector } from './language-selector';

interface ProductGridProps {
  products: any[];
  quantities: string[];
  discount: number;
  onQuantityChange: (index: number, value: string) => void;
  onQuantityBlur: (index: number) => void;
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
  onAddToCart: (index: number) => void;
  getDiscountedPrice: (product: any, discount: number) => number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

export function ProductGrid({
  products,
  quantities,
  discount,
  onQuantityChange,
  onQuantityBlur,
  onIncrement,
  onDecrement,
  onAddToCart,
  getDiscountedPrice,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
}: ProductGridProps) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price') {
      return a.price - b.price;
    } else if (sortOption === 'vp') {
      return a.vp - b.vp;
    }
    return 0;
  });

  return (
    <section className="py-6 sm:py-12 px-3 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4">
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
          <SortDropdown selectedOption={sortOption} setSelectedOption={setSortOption} />
          <CopyResultsButton products={sortedProducts} />
          <ShareButton products={sortedProducts} />
          <PdfExportButton products={sortedProducts} />
          <LanguageSelector />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              product={product}
              quantity={quantities[index] || '0'}
              discountedPrice={getDiscountedPrice(product, discount)}
              onQuantityChange={(value) => onQuantityChange(index, value)}
              onQuantityBlur={() => onQuantityBlur(index)}
              onIncrement={() => onIncrement(index)}
              onDecrement={() => onDecrement(index)}
              onAddToCart={() => onAddToCart(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}