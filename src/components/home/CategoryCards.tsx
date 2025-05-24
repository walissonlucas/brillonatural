import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'serums',
    name: 'Sérums Faciales',
    description: 'Fórmulas concentradas para tratar necesidades específicas',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'hidratantes',
    name: 'Hidratantes',
    description: 'Nutrición e hidratación profunda para todo tipo de piel',
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'limpiadores',
    name: 'Limpiadores',
    description: 'El primer paso para una rutina facial efectiva',
    image: 'https://images.pexels.com/photos/3737592/pexels-photo-3737592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'kits',
    name: 'Kits Glow',
    description: 'Rutinas completas para un brillo natural',
    image: 'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const CategoryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/productos?categoria=${category.id}`}
          className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow group"
        >
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="font-poppins font-semibold text-xl mb-1">{category.name}</h3>
            <p className="text-sm text-white/90 mb-3">{category.description}</p>
            <span className="inline-block text-sm font-medium transition-transform duration-300 transform group-hover:translate-x-2">
              Explorar →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCards;