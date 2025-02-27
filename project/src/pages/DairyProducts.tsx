import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';

const DairyProducts = () => {
  // Sample dairy products data
  const dairyProducts = [
    {
      id: 1,
      name: 'Organic Milk',
      price: '₹60',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Milk',
    },
    {
      id: 2,
      name: 'Fresh Curd',
      price: '₹40',
      image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Curd',
    },
    {
      id: 3,
      name: 'Butter',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1589985270958-bf087b2d8ed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Butter',
    },
    {
      id: 4,
      name: 'Paneer',
      price: '₹80',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Paneer',
    },
    {
      id: 5,
      name: 'Cheese',
      price: '₹150',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Cheese',
    },
    {
      id: 6,
      name: 'Flavored Yogurt',
      price: '₹45',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Yogurt',
    },
    {
      id: 7,
      name: 'Ghee',
      price: '₹450',
      image: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Ghee',
    },
    {
      id: 8,
      name: 'Buttermilk',
      price: '₹25',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Buttermilk',
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
            <h1 className="heading-xl text-gray-900 mb-6">Dairy Products</h1>
            <p className="text-xl text-gray-700">
              Fresh and nutritious dairy products delivered daily.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Our Dairy Products"
            subtitle="Explore our range of fresh and high-quality dairy products sourced from local farms."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {dairyProducts.map((item, index) => (
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
              <h2 className="heading-lg text-gray-900 mb-6">Why Choose Our Dairy Products?</h2>
              <ul className="space-y-4">
                {[
                  'Fresh dairy products sourced directly from local farms',
                  'No preservatives or artificial additives',
                  'Rich in essential nutrients and proteins',
                  'Delivered fresh daily to ensure quality',
                  'Variety of options to suit different dietary needs',
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
                src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dairy Products"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutritional Benefits */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            title="Nutritional Benefits"
            subtitle="Dairy products are an essential part of a balanced diet, providing numerous health benefits."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Rich in Calcium',
                description: 'Dairy products are excellent sources of calcium, which is essential for strong bones and teeth.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Protein Source',
                description: 'Dairy products provide high-quality protein that helps in muscle building and repair.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
              },
              {
                title: 'Vitamins & Minerals',
                description: 'Dairy is rich in vitamins A, D, B12, and minerals like phosphorus and potassium.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
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
              Fresh Dairy Delivered Daily
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/90 mb-8 text-lg"
            >
              Visit our store to explore our complete range of fresh dairy products. We receive fresh stock daily to ensure you get the best quality.
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

export default DairyProducts;