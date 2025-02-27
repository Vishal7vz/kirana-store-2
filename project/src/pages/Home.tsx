import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import InstagramFeed from '../components/ui/InstagramFeed';
import { MapPin, Clock, Phone, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Milk',
      price: '₹60',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Dairy',
    },
    {
      id: 2,
      name: 'Garam Masala',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Spices',
    },
    {
      id: 3,
      name: 'Natural Face Wash',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Skincare',
    },
    {
      id: 4,
      name: 'Cleaning Kit',
      price: '₹350',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Household',
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* About Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-gray-900 mb-6">Welcome to Mukesh Kirana Store</h2>
              <p className="text-gray-700 mb-6">
                For over 15 years, we've been serving our community with the finest quality groceries, 
                household items, and daily essentials. Our store is built on the principles of quality, 
                affordability, and exceptional customer service.
              </p>
              <p className="text-gray-700 mb-6">
                We take pride in offering a wide selection of products, from fresh dairy to authentic 
                Indian masalas, all carefully sourced to ensure the highest quality for our customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">123 Market Street, Lucknow, UP, India</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Store Hours</h3>
                <p className="text-gray-600">Open Daily: 8:00 AM - 9:00 PM</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">Phone: +91 7355092752</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ShoppingBag className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Products</h3>
                <p className="text-gray-600">Over 1000+ items available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-gray-900">Featured Products</h2>
              <p className="mt-2 text-gray-600">Our most popular products that customers love</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 md:mt-0"
            >
              <Link to="/household-items" className="btn btn-outline">
                View All Products
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 font-bold text-primary">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their shopping experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Sharma',
                text: 'Mukesh Kirana Store has been my go-to shop for all household needs. Their products are always fresh and the staff is very helpful.',
                rating: 5,
              },
              {
                name: 'Rahul Verma',
                text: 'I love the variety of Indian masalas available here. The quality is excellent and prices are reasonable. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Anita Patel',
                text: 'The dairy products are always fresh, and they have a great selection of skincare items too. The owner is very friendly and provides excellent service.',
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="heading-lg text-white mb-6"
            >
              Visit Our Store Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Experience the best shopping for all your daily needs. We're conveniently located in the heart of Lucknow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/contact" className="btn bg-white text-primary hover:bg-white/90">
                Contact Us
              </Link>
              <a href="tel:7355092752" className="btn bg-transparent border border-white text-white hover:bg-white/10">
                Call Now: 7355092752
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;