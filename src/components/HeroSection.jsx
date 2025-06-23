import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const slides = [
    {
      title: "e-turn Venture Studio",
      subtitle: "Where",
      highlight: "visionary Ideas",
      subtitle2: "meet",
      highlight2: "strategic resources",
      description: ""
    },
    {
      title: "We",
      subtitle: "don’t just",
      highlight: "support startups",
      subtitle2: "We co-create them faster, ",
      highlight2: "smarter, and with purpose",
      description: ""
    },

  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsFading(false);
      }, 4000); // Fade duration should match CSS transition
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Black_colour-1-1-scaled.jpg')`
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-right text-white px-4 max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="block text-6xl md:text-8xl font-thin"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[currentSlide].title}
          </motion.span>
          <motion.span
            className="block text-gray-300"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {slides[currentSlide].subtitle}
          </motion.span>
          <motion.span
            className="block text-6xl md:text-8xl font-thin"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {slides[currentSlide].highlight}
          </motion.span>
          <motion.span
            className="block text-gray-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {slides[currentSlide].subtitle2}
          </motion.span>
          <motion.span
            className="block text-6xl md:text-8xl font-thin"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {slides[currentSlide].highlight2}
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {slides[currentSlide].description}
        </motion.p>

        {/* Decorative Elements with Animation */}
        <motion.div
          className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity }
          }}
        >
          <div className="w-20 h-20 border-2 border-white/30 rotate-45"></div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 hidden lg:block"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 border-2 border-white/30"></div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
