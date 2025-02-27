import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';

const IndianMasalas = () => {
  // Sample Indian masalas data
  const indianMasalas = [
    {
      id: 1,
      name: 'Garam Masala',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Blended',
    },
    {
      id: 2,
      name: 'Turmeric Powder',
      price: '₹80',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Single',
    },
    {
      id: 3,
      name: 'Red Chili Powder',
      price: '₹90',
      image: 'https://images.unsplash.com/photo-1590166774851-bc49b23a18fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Single',
    },
    {
      id: 4,
      name: 'Coriander Powder',
      price: '₹70',
      image: 'https://images.unsplash.com/photo-1599909366516-6c1d2d54d3d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Single',
    },
    {
      id: 5,
      name: 'Cumin Powder',
      price: '₹85',
      image: 'https://images.unsplash.com/photo-1590166774851-bc49b23a18fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Single',
    },
    {
      id: 6,
      name: 'Chaat Masala',
      price: '₹95',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Blended',
    },
    {
      id: 7,
      name: 'Pav Bhaji Masala',
      price: '₹110',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Blended',
    },
    {
      id: 8,
      name: 'Chicken Masala',
      price: '₹130',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Blended',
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
            <h1 className="heading-xl text-gray-900 mb-6">Indian Masalas</h1>
            <p className="text-xl text-gray-700">
              Authentic spices and blends for traditional Indian cooking.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Our Spice Collection"
            subtitle="Discover our range of authentic Indian spices and masala blends to enhance your cooking."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {indianMasalas.map((item, index) => (
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
              <h2 className="heading-lg text-gray-900 mb-6">The Secret to Authentic Indian Flavors</h2>
              <ul className="space-y-4">
                {[
                  'Freshly ground spices for maximum flavor and aroma',
                  'Authentic recipes and traditional blending techniques',
                  'No artificial colors, flavors, or preservatives',
                  'Sourced from premium quality spices',
                  'Perfect balance of flavors for authentic Indian taste',
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
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Indian Masalas"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spice Guide */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            title="Indian Spice Guide"
            subtitle="Learn about the essential spices used in Indian cooking and their health benefits."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              {
                spice: 'Turmeric',
                benefits: 'Anti-inflammatory properties, improves digestion, boosts immunity',
                uses: 'Curries, rice dishes, soups, and medicinal drinks',
              },
              {
                spice: 'Cumin',
                benefits: 'Aids digestion, rich in iron, helps with respiratory disorders',
                uses: 'Tempering, curries, rice dishes, and spice blends',
              },
              {
                spice: 'Coriander',
                benefits: 'Lowers cholesterol, regulates blood sugar, rich in antioxidants',
                uses: 'Curries, chutneys, marinades, and spice blends',
              },
              {
                spice: 'Cardamom',
                benefits: 'Improves breath, aids digestion, has anti-inflammatory properties',
                uses: 'Desserts, tea, rice dishes, and garam masala',
              },
              {
                spice: 'Cloves',
                benefits: 'Antibacterial properties, relieves toothache, improves digestion',
                uses: 'Spice blends, rice dishes, meat preparations',
              },
              {
                spice: 'Cinnamon',
                benefits: 'Regulates blood sugar, has anti-inflammatory properties, improves heart health',
                uses: 'Desserts, tea, rice dishes, and spice blends',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{item.spice}</h3>
                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-700">Health Benefits:</span>
                  <p className="text-gray-600">{item.benefits}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Common Uses:</span>
                  <p className="text-gray-600">{item.uses}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Masala Blends */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container">
          <SectionHeading
            title="Popular Masala Blends"
            subtitle="Discover our most popular masala blends and their uses in Indian cooking."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Garam Masala',
                description: 'A warming spice blend used in various Indian dishes to add depth and flavor.',
                ingredients: 'Cardamom, cinnamon, cloves, cumin, coriander, and black pepper',
              },
              {
                name: 'Chaat Masala',
                description: 'A tangy and spicy blend used to flavor street foods and snacks.',
                ingredients: 'Amchur (dried mango powder), cumin, black salt, coriander, and mint',
              },
              {
                name: 'Pav Bhaji Masala',
                description: 'A special blend used to make the popular street food Pav Bhaji.',
                ingredients: 'Coriander, cumin, red chili, black pepper, and cinnamon',
              },
              {
                name: 'Chicken Masala',
                description: 'A flavorful blend specifically designed for chicken dishes.',
                ingredients: 'Coriander, cumin, red chili, turmeric, and ginger',
              },
              {
                name: 'Sambar Masala',
                description: 'Used to make the popular South Indian lentil soup called Sambar.',
                ingredients: 'Coriander, red chili, fenugreek, turmeric, and mustard seeds',
              },
              {
                name: 'Biryani Masala',
                description: 'A fragrant blend used to make the classic rice dish Biryani.',
                ingredients: 'Cardamom, cinnamon, cloves, bay leaf, and star anise',
              },
            ].map((blend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold mb-3">{blend.name}</h3>
                <p className="text-gray-600 mb-4">{blend.description}</p>
                <div>
                  <span className="text-sm font-medium text-gray-700">Key Ingredients:</span>
                  <p className="text-gray-600 italic">{blend.ingredients}</p>
                </div>
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
              Elevate Your Cooking with Authentic Spices
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/90 mb-8 text-lg"
            >
              Visit our store to explore our complete range of Indian masalas and spices. We offer both whole spices and freshly ground blends to suit your cooking needs.
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

export default IndianMasalas;