import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, Product, getFeaturedProducts } from '../data/products';
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || "0"));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Here would go the actual cart logic
    setTimeout(() => setIsAddedToCart(false), 3000);
  };
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-poppins font-semibold mb-4">Producto no encontrado</h2>
          <p className="text-dark-light mb-6">Lo sentimos, el producto que estás buscando no existe.</p>
          <Link to="/productos" className="btn-primary">
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getFeaturedProducts(4).filter(p => p.id !== product.id);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="text-sm text-dark-light mb-8">
          <ol className="flex items-center flex-wrap">
            <li className="flex items-center">
              <Link to="/" className="hover:text-accent-dark transition-colors">Inicio</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link to="/productos" className="hover:text-accent-dark transition-colors">Productos</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link 
                to={`/productos?categoria=${product.category}`}
                className="hover:text-accent-dark transition-colors capitalize"
              >
                {product.category === 'serums' ? 'Sérums' : 
                 product.category === 'hidratantes' ? 'Hidratantes' :
                 product.category === 'limpiadores' ? 'Limpiadores' : 'Kits'}
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-dark font-medium truncate">{product.name}</li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
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
            
            {/* Product title */}
            <h1 className="font-poppins font-semibold text-3xl mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "text-warning fill-warning" : "text-neutral-300"}
                  />
                ))}
              </div>
              <span className="text-sm ml-2 text-dark-light">({product.rating} de 5)</span>
            </div>
            
            {/* Price */}
            <div className="flex items-center mb-6">
              {product.discountPrice ? (
                <>
                  <span className="font-semibold text-2xl">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-dark-light line-through ml-3 text-lg">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-semibold text-2xl">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Short description */}
            <p className="text-dark-light mb-8">
              {product.description}
            </p>
            
            {/* Quantity selector */}
            <div className="flex items-center mb-6">
              <span className="text-dark mr-4">Cantidad:</span>
              <div className="flex items-center border border-neutral-200 rounded-full overflow-hidden">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                  aria-label="Disminuir cantidad"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Add to cart button */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button 
                onClick={handleAddToCart}
                className={`btn-primary flex-grow flex items-center justify-center gap-2 ${
                  isAddedToCart ? 'bg-success hover:bg-success/90' : ''
                }`}
              >
                {isAddedToCart ? (
                  <>
                    <Check size={18} />
                    Añadido al carrito
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    Añadir al carrito
                  </>
                )}
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Heart size={18} />
                <span className="sr-only md:not-sr-only">Añadir a favoritos</span>
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Share2 size={18} />
                <span className="sr-only md:not-sr-only">Compartir</span>
              </button>
            </div>
            
            {/* Delivery info */}
            <div className="bg-secondary p-4 rounded-lg mb-8">
              <p className="flex items-center text-sm mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Envío gratis en pedidos superiores a $50
              </p>
              <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Entrega estimada: 3-5 días hábiles
              </p>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mb-16">
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex flex-wrap -mb-px">
              <button
                onClick={() => setActiveTab('description')}
                className={`inline-block py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'description' 
                    ? 'border-accent-dark text-accent-dark' 
                    : 'border-transparent text-dark-light hover:text-dark'
                }`}
              >
                Descripción
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`inline-block py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'benefits' 
                    ? 'border-accent-dark text-accent-dark' 
                    : 'border-transparent text-dark-light hover:text-dark'
                }`}
              >
                Beneficios
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`inline-block py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'ingredients' 
                    ? 'border-accent-dark text-accent-dark' 
                    : 'border-transparent text-dark-light hover:text-dark'
                }`}
              >
                Ingredientes
              </button>
              <button
                onClick={() => setActiveTab('howToUse')}
                className={`inline-block py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'howToUse' 
                    ? 'border-accent-dark text-accent-dark' 
                    : 'border-transparent text-dark-light hover:text-dark'
                }`}
              >
                Modo de uso
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {activeTab === 'description' && (
              <div>
                <p className="mb-4">{product.description}</p>
                <p>
                  Todos nuestros productos están formulados con ingredientes naturales de alta calidad, 
                  sin parabenos, sulfatos ni fragancias artificiales. Desarrollados para ser gentiles 
                  con todo tipo de piel, incluso las más sensibles.
                </p>
              </div>
            )}
            
            {activeTab === 'benefits' && (
              <div>
                <h3 className="font-poppins font-semibold text-lg mb-4">Beneficios principales</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-dark flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="font-poppins font-semibold text-lg mb-4">Ingredientes activos</h3>
                <ul className="space-y-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-dark flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'howToUse' && (
              <div>
                <h3 className="font-poppins font-semibold text-lg mb-4">Modo de uso</h3>
                <p>{product.howToUse}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div>
          <h2 className="section-title">También te puede interesar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;