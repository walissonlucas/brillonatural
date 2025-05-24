import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-poppins font-semibold text-dark">
            Brillo Natural
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-accent-dark transition-colors ${
                location.pathname === '/' ? 'text-accent-dark' : 'text-dark'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/productos" 
              className={`text-sm font-medium hover:text-accent-dark transition-colors ${
                location.pathname === '/productos' ? 'text-accent-dark' : 'text-dark'
              }`}
            >
              Productos
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className={`text-sm font-medium hover:text-accent-dark transition-colors ${
                location.pathname === '/sobre-nosotros' ? 'text-accent-dark' : 'text-dark'
              }`}
            >
              Nuestra Historia
            </Link>
            <Link 
              to="/contacto" 
              className={`text-sm font-medium hover:text-accent-dark transition-colors ${
                location.pathname === '/contacto' ? 'text-accent-dark' : 'text-dark'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-dark hover:text-accent-dark transition-colors"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-dark hover:text-accent-dark transition-colors"
              aria-label="Mi cuenta"
            >
              <User size={20} />
            </button>
            <button 
              className="text-dark hover:text-accent-dark transition-colors relative"
              aria-label="Carrito de compras"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-accent-dark text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium py-2 ${
                  location.pathname === '/' ? 'text-accent-dark' : 'text-dark'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/productos" 
                className={`text-sm font-medium py-2 ${
                  location.pathname === '/productos' ? 'text-accent-dark' : 'text-dark'
                }`}
              >
                Productos
              </Link>
              <Link 
                to="/sobre-nosotros" 
                className={`text-sm font-medium py-2 ${
                  location.pathname === '/sobre-nosotros' ? 'text-accent-dark' : 'text-dark'
                }`}
              >
                Nuestra Historia
              </Link>
              <Link 
                to="/contacto" 
                className={`text-sm font-medium py-2 ${
                  location.pathname === '/contacto' ? 'text-accent-dark' : 'text-dark'
                }`}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;