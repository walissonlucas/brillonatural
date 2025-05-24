import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Brillo Natural cambió mi rutina por completo. Mi piel está más radiante y saludable que nunca. ¡El sérum de vitamina C es un producto que recomiendo a todas mis amigas!",
    author: "Carla Mendoza",
    location: "Buenos Aires, Argentina",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    text: "Después de probar muchas marcas, por fin encontré productos que realmente funcionan. La crema hidratante es ligera y perfecta para mi piel mixta. ¡No la cambio por nada!",
    author: "María González",
    location: "Ciudad de México, México",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    text: "Los productos de Brillo Natural son un sueño. Ingredientes naturales que realmente funcionan. La atención al cliente es excepcional y los envíos siempre llegan a tiempo.",
    author: "Daniela Torres",
    location: "Bogotá, Colombia",
    image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Lo que dicen nuestras clientas</h2>
        <p className="section-subtitle">
          Experiencias reales de mujeres que confían en Brillo Natural
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-poppins font-semibold">{testimonial.author}</p>
                      <p className="text-dark-light text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-accent-dark w-6' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;