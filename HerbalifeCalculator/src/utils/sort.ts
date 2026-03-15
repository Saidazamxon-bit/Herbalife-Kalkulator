export const sortProducts = (products, criteria) => {
  switch (criteria) {
    case 'name':
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case 'vp':
      return [...products].sort((a, b) => a.vp - b.vp);
    case 'price':
      return [...products].sort((a, b) => a.price - b.price);
    default:
      return products;
  }
};