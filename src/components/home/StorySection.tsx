import React from 'react';
import { Link } from 'react-router-dom';

const StorySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-poppins font-semibold text-3xl mb-4">Nuestra Historia</h2>
            <p className="text-dark-light mb-4">
              Brillo Natural nació de una pasión por los ingredientes naturales y la convicción de que todas las mujeres merecen productos de belleza que realmente funcionen.
            </p>
            <p className="text-dark-light mb-6">
              Cada producto es desarrollado con amor, probado éticamente y diseñado para realzar la belleza natural de cada mujer, respetando su piel y el medio ambiente.
            </p>
            <Link to="/sobre-nosotros" className="btn-primary">
              Conocer más sobre nosotros
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/assets/story3.png" 
                  alt="Brillo Natural Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent p-4 rounded-lg shadow-lg max-w-xs">
                <p className="italic text-dark font-medium">
                  "Creemos en la belleza auténtica que viene del cuidado y el amor por uno mismo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;