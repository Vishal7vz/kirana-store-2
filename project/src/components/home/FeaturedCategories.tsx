import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

const categories = [
  {
    id: 1,
    name: 'Household Items',
    image: 'https://images.unsplash.com/photo-1584473457493-17c4c24290c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    path: '/household-items',
    description: 'Essential items for your home',
  },
  {
    id: 2,
    name: 'Skincare Products',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    path: '/skincare-products',
    description: 'Quality skincare for everyone',
  },
  {
    id: 3,
    name: 'Dairy Products',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    path: '/dairy-products',
    description: 'Fresh dairy delivered daily',
  },
  {
    id: 4,
    name: 'Home Essentials',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    path: '/home-essentials',
    description: 'Everything you need for daily life',
  },
  {
    id: 5,
    name: 'Indian Masalas',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    path: '/indian-masalas',
    description: 'Authentic spices for Indian cuisine',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <SectionHeading
          title="Explore Our Categories"
          subtitle="Discover our wide range of products across different categories to meet all your daily needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={category.path} className="block group">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-white/80 mb-3">{category.description}</p>
                    <div className="flex items-center text-white/90 text-sm font-medium">
                      <span>Explore Products</span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;