import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, category }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="mt-1 font-bold text-primary">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;