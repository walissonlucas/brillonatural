import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/producto/${product.id}`} className="product-card hover-grow">
      <div className="relative">
        {/* Product image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-accent-dark text-white text-xs px-3 py-1 rounded-full font-medium">
              Nuevo
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-primary text-dark text-xs px-3 py-1 rounded-full font-medium">
              Best Seller
            </span>
          )}
        </div>
        
        {/* Discount badge */}
        {product.discountPrice && (
          <div className="absolute top-3 right-3">
            <span className="bg-error text-white text-xs px-3 py-1 rounded-full font-medium">
              {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-dark-light mb-1 capitalize">
          {product.category === 'serums' ? 'Sérums' : 
           product.category === 'hidratantes' ? 'Hidratantes' :
           product.category === 'limpiadores' ? 'Limpiadores' : 'Kits'}
        </p>
        
        {/* Product name */}
        <h3 className="font-poppins font-medium text-lg mb-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "text-warning fill-warning" : "text-neutral-300"}
              />
            ))}
          </div>
          <span className="text-xs ml-1 text-dark-light">({product.rating})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center">
          {product.discountPrice ? (
            <>
              <span className="font-semibold">${product.discountPrice.toFixed(2)}</span>
              <span className="text-dark-light line-through ml-2 text-sm">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-semibold">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;