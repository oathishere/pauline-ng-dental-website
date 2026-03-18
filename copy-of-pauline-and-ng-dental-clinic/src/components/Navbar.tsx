import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'About Us', path: '#about' },
    { name: 'Patient Reviews', path: '#reviews' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.path.substring(1));
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(path.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Pauline & Ng Dental Clinic" 
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                  activeSection === link.path.substring(1)
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Book Appointment Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+60163403382"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              016-340 3382
            </a>
            <a
              href="https://wa.me/60163403382?text=Hi,%20I'd%20like%20to%20enquire%20about%20booking%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all hover:shadow-md"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`block pl-3 pr-4 py-3 border-l-4 text-base font-medium ${
                    activeSection === link.path.substring(1)
                      ? 'bg-blue-50 border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-4 space-y-3">
                <a
                  href="tel:+60163403382"
                  className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm"
                >
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Call Us Now
                </a>
                <a
                  href="https://wa.me/60163403382?text=Hi,%20I'd%20like%20to%20enquire%20about%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
