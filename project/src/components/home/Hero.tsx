import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-xl text-gray-900 mb-4">
              Your Neighborhood <span className="text-primary">Kirana Store</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Mukesh Kirana Store offers a wide range of household items, groceries, and daily essentials. 
              From fresh dairy products to authentic Indian masalas, we have everything you need under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <a href="tel:7355092752" className="btn btn-outline flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Now: 7355092752</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Mukesh Kirana Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-medium">Mukesh Kirana Store</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    Open Daily: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements for decoration */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
    </div>
  );
};

export default Hero;