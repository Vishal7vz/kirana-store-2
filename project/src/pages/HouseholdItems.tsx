import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';

const HouseholdItems = () => {
  // Sample household items data
  const householdItems = [
    {
      id: 1,
      name: 'Cleaning Kit',
      price: '₹350',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Cleaning',
    },
    {
      id: 2,
      name: 'Dish Soap',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1585999058879-fb6a732e9f7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Cleaning',
    },
    {
      id: 3,
      name: 'Laundry Detergent',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Laundry',
    },
    {
      id: 4,
      name: 'Floor Cleaner',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Cleaning',
    },
    {
      id: 5,
      name: 'Bathroom Cleaner',
      price: '₹150',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1a7f1c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Cleaning',
    },
    {
      id: 6,
      name: 'Glass Cleaner',
      price: '₹130',
      image: 'https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Cleaning',
    },
    {
      id: 7,
      name: 'Scrub Brushes',
      price: '₹90',
      image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Tools',
    },
    {
      id: 8,
      name: 'Mop Set',
      price: '₹450',
      image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Tools',
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
            <h1 className="heading-xl text-gray-900 mb-6">Household Items</h1>
            <p className="text-xl text-gray-700">
              Quality cleaning supplies and household essentials for your home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Our Household Products"
            subtitle="Explore our range of high-quality household items to keep your home clean and organized."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {householdItems.map((item, index) => (
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

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-gray-900 mb-6">Why Choose Our Household Products?</h2>
              <ul className="space-y-4">
                {[
                  'High-quality cleaning supplies that last longer',
                  'Eco-friendly options available for environmentally conscious customers',
                  'Effective cleaning solutions for all surfaces and areas of your home',
                  'Affordable prices without compromising on quality',
                  'Trusted brands that deliver consistent results',
                ].map((point, index) => (
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
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1584473457493-17c4c24290c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Household Items"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
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
              Visit Our Store Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/90 mb-8 text-lg"
            >
              Explore our complete range of household items in-store. Our staff will be happy to help you find the perfect products for your needs.
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

export default HouseholdItems;