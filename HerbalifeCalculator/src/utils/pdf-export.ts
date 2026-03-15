import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportToPDF = (products, quantities, discount) => {
  const doc = new jsPDF();
  doc.setFontSize(20);
  doc.text('Herbalife Product Catalog', 14, 22);

  const tableData = products.map((product, index) => [
    product.name,
    quantities[index] || '0',
    product.price,
    getDiscountedPrice(product, discount),
  ]);

  autoTable(doc, {
    head: [['Product Name', 'Quantity', 'Price', 'Discounted Price']],
    body: tableData,
    startY: 30,
  });

  doc.save('herbalife_product_catalog.pdf');
};

const getDiscountedPrice = (product, discount) => {
  return product.price - (product.price * discount) / 100;
};