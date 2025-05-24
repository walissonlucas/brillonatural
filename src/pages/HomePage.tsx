import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/product/ProductGrid';
import CategoryCards from '../components/home/CategoryCards';
import BenefitsSection from '../components/home/BenefitsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StorySection from '../components/home/StorySection';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title">Nuestras Colecciones</h2>
          <p className="section-subtitle">
            Descubre productos diseñados para realzar tu belleza natural
          </p>
          <CategoryCards />
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Productos Destacados</h2>
          <p className="section-subtitle">
            Los favoritos de nuestras clientas para una piel radiante
          </p>
          <ProductGrid limit={4} />
          <div className="text-center mt-12">
            <Link to="/productos" className="btn-secondary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Story Section */}
      <StorySection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default HomePage;