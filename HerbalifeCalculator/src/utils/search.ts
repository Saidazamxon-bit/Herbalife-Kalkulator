export const filterProducts = (products, query) => {
  if (!query) return products;
  const lowercasedQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercasedQuery)
  );
}; 

export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];
  switch (sortBy) {
    case 'price':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'vp':
      return sortedProducts.sort((a, b) => a.vp - b.vp);
    case 'position':
      return sortedProducts.sort((a, b) => a.position - b.position);
    default:
      return sortedProducts;
  }
};