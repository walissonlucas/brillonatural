import React from 'react';
import { Sparkles, Leaf, Truck as TruckFast, CreditCard } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Resultados reales',
    description: 'Productos clínicamente probados para resultados visibles en tu piel',
    icon: <Sparkles className="text-accent-dark h-12 w-12 mb-4" />
  },
  {
    id: 2,
    title: 'Ingredientes naturales',
    description: 'Fórmulas enriquecidas con activos naturales libres de tóxicos',
    icon: <Leaf className="text-accent-dark h-12 w-12 mb-4" />
  },
  {
    id: 3,
    title: 'Envío a toda Latinoamérica',
    description: 'Entrega rápida y segura para todos nuestros productos',
    icon: <TruckFast className="text-accent-dark h-12 w-12 mb-4" />
  },
  {
    id: 4,
    title: 'Pagos seguros',
    description: 'Múltiples métodos de pago con la máxima seguridad',
    icon: <CreditCard className="text-accent-dark h-12 w-12 mb-4" />
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary/30">
      <div className="container-custom">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <p className="section-subtitle">
          Descubre los beneficios que han conquistado a miles de mujeres
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="benefit-card"
            >
              {benefit.icon}
              <h3 className="font-poppins font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-dark-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;