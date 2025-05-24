import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-poppins font-semibold text-3xl mb-4">Únete a nuestra comunidad</h2>
          <p className="text-dark-light mb-8 max-w-xl mx-auto">
            Suscríbete para recibir consejos de belleza, ofertas exclusivas y ser la primera en conocer nuestros nuevos lanzamientos.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-accent-dark"
                  required
                />
              </div>
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-accent-dark"
                  required
                />
              </div>
              <button type="submit" className="btn-primary whitespace-nowrap">
                Suscribirme
              </button>
            </form>
            <p className="text-dark-light/80 text-xs mt-4">
              Al suscribirte, aceptas nuestra política de privacidad. Nunca compartiremos tu información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;