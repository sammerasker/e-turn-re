import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const geometricVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Geometric Pattern */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Star Pattern */}
              <motion.div 
                className="bg-beige-200 p-8 aspect-square flex items-center justify-center"
                variants={geometricVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-black text-6xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Top Right - Geometric Pattern */}
              <motion.div 
                className="bg-beige-200 p-8 aspect-square"
                variants={geometricVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="grid grid-cols-4 gap-1 h-full">
                  {Array.from({length: 16}).map((_, i) => (
                    <motion.div 
                      key={i} 
                      className={`${i % 2 === 0 ? 'bg-black' : 'bg-transparent'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Bottom Left - Triangle Pattern */}
              <motion.div 
                className="bg-beige-200 p-8 aspect-square flex items-center justify-center"
                variants={geometricVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  {Array.from({length: 4}).map((_, i) => (
                    <motion.div 
                      key={i}
                      className={`bg-black transform ${i % 2 === 0 ? 'rotate-45' : '-rotate-45'}`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: i * 0.5,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Bottom Right - Star */}
              <motion.div 
                className="bg-beige-200 p-8 aspect-square flex items-center justify-center"
                variants={geometricVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-black text-6xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-gray-400 text-sm uppercase tracking-wider mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                // ABOUT US
              </motion.p>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-4xl">From concept to scale</span>
                <span className="block text-yellow-400 text-4xl">e-turn is your ultimate</span>
                <span className="block text-yellow-400 text-4xl">backing visionary entrepreneurs </span>
                <span className="block text-yellow-400 text-4xl">with strategy, execution, and Invaluable resources.</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              className="space-y-6 text-gray-300"
              variants={itemVariants}
            >
              {[
                "As a hands-on co-founder, we partner with founders from ideation to scale, blending strategic insight, deep operational experience, and flexible collaboration models.",
                "Whether you're validating an idea, developing your concept, or scaling your business,",
                "we fast-track your success with proven methodologies and process optimization so you can focus on vision,",
                "while we drive execution."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-lg"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Vision Section */}
            <motion.div className="mt-16" variants={itemVariants}>
  
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

