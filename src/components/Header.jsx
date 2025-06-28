import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/our-offerings', label: 'Our Offering' },
    { to: '/who-we-benefit', label: 'Who We Benefit' },
  /*  { to: '/our-methodology', label: 'Our Methodology' },
    { to: '/portfolio', label: 'Portfolio' }, */
    { to: '/connect', label: 'Connect' }
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
    }
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.05,
      color: '#fb923c',
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/90 backdrop-blur-sm'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer"
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="flex items-center">
           <motion.img
              src="/favicon.png"
              alt="e-turn"
              className="w-8 h-8 mr-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              className="text-white text-xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              e-turn Ventures Studio
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.to}
              variants={menuItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className="text-white hover:text-orange-400 transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Placeholder for button (if needed later) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Example Button Placeholder */}
          {/* <Button>Book Appointment</Button> */}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.div
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.div
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white"
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    to={item.to}
                    className="text-white hover:text-orange-400 transition-colors py-2 border-b border-gray-800 last:border-b-0 block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
