export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  description: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sérum de Vitamina C",
    category: "serums",
    price: 35.99,
    image: "https://images.pexels.com/photos/4465809/pexels-photo-4465809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isNew: true,
    isBestseller: true,
    rating: 4.8,
    description: "Un potente sérum antioxidante que combate los signos del envejecimiento y aporta luminosidad a la piel.",
    benefits: [
      "Reduce manchas oscuras y unifica el tono",
      "Aporta luminosidad instantánea",
      "Estimula la producción de colágeno",
      "Protege contra el daño ambiental"
    ],
    ingredients: [
      "Vitamina C estabilizada al 15%",
      "Ácido hialurónico",
      "Extracto de fenogreco",
      "Vitamina E"
    ],
    howToUse: "Aplicar 3-4 gotas en rostro y cuello por las mañanas, después de limpiar y antes de hidratar."
  },
  {
    id: 2,
    name: "Crema Hidratante de Rosas",
    category: "hidratantes",
    price: 29.99,
    discountPrice: 24.99,
    image: "https://images.pexels.com/photos/3737593/pexels-photo-3737593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isBestseller: true,
    rating: 4.7,
    description: "Una crema ligera pero profundamente hidratante con agua de rosas que calma y nutre todo tipo de piel.",
    benefits: [
      "Hidratación de larga duración",
      "Calma la piel sensible e irritada",
      "Mejora la elasticidad",
      "No obstruye los poros"
    ],
    ingredients: [
      "Agua de rosas orgánica",
      "Manteca de karité",
      "Aceite de jojoba",
      "Aloe vera"
    ],
    howToUse: "Aplicar una cantidad generosa en rostro y cuello, mañana y noche después del sérum."
  },
  {
    id: 3,
    name: "Gel Limpiador Suave",
    category: "limpiadores",
    price: 22.99,
    image: "https://images.pexels.com/photos/4465134/pexels-photo-4465134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.6,
    description: "Un limpiador suave que elimina impurezas y maquillaje sin resecar la piel, dejándola fresca y equilibrada.",
    benefits: [
      "Limpia sin resecar",
      "Equilibra el pH de la piel",
      "Remueve maquillaje e impurezas",
      "No irrita los ojos"
    ],
    ingredients: [
      "Extracto de pepino",
      "Aloe vera",
      "Glicerina vegetal",
      "Aceite de almendras dulces"
    ],
    howToUse: "Masajear suavemente sobre la piel húmeda, enjuagar con agua tibia. Usar mañana y noche."
  },
  {
    id: 4,
    name: "Kit Glow Completo",
    category: "kits",
    price: 79.99,
    discountPrice: 69.99,
    image: "https://images.pexels.com/photos/6624859/pexels-photo-6624859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isNew: true,
    rating: 4.9,
    description: "Rutina completa para una piel radiante. Incluye limpiador, sérum, hidratante y mascarilla.",
    benefits: [
      "Rutina completa en un solo kit",
      "Productos que trabajan en sinergia",
      "Resultados visibles en 2 semanas",
      "Incluye guía de uso personalizada"
    ],
    ingredients: [
      "Todos los productos contienen activos naturales",
      "Libres de parabenos y sulfatos",
      "No testados en animales",
      "Envases reciclables"
    ],
    howToUse: "Seguir la guía incluida para una rutina personalizada mañana y noche."
  },
  {
    id: 5,
    name: "Sérum de Ácido Hialurónico",
    category: "serums",
    price: 32.99,
    image: "https://images.pexels.com/photos/4465776/pexels-photo-4465776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    description: "Hidratación intensa para todo tipo de piel. Rellena líneas finas y aporta volumen.",
    benefits: [
      "Hidratación profunda e inmediata",
      "Reduce líneas finas de deshidratación",
      "Efecto relleno visible",
      "Prepara la piel para otros tratamientos"
    ],
    ingredients: [
      "Ácido hialurónico de bajo, medio y alto peso molecular",
      "Extracto de algas",
      "Vitamina B5",
      "Péptidos hidratantes"
    ],
    howToUse: "Aplicar 2-3 gotas sobre piel limpia antes de la crema hidratante, mañana y noche."
  },
  {
    id: 6,
    name: "Mascarilla Exfoliante de Arcilla",
    category: "limpiadores",
    price: 25.99,
    image: "https://images.pexels.com/photos/3762624/pexels-photo-3762624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.5,
    description: "Mascarilla exfoliante que remueve células muertas y purifica los poros para una piel renovada.",
    benefits: [
      "Exfolia suavemente",
      "Purifica poros obstruidos",
      "Controla el exceso de grasa",
      "Ilumina el tono de la piel"
    ],
    ingredients: [
      "Arcilla rosa",
      "Ácido salicílico natural",
      "Polvo de bambú",
      "Aceite de árbol de té"
    ],
    howToUse: "Aplicar una capa fina sobre piel limpia, dejar actuar 10-15 minutos y enjuagar. Usar 1-2 veces por semana."
  },
  {
    id: 7,
    name: "Aceite Facial Nutritivo",
    category: "hidratantes",
    price: 42.99,
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isBestseller: true,
    rating: 4.8,
    description: "Aceite facial nutritivo con una mezcla de aceites preciosos que nutren y reparan la piel durante la noche.",
    benefits: [
      "Nutre intensamente la piel seca",
      "Repara la barrera cutánea",
      "Reduce los signos de fatiga",
      "Mejora la elasticidad"
    ],
    ingredients: [
      "Aceite de rosa mosqueta",
      "Aceite de argán",
      "Aceite de marula",
      "Vitamina E natural"
    ],
    howToUse: "Aplicar 4-5 gotas sobre piel limpia por la noche. Puede usarse solo o antes de la crema de noche."
  },
  {
    id: 8,
    name: "Bruma Facial Hidratante",
    category: "hidratantes",
    price: 19.99,
    image: "https://images.pexels.com/photos/5069608/pexels-photo-5069608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isNew: true,
    rating: 4.6,
    description: "Bruma refrescante que hidrata, calma y fija el maquillaje para un acabado radiante.",
    benefits: [
      "Hidrata instantáneamente",
      "Refresca la piel a lo largo del día",
      "Fija el maquillaje",
      "Calma la irritación"
    ],
    ingredients: [
      "Agua de rosas",
      "Aloe vera",
      "Ácido hialurónico",
      "Extracto de pepino"
    ],
    howToUse: "Rociar a 20-30 cm del rostro en cualquier momento del día. Ideal antes del maquillaje, después o para refrescar."
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (limit?: number): Product[] => {
  const featured = products.filter(product => product.isBestseller);
  return limit ? featured.slice(0, limit) : featured;
};

export const getNewProducts = (limit?: number): Product[] => {
  const newProducts = products.filter(product => product.isNew);
  return limit ? newProducts.slice(0, limit) : newProducts;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};