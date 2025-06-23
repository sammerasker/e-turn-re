import { Handshake, Brain, ShoppingBag, Rocket, Link, Target, Shield } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      title: "venture builder",
      description: "Not a one-size-fits-all approach. Choose a collaboration co-founding model that fits your journey from equity-based co-creation and revenue sharing to fixed-fee engagements. We adapt to your needs as your ultimate co-founder.",
      icon: Handshake,
      color: "border-orange-500",
      bgGradient: "from-orange-900/20 to-orange-600/20"
    },
    {
      title: "Product Testing & Demonstration Bar",
      description: "Experience real bar conditions at our demo bar. Test machines, recipes, and receive expert feedback tailored to your service goals.",
      icon: Brain,
      color: "border-purple-500",
      bgGradient: "from-purple-900/20 to-purple-600/20"
    },
    {
      title: "Machine Branding & Customization",
      description: "Transform standard machines into brand icons with custom finishes, logos, and panels. We align your equipment with your visual identity for a cohesive and impactful in-store presence.",
      icon: ShoppingBag,
      color: "border-teal-500",
      bgGradient: "from-teal-900/20 to-teal-600/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-gray-400 text-sm uppercase tracking-wider mb-4"
            variants={itemVariants}
          >
            // Our Offering 
          </motion.p>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            variants={itemVariants}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Everything you need 
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              to launch and grow.
            </motion.span>
            <motion.span 
              className="block text-gray-400"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              From Concept to Scale
            </motion.span>
            <motion.span 
              className="block text-yellow-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              all Under One Roof.
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            
          </motion.p>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex space-x-4">
            
          
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`border-2 ${service.color} rounded-lg p-8 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm relative overflow-hidden group cursor-pointer`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setCurrentService(index)}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div 
                className="mb-6 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {typeof service.icon === 'string' ? (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <service.icon className="w-16 h-16" />
                )}
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 mb-6 leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              >
                {service.description}
              </motion.p>
              
              <motion.button 
                className="text-gray-400 hover:text-white transition-colors flex items-center relative z-10 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                LEARN MORE
                <motion.svg 
                  className="w-4 h-4 ml-2"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>

              {/* Active Indicator */}
              {currentService === index && (
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Slide Indicators 
        </motion.div>*/}
      </div>
    </section>
  );
};

export default ServicesSection;

