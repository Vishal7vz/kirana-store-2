import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Mukesh Kirana Store</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for all household needs, groceries, and daily essentials.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/vishal7.z?igsh=Nml0aDA2NWRjb3Nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@mukeshkiranastore.com"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:7355092752"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/household-items"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Household Items
                </Link>
              </li>
              <li>
                <Link
                  to="/skincare-products"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Skincare Products
                </Link>
              </li>
              <li>
                <Link
                  to="/dairy-products"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link
                  to="/home-essentials"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home Essentials
                </Link>
              </li>
              <li>
                <Link
                  to="/indian-masalas"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Indian Masalas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Market Street, Lucknow, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:7355092752"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +91 7355092752
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@mukeshkiranastore.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  contact@mukeshkiranastore.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Open Daily: 8:00 AM - 9:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mukesh Kirana Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;