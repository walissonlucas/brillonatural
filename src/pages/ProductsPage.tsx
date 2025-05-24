import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import { getProductsByCategory, products } from '../data/products';
import { Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria');
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'serums', name: 'Sérums Faciales' },
    { id: 'hidratantes', name: 'Hidratantes' },
    { id: 'limpiadores', name: 'Limpiadores' },
    { id: 'kits', name: 'Kits Glow' }
  ];
  
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);
  
  const displayedProducts = activeCategory 
    ? getProductsByCategory(activeCategory)
    : products;

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <header className="mb-12">
          <h1 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-3">
            Nuestros Productos
          </h1>
          <p className="text-dark-light text-center max-w-2xl mx-auto">
            Descubre nuestra colección de productos naturales diseñados para realzar tu belleza natural.
          </p>
        </header>
        
        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-dark-light font-medium text-sm"
          >
            <Filter size={16} className="mr-2" />
            {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar/Filters - Mobile collapsible, desktop always visible */}
          <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-semibold text-lg mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                      activeCategory === null 
                        ? 'bg-accent text-dark font-medium' 
                        : 'hover:bg-neutral-100'
                    }`}
                  >
                    Todos los productos
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category.id}>
                    <button 
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-accent text-dark font-medium' 
                          : 'hover:bg-neutral-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-neutral-200 my-6 pt-6">
                <h3 className="font-poppins font-semibold text-lg mb-4">Precio</h3>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    className="w-full p-2 border border-neutral-200 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    placeholder="Max" 
                    className="w-full p-2 border border-neutral-200 rounded-md text-sm"
                  />
                </div>
                <button className="w-full mt-3 py-2 bg-accent text-dark text-sm font-medium rounded-md hover:bg-accent-dark hover:text-white transition-colors">
                  Aplicar
                </button>
              </div>
              
              <div className="border-t border-neutral-200 my-6 pt-6">
                <h3 className="font-poppins font-semibold text-lg mb-4">Filtros</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-accent-dark" />
                    <span>Nuevos productos</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-accent-dark" />
                    <span>En oferta</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-accent-dark" />
                    <span>Best sellers</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main content */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <p className="text-dark-light">
                Mostrando {displayedProducts.length} productos
              </p>
              <select className="border border-neutral-200 rounded-md p-2 text-sm">
                <option>Destacados</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Más recientes</option>
              </select>
            </div>
            
            <ProductGrid category={activeCategory || undefined} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;