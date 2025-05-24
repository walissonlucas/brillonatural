import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header section */}
        <header className="text-center mb-16">
          <h1 className="font-poppins font-semibold text-3xl md:text-4xl mb-4">
            Nuestra Historia
          </h1>
          <p className="text-dark-light max-w-2xl mx-auto">
            Conoce la historia detrás de Brillo Natural y nuestra misión de embellecer la vida de las mujeres con productos naturales y efectivos.
          </p>
        </header>
        
        {/* Our story section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-semibold text-2xl mb-4">Nuestra Historia</h2>
              <p className="text-dark-light mb-4">
                Brillo Natural nació con la idea de ofrecer productos naturales de salud y belleza que realmente marcan la diferencia. Somos una tienda en línea especializada en dropshipping, ofreciendo una cuidadosa selección de artículos para todas las edades, siempre enfocados en la calidad, el bienestar y resultados efectivos.
                Nuestra misión es brindar una experiencia de compra práctica y accesible, conectándote con los mejores productos naturales sin complicaciones. Creemos que cuidar la salud y la belleza debe ser sencillo, sostenible y eficiente, por lo que trabajamos para ofrecer opciones que respeten el medio ambiente y tu bienestar.
                Ya sea para el cuidado diario o para mejorar tu rutina de belleza, estamos aquí para llevarte las mejores soluciones naturales, con la comodidad de una tienda en línea que se preocupa por tu satisfacción.
              </p>

            </div>
            <div className="relative">
              <img 
                src="/assets/story.png" 
                alt="Brillo Natural Store"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
        
        {/* Our mission section */}
        <section className="bg-primary py-16 px-6 md:px-12 rounded-2xl mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-2xl mb-4">Nuestra Misión</h2>
            <p className="text-dark-light mb-6">
              En Brillo Natural creemos que la verdadera belleza viene de dentro, y nuestros productos están diseñados para realzar esa belleza natural, no para ocultarla.
            </p>
            <p className="text-dark-light mb-6">
              Nos comprometemos a crear productos de cuidado de la piel que sean:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-lg mb-2 text-center">Efectivos</h3>
                <p className="text-dark-light text-center">
                  Formulados con activos probados científicamente para ofrecer resultados visibles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-lg mb-2 text-center">Naturales</h3>
                <p className="text-dark-light text-center">
                  Elaborados con ingredientes de origen natural y respetuosos con el medio ambiente.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-lg mb-2 text-center">Seguros</h3>
                <p className="text-dark-light text-center">
                  Sin ingredientes tóxicos, parabenos, sulfatos ni fragancias artificiales.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our values */}
        <section className="mb-16">
          <h2 className="font-poppins font-semibold text-2xl mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-xl mb-3">Transparencia</h3>
              <p className="text-dark-light">
                Creemos en ser honestos sobre nuestros ingredientes, procesos de fabricación y resultados esperados. Cada producto viene con información clara sobre sus componentes y beneficios.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-xl mb-3">Sostenibilidad</h3>
              <p className="text-dark-light">
                Nos comprometemos a reducir nuestro impacto ambiental utilizando envases reciclables y procesos de producción respetuosos con el medio ambiente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-xl mb-3">Inclusividad</h3>
              <p className="text-dark-light">
                Desarrollamos productos para todos los tipos de piel y necesidades, porque creemos que todas las mujeres merecen sentirse bellas y seguras.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-xl mb-3">Innovación</h3>
              <p className="text-dark-light">
                Constantemente investigamos nuevos ingredientes y tecnologías para ofrecer soluciones efectivas y adaptadas a las necesidades cambiantes de nuestras clientas.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="bg-secondary py-12 px-6 rounded-2xl text-center">
          <h2 className="font-poppins font-semibold text-2xl mb-4">Sé parte de nuestra historia</h2>
          <p className="text-dark-light mb-8 max-w-2xl mx-auto">
            Descubre nuestros productos y únete a miles de mujeres y hombres que ya han transformado su rutina de cuidado facial con Brillo Natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/productos" className="btn-primary">
              Explorar productos
            </Link>
            <Link to="/contacto" className="btn-secondary">
              Contactar con nosotros
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;