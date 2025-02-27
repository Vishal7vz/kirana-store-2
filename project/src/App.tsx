import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import HouseholdItems from './pages/HouseholdItems';
import SkincareProducts from './pages/SkincareProducts';
import DairyProducts from './pages/DairyProducts';
import HomeEssentials from './pages/HomeEssentials';
import IndianMasalas from './pages/IndianMasalas';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/household-items" element={<HouseholdItems />} />
              <Route path="/skincare-products" element={<SkincareProducts />} />
              <Route path="/dairy-products" element={<DairyProducts />} />
              <Route path="/home-essentials" element={<HomeEssentials />} />
              <Route path="/indian-masalas" element={<IndianMasalas />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;