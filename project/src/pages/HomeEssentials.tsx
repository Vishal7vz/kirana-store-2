import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';

const HomeEssentials = () => {
  // Sample home essentials data
  const homeEssentials = [
    {
      id: 1,
      name: 'Rice (5kg)',
      price: '₹350',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Grains',
    },
    {
      id: 2,
      name: 'Wheat Flour (5kg)',
      price: '₹220',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Flour',
    },
    {
      id: 3,
      name: 'Cooking Oil (1L)',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Oil',
    },
    {
      id: 4,
      name: 'Sugar (1kg)',
      price: '₹60',
      image: 'https://images.unsplash.com/photo-1581441363689-1be2d86f6e97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Sugar',
    },
    {
      id: 5,
      name: 'Pulses Mix (1kg)',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Pulses',
    },
    {
      id: 6,
      name: 'Salt (1kg)',
      price: '₹20',
      image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Salt',
    },
    {
      id: 7,
      name: 'Tea Leaves (250g)',
      price: '₹90',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Beverages',
    },
    {
      id: 8,
      name: 'Coffee Powder (250g)',
      price: '₹150',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Beverages',
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
            <h1 className="heading-xl text-gray-900 mb-6">Home Essentials</h1>
            <p className="text-xl text-gray-700">
              All the essential groceries and staples for your daily needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Our Home Essentials"
            subtitle="Explore our range of high-quality staples and groceries for your everyday cooking needs."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {homeEssentials.map((item, index) => (
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

      {/* Quality Assurance */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-gray-900 mb-6">Quality Assurance</h2>
              <p className="text-gray-700 mb-6">
                At Mukesh Kirana Store, we take pride in offering only the highest quality home essentials. We carefully select our suppliers and regularly check our products to ensure they meet our strict quality standards.
              </p>
              <ul className="space-y-4">
                {[
                  'Premium quality grains and flours',
                  'Fresh stock with regular inventory rotation',
                  'Authentic products from trusted brands',
                  'Carefully stored to maintain freshness',
                  'Competitive prices without compromising on quality',
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
                src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Home Essentials"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cooking Tips */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            title="Cooking Tips"
            subtitle="Make the most of your home essentials with these simple cooking tips"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Rice Perfection',
                description: 'For perfect rice, use a 1:2 ratio of rice to water and let it rest for 5 minutes after cooking.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
              {
                title: 'Oil Selection',
                description: 'Choose different oils for different cooking methods - olive oil for low heat, sunflower for high heat cooking.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: 'Flour Storage',
                description: 'Store flour in an airtight container in a cool, dry place to maintain freshness and prevent pests.',
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
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
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="heading-lg text-gray-900 mb-6"
            >
              Bulk Orders Welcome
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-700 mb-8 text-lg"
            >
              Planning a large gathering or need supplies for your restaurant? We offer special discounts on bulk orders of all home essentials. Contact us for more information.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="tel:7355092752" className="btn btn-primary">
                Call Now: 7355092752
              </a>
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
              Explore our complete range of home essentials in-store. We're constantly updating our inventory with fresh stock to ensure you get the best quality products.
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

export default HomeEssentials;