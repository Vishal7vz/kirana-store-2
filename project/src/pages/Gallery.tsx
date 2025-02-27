import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import InstagramFeed from '../components/ui/InstagramFeed';

const Gallery = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Store Front',
      title: 'Our Store Entrance',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Products',
      title: 'Home Essentials Section',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Products',
      title: 'Indian Masalas Display',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Products',
      title: 'Dairy Products Section',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Products',
      title: 'Skincare Products Display',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1584473457493-17c4c24290c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Products',
      title: 'Household Items Section',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Products',
      title: 'Cleaning Supplies',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Store',
      title: 'Store Interior',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Store',
      title: 'Product Shelves',
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
            <h1 className="heading-xl text-gray-900 mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-700">
              Take a visual tour of our store and products.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Store & Product Gallery"
            subtitle="Browse through images of our store and the wide range of products we offer."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg shadow-md"
              >
                <div className="aspect-w-16 aspect-h-9 h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm">{item.category}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tour */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg text-gray-900 mb-6">Store Tour</h2>
              <p className="text-gray-700 mb-8">
                Take a virtual tour of our store and see the variety of products we offer. Our well-organized sections make shopping a pleasant experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl"
            >
              {/* This is a placeholder for a video. In a real implementation, you would embed an actual video here. */}
              <div className="bg-gray-800 w-full h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xl font-medium">Store Tour Video</p>
                  <p className="mt-2 text-white/70">Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

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
              Visit Our Store
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/90 mb-8 text-lg"
            >
              Pictures can only show so much. Visit our store to experience the quality and variety of products we offer. Our friendly staff is always ready to assist you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a href="tel:7355092752" className="btn bg-white text-primary hover:bg-white/90">
                Call Now: 7355092752
              </a>
              <a
                href="https://www.instagram.com/vishal7.z?igsh=Nml0aDA2NWRjb3Nz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-transparent border border-white text-white hover:bg-white/10"
              >
                Follow on Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Gallery;