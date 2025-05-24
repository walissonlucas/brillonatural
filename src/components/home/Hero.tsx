import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/30"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-xl fade-in">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight mb-4">
            Despierta tu brillo natural.
            <span className="block">Cuida tu piel con amor.</span>
          </h1>
          <p className="text-dark-light text-lg mb-8 md:pr-12">
            Productos de belleza con ingredientes naturales para realzar tu belleza única y auténtica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/productos" className="btn-primary">
              Explorar productos
            </Link>
            <Link to="/sobre-nosotros" className="btn-secondary">
              Conocer más
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="hidden md:block absolute bottom-12 right-12 z-10">
        <div className="bg-accent/70 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xs">
          <p className="italic text-dark font-light text-center">
            "La belleza comienza cuando decides ser tú misma"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;