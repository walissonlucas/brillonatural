import React from 'react';
import ProductCard from './ProductCard';
import { getFeaturedProducts, getProductsByCategory, products } from '../../data/products';

interface ProductGridProps {
  category?: string;
  limit?: number;
  featured?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  category, 
  limit = 8,
  featured = false
}) => {
  let displayProducts = products;
  
  if (featured) {
    displayProducts = getFeaturedProducts();
  } else if (category) {
    displayProducts = getProductsByCategory(category);
  }
  
  // Apply limit
  displayProducts = displayProducts.slice(0, limit);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;