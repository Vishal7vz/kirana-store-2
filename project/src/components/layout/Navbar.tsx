import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Household Items', path: '/household-items' },
    { name: 'Skincare Products', path: '/skincare-products' },
    { name: 'Dairy Products', path: '/dairy-products' },
    { name: 'Home Essentials', path: '/home-essentials' },
    { name: 'Indian Masalas', path: '/indian-masalas' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">Mukesh Kirana Store</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              end
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:7355092752"
            className="flex items-center space-x-2 text-primary font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>7355092752</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsOpen(false)}
                end
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 mt-2 border-t">
              <a
                href="tel:7355092752"
                className="flex items-center px-3 py-2 space-x-2 text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>7355092752</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;