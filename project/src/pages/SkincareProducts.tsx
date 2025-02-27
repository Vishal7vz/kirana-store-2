import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';

const SkincareProducts = () => {
  // Sample skincare products data
  const skincareProducts = [
    {
      id: 1,
      name: 'Natural Face Wash',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Face Care',
    },
    {
      id: 2,
      name: 'Moisturizer',
      price: '₹220',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a8e9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Face Care',
    },
    {
      id: 3,
      name: 'Herbal Shampoo',
      price: '₹250',
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Hair Care',
    },
    {
      id: 4,
      name: 'Body Lotion',
      price: '₹190',
      image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Body Care',
    },
    {
      id: 5,
      name: 'Sunscreen',
      price: '₹320',
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Sun Care',
    },
    {
      id: 6,
      name: 'Face Mask',
      price: '₹150',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Face Care',
    },
    {
      id: 7,
      name: 'Lip Balm',
      price: '₹90',
      image: 'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Lip Care',
    },
    {
      id: 8,
      name: 'Hand Cream',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Hand Care',
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl text-gray-900 mb-6">Skincare Products</h1>
            <p className="text-xl text-gray-700">
              Natural and effective skincare solutions for all skin types.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Our Skincare Collection"
            subtitle="Discover our range of natural skincare products that nourish and protect your skin."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {skincareProducts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skincare Tips */}
      <section className="py-16 bg-muted">
        <div className="container">
          <SectionHeading
            title="Skincare Tips"
            subtitle="Simple tips to maintain healthy and glowing skin"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Stay Hydrated',
                description: 'Drink plenty of water throughout the day to keep your skin hydrated from within.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
              },
              {
                title: 'Use Sunscreen Daily',
                description: 'Apply sunscreen every day, even on cloudy days, to protect your skin from harmful UV rays.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: 'Cleanse Regularly',
                description: 'Cleanse your face twice a day to remove dirt, oil, and makeup that can clog pores.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                ),
              },
              {
                title: 'Moisturize Daily',
                description: 'Apply moisturizer after cleansing to keep your skin hydrated and prevent dryness.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: 'Eat Healthy',
                description: 'Consume a balanced diet rich in fruits, vegetables, and antioxidants for healthy skin.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                ),
              },
              {
                title: 'Get Enough Sleep',
                description: 'Aim for 7-8 hours of quality sleep each night to allow your skin to repair and regenerate.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ),
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Ingredients */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Natural Skincare Ingredients"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="heading-lg text-gray-900 mb-6">Natural Ingredients</h2>
              <p className="text-gray-700 mb-6">
                Our skincare products are made with natural ingredients that are gentle on your skin and effective in addressing various skin concerns.
              </p>
              <ul className="space-y-4">
                {[
                  'Aloe Vera: Soothes and hydrates the skin',
                  'Tea Tree Oil: Natural antibacterial properties',
                  'Vitamin E: Antioxidant that protects the skin',
                  'Shea Butter: Moisturizes and nourishes dry skin',
                  'Turmeric: Anti-inflammatory and brightening properties',
                ].map((ingredient, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <svg
                      className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{ingredient}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="heading-lg mb-6"
            >
              Discover Your Perfect Skincare Routine
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/90 mb-8 text-lg"
            >
              Visit our store to explore our complete range of skincare products. Our knowledgeable staff can help you find the perfect products for your skin type and concerns.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="tel:7355092752" className="btn bg-white text-primary hover:bg-white/90">
                Call Now: 7355092752
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default SkincareProducts;