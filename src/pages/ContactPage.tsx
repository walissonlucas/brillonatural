import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header section */}
        <header className="text-center mb-12">
          <h1 className="font-poppins font-semibold text-3xl md:text-4xl mb-4">
            Contacto
          </h1>
          <p className="text-dark-light max-w-2xl mx-auto">
            Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta o sugerencia.
          </p>
        </header>
        
        {/* Contact information and form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact information */}
          <div>
            <h2 className="font-poppins font-semibold text-2xl mb-6">Información de contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={20} className="text-accent-dark mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:info@brillonatural.com" className="text-dark-light hover:text-accent-dark transition-colors">
                    info@brillonatural.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="text-accent-dark mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Teléfono</h3>
                  <a href="tel:+123456789" className="text-dark-light hover:text-accent-dark transition-colors">
                    +123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="text-accent-dark mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Dirección</h3>
                  <p className="text-dark-light">
                    Av. Rivadavia 1234<br />
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={20} className="text-accent-dark mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Horario de atención</h3>
                  <p className="text-dark-light">
                    Lunes a Viernes: 9:00 - 18:00<br />
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social media */}
            <div className="mt-8">
              <h3 className="font-medium mb-3">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-dark hover:bg-accent-dark hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-dark hover:bg-accent-dark hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-dark hover:bg-accent-dark hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="font-poppins font-semibold text-2xl mb-6">Envíanos un mensaje</h2>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-dark-light text-sm mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:border-accent-dark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-light text-sm mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:border-accent-dark"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-dark-light text-sm mb-1">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:border-accent-dark"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dark-light text-sm mb-1">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:border-accent-dark resize-none"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
        
        {/* FAQ section */}
        <section className="mb-16">
          <h2 className="font-poppins font-semibold text-2xl mb-8 text-center">Preguntas frecuentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-lg mb-2">¿Cuánto tiempo tarda en llegar mi pedido?</h3>
              <p className="text-dark-light">
                Los envíos dentro de la ciudad capital se entregan en 24-48 horas. Para el resto del país, el tiempo estimado es de 3-5 días hábiles. Para envíos internacionales, el tiempo puede variar entre 7-15 días.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-lg mb-2">¿Puedo cambiar o devolver un producto?</h3>
              <p className="text-dark-light">
                Sí, aceptamos cambios y devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar sin usar y en su embalaje original. Contacta con nuestro servicio al cliente para iniciar el proceso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-lg mb-2">¿Sus productos son aptos para pieles sensibles?</h3>
              <p className="text-dark-light">
                La mayoría de nuestros productos están formulados para ser suaves con todo tipo de piel, incluidas las sensibles. Cada producto indica claramente para qué tipo de piel es más adecuado. Recomendamos hacer una prueba en una pequeña área antes de usar.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-poppins font-medium text-lg mb-2">¿Hacen envíos internacionales?</h3>
              <p className="text-dark-light">
                Sí, realizamos envíos a toda Latinoamérica. Los costos de envío varían según el país de destino y se calculan automáticamente en el proceso de compra.
              </p>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section>
          <h2 className="font-poppins font-semibold text-2xl mb-6">Encuéntranos</h2>
          <div className="aspect-[21/9] rounded-lg overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8404522484648!2d-58.38378688505151!3d-34.6037389804598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sAv.%20Rivadavia%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1655481061493!5m2!1ses!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;