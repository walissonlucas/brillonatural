import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary mt-16 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Brillo Natural</h3>
            <p className="text-dark-light mb-4">
              Productos para el cuidado de la piel hechos con ingredientes naturales y amor.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent-dark transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark-light hover:text-accent-dark transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-dark-light hover:text-accent-dark transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-dark-light hover:text-accent-dark transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-dark-light hover:text-accent-dark transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos?categoria=serums" className="text-dark-light hover:text-accent-dark transition-colors">
                  Sérums Faciales
                </Link>
              </li>
              <li>
                <Link to="/productos?categoria=hidratantes" className="text-dark-light hover:text-accent-dark transition-colors">
                  Hidratantes
                </Link>
              </li>
              <li>
                <Link to="/productos?categoria=limpiadores" className="text-dark-light hover:text-accent-dark transition-colors">
                  Limpiadores
                </Link>
              </li>
              <li>
                <Link to="/productos?categoria=kits" className="text-dark-light hover:text-accent-dark transition-colors">
                  Kits Glow
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent-dark" />
                <a href="mailto:info@brillonatural.com" className="text-dark-light hover:text-accent-dark transition-colors">
                  info@brillonatural.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent-dark" />
                <a href="tel:+123456789" className="text-dark-light hover:text-accent-dark transition-colors">
                  +123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-b border-accent/30 py-8 my-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-poppins font-semibold text-xl mb-2">Suscríbete a nuestro newsletter</h3>
            <p className="text-dark-light mb-4">
              Recibe consejos de belleza, ofertas exclusivas y novedades.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-grow px-4 py-2 rounded-full border border-neutral-200 focus:outline-none focus:border-accent-dark"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-dark-light text-sm">
          <p>© {new Date().getFullYear()} Brillo Natural. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;